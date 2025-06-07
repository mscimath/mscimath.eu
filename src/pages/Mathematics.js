import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Mathematics.css';
import Combinatorics from './mathematics_canvas/Combinatorics';
import Trigonometry from '../components/mathematics/Trigonometry';

export default function Mathematics(){
    const navigate = useNavigate();

    const handleScrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', });
        }
    }

    return (
        <section>
            <div className='page-title'>
            <h2>M<span>athematics</span></h2>
            <h3>E<span>xamples</span> & P<span>roblems with</span> S<span>olutions</span></h3>
            </div>
            <div className='learning-container'>
                <div className='learning-container-left'>
                    <div className='subject-menu'>
                        <button className='learning-menu-button'>
                            <a href='#/mathematics#combinatorics' onClick={() => handleScrollTo('combinatorics')}>Combinatorics</a>
                        </button>
                        <button className='learning-menu-button'>
                            <a href='#/mathematics#trigonometry' onClick={() => handleScrollTo('trigonometry')}>Trigonometry</a>
                        </button>                      
                        <button className='learning-menu-button'>
                            <a href='#/mathematics#combinatorics' onClick={() => handleScrollTo('combinatorics')}>Combinatorics</a>
                        </button>
                        <button className='learning-menu-button'>
                            <a href='#/mathematics#trigonometry' onClick={() => handleScrollTo('trigonometry')}>Trigonometry</a>
                        </button>                      
                        <button className='learning-menu-button'>
                            <a href='#/mathematics#combinatorics' onClick={() => handleScrollTo('combinatorics')}>Combinatorics</a>
                        </button>
                        <button className='learning-menu-button'>
                            <a href='#/mathematics#trigonometry' onClick={() => handleScrollTo('trigonometry')}>Trigonometry</a>
                        </button>                      
                        <button className='learning-menu-button'>
                            <a href='#/mathematics#combinatorics' onClick={() => handleScrollTo('combinatorics')}>Combinatorics</a>
                        </button>
                        <button className='learning-menu-button'>
                            <a href='#/mathematics#trigonometry' onClick={() => handleScrollTo('trigonometry')}>Trigonometry</a>
                        </button>                      
                        <button className='learning-menu-button'>
                            <a href='#/mathematics#combinatorics' onClick={() => handleScrollTo('combinatorics')}>Combinatorics</a>
                        </button>
                        <button className='learning-menu-button'>
                            <a href='#/mathematics#trigonometry' onClick={() => handleScrollTo('trigonometry')}>Trigonometry</a>
                        </button>                      
                        <button className='learning-menu-button'>
                            <a href='#/mathematics#combinatorics' onClick={() => handleScrollTo('combinatorics')}>Combinatorics</a>
                        </button>
                        <button className='learning-menu-button'>
                            <a href='#/mathematics#trigonometry' onClick={() => handleScrollTo('trigonometry')}>Trigonometry</a>
                        </button>                  
                    </div>
                </div>
                <div className='learning-container-right'>
                    <div id='combinatorics' className='subject-container'>
                        <h3 className='subject-title'>
                            Combinatorics 
                        </h3>
                        <Combinatorics navigate={navigate}/>
                    </div>
                    <div id='trigonometry' className='subject-container'>
                        <h3 className='subject-title'>
                            Trigonometry 
                        </h3>
                        <Trigonometry navigate={navigate}/>
                    </div>
                </div>
            </div>
        </section>
    )
}