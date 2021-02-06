import { Button, ButtonsWrapper } from "./styles";
import { useParams, Redirect, Link } from "react-router-dom";

const InstructorProfile = ({ instructors }) => {
  const { instructorSlug } = useParams();
  const instructor = instructors.find(
    (instructor) => instructor.slug === instructorSlug
  );

  const goToGitHub = () =>
    window.open(`https://github.com/${instructor.github}`);

  if (!instructor) return <Redirect exact to="/404" />;
    return (
      <>
        <h1>{instructor.emoji}</h1>
        <h2>{instructor.name}</h2>
        <p>{instructor.description}</p>

        <ButtonsWrapper>
          <Link to="/">
            <Button color="tomato" textColor="white">
              Go back home
            </Button>
          </Link>
          <Button onClick={goToGitHub}>Go to GitHub</Button>
        </ButtonsWrapper>
      </>
    );
};

export default InstructorProfile;