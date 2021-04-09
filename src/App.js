import './App.css';
import {Top} from "./components/Top/top";
import {AboutUs} from "./components/AboutUs/aboutus";
import {Apply} from "./components/Apply/apply";
import {Faq} from "./components/FAQ/faq";
import {Footer} from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top/>
        <AboutUs/>
        <Apply/>
        <Faq/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
