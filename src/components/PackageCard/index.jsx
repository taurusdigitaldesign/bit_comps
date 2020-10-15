import React, { useState, useEffect } from 'react';

import Style from './style.module.scss';

/**
 * @name PackageCard
 * @desc 套餐卡片
 */
const PackageCard = props => {
  const isGroup = props.isGroup || false;
  const [selected, setSelected] = useState(props.selected || false);

  const onClickHandler = () => {
    const newState = !selected;
    !isGroup && setSelected(newState);
    props.onClick && props.onClick(props.value, newState);
  };

  useEffect(() => {
    setSelected(props.selected || false);
  }, [props.selected]);

  return (
    <div
      className={`${Style.box} ${props.className}`}
      style={
        selected && props.selectedColor
          ? { borderColor: props.selectedColor }
          : {}
      }
      onClick={onClickHandler}
    >
      {props.icon && <img src={props.icon} alt="" />}
      {props.text && <div>{props.text}</div>}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className={Style.selected}
        style={{ display: selected ? 'block' : 'none' }}
      >
        <polygon
          points="0,22 22,0 22,22"
          style={props.selectedColor ? { fill: props.selectedColor } : {}}
        />
        <path
          d="M10 15 L14 18 L20 10 "
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default PackageCard;
