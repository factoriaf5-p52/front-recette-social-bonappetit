import React from "react";
import User from "../assets/img-profile.svg"
import BoxProfile from "../components/BoxProfile/BoxProfile"
import Footer from "../components/Footer/Footer";


type Props = {};

const ProfilePage = (props: Props) => {
  return (
<>
  <h1 className="flex justify-center justify-items-center mt-6 mb-3 font-bold text-2xl">Profile</h1>

    <div className="flex flex-col justify-center justify-items-center">
       <img className="h-32 mb-3"src={User} alt="user"/>
       <p className=" flex justify-center mb-1 font-bold text-lg">Sherezada</p>
       <p className="flex justify-center justify-items-center font-bold mb-10">Log out</p>
    </div>
    
  <div className="grid grid-cols-2 gap-14 justify-items-center"> 

      <div className="w-80 h-48 rounded">
          <div>
              <h2 className="font-bold mb-3">My recipes</h2>
          </div>  
     
          <div className="bg-gray-light w-80 h-48 rounded text-center pt-5">
              <ul>
                  <li>Ceviche (lunch, Perú)</li>
                  <br></br>
                  <li>Alfajores (dessert, Argentina)</li>
                  <br></br>
                  <li>Arepas (breakfast, Venezuela)</li>
                  <br></br>
                  <li>Crème Brûlée (dessert, Catalonia)</li>
                  <BoxProfile text=""/>
              </ul> 
          </div> 
        </div>

      <div className="w-80 h-48 rounded">
            <div>
               <h2 className="font-bold mb-3">My menus</h2>
            </div>

            <div className="bg-gray-light w-80 h-48 rounded text-center pt-4"> 
                 <ol>
                    <li>1. A healthy breakfast</li>
                     <p>Oatmeal pancakes</p>
                     <p>Banana milkshake</p>

                    <br></br>
                    <br></br>
        
                    <li>2. A tasty lunch</li>
                     <p>Ceviche</p>
                     <p>Duck stew</p>
                 </ol>
                 <BoxProfile text=""/>
            </div>
      </div>


      <div className="w-80 h-48 rounded">   
              <div>
                  <h2 className="font-bold mb-3">My shopping list</h2>
                  <BoxProfile text=""/>
              </div>
              <div className="bg-gray-light w-80 h-48 rounded">

              </div>
      </div>
    

      <div className="w-80 h-48 rounded">
              <div>
                  <h2 className="font-bold mb-3">My groups</h2>
                  <BoxProfile text=""/>
              </div>
              <div className="bg-gray-light w-80 h-48 rounded">

             </div>


    </div>
    <Footer/>
    </div>
  </>

  );
};

export default ProfilePage;
