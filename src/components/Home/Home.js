import React from "react";

import { Link } from "react-router-dom";
const Home = () => {
  
  return (
    <div className="container text-center my-3">
      <Link to="all-banks" className="p-2 text-decoration-none"> <button type="button" class="btn btn-primary m-2"> All Banks</button></Link>
      <Link to="favourites" className="p-2 text-decoration-none"> <button type="button" class="btn btn-primary m-2"> Favourite Banks</button></Link>
    </div>
  );
};

export default Home;
