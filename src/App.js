
import './App.css';
import Nav from './component/Nav';
import About from './component/About';

import Contact from './component/Contact';
import Footer from './component/Footer';
import proj1 from "./component/image/proj1.jpg"
import proj2 from "./component/image/proj2.jpg"
import proj3 from "./component/image/proj3.jpg"
import proj4 from "./component/image/proj4.jpg"
import ProjectList from './component/ProjectList';


function App() {
  const name = "Jhon Doe";
  console.log(name)
  const projects = [{name :"Project1" , pic : proj1} , {name:"project2" , pic:proj2} , {name:"project3" , pic :proj3} , {name:"project4" , pic:proj4}];
  return (
    <div className="App">
      <About name = {name}/>
      <Nav name = {name}/>
      <ProjectList projects ={projects}/>
      <Contact/>
      <Footer/>
    
     
    </div>
  );
}

export default App;
