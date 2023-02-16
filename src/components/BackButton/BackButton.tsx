import { useNavigate } from "react-router-dom";
import iconBackArrow from "../../assets/iconarrowleft.svg";

export const BackButton = () => {
  let navigate = useNavigate();
  return (
    <>
      <button
        className="flex-none hover:cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src={iconBackArrow} alt="icon arrow back" />
      </button>
    </>
  );
};
