import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Techpage from './Components/Techpage';
import Aboutmepage from './Components/Aboutmepage';
import Projectspage from './Components/Projectspage';
import Contactpage from './Components/Contactpage';
import Achievementpage from './Components/Achievementpage';

function App() {
  return (
    <div className="container-fluid" style={{padding:"0"}}>
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <div className="container-fluid homepage">
        <Homepage></Homepage>
      </div>
      <div className="container-fluid aboutme">
        <Aboutmepage></Aboutmepage>
      </div>
      <div className="container-fluid techpage">
        <Techpage></Techpage>
      </div>
      <div className="container-fluid projects">
        <Projectspage></Projectspage>
      </div>
      <div className="container-fluid achievements">
        <Achievementpage></Achievementpage>
      </div>
      <div className="container-fluid contacts">
        <Contactpage></Contactpage>
      </div>
    </div>
  );
}


export default App;
