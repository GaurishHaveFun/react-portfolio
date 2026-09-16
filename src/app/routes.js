import React, { useRef } from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Experience } from "../pages/experience";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Mirrors the nav link order in src/header — used to decide which way the
// slide transition should go when navigating between pages.
const navOrder = ["/", "/portfolio", "/about", "/experience", "/contact"];
const navIndex = (pathname) => {
  const index = navOrder.indexOf(pathname);
  return index === -1 ? 0 : index;
};

const AnimatedRoutes = withRouter(({ location }) => {
  const prevPathRef = useRef(location.pathname);
  const direction = navIndex(location.pathname) >= navIndex(prevPathRef.current) ? "forward" : "backward";
  prevPathRef.current = location.pathname;

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{
          enter: 400,
          exit: 400,
        }}
        classNames={`page-${direction}`}
        unmountOnExit
      >
        <Routes location={location}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
});

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
