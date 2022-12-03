import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import { DivTest, GlobalStyles, theme } from './GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <DivTest />
      </>
    </ThemeProvider>
  );
}

export default App;
