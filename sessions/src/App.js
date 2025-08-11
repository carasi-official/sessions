import logo from './logo.svg';
import './App.css';
import Timer from './routes/timer.js';
import Records from './routes/records.js';

function App() {
    return (
        <div className="App">
            <h1>Sessions: Pomodoro Timer</h1>
            <Timer></Timer>
            <Records></Records>
        </div>
    );
}

export default App;
