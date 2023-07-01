import { Link } from 'react-scroll'
import '../styles/Firstpage.css'
import '../styles/Firstpage-mobile.css'
import image from "../images/bg.png"
const FirstPage = () => {
    return (
        <section className="First">
            <div className="Left">
                <p className='Title'>PORTFOLIO</p>
                <div className='Me'>
                    <h1 className='Name'>Marcin </h1>
                    <h1 className='Surname'>Wiśniewski</h1>

                </div>
                <div className='down'>
                <p className='ocupation'>FRONTEND DEVELOPER</p>
                <Link            
            activeClass="active" 
            to="feedback" 
            spy={true} 
            smooth={true} 
            offset={60} 
            duration={1000}>
                <p className='contact'>NAPISZ DO MNIE</p>
            </Link>
                </div>
            </div>
            <div className='Right'>
                <img className="Right--img"src={image} alt="" />
            </div>
        </section>
    )
}

export default FirstPage