import React, { useState, useEffect } from 'react';

import Style from './style.module.scss';

/**
 * @name PackageCardGroup
 * @desc 套餐卡片列表
 */
const PackageCardGroup = props => {
  const radioMode = props.radioMode || false;
  const [value, setValue] = useState(props.defaultValue || '');

  useEffect(() => {
    setValue(props.defaultValue);
  }, [props.defaultValue]);

  const onClickHandler = (el, v, selected) => {
    radioMode ? setValue(v) : setValue(value != v && selected ? v : '');
    el.props.onClick && el.props.onClick(v, selected);
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <div className={`${Style.box} ${props.className}`}>
        {React.Children.map(props.children, el => {
          if (!el) return null;

          return React.cloneElement(
            el,
            Object.assign({}, el.props, {
              isGroup: true,
              selected: el.props['value'] == value,
              selectedColor: props.selectedColor || '#000',
              onClick: (v, selected) => onClickHandler(el, v, selected),
            }),
          );
        })}
      </div>
    </div>
  );
};

export default PackageCardGroup;
