import React from "react";
import SocialNetwork from "../components/SocialNetwork/SocialNetwork"
import Sherezada from "../assets/sherezada.svg"
import man1 from "../assets/man1.svg"
import man2 from "../assets/man2.svg"
import man3 from "../assets/man3.svg"
import man4 from "../assets/man4.svg"
import Chicken from "../assets/chicken.svg"
import VegPie from "../assets/vegetable-pie.svg"
import Donnut from "../assets/donnuts.svg"
import Sushi from "../assets/sushi.svg"
import Burguer from "../assets/hamburguer.svg"
import Salad from "../assets/chicken-salad.svg"
import Salmon from "../assets/baked-salmon.svg"
import Heart from "../assets/icon-like.svg"
import Comment from "../assets/icon-comments.svg"
import Share from "../assets/icon-share.svg"
import Footer from "../components/Footer/Footer";



type Props = {};

const SocialPage = (props: Props) => {
  return (
  <>
  <div>
    <div className="flex flex-col justify-center items-center mb-2">
          <h1 className="flex justify-center font-bold text-2xl mt-4 mb-2">SocialPage</h1>
          <div className="flex flex-row  content-center gap-5 max-width:1280">
              
                <img className="h-32 mb-3"src={Sherezada} alt="user"/>
                
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
                    <p className="flex justify-center md:center-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu.</p>
                </div>

          <SocialNetwork text={""}/>
               
      </div>

      
    <div>
        <div>
            <h2 className="flex justify-center font-bold mt-6 mb-3">Friends</h2>
        </div>

        <div className="flex flex-row justify-evenly center-center gap-2  max-width:1280">
              <div>
                <img className="h-20"src={man1} alt="friend"/>
                <p className="flex flex-col font-bold justify-center items-center">Paco</p>
              </div>

              <div>
                <img className="h-20"src={man2} alt="friend"/>
                <p className="flex flex-col font-bold justify-center items-center">Nando</p>
              </div>

              <div>
                <img className="h-20"src={Sherezada} alt="friend"/>
                <p className="flex flex-col font-bold justify-center items-center">Heather</p>
              </div>

              <div>
                <img className="h-20"src={man4} alt="friend"/>
                <p className="flex flex-col font-bold justify-center items-center">Marlon</p>
              </div>

              <div>
                <img className="h-20"src={man3} alt="friend"/>
                <p className="flex flex-col font-bold justify-center items-center">James</p>
              </div>
          <SocialNetwork text={""}/>

        </div>

      </div>


    <div>
        <div className="flex justify-center font-bold mt-8 mb-8">
              <h2>News</h2>
        </div>

        <div className="grid mx-8 grid-cols-2 md:grid-cols-4 gap-6 max-width:1280px">
      
            <div className="flex flex-col">
                <img className="h-20"   src={Chicken} alt=""/> 
                <div className="flex flex-row justify-center items-center mt-3">
                    <img className=""  src={Heart} alt=""/>
                    <img className=""  src={Comment} alt=""/>
                    <img className=""  src={Share} alt=""/>
                </div>           
            </div>

            <div className="flex flex-col">
                <img className="h-20"   src={VegPie} alt=""/> 
                <div className="flex flex-row justify-center items-center mt-3">
                      <img className=""  src={Heart} alt=""/>
                      <img className=""  src={Comment} alt=""/>
                      <img className=""  src={Share} alt=""/>
                </div>           
            </div>

            <div className="flex flex-col">
                <img className="h-20"   src={Donnut} alt=""/>
                <div className="flex flex-row  justify-center items-center mt-3">
                      <img className=""  src={Heart} alt=""/>
                      <img className=""  src={Comment} alt=""/>
                      <img className=""  src={Share} alt=""/>
                </div>            
            </div>

            <div className="flex flex-col">
                <img className="h-20"   src={Sushi} alt=""/> 
                <div className="flex flex-row justify-center items-center mt-3">
                      <img className=""  src={Heart} alt=""/>
                      <img className=""  src={Comment} alt=""/>
                      <img className=""  src={Share} alt=""/>
                </div>           
            </div>
      
        
            <div className="flex flex-col">
                <img className="h-20"   src={Burguer} alt=""/>
                <div className="flex flex-row justify-center items-center mt-3">
                      <img className=""  src={Heart} alt=""/>
                      <img className=""  src={Comment} alt=""/>
                      <img className=""  src={Share} alt=""/>
                </div>            
            </div>

            <div className="flex flex-col">
                <img className="h-20"   src={Salad} alt=""/>
                <div className="flex flex-row justify-center items-center mt-3">
                      <img className=""  src={Heart} alt=""/>
                      <img className=""  src={Comment} alt=""/>
                      <img className=""  src={Share} alt=""/>
                </div>            
            </div>

            <div className="flex flex-col">
                <img className="h-20"   src={Salmon} alt=""/> 
                <div className="flex flex-row justify-center items-center mt-3">
                      <img className=""  src={Heart} alt=""/>
                      <img className=""  src={Comment} alt=""/>
                      <img className=""  src={Share} alt=""/>
                </div>           
            </div>

            <div className="flex flex-col">
                <img className="h-20"   src={VegPie} alt=""/> 
                <div className="flex flex-row justify-center items-center mt-3">
                      <img className=""  src={Heart} alt=""/>
                      <img className=""  src={Comment} alt=""/>
                      <img className=""  src={Share} alt=""/>
                </div>           
            </div>
            </div>
           
          <SocialNetwork text={""}/>
        </div>


   </div>

    <Footer/>

  </>

  );
};

export default SocialPage;
