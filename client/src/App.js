
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { MainRoutes } from './Router/MainRoutes';

function App() {



  return (

      <Router>
      <MainRoutes />
      </Router>

  );
}

export default App;
