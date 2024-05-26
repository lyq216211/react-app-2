import React from "react";

const InfoItem = ({ id, value, name, tag }) => {
  return (
    <div className="info-item">
      <p>{name}</p>
      <span>
        {value}
        {tag}
      </span>
    </div>
  );
};

export default InfoItem;
