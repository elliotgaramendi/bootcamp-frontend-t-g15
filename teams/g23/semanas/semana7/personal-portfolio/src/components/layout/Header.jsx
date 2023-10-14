import { useEffect, useRef } from "react";

const Header = () => {
  const header = useRef();
  const nav = useRef();

  const handleScroll = () => {
    header.current.classList.toggle('header--scroll', window.scrollY > 0);
    nav.current.classList.toggle('nav--scroll', window.scrollY > 0);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className="header"
      ref={header}
    >
      <nav
        className="nav"
        ref={nav}
      >
        <div className="container">
          <a href="#">
            <img
              src="https://i.postimg.cc/Y9zngjZV/elliot-garamendi-sonrisa.png"
              alt="Elliot Garamendi"
              className="img img--logo"
              width={48}
              height={48}
            />
          </a>
          <div className="off-canvas" id="off-canvas">
            <div className="off-canvas__child">
              <a href="#off-canvas">✖</a>
              <ul>
                <li>
                  <a href="#">Experiencia</a>
                </li>
                <li>
                  <a href="#">Proyectos</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">YouTube</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
            <a href="#off-canvas--close">
              🍔
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;