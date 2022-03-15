import { Routes, Route } from 'react-router-dom';
import Notifications from 'components/Notifications';
import Books from 'pages/books';
const App = () => {
    return (
        <div id="app" className=" bg-gray-50 min-h-screen">
            <Routes>
                <Route path="/" element={<Books />} />
            </Routes>
            <Notifications />
        </div>
    );
};

export default App;
