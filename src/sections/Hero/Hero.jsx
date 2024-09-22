import styles from './HeroStyles.module.css';
import heroImg from '../../assets/avatar-02-resized.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
//import twitterLight from '../../assets/twitter-light.svg';
import GitHubLight from '../../assets/github-light.svg';
import GitHubDark from '../../assets/github-dark.svg';
import GitLabLight from '../../assets/icons8-gitlab-50-filled.svg';
import GitLabDark from '../../assets/icons8-gitlab-64-grad.svg';
import LinkedinLight from '../../assets/linkedin-light.svg';
import LinkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv-ooa.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const LinkedinIcon = theme === 'light' ? LinkedinLight : LinkedinDark;
  const GitHubIcon = theme === 'light' ? GitHubLight : GitHubDark;
  const GitLabIcon = theme === 'light' ? GitLabLight : GitLabDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
          className={styles.hero} 
          src={heroImg} 
          alt="Profile shot of Wale Adekunle"
        />
        <img 
          className={styles.colorMode} 
          src={themeIcon} 
          alt="Color mode icon"
          onClick={toggleTheme} 
        />
      </div>
      <div className={styles.info}>
        <h1> 
          Wale 
          <br />
          Adekunle
        </h1>
        <h2>DevSecOps Engineer</h2>
        <span>
          <a href="https://www.linkedin.com/in/ooa/" target="_blank"> 
          <img src={LinkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/Tarzone" target="_blank"> 
          <img src={GitHubIcon} alt="GitHub Icon" />
          </a>
          <a href="https://gitlab.com/Tarzone" target="_blank"> 
          <img src={GitLabIcon} alt="GitLab Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Delivering continuous integration solutions seamlessly through the SDLC process.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;