import AbdoWazery from "../../imgs/abdo-wazery.webp";
import Masry from "../../imgs/masry.webp";
import AliWazery from "../../imgs/ali-wazery.webp";
import AbdElrahman from "../../imgs/abdelrahman.webp";
import MemeWazery from "../../imgs/memewazery.webp";
import Ahmedtito from "../../imgs/ahmed-tito.webp";

export default function Teamwork() {
  return (
    <div id="teamwork" className="teamwork">
      <h2>أسـرة سـفارى</h2>
      <div className="persons wow animate__zoomIn" data-wow-duration="1.5s">
        <div className="person person-one">
          <div className="team-img">
            <img src={AbdoWazery} alt="abdo-wazery" />
          </div>
          <span className="team-info">
            <h4>abdo wazery</h4>
            <h4>مُشرف</h4>
          </span>
          <div className="team-social">
            <a href="/">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="/">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="person person-two">
          <div className="team-img">
            <img src={Masry} alt="abdo-wazery" />
          </div>
          <span className="team-info">
            <h4>Mohammed Elmasry</h4>
            <h4>مُشرف</h4>
          </span>
          <div className="team-social">
            <a href="/">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="/">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="person person-three">
          <div className="team-img">
            <img src={AliWazery} alt="abdo-wazery" />
          </div>
          <span className="team-info">
            <h4>ali wazery</h4>
            <h4>مُدير</h4>
          </span>
          <div className="team-social">
            <a href="/">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="/">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="person person-four">
          <div className="team-img">
            <img src={AbdElrahman} alt="abdo-wazery" />
          </div>
          <span className="team-info">
            <h4>Abd Elrahman Mahmoud</h4>
            <h4>مُشرف</h4>
          </span>
          <div className="team-social">
            <a href="/">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="/">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="person person-five">
          <div className="team-img">
            <img src={MemeWazery} alt="abdo-wazery" />
          </div>
          <span className="team-info">
            <h4>Meme Wazery</h4>
            <h4>مُشرف</h4>
          </span>
          <div className="team-social">
            <a href="/">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="/">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="person person-six">
          <div className="team-img">
            <img src={Ahmedtito} alt="abdo-wazery" />
          </div>
          <span className="team-info">
            <h4>Ahmed tito</h4>
            <h4>مُشرف</h4>
          </span>
          <div className="team-social">
            <a href="/">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="/">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
