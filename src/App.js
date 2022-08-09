import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './page/Header/Header';
import { Home } from './page/Home/Home';
import { Login } from './page/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom'

// import { Provider } from 'react-redux';
// import store from './redux/store';

function App() {

  return (
    <>
      <ToastContainer position="top-right"
        autoClose={4000}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="bg-light">
        <Header />
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
