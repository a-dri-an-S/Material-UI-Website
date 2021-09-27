import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavigationBar from './components/NavigationBar';
import GridLayout from './components/GridLayout';
import { Container } from '@material-ui/core';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavigationBar />
      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
