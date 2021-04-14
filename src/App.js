import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Error, Contact, Blog, Menu } from "./pages";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import SingleFood from "./pages/SingleFood";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route path="/foods/:id" children={<SingleFood />}></Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
