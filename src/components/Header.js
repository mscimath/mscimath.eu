import logo from '../img/logo_dark.png';
import './Header.css';
import { HashLink } from 'react-router-hash-link';

export default function Header(props){
    return (

        <header className="main-header" id ="main-header">
            <div className="top-header" id="top-header">
                <div className="logo">
                    <a href="/home"><img src={logo} alt="home"/></a>
                </div>
                <div className='menu nav_list'>
                    <div className='menu-item smooth-link'>
                        <HashLink smooth to='#subjects' > Subjects </HashLink>
                        <table className="nav_list_drop" id="subjects-drop">
                            <tbody>
                            <tr><th rowSpan="2">Physics</th><td><a href="/physics">School Physics</a></td></tr>
                            <tr><td><a href="/relativity">Relativity</a></td></tr>
                            <tr><th>Mathematics</th><td><a href="/mathematics">School Mathematics Subjects</a></td> </tr>
                            <tr><th rowSpan="4">Computer Science & Programming</th><td><a href="/javascript">JavaScript</a></td></tr>
                            <tr><td><a href="/python">Python</a></td></tr>
                            <tr><td><HashLink to="/cpp">C++</HashLink></td></tr>
                            <tr><td><a href="/data_science">Data Science</a></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="menu-item smooth-link"><a href="#about">About</a></div>
                    <div className="menu-item"><a href="https://mscimath.github.io/JsQuiz/" target="_blank" rel="noreferrer">Quizzes</a></div>
                    <div className="menu-item smooth-link"><HashLink smooth to='#blog' >Blog</HashLink></div>
                    <div className='menu-item smooth-link'><HashLink smooth to='#contact' >Contact</HashLink></div>
                </div>
            </div>
        </header>
    )

}

<nav className="nav">
            <a href="/">Left</a>
            <ul>
                <li>
                    <a href="/javascript">JavaScript</a>
                </li>
            </ul>
        </nav>
