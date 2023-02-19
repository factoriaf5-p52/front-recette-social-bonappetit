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









type Props = {};

const SocialPage = (props: Props) => {
  return (
  <>
      <h1 className="flex justify-center font-bold text-2xl">SocialPage</h1>
        <div>
            <img className="h-32 mb-3"src={Sherezada} alt="user"/>
            <div>
              <p>123</p>
              <p>Post</p>
            </div>

            <div>
              <p>45K</p>
              <p>Followers</p>
            </div>

            <div>
              <p>45K</p>
              <p>Following</p>
            </div>
           <SocialNetwork text={""}/>
        </div>

        <div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu.</p>
          <SocialNetwork text={""}/>
        </div>

        <div>
          <h2>Friends</h2>
              <div>
                <img className="h-20"src={man1} alt="friend"/>
                <p>Paco</p>
              </div>

              <div>
                <img className="h-20"src={man2} alt="friend"/>
                <p>Fernando</p>
              </div>

              <div>
                <img className="h-20"src={Sherezada} alt="friend"/>
                <p>Heather</p>
              </div>

              <div>
                <img className="h-20"src={man4} alt="friend"/>
                <p>Marlon</p>
              </div>

              <div>
                <img className="h-20"src={man3} alt="friend"/>
                <p>James</p>
              </div>
          <SocialNetwork text={""}/>

          <div>
              <h2>News</h2>

              <div>
                <img className=""   src={Chicken} alt=""/> 
                    <div>
                      <img className=""  src={Heart} alt=""/>
                      </div>           
              </div>

              <div>
                <img className=""   src={VegPie} alt=""/>            
              </div>

              <div>
                <img className=""   src={Donnut} alt=""/>            
              </div>

              <div>
                <img className=""   src={Sushi} alt=""/>            
              </div>

              <div>
                <img className=""   src={Burguer} alt=""/>            
              </div>

              <div>
                <img className=""   src={Salad} alt=""/>            
              </div>

              <div>
                <img className=""   src={Salmon} alt=""/>            
              </div>

              <div>
                <img className=""   src={VegPie} alt=""/>            
              </div>
          <SocialNetwork text={""}/>
          </div>

        </div>

  </>

  );
};

export default SocialPage;
