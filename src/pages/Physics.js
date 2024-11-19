import './Canvas.css';
import Atom from './physics_canvas/Atom';

export default function Physics(){
    

    return (
        <section>
            <h2 className='section-title'>Physics</h2>
            <div className='section-paragraph'>
                <h4>Rotational Motion</h4>
                <p>
                    Teaching purpose
                    In this section you will learn:
                    describe the physical meaning of rotational variables as applied to rotation around a fixed axis;
                    explain how angular velocity is related to tangential velocity;
                    calculate, knowing the time dependence of the angular position, the instantaneous angular velocity at any time;
                    determine the angular velocity and angular acceleration of a rotating body;
                    calculate the average angular acceleration when the angular velocity changes;
                    calculate instantaneous angular acceleration, knowing the dependence of angular velocity on time.
                    So far, we have dealt mainly with the analysis of progressive motion. The variables describing translational motion are: displacement, velocity and acceleration. We now extend our description of motion to rotation about a fixed axis. We will see that rotation is described by a set of related variables, similar to those we used to describe translational motion.
                </p>
            </div>
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
                <div className='canvas-container'>
                    <Atom/>
                </div>
                <div className='content-text'>

                </div>
            </div>
        </section>
    )
}