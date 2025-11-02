import { Link } from "react-router-dom";
const FrontPage = () => {
  return (
    <div className="front">
    
      <div className="front-child1">
        <h1>
          Your AI Rent Management System
          <span className="bate"> Bate!</span>
        </h1>
        <button className="order">
          <a href="https://rental-user-management-frontend.vercel.app/login">Sign Up</a>{" "}
        </button>
        <button className="view">
          <Link to="/vehicles">View Properties</Link>
        </button>
      </div>
      

       <div className="front-child2">
        <img className="car car1" src="hero-imag.png" alt="" />
        <img className="car car2" src="hero-imag2.png" alt="" />
      </div>
    </div>
  );
};

export default FrontPage;