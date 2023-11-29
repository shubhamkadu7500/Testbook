import React from "react";

const Social = () => {
  return (
    <>
      <div className="home__social">
        <a
          href="https://instagram.com/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-instagram" />
        </a>
        <a
          href="https://dribble.com/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-dribbble" />
        </a>
        <a
          href="https://github.com/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-github-alt" />
        </a>
      </div>
    </>
  );
};

export default Social;
