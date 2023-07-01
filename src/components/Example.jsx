import '../styles/Example.css'
import '../styles/Example-mobile.css'
import image from "../images/laptop.png.png"
import image2 from '../images/phone2.png'

const Examp = () => {
    return (
        <example>
            <div className='RightC'>
                <h1>Projekty stron www</h1>
                <a href='https://649961ea5380a22545cb97f1--subtle-pika-63f0ab.netlify.app/'><img className="laptop"src={image} alt="" /></a>
            </div>
            <div className='LeftC'>
                <a href='https://stellular-pixie-318ab1.netlify.app/'><img className="phone"src={image2} alt="" /></a>
                <p className='LeftC-img'>Stworzyłem responsywną aplikacje umożliwiającą przeliczanie walut i wiele innych aplikacji internetowych.</p>

            </div>
        </example>
    )
}

export default Examp