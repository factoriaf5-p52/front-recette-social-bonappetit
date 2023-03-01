import React from "react";
import Footer from "../components/Footer/Footer"


type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <>
    <div>
    <h1 className="flex justify-center font-bold text-2xl mt-32">Not Found</h1>
    <h2 className="flex justify-center font-bold text-xl mt-12">Page not found.</h2>
    </div>

    <Footer/>
    </>
  )
};

export default NotFoundPage;
