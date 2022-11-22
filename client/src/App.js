import React from "react";
import './App.css';
import { Route, Routes} from "react-router-dom"

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
  <Routes>
    <Route path="/" element={<h1>{data}</h1>}/>
    <Route path="/login" element={<h1>Login</h1>}/>
  </Routes>
  )
}


/** 
  (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "Loading..." : data}
        </p>
        
      </header>
    </div>
  );
  **/
export default App;
