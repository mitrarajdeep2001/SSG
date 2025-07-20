const { useState, useEffect } = React;

const App = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  let Component;
  if (path === '/react/') Component = Home;
  else if (path === '/react/about') Component = About;
  else Component = () => <h1>404 Not Found</h1>;

  return <Component />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
