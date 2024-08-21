import React from "react";

function ListofTents({ imgsrc, tenttype, price }) {
  return (
    <div className="tentImage">
      <img src={imgsrc} alt={tenttype} />
      <h3>{tenttype}</h3>
      <p>{price}</p>
      <button>Book Now</button>
    </div>
  );
}

export default ListofTents;
