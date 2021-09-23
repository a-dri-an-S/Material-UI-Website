import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavigationBar from './components/NavigationBar';
import GridLayout from './components/GridLayout';
import { Container } from '@material-ui/core';

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
    </div>
  );
}

export default App;
