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
                Związek pomiędzy wartością kąta  θ  a promieniem okręgu i długością łuku wyraża się wzorem: <br/>
                θ=s/r<br/>
                Wartość wektora prędkości kątowej (ang. angular velocity), oznaczona jako  ω
 , jest szybkością zmian kąta  θ
 , gdy cząstka porusza się po łuku. Chwilowa wartość prędkości kątowej (ang. instantaneous angular velocity) jest definiowana jako granica, przy  Δt→0
 , średniej prędkości kątowej  ω–=Δθ/Δt
 <br/>
 Jednostką prędkości kątowej jest radian na sekundę (rad/s). Prędkość kątową możemy w prosty sposób powiązać z częstotliwością  f
  (zwaną też prędkością obrotową), wyrażaną w obrotach na sekundę (obr/s). Aby wyznaczyć prędkość kątową, musimy pomnożyć liczbę obrotów na sekundę przez  2π
 , ponieważ jeden pełny obrót oznacza przemieszczenie kątowe równe  2π
  radianów:

ω=2πf.<br/> 

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