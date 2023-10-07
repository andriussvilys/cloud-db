import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [response, setResponse] = useState(null)

  useEffect(() => {

    fetch("http://localhost:5000/menus")
    .then(res => {
      console.log("guests RES")
      console.log(res)
      return res.text()
    })
    .then(res => {
      setResponse(res)
    })
  }, [])

  return (
    <div className="App">
      {response}
    </div>
  );
}

export default App;
