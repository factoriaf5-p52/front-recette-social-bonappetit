const FormAlert = ({ alert }: any) => {
  return (
    <div
      className={`${
        alert.isError ? "bg-red" : "bg-green"
      } px-4 py-3 rounded relative mt-3`}
      role="alert"
    >
      {alert.msg}
    </div>
  );
};

export default FormAlert;
