import '../styles/Bio.css'
import '../styles/Bio-mobile.css'
import image from "../images/coding-on-laptop.png"

const Bio = () => {
    return(
        <bio className='bio'>
            <div className='LeftB'>
                <p>BIO</p>
                <img src={image} alt="" className='imgB' />
            </div>
            <div className='RightB'>
                <h1>Jestem niezależnym twórcą dynamicznych stron internetowych.</h1>
                <p className='scrollTo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque urna urna, condimentum eget faucibus lobortis, 
                    eleifend quis metus. Sed nunc ligula, accumsan luctus massa eget, euismod fermentum ligula. Sed in placerat eros, 
                    at ultrices lacus. Etiam leo nibh, eleifend et facilisis nec, pellentesque quis nulla. 
                    Cras odio ex, porttitor in nibh in, hendrerit rutrum augue. Nunc sit amet commodo enim, eget tincidunt odio. 
                    Quisque molestie ultrices felis, nec dignissim sem dapibus quis. Nulla facilisi. 
                    Aliquam id rhoncus risus.</p>
            </div>
        </bio>
    )
}

export default Bio