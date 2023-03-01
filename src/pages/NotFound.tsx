import React from "react";
import Footer from "../components/Footer/Footer";
import SectionTitle from "../components/SectionTitle/SectionTitle";

type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <>
      <div>
        <SectionTitle text="Not found" />
        <h2 className="flex justify-center font-bold text-xl mt-12">
          Page not found.
        </h2>
      </div>

      <Footer />
    </>
  );
};

export default NotFoundPage;
