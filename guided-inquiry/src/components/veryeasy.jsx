import React from "react";

const BasicInfo = ({
  name,
  phone,
  birthdate,
}) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{phone}</p>
      <p>{birthdate}</p>
    </>
  );
};

export default BasicInfo;