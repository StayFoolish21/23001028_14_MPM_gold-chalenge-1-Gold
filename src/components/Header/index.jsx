import NavigationBar from "../Navbar";
import Hero from "../Hero";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <NavigationBar />
      <Hero />
    </div>
  );
};

export default Header;
