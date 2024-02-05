import './App.css';
import './vars.css';
import './media-queries.css';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
  return (
    <>
      <Sidebar />
      <MainContainer />
      <Footer />
    </>
  );
}

export default App;
