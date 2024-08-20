import "../index.css";


//const price = "₹ 1000/-"

const firstTent={
tenttype :"Basic Tent",
imgsrc :  "https://tentinkumbh.com/wp-content/uploads/2024/06/Luxury-side-view-1-2048x1152.jpg"
};

const secondTent = {
  tenttype: "Standard Tent",
  imgsrc:
    "https://tentinkumbh.com/wp-content/uploads/2024/06/Deluxe-bedroom-1-min-1-2048x1134.jpg",
};
const thirdTent = {
  tenttype: "Premium Tent",
  imgsrc:
    "https://tentinkumbh.com/wp-content/uploads/2024/06/Premium-room-4-1-2048x1242.jpg",
};
const fourthTent = {
  tenttype: "Luxury Tent",
  imgsrc:
    "https://tentinkumbh.com/wp-content/uploads/2024/06/Luxury-inside-view-1-2048x1468.jpg",
};

function ListofTents(props){
  return (
    <div className="tentContainer">
      <div className="tentImage">
        <h3>{firstTent.tenttype}</h3>
        <img style={{ marginTop: "10px" }} src={firstTent.imgsrc} alt="Basic Tent" />
        <p style={{ marginTop: "10px" }}>{props.price}</p>
        <button>Book this tent!</button>
      </div>

      <div className="tentImage">
        <h3>{secondTent.tenttype}</h3>
        <img style={{ marginTop: "10px" }} src={secondTent.imgsrc} alt="Basic Tent" />
        <p style={{ marginTop: "10px" }}>{props.price}</p>
        <button>Book this tent!</button>
      </div>

      <div className="tentImage">
        <h3>{thirdTent.tenttype}</h3>
        <img style={{ marginTop: "10px" }} src={thirdTent.imgsrc} alt="Basic Tent" />
        <p style={{ marginTop: "10px" }}>{props.price}</p>
        <button>Book this tent!</button>
      </div>

      <div className="tentImage">
        <h3>{fourthTent.tenttype}</h3>
        <img style={{ marginTop: "10px" }} src={fourthTent.imgsrc} alt="Basic Tent" />
        <p style={{ marginTop: "10px" }}>{props.price}</p>
        <button>Book this tent!</button>
      </div>
    </div>
  );
};

export default ListofTents;