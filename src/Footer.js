import './Footer.css';
import GitHub from './GitHub_Logo_White.png';
import LinkedIn from './LinkedIn-Blue-14@2x.png';

function Footer() {
  return (
    <div className="Footer">
      <div className="Social">
      <a href="https://github.com/webfurnace/homepage"><img src={GitHub} width="84px" height="30px" alt="Link to this webpage code on GitHub"/></a>
      <a href="https://www.linkedin.com/in/ian-richard-75485b9/"><img src={LinkedIn} width="84px" height="22px" alt="Link to Ian Richard's profile on Linked In." /></a>
      </div>
    </div>
  );
}

export default Footer;
