import {
  Container,
  Landing,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
} from "./components";
import { useThemeContext } from "./Hooks";

function App() {
  const { isDark } = useThemeContext();
  return (
    <main
      className={`absolute top-0 left-0 h-full w-full ${isDark ? "dark" : ""} `}
    >
      <Container>
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </main>
  );
}

export default App;
