import React, { useState } from "react";
import Dropin from "./Dropin";
const DropinContainer = ({ data }) => {
  const [dropinOpened, setDropinOpened] = useState(null);
  return (
    <>
      {data.map((item, index) => (
        <Dropin
          index={index}
          key={index}
          title={item.title}
          isOpen={index === dropinOpened}
          setDropinOpened={setDropinOpened}
        >
          {item.content}
        </Dropin>
      ))}
    </>
  );
};
export default DropinContainer;
