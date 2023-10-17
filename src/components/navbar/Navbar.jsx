import { Link} from "react-router-dom";
import { BiMoviePlay } from 'react-icons/bi'

import './Navbar.css';

const Navbar = () => {

    return (
        <nav id='navbar'>
            <h2>

                <Link to="/">
                    <BiMoviePlay />Series Hub
                </Link>

            </h2>

            <button type='submit'>
                Login
            </button>

        </nav>
    )
}

export default Navbar