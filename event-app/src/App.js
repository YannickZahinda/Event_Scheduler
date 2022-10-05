import "./App.css";
import MainPage from "./MainPage/main.Page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CreateEvent } from "./addEventPath";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/addEventPath" element={<CreateEvent/>}/>
      </Routes>
    </Router>
  );
}

export default App;
