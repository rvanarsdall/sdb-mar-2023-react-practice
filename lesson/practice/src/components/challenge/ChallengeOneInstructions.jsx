function ChallengeOneInstructions() {
  let ulStyle = { listStyle: "none" };
  return (
    <>
      <h2>Create the following</h2>
      <ul style={ulStyle}>
        <li>Create a new component called AboutMe.jsx</li>
        <li>Create an h1 tag with your full name</li>
        <li>
          create a p tag with where you grew up (city/state) - use variables for
          city and state
        </li>
        <li>Create an unordered list with the last 3 places you visited</li>
        <li>Give each of your places a different color of text.</li>
        <li>Use inline styling</li>
      </ul>
    </>
  );
}

export default ChallengeOneInstructions;
