import { ThemeProvider } from 'styled-components';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Options from './components/Options/Options';
import OurFood from './components/OurFood/OurFood';
import Reservations from './components/Reservations/Reservations';
import { GlobalStyles, theme } from './GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <AboutUs />
        <Options />
        <Menu />
        <OurFood />
        <Reservations />
      </>
    </ThemeProvider>
  );
}

export default App;
