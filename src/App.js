import logo from './logo.svg';
import './App.css';
import Create from './component/Create';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Read from './component/Read';
import Update from './component/Update';

function App() {
  return (
   
    // <div className="App">
    // <StockHeader/>
    // <StockLeftBar/>
    // <StockList/>
    // </div>
   
    <Router>
      
       <div className="main">
       <h2 className="main-header">Welcome to Stock Application</h2>
      <Routes>
      
      {/* <h2 className="main-header">React Crud Operations</h2>
      <div> */} */}
      <Route exact path='/create' element={<Create/>} />
        {/* </div> */}
        {/* <div style={{ marginTop: 20 }}> */}
          <Route exact path='/' element={<Read/>} />
          <Route exact path='/update' element={<Update/>} />
        {/* </div> */}
        
   
    </Routes>
    </div> 
  </Router>
  );
}

export default App;
