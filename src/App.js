import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Navbar from "./components/navbar";
import {Component} from "react";
import CounterPage from "./pages/CounterPage";
import {Link, Route, Routes, Navigate} from "react-router-dom";
import Like from "./components/like";
import Movies from "./components/movies";
import Customers from "./pages/customers";
import MovieForm from "./pages/movieForm";
import Rentals from "./pages/rentals";
import NotFound from "./pages/notFound";
import LoginForm from "./components/loginForm";

class App extends Component {


    render() {
        return (
            <>
                <Navbar>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/counters" className="nav-link">Counters</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/movies" className="nav-link">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/customers" className="nav-link">Customers</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/movie-form" className="nav-link">Movie form</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/rentals" className="nav-link">Rentals</Link>
                    </li>
                </Navbar>

                <main className="container">
                    <Routes>
                        <Route path="/login" element={<LoginForm/>}/>
                        <Route path="/counters" element={<CounterPage/>}/>
                        <Route path="/movies" element={<Movies/>} />
                        <Route path="/customers" element={<Customers/>}/>
                        <Route path="/movie-form/:id" element={<MovieForm/>}/>
                        <Route path="/rentals" element={<Rentals/>}/>
                        <Route path="/not-found" element={<NotFound/>}/>
                        <Route path="/" element={<Navigate replace to="movies"/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </main>
            </>
        )
    }
}

export default App;
