import Dr from "../../assets/dribble.png";
import Ig from "../../assets/instagram.png";
import Yt from "../../assets/youtube.png";
import In from "../../assets/linkedin.png";
import "./SocialMedia.css";

export function SocialMedia() {
  return (
    <div className="socialImg">
      <ul>
        <li>
          <img src={Dr} />
        </li>
        <li>
          <img src={Ig} />
        </li>
        <li>
          <img src={Yt} />
        </li>
        <li>
          <img src={In} />
        </li>
      </ul>
    </div>
  );
}
