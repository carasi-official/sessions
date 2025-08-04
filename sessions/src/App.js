import logo from './logo.svg';
import './App.css';
import Timer from './routes/timer.js';

function App() {
    return (
        <div className="App">
            <h1>Sessions: Pomodoro Timer</h1>
            <Timer></Timer>
        </div>
    );
}

export default App;
