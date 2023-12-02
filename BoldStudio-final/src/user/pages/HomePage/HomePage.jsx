import './HomePageStyle.css'
import { SocialMedia } from "../../components";
import Flor from '../../assets/ImgHome.png'
import Logo from '../../assets/LogoBold.png'


export function HomePage() {
  return (
    <div>
        <div className='BodyHome'>
          <div className='encabezado'>
            <img src={Logo} className='logoHome'/>
            <div className='Container'>
              <h1 className='ComillasHome'>"</h1>
              <h3 className='slogan'> We're passionate about design, <br></br>code and everything in between.</h3>
            </div>
          </div>
          <div className='assetHome'>
            <img src={Flor} />
          </div>
        </div>
        <div className="social">
          <SocialMedia />
        </div>
    </div>
  );
}