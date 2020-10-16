import React, { useState } from 'react';

import Style from './style.module.scss';

const VerifyInput = (props) => {
  const [text, setText] = useState(props.text);
  const [disabled, setDisabled] = useState(false);

  // 倒计时秒数
  let timer = null;
  const counterNum = props.time ? props.time : 60;

  // 倒计时
  const runCouter = () => {
    let count = counterNum;
    timer = setInterval(() => {
      count--;
      if (count <= 0) {
        clearInterval(timer);
        setText(props.text);
        setDisabled(false);
      } else {
        setText(`${count}s`);
      }
    }, 1000);
  };

  // 发送验证码
  const send = async () => {
    if (disabled) return;

    // 校验
    let res = true;
    if (props.onValidate) {
      res = props.onValidate();
    }

    if (res) {
      setDisabled(true);
      // 发送请求
      res = await props.onSend();
      res ? runCouter() : setDisabled(false);
    }
  };

  const onFocus = () => {
    props.onFocus && props.onFocus();
  };

  return (
    <div className={`${Style.box} ${props.className}`}>
      <div
        className={`${Style.btn} ${disabled ? Style.sended : Style.unSended}`}
        onClick={send}
      >
        {text}
      </div>
      <input
        className={Style.input}
        onChange={(e) => {
          let val = e.target.value;
          if (props.maxLen) {
            val = val.substring(0, props.maxLen);
            e.target.value = val;
          }
          props.onChange && props.onChange(val);
        }}
        onFocus={onFocus}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default VerifyInput;