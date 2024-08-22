import "./index.css";
import Header from "./components/Header";
import ListofTents from "./components/ListofTents";

function App() {

  function getTentid(id){
    console.log("Tent Id: ",id);
  }
  
  return (
    <div>
      <Header />
      <div className="tentContainer">
        <ListofTents
          imgsrc="https://tentinkumbh.com/wp-content/uploads/2024/06/Luxury-side-view-1-2048x1152.jpg"
          tenttype="Basic Tent"
          price="₹ 1100/-"
          id={1}
          getTentid={getTentid}
        />
        <ListofTents
          imgsrc="https://tentinkumbh.com/wp-content/uploads/2024/06/Premium-room-4-1-2048x1242.jpg"
          tenttype="Luxury Tent"
          price="₹ 2500/-"
          id={2}
          getTentid={getTentid}
        />
        <ListofTents
          imgsrc="https://tentinkumbh.com/wp-content/uploads/2024/06/Luxury-inside-view-1-2048x1468.jpg"
          tenttype="Premium Tent 1"
          price="₹ 5000/-"
          id={3}
          getTentid={getTentid}
        />
        <ListofTents
          imgsrc="https://tentinkumbh.com/wp-content/uploads/2024/06/Luxury-inside-view-1-2048x1468.jpg"
          tenttype="Premium Tent 2"
          price="₹ 5000/-"
          id={4}
          getTentid={getTentid}
        />
      </div>
    </div>
  );
}

export default App;
