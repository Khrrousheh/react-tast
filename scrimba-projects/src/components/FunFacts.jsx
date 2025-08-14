import reactLogo from '../assets/react.svg'
import "./FunFacts.css"

function FunfactsReact() {
    return (
        <div className='card'>
            <img src={reactLogo} alt="react logo" width="40px" />
            <img src={reactLogo} alt="bacground card react logo" className='shadow-image'/>
            <h3>Those are fun facts about ReactJS:</h3>
            <ul>
                <li><strong>Build UIs with pieces</strong> – You make small, reusable “components” (like Lego blocks) </li>
                <li><strong>Fast updates</strong> – React updates only what changes, so it feels quick.</li>
                <li><strong>Works everywhere</strong> – You can use React as native code.</li>
            </ul>
        </div>
    )
}

export default FunfactsReact;
