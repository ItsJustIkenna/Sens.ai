import React from "react";
import "../../App.css";

const Button = ({
  className,
  title,
  href,
  float,
  paragraph,
  fontSize1,
  fontSize2,
  padding,
  margin,
  fontWeight,
  title2,
  backgroundColor,
  fontColor
}) => {
  return (
    <div className="">
      <button
        className={className}
        href={href}
        style={{
          borderColor: "white",
          float: float,
          padding: padding,
          margin: margin,
          backgroundColor: backgroundColor
        }}
      >
        <span
          style={{
            color: fontColor,
            alignContent: "center",
            fontSize: fontSize1,
            lineHeight: 0.5,
            fontWeight: fontWeight
          }}
        >
          {title}
        </span>
        <span
          style={{
            color: "orange",
            alignContent: "center",
            fontSize: fontSize2,
            fontWeight: fontWeight
          }}
        >
          {title2}
        </span>
        <br />
        <span
        className="title1"
          style={{
            color: "orange",
            alignContent: "center",
            fontSize: fontSize2,
          }}
        >
          {paragraph}
        </span>
        <br />
      </button>
    </div>
  );
};

export default Button;
