import { ThemeProvider } from 'styled-components';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Options from './components/Options/Options';
import { GlobalStyles, theme } from './GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <AboutUs />
        <Options />
      </>
    </ThemeProvider>
  );
}

export default App;
