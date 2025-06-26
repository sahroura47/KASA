import ArrowUp from "../assets/Arrow-up.svg";
const Dropin = ({index, title, children ,setDropinOpened, isOpen=false}) => {
  const toggleDropin = () => {
    setDropinOpened((prevIndex) => (prevIndex===index? null : index));
  };
  const dropinClass = isOpen ? "dropin-open" : "dropin-closed";
  const rotateClass = `Arrow${isOpen ? "rotate" : ""}`;

  return (
    <div  className={dropinClass}>
      <div className="summary" onClick={toggleDropin}>
        <span>{title} </span>
        <img src={ArrowUp} alt="image flèche" className={rotateClass}></img>
      </div>
        <div className={`dropinText ${isOpen ? "open" : "closed"}`}>{children}</div>
    </div>
  );
};
export default Dropin;
