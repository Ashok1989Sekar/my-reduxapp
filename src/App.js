import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Logout from './pages/Logout';
function App() {
  return (
   <div>
     <BrowserRouter>
          <Routes>
             <Route  path="/" element={<Login/>}/>
            <Route path="/logout" element={<Logout />} />
          </Routes>
     </BrowserRouter>
        
   </div>
  );
}

export default App;
