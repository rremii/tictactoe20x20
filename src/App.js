import logo from './logo.svg';
import './App.sass';
import {Route, Routes, NavLink} from "react-router-dom";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import FiveInARow from "./components/FiveInARow/FiveInARow";
import MainPage from "./components/MainPage/MainPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/TicTacToe' element={<TicTacToe/>}/>
                <Route path='/FiveInARow' element={<FiveInARow/>}/>
            </Routes>
        </div>
    );
}

export default App;
