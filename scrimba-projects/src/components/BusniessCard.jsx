import whatsappIcon from "../assets/whatsapp.svg";
import linkedinIcon from "../assets/linkedin.svg";
import facebookIcon from "../assets/facebook.svg";
import mailIcon from "../assets/mail.svg";
import picture from "../assets/profile.jpg";
import './BusniessCard.css';

export default function BusinessCard() {
    return (
        <div className="business-card">
            <header>
                <h2>Mahdi Khrrousheh</h2>
                <p>Software engineer specialized in building web-based systems supported by AI services.</p>
            </header>
            <main>
                <img src={picture} alt="profile-pic" />
                <h4>Contact Me</h4>
                <ul >
                    <li><img src={linkedinIcon} alt="linkedin" /></li>
                    <li><img src={whatsappIcon} alt="whatsapp" /></li>
                    <li><img src={facebookIcon} alt="facebook" /></li>
                    <li><img src={mailIcon} alt="email" /></li>
                </ul>
            </main>
            <footer>
                <ul >
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>AWS</li>
                </ul>
            </footer>
        </div>
    );
}
