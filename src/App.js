import Header from './components/header/header';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import Presentation from './components/presentation/presentation';
import CV from './components/cv/cv';
import Project from './components/project/project';
import Contact from './components/contact/contact';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Presentation />
      <CV />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
