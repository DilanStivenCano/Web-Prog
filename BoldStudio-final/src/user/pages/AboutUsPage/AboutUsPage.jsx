import { SocialMedia } from "../../components";
import './AboutUsPage.css'
import AboutTitle from '../../assets/About.png'

export function AboutUsPage() {
  return (
    <div className="bodyAbout">
      <img src={AboutTitle} className="titleAbout" />
      <div className="aboutText">
        <p>Bold Studio is a leading web development company, <br />
        specializing in the creation of websites with focus on both<br />
        Front-end and Back-end development. <br />
        <br />
        Our specialty is designing attractive and functional user <br />
        interfaces, using the latest design trends, while creating a <br />
        robust and efficient technical infrastructure. </p>
      </div>
      <div className="socialAbout">
        <SocialMedia />
      </div>
    </div>
  );
}
