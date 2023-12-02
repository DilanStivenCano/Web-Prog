import { HeaderTitle, ContactItem } from "../../components";
import './ContactUsPage.css'
import Dr from "../../assets/dribbleB.png";
import Ig from "../../assets/instagramB.png";
import Yt from "../../assets/youtubeB.png";
import In from "../../assets/linkedinB.png";
import Asset from "../../assets/servicesAsset.png";

const contactData = [
  {
    title: "MAIL",
    info: "info@boldstudio.com",
  },
  {
    title: "GITHUB",
    info: "@boldstudio",
  },
  {
    title: "TWITTER",
    info: "@boldstudio",
  },
];

export function ContactUsPage() {
  return (
    <div className="contactBody">
      <div>
        <HeaderTitle title="CONTACT US" />
        <div className="contactContainer">
          {contactData.map((value, index) => (
            <ContactItem
              key={index}
              title={value.title}
              info={value.info}
            />
          ))}
        </div>
        <div className="socialBig">
          <img src={Dr} />
          <img src={Ig} />
          <img src={Yt} />
          <img src={In} />
        </div>
      </div>
      <div className="assetImg">
        <img src={Asset} />
      </div>
    </div>
  );
}
