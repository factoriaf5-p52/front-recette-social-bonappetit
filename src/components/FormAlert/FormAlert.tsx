import React from "react";

type Props = {
  alert: {
    msg: string;
    error: boolean;
  };
};

const FormAlert = ({ alert }: Props) => {
  return <div>{alert.msg}</div>;
};

export default FormAlert;
