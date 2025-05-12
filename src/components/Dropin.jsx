import React, { useState } from "react";
import ArrowUp from "../assets/Arrow-up.svg";
const Dropin = ({index, title, children ,setDropinOpened, isOpen=false}) => {
  const toggleDropin = () => {
    setDropinOpened(index);
  };
  const dropinClass = isOpen ? "dropin-open" : "dropin-closed";
  const rotateClass = `Arrow${isOpen ? "rotate" : ""}`;

  return (
    <div  className={dropinClass}>
      <div className="summary" onClick={toggleDropin}>
        <span>{title} </span>
        <img src={ArrowUp} alt="image flèche" className={rotateClass}></img>
      </div>
      {isOpen && <div className="dropinText">{children}</div>}
    </div>
  );
};
export default Dropin;
