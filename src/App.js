//react
import { Redirect, Route, Switch } from "react-router";
//stayle
import { AppWrapper } from "./components/styles";
//components
import Home from "./components/Home";
import InstructorProfile from "./components/InstructorProfile";
import NotFound from "./components/NotFound";

const App = ({ instructors }) => {
  return (
    <AppWrapper>

      <Switch>
      <Route path="/instructors/:instructorSlug">
          <InstructorProfile instructors={instructors} />
        </Route>
      <Route exact path="/">
          <Home instructors={instructors} />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
      
    </AppWrapper>
  );
};

export default App;