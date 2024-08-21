import "./index.css";
import Header from "./components/Header";
import ListofTents from "./components/ListofTents";

function App() {
  return (
    <div>
      <Header />

      <ListofTents price="₹ 1100/-" />
    </div>
  );
}

export default App;
