import { HeaderTitle, FilterWork, SocialMedia } from "../../components";
import './WorkPage.css'
import Dr from "../../assets/dribble.png";
import Ig from "../../assets/instagram.png";
import Yt from "../../assets/youtube.png";
import In from "../../assets/linkedin.png";

export function WorkPage() {
  return (
    <div className="workBody">
      <HeaderTitle title="OUR WORK" />
      <FilterWork />
      <div className="socialWork">
          <img src={Dr} />
          <img src={Ig} />
          <img src={Yt} />
          <img src={In} />
      </div>
    </div>
  );
}
