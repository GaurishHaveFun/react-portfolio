### Description

A modern, fully responsive portfolio website template designed specifically for students. Built with React, this template helps students showcase their projects, skills, education, and achievements in a professional and visually appealing way.

### Features

- 🎨 **Fully Responsive** - Looks great on all devices (desktop, tablet, mobile)
- 📄 **Multi-Page Layout** - Home, About, Portfolio, and Contact pages
- 📧 **Contact Form** - Integrated with EmailJS for easy contact form functionality
- 🎯 **Student-Focused** - Sections for education, achievements, projects, and skills
- 🎭 **Modern UI** - Built with React-Bootstrap and custom CSS
- ⚡ **Easy Customization** - Edit all content from one central file
- 🌓 **Dark/Light Theme** - Built-in theme toggle
- 🎬 **Smooth Animations** - Page transitions and interactive elements

### Setup

1. **Install dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

2. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

3. **Build for production**

   ```bash
   npm run build
   # or
   yarn build
   ```

### Customization Guide

All content can be easily customized in `src/content_option.js`. Here's what you can modify:

#### Personal Information
- **logotext**: Your name (appears in header)
- **meta**: Page title and description for SEO
- **introdata**: Hero section content with animated text
- **dataabout**: About section content

#### Education & Achievements
- **worktimeline**: Update with your education milestones, achievements, internships, etc.
  ```javascript
  {
    jobtitle: "Dean's List",
    where: "Your University",
    date: "2024",
  }
  ```

#### Skills
- **skills**: Add or modify your technical skills with proficiency levels (0-100)
  ```javascript
  {
    name: "JavaScript",
    value: 85,
  }
  ```

#### Interests & Activities
- **services**: Update with your interests, activities, or areas of expertise

#### Portfolio Projects
- **dataportfolio**: Add your projects with images, descriptions, and links
  ```javascript
  {
    img: "path/to/your/image.jpg",
    description: "Project description",
    link: "https://your-project-link.com",
  }
  ```

#### Contact Information
- **contactConfig**: Update email, phone, and EmailJS configuration
  - To enable the contact form, set up an EmailJS account and add your service ID, template ID, and user ID

#### Social Media
- **socialprofils**: Add links to your GitHub, LinkedIn, Twitter, Facebook profiles

### Project Structure

```
src/
├── app/
│   ├── App.js          # Main app component
│   └── routes.js       # Route configuration
├── components/         # Reusable components
├── pages/              # Page components
│   ├── home/          # Landing page
│   ├── about/         # About page
│   ├── portfolio/     # Portfolio/projects page
│   └── contact/       # Contact page
├── header/            # Navigation header
├── content_option.js  # ⭐ All content configuration
└── index.js           # App entry point
```

### Tips for Students

1. **Add Your Projects**: Replace placeholder portfolio items with your actual projects. Include screenshots, GitHub links, and live demos.

2. **Update Skills**: Be honest about your skill levels. Focus on technologies you're actively learning or using.

3. **Showcase Achievements**: Include academic achievements, hackathon wins, certifications, internships, or research work.

4. **Professional Photo**: Replace the placeholder image with a professional headshot or a photo that represents you.

5. **Contact Form Setup**: 
   - Create a free account at [EmailJS](https://www.emailjs.com/)
   - Follow their [React tutorial](https://www.emailjs.com/docs/examples/reactjs/)
   - Add your service ID, template ID, and user ID to `contactConfig`

6. **Deploy Your Portfolio**:
   - Deploy to [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or [GitHub Pages](https://pages.github.com/)
   - Update social media links with your actual profiles

### Technologies Used

- React 18
- React Router DOM
- React Bootstrap
- EmailJS
- React Icons
- Typewriter Effect
- React Helmet (SEO)

### License

This project is open source and available under the MIT License.

### Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit other students, consider contributing back!

### Support

If you encounter any issues or have questions, please open an issue on the repository.

---

**Happy Building! 🚀** 
