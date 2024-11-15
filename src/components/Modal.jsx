import React, { useState } from "react";

const Modal = () => {
  const [isShow, setIsShow] = useState(true);

  const handleOpenClick = () => {
    setIsShow(false);
  };

  const handleCloseClick = () => {
    setIsShow(true);
  };

  const handleEscapeKeyPress = (e) => {
    if (e.key === "Escape") {
      handleCloseClick();
    }
  };

  return (
    <div className="container">
      <button
        className="show"
        onClick={handleOpenClick}
        onKeyDown={handleEscapeKeyPress}
      >
        Show Content
      </button>
      <div
        className={`box ${isShow ? "hidden" : ""}`}
        onClick={handleCloseClick}
      >
        <div className="inner-box" onClick={(e) => e.stopPropagation()}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            incidunt.
          </p>
          <button className="close" onClick={handleCloseClick}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
