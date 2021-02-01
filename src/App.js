import { AppWrapper } from "./components/styles";
import Home from "./components/Home";
import InstructorProfile from "./components/InstructorProfile";
import NotFound from "./components/NotFound";
import { useState } from "react";
import { Route, Switch} from "react-router";

const App = ({ instructors }) => {
  const [currentPage, setCurrentPage] = useState("/");
  const [_instructors, setInstrecutors] = useState(instructors);

  const homemadeRouter = () => {
    <AppWrapper>
      <Switch>
      <Route path="/">
          <Home instructors={instructors} goTo={setCurrentPage} />;
          </Route>

          <Route path="/:instructorSlug">
          <InstructorProfile
          instructors={_instructors}
          instructorSlug={instructorSlug}
          goTo={setCurrentPage}
          />
          </Route>

          <Route path="/">
          <NotFound setCurrentPage={setCurrentPage} />;
          </Route>

      </Switch>
    </AppWrapper>
  }
    // switch (currentPage) {
    //   case "/":
    //     return 
    //       <Home instructors={instructors} goTo={setCurrentPage} />;

//       case "/instructors/hamza":
//         return (
//           <Route path="/:instructorsslug">
//             <InstructorProfile
//             instructors={instructors}
//             instructorSlug="hamza"
//             goTo={setCurrentPage}
//           />
//           </Route>
//         );

//       case "/instructors/laila":
//         return (
//           <InstructorProfile
//             instructors={instructors}
//             instructorSlug="laila"
//             goTo={setCurrentPage}
//           />
//         );

//       case "/instructors/hasan":
//         return ( 
//         <Route path="/:instructorsslug">
//           <InstructorProfile
//             instructors={instructors}
//             instructorSlug="hasan"
//             goTo={setCurrentPage}
//           />
//           </Route>
//         );

//       case "/404":
//         return <NotFound goTo={setCurrentPage} />;

//       default:
//         setCurrentPage("/404");
//         break;
//     }
//   };

//    return 
//    <AppWrapper>{homemadeRouter()}</AppWrapper>;
 };

export default App;
