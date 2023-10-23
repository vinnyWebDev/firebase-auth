import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Blog from "./pages/Blog"
import Protected from './components/Protected';
import Navigation from "./components/Navigation/Navigation"

function App() {
  return (
    <div>
      {/* defigning the routes used in our app*/}
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
