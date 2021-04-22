
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";


import { AuthContextProvider } from './context/AuthContextProvider';
import { AppRouter } from './Router/AppRouter';
import { ProjectContextProvider } from './context/ProjectContextProvider';
import { TaskContextProvider } from './context/TaskContextProvider';

function App() {



  return (
      <AuthContextProvider>
        <ProjectContextProvider>
          <TaskContextProvider>
            <AppRouter />
          </TaskContextProvider>      
        </ProjectContextProvider>
      </AuthContextProvider>
      
  );
}

export default App;
