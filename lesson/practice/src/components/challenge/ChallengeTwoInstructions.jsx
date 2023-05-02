const ChallengeTwoInstructions = (props) => {
  let ulStyle = { textAlign: "left" };

  const movieReviewArray = [
    {
      movieTitle: "Top Gun 2",
      starReview: 5,
      comment: "This movie was really good! I love Tom Cruse!",
    },
    {
      movieTitle: "Batman",
      starReview: 1,
      comment: "Movie was kind of old and dated",
    },

    {
      movieTitle: "Lion King",
      starReview: 5,
      comment: "I know Simba's dad died but movie was pretty good",
    },
  ];
  return (
    <>
      <h2>Challenge 2 Instructions</h2>
      <h4>Folder Setup</h4>
      <hr />
      <ul style={ulStyle}>
        <li>Create a folder MovieReview</li>
        <li>Create a file MovieReview.jsx (Parent)</li>
        <li>Create a file MovieReviewComment.jsx(Child)</li>
      </ul>
      <h4>Tasks</h4>
      <ul style={ulStyle}>
        <li>
          In this file above we have supplied you with the array of data to use
          for the movie review comments. Copy and paste this into the parent
          file.
        </li>
        <li>
          Use a map function in the Parent to pass a single movie review as a
          PROP to the MovieReviewComment
        </li>
        <li>Use Destructuring in the child</li>
        <li>
          Bonus: Based on the number they give make it show that many stars
          (Emoji).
        </li>
      </ul>
    </>
  );
};

export default ChallengeTwoInstructions;
