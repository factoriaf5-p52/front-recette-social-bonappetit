import React from "react";
import SocialNetwork from "../components/SocialNetwork/SocialNetwork";
import Sherezada from "../assets/sherezada.png";
import man1 from "../assets/man1.png";
import man2 from "../assets/man1.png";
import man3 from "../assets/man1.png";
import man4 from "../assets/man1.png";
import Chicken from "../assets/chicken-salad.png";
import VegPie from "../assets/chicken-salad.png";
import Donnut from "../assets/donut.png";
import Sushi from "../assets/sushi.svg";
import Burguer from "../assets/chicken-salad.png";
import Salad from "../assets/chicken-salad.png";
import Salmon from "../assets/chicken-salad.png";
import Heart from "../assets/icon-like.svg";
import Comment from "../assets/icon-comments.svg";
import Share from "../assets/icon-share.svg";
import Footer from "../components/Footer/Footer";
import SectionTitle from "../components/SectionTitle/SectionTitle";

type Props = {};

const SocialPage = (props: Props) => {
  return (
    <>
      <div className="mb-36">
        <div className="flex flex-col justify-center items-center mb-2">
          <SectionTitle text="Social Page" />
          <div className="flex flex-row mt-12 content-center gap-5 max-width:1280">
            <img className="h-32 mb-3" src={Sherezada} alt="user" />

            <div className="self-center">
              <p>123</p>
              <p>Post</p>
            </div>

            <div className="self-center">
              <p>45K</p>
              <p>Followers</p>
            </div>

            <div className="self-center">
              <p>45K</p>
              <p>Following</p>
            </div>
          </div>

          <div>
            <p className="flex justify-center md:center-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsu.
            </p>
          </div>

          <SocialNetwork text={""} />
        </div>

        <div>
          <div>
            <h2 className="flex justify-center font-bold mt-6 mb-3">Friends</h2>
          </div>

          <div className="flex flex-row justify-evenly center-center gap-2  max-width:1280">
            <div>
              <img className="h-20" src={man1} alt="friend" />
              <p className="flex flex-col font-bold justify-center items-center">
                Paco
              </p>
            </div>

            <div>
              <img className="h-20" src={man2} alt="friend" />
              <p className="flex flex-col font-bold justify-center items-center">
                Nando
              </p>
            </div>

            <div>
              <img className="h-20" src={Sherezada} alt="friend" />
              <p className="flex flex-col font-bold justify-center items-center">
                Heather
              </p>
            </div>

            <div>
              <img className="h-20" src={man4} alt="friend" />
              <p className="flex flex-col font-bold justify-center items-center">
                Marlon
              </p>
            </div>

            <div>
              <img className="h-20" src={man3} alt="friend" />
              <p className="flex flex-col font-bold justify-center items-center">
                James
              </p>
            </div>
            <SocialNetwork text={""} />
          </div>
        </div>

        <div>
          <div className="flex justify-center font-bold mt-8 mb-8">
            <h2>News</h2>
          </div>

          <div className="grid mx-8 grid-cols-2 md:grid-cols-4 gap-6 max-width:1280px">
            <div className="flex flex-col items-center">
              <img className="w-{10}" src={Chicken} alt="A chicken salad" />
              <div className="flex flex-row justify-center items-center mt-3">
                <img src={Heart} alt="Heart" />
                <img src={Comment} alt="Comment cloud" />
                <img src={Share} alt="Icon to share" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-{10}" src={VegPie} alt="A vegetables pie" />
              <div className="flex flex-row justify-center items-center mt-3">
                <img src={Heart} alt="Heart" />
                <img src={Comment} alt="Comment cloud" />
                <img src={Share} alt="Icon to share" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-{10}" src={Chicken} alt="Roast chicken" />
              <div className="flex flex-row  justify-center items-center mt-3">
                <img src={Heart} alt="Heart" />
                <img src={Comment} alt="Comment cloud" />
                <img src={Share} alt="Icon to share" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-{10}" src={Burguer} alt="A hamburguer" />
              <div className="flex flex-row justify-center items-center mt-3">
                <img src={Heart} alt="Heart" />
                <img src={Comment} alt="Comment cloud" />
                <img src={Share} alt="Icon to share" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-{10}" src={Burguer} alt="A hamburguer" />
              <div className="flex flex-row justify-center items-center mt-3">
                <img src={Heart} alt="Heart" />
                <img src={Comment} alt="Comment cloud" />
                <img src={Share} alt="Icon to share" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-{10}" src={Salad} alt="A green salad" />
              <div className="flex flex-row justify-center items-center mt-3">
                <img src={Heart} alt="Heart" />
                <img src={Comment} alt="Comment cloud" />
                <img src={Share} alt="Icon to share" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-{10}" src={Salmon} alt="Baked salmon" />
              <div className="flex flex-row justify-center items-center mt-3">
                <img src={Heart} alt="Heart" />
                <img src={Comment} alt="Comment cloud" />
                <img src={Share} alt="Icon to share" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-{10}" src={VegPie} alt="A vegetables pie" />
              <div className="flex flex-row justify-center items-center mt-3">
                <img src={Heart} alt="Heart" />
                <img src={Comment} alt="Comment cloud" />
                <img src={Share} alt="Icon to share" />
              </div>
            </div>
          </div>

          <SocialNetwork text={""} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SocialPage;
