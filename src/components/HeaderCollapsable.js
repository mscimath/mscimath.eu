import React, {useState, useEffect} from 'react';
import logo from '../img/logo_dark.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function HeaderCollapsable(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showArrow, setShowArrow] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleArrow = () => {
        console.log("Scroll event detected");
        // Show up arrow when scrolled halfway through the page 
        /*
        const halfwayPoint = document.documentElement.scrollHeight / 2;
        console.log('ScrooY:', window.scrollY, 'Halfway Point:', halfwayPoint);
        if (window.scrollY > halfwayPoint) {
            setShowArrow(true);
        } else {
            setShowArrow(false);
        }*/
    };

    useEffect(() => {
        console.log("Component mounted, adding scroll event listener");

        window.addEventListener('scroll', handleArrow);
        return () => {
            window.removeEventListener('scroll', handleArrow);
        };
    }, []);

    return (
        <header className={`main-header ${menuOpen ? 'menu-open' : ''}`} id="main-header">
            <div className='top-header' id="top-header">
                <div className="logo">
                    <Link to="/#home">
                        <img src={logo} alt="home"/>
                    </Link>
                </div>
                <div className={`menu nav_list ${menuOpen ? 'menu-open' : ''}`}>
                    <div className="menu-item smooth-link">
                        <HashLink smooth to="#subjects">
                            Subjects
                        </HashLink>
                        <table className="nav_list_drop" id="subjects-drop">
                        <tbody>
                            <tr><th rowSpan="3">Physics</th><td><Link to="/physics">General Physics</Link></td></tr>
                            <tr><td><Link to="/relativity">Relativity</Link></td></tr>
                            <tr><td><Link to ="physics_particle">Particles</Link></td></tr>
                            <tr><th>Mathematics</th><td><Link to="/mathematics">General Mathematics</Link></td> </tr>
                            <tr><th rowSpan="4">Computer Science & Programming</th><td><Link to="/javascript">JavaScript</Link></td></tr>
                            <tr><td><Link to="/python">Python</Link></td></tr>
                            <tr><td><HashLink to="/cpp">C++</HashLink></td></tr>
                            <tr><td><Link to="/data_science">Data Science</Link></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="menu-item"><a href="https://mscimath.github.io/JsQuiz/" target="_blank" rel="noreferrer">Quizzes</a></div>
                    <div className="menu-item smooth-link"><HashLink smooth to='#blog' >Blog</HashLink></div>
                    <div className='menu-item smooth-link'><HashLink smooth to='#contact' >Contact</HashLink></div>
                </div>
                <button className={`menu-toggle ${menuOpen ? 'cross' : ''}`} onClick={toggleMenu}>
                    <div id='lineOne'></div>
                    <div id='lineTwo'></div>
                    <div id='lineThree'></div>
                </button>
            </div>
            {/* Consitionally render the arrow */}
            {showArrow && (
                        <div className='menu-item smooth-link up'><HashLink smooth to='#home' >↑</HashLink></div>
                )}
        </header>
    )
}
