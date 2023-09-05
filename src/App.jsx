import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Techpage from './Components/Techpage';

function App() {
  return (
    <div className="container-fluid" style={{padding:"0"}}>
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <div className="container-fluid homepage">
        <Homepage></Homepage>
      </div>
      <div className="container-fluid techpage">
        <Techpage></Techpage>
      </div>
    </div>
  );
}


export default App;
