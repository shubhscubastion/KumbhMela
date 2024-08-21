import "./index.css";
import Header from "./components/Header";
import ListofTents from "./components/ListofTents";

function App() {
  return (
    <div>
      <Header />
      <div className="tentContainer">
        <ListofTents
          imgsrc="https://tentinkumbh.com/wp-content/uploads/2024/06/Luxury-side-view-1-2048x1152.jpg"
          tenttype="Basic Tent"
          price="₹ 1100/-"
        />
        <ListofTents
          imgsrc="https://tentinkumbh.com/wp-content/uploads/2024/06/Premium-room-4-1-2048x1242.jpg"
          tenttype="Luxury Tent"
          price="₹ 2500/-"
        />
        <ListofTents
          imgsrc="https://tentinkumbh.com/wp-content/uploads/2024/06/Luxury-inside-view-1-2048x1468.jpg"
          tenttype="Premium Tent"
          price="₹ 5000/-"
        />
      </div>
    </div>
  );
}

export default App;
