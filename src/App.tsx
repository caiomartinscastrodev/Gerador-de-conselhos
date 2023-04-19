import { ReactElement } from 'react'
import  { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import './style/globals.css';

import Home from './pages/Home';

function App(): ReactElement {
  return(
    <div className="body">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
