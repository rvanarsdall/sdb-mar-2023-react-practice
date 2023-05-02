import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PresidentVoting from "./components/Presidents/PresidentVoting";
import ChallengeTwoInstructions from "./components/challenge/ChallengeTwoInstructions";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <PresidentVoting />
      <ChallengeTwoInstructions />
      <Footer />
    </div>
  );
}

export default App;
