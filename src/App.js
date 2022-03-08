import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
// import ourdata from './Ourdata.json';
import Home from './Home';
function App() {
// 	const data = [
// 	{
// 		"name" : "Hitesh",
// 		"class":12,
// 		"school":"Vidya peeth"
// 	},

// 	{
// 		"name" : "Manoj",
// 		"class":11,
// 		"school":"Bhagat Singh"
// 	},

// 	{
// 		"name" : "Tunesh",
// 		"class":10,
// 		"school":"Malviy"
// 	},
// ]
  return (
    <div className="App">
      <header className="App-header">
      	
        <Home />
              </header>
    </div>
  );
}

export default App;
