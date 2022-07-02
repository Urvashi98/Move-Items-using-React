import React from "react";
import SectionStyles from "./SectionStyles.module.css";

function SectionA(props) {
  const { array, onClick, isCurrent } = props;
  const classes = isCurrent
    ? `${SectionStyles.container} ${SectionStyles.container_IsCurrent}`
    : `${SectionStyles.container}`;

  const isEmpty = !(array.length > 0) ? true : false;
  const onClickItem = (item) => {
    //checking for classname toggle
    onClick(item)

  }
  return (
    <div>
      {isEmpty ? (
        <p>No data found</p>
      ) : (
        array.map((item) => {
          return (
            <div
              key={item.id}
              className={classes}
              onClick={() => onClickItem(item)}
            >
              {item.value}
            </div>
          );
        })
      )}
    </div>
  );
}

export default SectionA;
