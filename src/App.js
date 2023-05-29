import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import Blog from './components/Blog';
import Store from './components/Store';
import OurStory from './components/OurStory';
import Carts from './components/Carts';
import LoginPages from './components/LoginPages';

function App() {
  return (
      <Router>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Main/>}/>
              <Route exact path="/Blog" element={<Blog/>}/>
              <Route exact path="/Store" element={<Store/>}/>
              <Route exact path="/OurStory" element={<OurStory/>}/>
              <Route exact path="/Cart" element={<Carts/>}/>
              <Route exact path='/Login' element={<LoginPages/>}/>
              <Route path="/*" element={<DefaultLayout />}/>
            </Routes>
          </div>
      </Router>

  );
}

function DefaultLayout() {
  return (
    <>
      <div className="Content">
        <Routes>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

function NotFound() {
  return (
    <div className="App">
      <h1 class="pt-5 pb-5">404 pages NotFound</h1>
    </div>    
  );
}
export default App;
