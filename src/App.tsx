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
import { NavigateSectionProvider } from "./Context/NavigateSectionProvider";

function App() {
  const { isDark } = useThemeContext();
  return (
    <main
      className={`absolute top-0 left-0 h-full w-full ${isDark ? "dark" : ""} `}
    >
      <NavigateSectionProvider>
        <Container>
          <Landing />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Container>
      </NavigateSectionProvider>
    </main>
  );
}

export default App;
