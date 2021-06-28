import './FixedSideBar.css';
import fixedLine from '../../images/fixed-line.png';
import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';
import github from '../../images/github.png';


const FixedSideBar = () => {
    return (
        <div className="test">
            <img className="fixed-left-line" src={github} alt="" />
            <div className="social-container">
                <img className="fixed-left-line" src={fixedLine} alt="" />
                <div className="fixed-left-sm">
                    <div>
                        <img className="my-4 linkedin" src={linkedin} alt="" />
                    </div>
                    <div>
                        <img className="my-4 twitter" src={twitter} alt="" />
                    </div>
                    <div>
                        <img className="my-4 github" src={github} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <img className="fixed-right-line" src={fixedLine} alt="" />
                <button className="resume-btn">Resume</button>
            </div>
        </div>
    )
}

export default FixedSideBar;