import { useNavigate } from 'react-router-dom';
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
            <div className='subject-menu'>
                <a href='#combinatorics' onClick={() => handleScrollTo('combinatorics')}>Combinatorics</a>
                <a href='#trigonometry' onClick={() => handleScrollTo('trigonometry')}>Trigonometry</a>

            </div>
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
            
        </section>
    )
}