import Pages from './Pages/Pages';
import InfoPage from './Pages/infoPage';
import Searched from './Pages/Searched';
import './index.css'

import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Pages/>}/>
        <Route path='/infoPage/:name' element={<InfoPage/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
      </Routes>
    </div>
  );
}

export default App;
