import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import ImageIcon from '@material-ui/icons/Image';

import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
      href="#projects-images" 
      aria-label="live preview"
      className="link link--icon"
      >
        <ImageIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
