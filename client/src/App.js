
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { MainRoutes } from './Router/MainRoutes';
// import { ProjectContextProvider } from './context/ProjectContext';

function App() {



  return (
      // <ProjectContextProvider>
        <Router>
        <MainRoutes />
      </Router>
      // </ProjectContextProvider>
      
  );
}

export default App;
