import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StudentInformation from "./components/StudentInformation";
import ChallengeOneInstructions from "./components/challenge/ChallengeOneInstructions";

function App() {
  const students = [
    {
      name: "Ben Allen",
      city: "Indianapolis",
      state: "IN",
      age: 25,
      favoriteFoods: ["sloppy joe", "tbone steak", "chicken sandwich"],
    },
    {
      name: "Gina Turner",
      age: 28,
      city: "Boston",
      state: "MA",
      favoriteFoods: ["salad", "BLT", "taco"],
    },
    {
      name: "Barry Kudda",
      age: 73,
      city: "Gulf of",
      state: "NM",
      favoriteFoods: ["minows", "krill", "unsupervised toddlers"],
    },
    {
      name: "Nick Graton",
      age: 33,
      city: "Plattsburgh",
      state: "NY",
      favoriteFoods: ["Pizza", "Reubens", "Ice Cream"],
    },
    {
      name: "Jordan Kaufman",
      age: 29,
      city: "Burlington",
      state: "VT",
      favoriteFoods: ["Burrito", "Breakfast sandwich", "steak"],
    },
    {
      name: "Simon Davis",
      age: 22,
      city: "Milton",
      state: "Vermont",
      favoriteFoods: ["Pizza, Short-ribs, peach cobbler"],
    },
    {
      name: "Tom Brady",
      age: 89,
      city: "Tampa Bay",
      state: "FL",
      favoriteFoods: ["avocado ice-cream", "Atlanta Falcons"],
    },
    {
      name: "Judith Tuyisingize",
      age: 32,
      city: "Winooski",
      state: "VT",
      favoriteFoods: [
        "Rice and Chicken",
        "Pondu and Fufu",
        "Fried Rice and Veggies",
      ],
    },
    {
      name: "Willow Ramsey",
      age: 32,
      city: "Jackson",
      state: "MS",
      favoriteFoods: ["sushi", "fried chicken", "spaghetti"],
    },
    {
      name: "Minion",
      age: 2,
      city: "Iceland",
      state: "Somewhere",
      favoriteFoods: ["banana", "banana", "banana"],
    },
    {
      name: "Isabel Villarroel",
      age: 33,
      city: "Hardwick",
      state: "Vermont",
      favoriteFoods: ["Pizza", "Short-ribs", "Arab food"],
    },
  ];
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <ChallengeOneInstructions />

      {students.map((student, index) => (
        <StudentInformation key={index} student={student} />
      ))}

      {/* <StudentInformation student={students[0]} />
      <StudentInformation student={students[1]} /> */}
      <Footer />
    </div>
  );
}

export default App;
