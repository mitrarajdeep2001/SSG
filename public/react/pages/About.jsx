window.About = function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page of our Simple React Application.</p>
      <p>Click the button below to go back to the Home page.</p>
      <button className="navigate-btn" onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}