window.Home = function Home() {
  function navigate(path) {
        window.history.pushState({}, '', path);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
  return (
    <div>
      <h1>Hello React with JSX, served by Express!</h1>
      <p>This is JSX rendered in-browser via Babel.</p>
      <h1>Welcome to the Home Page</h1>
      <p>This is a Simple React Application served by Express.</p>
      <p>Click the button below to see the counter in action!</p>
      <Counter />
      <button className="navigate-btn" onClick={() => navigate('/react/about')}>Go to About</button>
    </div>
  );
}