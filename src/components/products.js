import one from "../assets/images/img2.jpg"
import two from "../assets/images/img3.jpg"
import three from "../assets/images/download.jpg"
function Products()
{
  return(
    <div className="product">
      <div className="box1">
        <img src={one} alt="one"></img>
        <p>"Perfume is the key to our memories, unlocking moments with every scent we breathe."</p>
      </div>
      <div className="box2">
        <img src={two} alt="two"></img>
        <p>"In every drop of perfume lies a dream, a promise of elegance and allure."</p>
      </div>
      <div className="box3">
        <img src={three} alt="three"></img>
        <p>"A scent is not seen, but it speaks; it captures hearts, leaving trails of mystery."
        </p>
      </div>
    </div>
  )
}

export default Products