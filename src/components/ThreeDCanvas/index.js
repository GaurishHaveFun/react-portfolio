import React, { useEffect, useRef } from 'react';
import './style.css';

const ThreeDCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const parseColor = (color) => {
      if (!color) return { r: 0, g: 0, b: 0 };
      const trimmed = color.trim();
      if (trimmed.startsWith('#')) {
        let hex = trimmed.slice(1);
        if (hex.length === 3) {
          hex = hex.split('').map((c) => c + c).join('');
        }
        const num = parseInt(hex, 16);
        return {
          r: (num >> 16) & 255,
          g: (num >> 8) & 255,
          b: num & 255
        };
      }
      const match = trimmed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
      if (match) {
        return {
          r: parseInt(match[1], 10),
          g: parseInt(match[2], 10),
          b: parseInt(match[3], 10)
        };
      }
      return { r: 0, g: 0, b: 0 };
    };

    const buildPalette = (bgColor) => {
      const { r, g, b } = parseColor(bgColor);
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      const isLight = luminance > 0.6;

      if (isLight) {
        return {
          isLight: true,
          starHue: 210,
          starHueSpread: 25,
          starSaturation: '35%',
          starLightness: '28%',
          starAlpha: 0.8,
          meteorHue: 210,
          meteorSaturation: '70%',
          meteorLightness: '30%',
          flameHueRange: [18, 32],
          flameSaturation: '90%',
          flameLightness: '40%',
          rocketGlowInner: 'rgba(0,0,0,0.15)',
          rocketGlowOuter: 'rgba(0,0,0,0)',
          rocketBodyTop: 'rgba(250,250,255,0.95)',
          rocketBodyBottom: 'rgba(200,220,255,0.92)',
          rocketWindow: 'rgba(0,105,190,0.85)',
          rocketWing: 'rgba(255,80,110,0.85)'
        };
      }

      return {
        isLight: false,
        starHue: 45,
        starHueSpread: 20,
        starSaturation: '80%',
        starLightness: '70%',
        starAlpha: 0.9,
        meteorHue: 35,
        meteorSaturation: '90%',
        meteorLightness: '65%',
        flameHueRange: [20, 45],
        flameSaturation: '100%',
        flameLightness: '60%',
        rocketGlowInner: 'rgba(255,255,255,0.25)',
        rocketGlowOuter: 'rgba(255,255,255,0)',
        rocketBodyTop: 'rgba(255,255,255,0.95)',
        rocketBodyBottom: 'rgba(180,210,255,0.9)',
        rocketWindow: 'rgba(0,180,255,0.85)',
        rocketWing: 'rgba(255,90,120,0.9)'
      };
    };

    const getBackgroundColor = () => {
      const styles = getComputedStyle(document.documentElement);
      const color = styles.getPropertyValue('--bg-color').trim();
      return color || '#0c0c0c';
    };

    let backgroundColor = getBackgroundColor();
    let palette = buildPalette(backgroundColor);

    const applyTheme = () => {
      backgroundColor = getBackgroundColor();
      palette = buildPalette(backgroundColor);
    };

    const observer = new MutationObserver(applyTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    let centerX = 0;
    let centerY = 0;

    const pointerTarget = { x: 0, y: 0 };
    const pointerPosition = { x: 0, y: 0 };
    let pointerActive = false;

    const stars = [];
    const shootingStars = [];
    const flameParticles = [];
    let rocket = null;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointerActive = true;
      pointerTarget.x = e.clientX - rect.left;
      pointerTarget.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      pointerActive = false;
      pointerTarget.x = centerX;
      pointerTarget.y = centerY;
    };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;

      if (!pointerActive) {
        pointerTarget.x = centerX;
        pointerTarget.y = centerY;
        pointerPosition.x = centerX;
        pointerPosition.y = centerY;
      }

      stars.forEach((star) => star.handleResize());
      shootingStars.forEach((meteor) => meteor.handleResize());
      flameParticles.forEach((particle) => particle.resetImmediate());
      if (rocket) rocket.handleResize();
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    class Star {
      constructor() {
        this.variation = Math.random();
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.2 + 0.3;
        this.speed = 0.02 + Math.random() * 0.04;
        this.parallax = Math.random() * 0.4 + 0.2;
      }

      handleResize() {
        this.reset();
      }

      update(delta) {
        this.y += this.speed * delta * this.parallax;
        if (this.y > canvas.height + 10) {
          this.y = -5;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        const hue = palette.starHue + this.variation * palette.starHueSpread;
        ctx.save();
        ctx.fillStyle = `hsla(${hue}, ${palette.starSaturation}, ${palette.starLightness}, ${palette.starAlpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.4;
        this.length = 60 + Math.random() * 120;
        this.speed = 0.25 + Math.random() * 0.3;
        this.angle = Math.PI + Math.random() * 0.25 - 0.125;
        this.glow = Math.random();
      }

      handleResize() {
        this.reset();
      }

      update(delta) {
        this.x += Math.cos(this.angle) * this.speed * delta;
        this.y += Math.sin(this.angle) * this.speed * delta;

        if (this.x < -this.length || this.y > canvas.height + this.length) {
          this.reset();
          this.x = canvas.width + Math.random() * canvas.width * 0.2;
          this.y = Math.random() * canvas.height * 0.3;
        }
      }

      draw() {
        const hue = palette.meteorHue + this.glow * 10;
        const tailX = this.x - Math.cos(this.angle) * this.length;
        const tailY = this.y - Math.sin(this.angle) * this.length;
        const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
        gradient.addColorStop(0, `hsla(${hue}, ${palette.meteorSaturation}, ${palette.meteorLightness}, 0.95)`);
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.save();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
        ctx.restore();
      }
    }

    class FlameParticle {
      constructor() {
        this.life = 0;
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.size = 0;
        this.hue = 20;
        this.decay = 0.01;
      }

      resetImmediate() {
        this.life = 0;
      }

      respawn(rocketInstance) {
        if (!rocketInstance) return;
        const engine = rocketInstance.getEnginePosition();
        const spread = (Math.random() - 0.5) * 0.7;
        const angle = rocketInstance.angle + Math.PI + spread;
        const speed = 0.12 + Math.random() * 0.2;
        this.x = engine.x + (Math.random() - 0.5) * 6;
        this.y = engine.y + (Math.random() - 0.5) * 6;
        this.vx = Math.cos(angle) * speed * 18;
        this.vy = Math.sin(angle) * speed * 18;
        const [minHue, maxHue] = palette.flameHueRange;
        this.hue = minHue + Math.random() * (maxHue - minHue);
        this.life = 1;
        this.size = 2 + Math.random() * 3;
        this.decay = 0.008 + Math.random() * 0.01;
      }

      update(delta, rocketInstance) {
        if (this.life <= 0) {
          this.respawn(rocketInstance);
          return;
        }

        this.x += this.vx * delta * 0.05;
        this.y += this.vy * delta * 0.05;
        this.life -= this.decay * delta * 0.05;
      }

      draw() {
        if (this.life <= 0) return;
        ctx.save();
        ctx.globalAlpha = clamp(this.life, 0, 1) * 0.9;
        ctx.fillStyle = `hsla(${this.hue}, ${palette.flameSaturation}, ${palette.flameLightness}, 1)`;
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.size, this.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class Rocket {
      constructor() {
        this.x = centerX;
        this.y = centerY;
        this.angle = -Math.PI / 2;
        this.wobble = 0;
      }

      handleResize() {
        this.x = centerX;
        this.y = centerY;
      }

      update() {
        const dx = pointerPosition.x - this.x;
        const dy = pointerPosition.y - this.y;
        this.x += dx * 0.08;
        this.y += dy * 0.08;
        this.angle = Math.atan2(dy, dx);
        this.wobble = Math.sin(performance.now() * 0.003) * 0.05;
      }

      getEnginePosition() {
        return {
          x: this.x - Math.cos(this.angle) * 24,
          y: this.y - Math.sin(this.angle) * 24
        };
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle + this.wobble);

        const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, 70);
        glow.addColorStop(0, palette.rocketGlowInner);
        glow.addColorStop(1, palette.rocketGlowOuter);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(0, 0, 70, 0, Math.PI * 2);
        ctx.fill();

        const bodyGradient = ctx.createLinearGradient(0, -45, 0, 30);
        bodyGradient.addColorStop(0, palette.rocketBodyTop);
        bodyGradient.addColorStop(1, palette.rocketBodyBottom);
        ctx.fillStyle = bodyGradient;
        ctx.strokeStyle = palette.isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.4)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, -45);
        ctx.quadraticCurveTo(18, -10, 12, 25);
        ctx.lineTo(-12, 25);
        ctx.quadraticCurveTo(-18, -10, 0, -45);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = palette.rocketWindow;
        ctx.strokeStyle = palette.isLight ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.7)';
        ctx.lineWidth = 1;
        ctx.arc(0, -5, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = palette.rocketWing;
        ctx.beginPath();
        ctx.moveTo(-10, 15);
        ctx.lineTo(-28, 32);
        ctx.lineTo(-8, 30);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(10, 15);
        ctx.lineTo(28, 32);
        ctx.lineTo(8, 30);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }
    }

    const initScene = () => {
      stars.length = 0;
      shootingStars.length = 0;
      flameParticles.length = 0;

      for (let i = 0; i < 140; i += 1) stars.push(new Star());
      for (let i = 0; i < 8; i += 1) shootingStars.push(new ShootingStar());
      for (let i = 0; i < 50; i += 1) flameParticles.push(new FlameParticle());

      rocket = new Rocket();
      resizeCanvas();
    };

    initScene();

    let lastTime = performance.now();

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      pointerPosition.x += (pointerTarget.x - pointerPosition.x) * 0.1;
      pointerPosition.y += (pointerTarget.y - pointerPosition.y) * 0.1;

      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update(delta);
        star.draw();
      });

      ctx.save();
      ctx.globalCompositeOperation = palette.isLight ? 'multiply' : 'lighter';
      shootingStars.forEach((meteor) => {
        meteor.update(delta);
        meteor.draw();
      });
      ctx.restore();

      if (rocket) {
        rocket.update();

        ctx.save();
        ctx.globalCompositeOperation = palette.isLight ? 'multiply' : 'screen';
        flameParticles.forEach((particle) => {
          particle.update(delta, rocket);
          particle.draw();
        });
        ctx.restore();

        rocket.draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="three-d-canvas" />;
};

export default ThreeDCanvas;
