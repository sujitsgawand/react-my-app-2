import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";


function App() {
  let todos = [
    {
      sno : 1,
      title : "Wake up early",
      desc : "Your are staying late!"
    },
    {
      sno : 2,
      title : "Do exercise",
      desc : "Need for fitness!"
    },
    {
      sno : 3,
      title : "Analyze Market",
      desc : "Yar paisa!"
    }
  ]
  return (
    <>
    <Header title="My todo list" searchBar={true}/>
    <Todos todos={todos} />
    <Footer/>
   </>
  );
}

export default App;
