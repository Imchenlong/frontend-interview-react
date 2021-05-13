import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import Resume from "./pages/Resume"
function App() {
  return (
    <Router>
      <Header></Header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
