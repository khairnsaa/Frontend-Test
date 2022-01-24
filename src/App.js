import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';

function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path='/' element={<Register/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/news' element={<News/>} />
                    <Route path='/news/:Title' element={<NewsDetail />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
