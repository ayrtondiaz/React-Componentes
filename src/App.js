import './App.css';
import NavBar from './components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import itemListContainer from './components/itemlistContainers';


function App() {
  return (
    <div classsName="App">   
        <NavBar></NavBar>
        <h1>HOLA SOY UN COMPONENTE</h1>
        <itemListContainer></itemListContainer>

    </div>
  );
}

export default App;
