import { useState } from "react";
import "../scss/navigation.scss";
import classNames from "classnames";

export const Navigation = () => {
  const [isDisplayNavItems, setIsDisplayNavItems] = useState(false);

  const changeStateNavItems = () => {
    setIsDisplayNavItems(!isDisplayNavItems);
  };
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <img
          src='https://portfolio-logo-pride.s3.us-west-2.amazonaws.com/pride.png'
          alt='logo'
          className='logo'
        ></img>
      </div>
      <div className='navbar-menu is-shadowless' id='navMenu'>
        <div className='navbar-start'></div>
        <div className='navbar-end'>
          <div
            className={classNames("burger-menu")}
            onClick={changeStateNavItems}
          >
            <div className='burger'></div>
            <div className='burger'></div>
            <div className='burger'></div>
          </div>

          <div
            className={classNames(
              "navbar-item",
              isDisplayNavItems ? "display-nav-items" : ""
            )}
          >
            <button
              className='say-hello-btn'
              onClick={() =>
                window.open("https://www.linkedin.com/in/kim-p-ma/", "_blank")
              }
            >
              {" "}
              Linkedin{" "}
            </button>
            <button
              className='say-hello-btn'
              onClick={() => window.open("https://github.com/mKimp", "_blank")}
            >
              {" "}
              Github
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
