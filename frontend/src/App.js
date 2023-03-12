import './App.css';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPage from "./components/Blog/BlogPage";
import BlogCreatePage from "./components/Blog/BlogCreatePage";

function App() {
    return (
        <section className="App">
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/blogs/:id" element={<BlogPage/>}/>
                <Route path="/blogs/create" element={<BlogCreatePage/>}/>
                <Route path="/blogs/update/:id" element={<BlogCreatePage/>}/>
            </Routes>
        </section>
    );
}

export default App;
