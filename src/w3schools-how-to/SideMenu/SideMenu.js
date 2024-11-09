import { useState } from "react";
import "./SideMenu.css";

export default function SideMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="side-menu-page">
      <header>
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1>Site Title</h1>
      </header>
      <nav className={menuOpen ? "open" : ""}>
        <ul>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
        </ul>
      </nav>
      <div className="main">
        <p id="home">
          Emmet is a web-developer’s toolkit that can greatly improve your HTML
          & CSS workflow. Emmet is a plugin for many popular text editors which
          greatly improves HTML & CSS workflow. Emmet is a web-developer’s
          toolkit that can greatly improve your HTML & CSS workflow. Emmet is a
          plugin for many popular text editors which greatly improves HTML & CSS
          workflow. Emmet is a web-developer’s toolkit that can greatly improve
          your HTML & CSS workflow. Emmet is a plugin for many popular text
          editors which greatly improves HTML & CSS workflow. Emmet is a
          web-developer’s toolkit that can greatly improve your HTML & CSS
          workflow. Emmet is a plugin for many popular text editors which
          greatly improves HTML & CSS workflow.Emmet is a web-developer’s
          toolkit that can greatly improve your HTML & CSS workflow. Emmet is a
          plugin for many popular text editors which greatly improves HTML & CSS
          workflow. Emmet is a web-developer’s toolkit that can greatly improve
          your HTML & CSS workflow. Emmet is a plugin for many popular text
          editors which greatly improves HTML & CSS workflow. Emmet is a
          web-developer’s toolkit that can greatly improve your HTML & CSS
          workflow.Emmet is a web-developer’s toolkit that can greatly improve
          your HTML & CSS workflow. Emmet is a plugin for many popular text
          editors which greatly improves HTML & CSS workflow. Emmet is a
          web-developer’s toolkit that can greatly improve your HTML & CSS
          workflow. Emmet is a plugin for many popular text editors which
          greatly improves HTML & CSS workflow. Emmet is a web-developer’s
          toolkit that can greatly improve your HTML & CSS workflow.Emmet is a
          web-developer’s toolkit that can greatly improve your HTML & CSS
          workflow. Emmet is a plugin for many popular text editors which
          greatly improves HTML & CSS workflow. Emmet is a web-developer’s
          toolkit that can greatly improve your HTML & CSS workflow. Emmet is a
          plugin for many popular text editors which greatly improves HTML & CSS
          workflow. Emmet is a web-developer’s toolkit that can greatly improve
          your HTML & CSS workflow.
        </p>
        <p id="about">
          Emmet is a web-developer’s toolkit that can greatly improve your HTML
          & CSS workflow. Emmet is a plugin for many popular text editors which
          greatly improves HTML & CSS workflow. Emmet is a web-developer’s
          toolkit that can greatly improve your HTML & CSS workflow. Emmet is a
          plugin for many popular text editors which greatly improves HTML & CSS
          workflow. Emmet is a web-developer’s toolkit that can greatly improve
          your HTML & CSS workflow.Emmet is a web-developer’s toolkit that can
          greatly improve your HTML & CSS workflow. Emmet is a plugin for many
          popular text editors which greatly improves HTML & CSS workflow. Emmet
          is a web-developer’s toolkit that can greatly improve your HTML & CSS
          workflow. Emmet is a plugin for many popular text editors which
          greatly improves HTML & CSS workflow. Emmet is a web-developer’s
          toolkit that can greatly improve your HTML & CSS workflow.Emmet is a
          web-developer’s toolkit that can greatly improve your HTML & CSS
          workflow. Emmet is a plugin for many popular text editors which
          greatly improves HTML & CSS workflow. Emmet is a web-developer’s
          toolkit that can greatly improve your HTML & CSS workflow. Emmet is a
          plugin for many popular text editors which greatly improves HTML & CSS
          workflow. Emmet is a web-developer’s toolkit that can greatly improve
          your HTML & CSS workflow.Emmet is a web-developer’s toolkit that can
          greatly improve your HTML & CSS workflow. Emmet is a plugin for many
          popular text editors which greatly improves HTML & CSS workflow. Emmet
          is a web-developer’s toolkit that can greatly improve your HTML & CSS
          workflow. Emmet is a plugin for many popular text editors which
          greatly improves HTML & CSS workflow. Emmet is a web-developer’s
          toolkit that can greatly improve your HTML & CSS workflow.Emmet is a
          web-developer’s toolkit that can greatly improve your HTML & CSS
          workflow. Emmet is a plugin for many popular text editors which
          greatly improves HTML & CSS workflow. Emmet is a web-developer’s
          toolkit that can greatly improve your HTML & CSS workflow. Emmet is a
          plugin for many popular text editors which greatly improves HTML & CSS
          workflow. Emmet is a web-developer’s toolkit that can greatly improve
          your HTML & CSS workflow.Emmet is a web-developer’s toolkit that can
          greatly improve your HTML & CSS workflow. Emmet is a plugin for many
          popular text editors which greatly improves HTML & CSS workflow. Emmet
          is a web-developer’s toolkit that can greatly improve your HTML & CSS
          workflow. Emmet is a plugin for many popular text editors which
          greatly improves HTML & CSS workflow. Emmet is a web-developer’s
          toolkit that can greatly improve your HTML & CSS workflow.
        </p>
        <p id="services">
          Emmet is a web-developer’s toolkit that can greatly improve your HTML
          & CSS workflow. Emmet is a plugin for many popular text editors which
          greatly improves HTML & CSS workflow. Emmet is a web-developer’s
          toolkit that can greatly improve your HTML & CSS workflow. Emmet is a
          plugin for many popular text editors which greatly improves HTML & CSS
          workflow. Emmet is a web-developer’s toolkit that can greatly improve
          your HTML & CSS workflow. Emmet is a plugin for many popular text
          editors which greatly improves HTML & CSS workflow. Emmet is a
          web-developer’s toolkit that can greatly improve your HTML & CSS
          workflow. Emmet is a plugin for many popular text editors which
          greatly improves HTML & CSS workflow.Emmet is a web-developer’s
          toolkit that can greatly improve your HTML & CSS workflow. Emmet is a
          plugin for many popular text editors which greatly improves HTML & CSS
          workflow. Emmet is a web-developer’s toolkit that can greatly improve
          your HTML & CSS workflow. Emmet is a plugin for many popular text
          editors which greatly improves HTML & CSS workflow. Emmet is a
          web-developer’s toolkit that can greatly improve your HTML & CSS
          workflow.Emmet is a web-developer’s toolkit that can greatly improve
          your HTML & CSS workflow. Emmet is a plugin for many popular text
          editors which greatly improves HTML & CSS workflow. Emmet is a
          web-developer’s toolkit that can greatly improve your HTML & CSS
          workflow. Emmet is a plugin for many popular text editors which
          greatly improves HTML & CSS workflow. Emmet is a web-developer’s
          toolkit that can greatly improve your HTML & CSS workflow.Emmet is a
          web-developer’s toolkit that can greatly improve your HTML & CSS
          workflow. Emmet is a plugin for many popular text editors which
          greatly improves HTML & CSS workflow. Emmet is a web-developer’s
          toolkit that can greatly improve your HTML & CSS workflow. Emmet is a
          plugin for many popular text editors which greatly improves HTML & CSS
          workflow. Emmet is a web-developer’s toolkit that can greatly improve
          your HTML & CSS workflow.
        </p>
      </div>
    </div>
  );
}
