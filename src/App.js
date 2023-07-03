import Login from './Login';
import Home from './Home';

import Navigation from './Navigation';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigation/>
     <BrowserRouter>
     <Routes>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
