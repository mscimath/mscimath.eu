import './Canvas.css';
import './Physics.css';
import WaveAnimation from './physics_canvas/WaveAnimation';
import SliderImage from '../components/SliderImage';
import UnitConverter from '../components/UnitConverter';

export default function Physics(){
    

    return (
        <>
        <section>
            <h2 className='section-title'>Physics</h2>
            <div className='container-physics-top'>
                <div className='physics-top-left'></div>
                <div className='physics-top-right'>
                    <UnitConverter />
                </div>
            </div>
            <WaveAnimation/>

            <div className='section-paragraph'>
            <p>
                <h4>Angular speed</h4>
                The relation between value of the angle θ between the radius of the circle and the length of the arc is expressed by the formula: <br/>
                θ=s/r<br/>
                The value of the angular velocity, denoted as ω, is the rate of change of angle θ as
                the particle moves along the arc. The instantaneous angular velocity value is defined
                as the limit, at Δt→0, of the avarage angular velocity ω–=Δθ/Δt<br/>
                The unit of angular velocity is the radian per second (rad/s). 
                We can easily relate angular velocity to frequency f (also known as rotational speed), 
                expressed in revolutions per second (rpm/s). To determine the angular velocity, 
                we need to multiply the number of revolutions per second by 2π, because one complete 
                revolution represents an angular displacement of 2π radians: ω=2πf.<br/> 

            </p>
            </div>
            <div className='content-container'>
                
                <div className='content-text'>

                </div>
            </div>
        </section>
        
        </>
    )
}