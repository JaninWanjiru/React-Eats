import { IoFastFoodSharp } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { IoPizzaOutline } from "react-icons/io5";
import { LuSalad } from "react-icons/lu";
import { LiaPepperHotSolid } from "react-icons/lia";
import { GiCupcake } from "react-icons/gi";

function Header() {
  return (
    <div className="header">
      <div className="headerItem">
        <IoFastFoodSharp />
        <p>All</p>
      </div>
      <div className="headerItem">
        <BiDrink />
        <p>Drinks</p>
      </div>
      <div className="headerItem">
        <IoPizzaOutline />
        <p>Pizza</p>
      </div>
      <div className="headerItem">
        <LuSalad />
        <p>Salad</p>
      </div>
      <div className="headerItem">
        <LiaPepperHotSolid />
        <p>Spicy</p>
      </div>
      <div className="headerItem">
        <GiCupcake />
        <p>Sweets</p>
      </div>
      <button className="headerItem cta-btn">View all</button>
    </div>
  );
}

export default Header;
