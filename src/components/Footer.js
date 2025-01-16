import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/kamesh-pansare-728a01202"
              >
                <img
                  className="main-footer__icon"
                  src="./assets/png/linkedin-ico.png"
                  alt="Kamesh Pansare Linkedin Profile"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Kameshpansare27"
              >
                <img
                  className="main-footer__icon"
                  src="./assets/png/github-ico.png"
                  alt="Github Profile"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com"
              >
                <img
                  className="main-footer__icon"
                  src="./assets/png/twitter-ico.png"
                  alt="Twitter Profile"
                />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://dev.to/"
              >
                <img
                  className="main-footer__icon"
                  src="./assets/png/blog-ico.png"
                  alt="DEV.to Blog Profile"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UC8jb_CROHSxp3wKMdR6W-fQ"
              >
                <img
                  className="main-footer__icon main-footer__icon--mr-none"
                  src="./assets/png/yt-ico.png"
                  alt="Youtube Channel"
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h2 className="heading heading-sm text-lt">Kamesh Pansare</h2>
            <p className="main-footer__short-desc">
              A versatile Software Developer crafting efficient, scalable, and user-friendly software solutions to enhance functionality and drive the success of innovative products.
            </p>              
          </div>
        </div>

        <div className="main-footer__lower">
          &copy; Copyright {new Date().getFullYear()}. Made by
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kamesh-pansare-728a01202">
            Kamesh Pansare
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
