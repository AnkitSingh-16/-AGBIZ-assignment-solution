import { Route, Routes,} from 'react-router-dom'
import './App.css';
import Home from './component/Home';
import Career from './pages/Career';
import Courses from './pages/Courses';
import Highlightes from './pages/Highlightes';
import  Navigation  from "./component/Navigation";
import { AbroadVsIndia } from './pages/AbroadVsIndia';
import Error from './pages/Error';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/highlightes" element={<Highlightes />} />
        <Route path="/topcourses" element={<Courses />} />
        <Route path="/careerinindia" element={<Career />} />
        <Route path="/abroadvsindia" element={<AbroadVsIndia />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
