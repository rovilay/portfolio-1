import * as React from 'react';
import ProjectCard from '../../Components/ProjectCard';
import { PROJECT_LIST } from '../../settings';

const Projects: React.FC = () => {
  const [projectID, setProjectID] = React.useState(0);

  const projectsMap = PROJECT_LIST.map((project) => {
    return (
      <React.Fragment key={project.key}>
        <ProjectCard
          projectData={project}
          setProjectID={setProjectID}
          currentProjectID={projectID}
        />
      </React.Fragment>
    );
  });

  return (
    <div>
      <h1 className='center'>Personal Projects</h1>

      {projectsMap}
    </div>
  );
};

export default Projects;
