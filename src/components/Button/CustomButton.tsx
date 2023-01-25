import React from "react";
import { getClass } from "./ButtonTheme";

interface ButtonProps {
  type: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const handleClick: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (e) => {
    if (props.onClick) props.onClick(e);
  };

  const classes = getClass(props.type);
  return (
    <button className={classes} onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
