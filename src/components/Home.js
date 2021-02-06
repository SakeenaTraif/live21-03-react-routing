import InstructorTag from "./InstructorTag";
import { useParams, Redirect } from "react-router-dom";

const Home = ({ instructors }) => {
  const { slug } = useParams();
  
  if (slug) <Redirect exact to="/404" />;

    return (
      <>
        <h2>When in doubt, ask for help!</h2>
        {instructors.map((instructor) => (
          <InstructorTag instructor={instructor} key={instructor.slug} />
        ))}
      </>
    );
};

export default Home;