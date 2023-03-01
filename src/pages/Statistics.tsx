import pasta from "../assets/low-pasta.png";
import dessert from "../assets/low-ice.png";
import meatballs from "../assets/low-meatballs.png";
import meat from "../assets/low-spice.png";
import tarta from "../assets/low-quiche.png";
import cake from "../assets/low-cake.png";
import dip from "../assets/low-chickenSalad.png";
import burguer from "../assets/low-hamburguer.png";
import salad from "../assets/low-salad.png";
import salmon from "../assets/low-salmon.png";
import Footer from "../components/Footer/Footer";
import SectionTitle from "../components/SectionTitle/SectionTitle";

type Props = {};

const StatisticsPage = (props: Props) => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center mb-28">
        <SectionTitle text="Statistics" />
        <div className="mt-16">
          <p className="font-bold text-left">Best rated recipes</p>
          <div className="grid grid-cols-3 gap-4 p-3 mb-3">
            <img src={pasta} alt="pasta" />
            <img src={dessert} alt="dessert" />
            <img src={meatballs} alt="meatballs" />
          </div>
          <p className="font-bold">The most viewed</p>
          <div className="grid grid-cols-3 gap-4 p-3 mb-3">
            <img src={meat} alt="meat" />
            <img src={dip} alt="dip" />
            <img src={tarta} alt="quiche" />
          </div>
          <p className="font-bold">Trending recipes</p>
          <div className="grid grid-cols-3 gap-4 p-3 mb-3">
            <img src={salmon} alt="salmon" />
            <img src={cake} alt="cake" />
            <img src={salmon} alt="salmon" />
          </div>
          <p className="font-bold">Chef's recommendations</p>
          <div className="grid grid-cols-3 gap-4 p-3 mb-3">
            <img src={burguer} alt="burguer" />
            <img src={salad} alt="salad" />
            <img src={cake} alt="cake" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StatisticsPage;
