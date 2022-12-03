import { ThemeProvider } from 'styled-components';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import { GlobalStyles, theme } from './GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <AboutUs />
      </>
    </ThemeProvider>
  );
}

export default App;
