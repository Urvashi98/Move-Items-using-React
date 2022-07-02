import React from "react";
import SectionStyles from "./SectionStyles.module.css";

function SectionB(props) {
  const { array, onClick } = props;

  const isEmpty = !(array.length > 0) ? true : false;
  return (
    <div>
      {isEmpty ? (
        <p>No data found</p>
      ) : (
        array.map((item) => {
          return (
            <div
              key={item.id}
              className={SectionStyles.container}
              onClick={() => onClick(item)}
            >
              {item.value}
            </div>
          );
        })
      )}
    </div>
  );
}

export default SectionB;
