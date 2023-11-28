import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import ImageText from "./ImagesText";
import Resume from "./Resume";
import Services from "./Services";
import Skills from "./Skills";

function HomePage() {
  return (
    <>
      <Home></Home>
      <About></About>
      <Resume></Resume>
      <Services></Services>
      <Skills></Skills>
      <ImageText></ImageText>
      <Contact></Contact>
    </>
  );
}
export default HomePage;
