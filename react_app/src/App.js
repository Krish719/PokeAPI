import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import Login from './Login.js'
import Profile from './Pokedex.js'
import {RequireToken} from './Authentication.js'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/profile"
          element={
            <RequireToken>
              <Profile />
            </RequireToken>
          }
        />
      </Routes>
    
    </div>
  );
}
export default App;