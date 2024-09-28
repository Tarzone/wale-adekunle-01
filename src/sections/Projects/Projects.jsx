import styles from './ProjectStyles.module.css';
import docker from '../../assets/docker-container.png';
import kubernetes from '../../assets/kubernetes.png';
import jenkins from '../../assets/jenkins.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={docker} 
          link="https://gitlab.com/techbootcamp2/app-docker-containerization" 
          h3="Docker"
          p="App Containerization"
        />
        <ProjectCard 
          src={kubernetes} 
          link="https://gitlab.com/techbootcamp2/app-docker-containerization" 
          h3="Kubernetes"
          p="Kubebench - STIG Compliance Tool"
        />             
        <ProjectCard 
          src={jenkins} 
          link="https://gitlab.com/techbootcamp2/java-maven-app/-/tree/jenkins-jobs?ref_type=heads" 
          h3="Jenkins CI/CD"
          p="Pipeline Integrations"
        />             
      </div>
    </section>
  );
}

export default Projects;