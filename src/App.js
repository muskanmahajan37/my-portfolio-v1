import './App.css';

import MyNavbar from './components/navbar/MyNavBar';
import Header from './components/content/Header';
import AboutMySelf from './components/content/AboutMySelf';
import WorkedExperience from './components/content/WorkedExperience';

function App() {
  return (
    <div className="bg-color">
      <MyNavbar />
      <Header />
      <AboutMySelf />
      <WorkedExperience />
    </div>
  );
}

export default App;
