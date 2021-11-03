import { Project } from '../utils/types';
import Link from 'next/link';
import Tilt from 'react-tilt';

const ProjectCard = ({ project}): JSX.Element => {
  return (
      <>
        <Tilt className="Tilt cursor-pointer" options={{ max: 25 }}>
          <div
            className="my-4 mx-8 lg:mx-16 rounded-2xl
            transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl">
            <Link href={`/project/${project.title}`}>
              <img src={project.img} alt={project.title} className="rounded-2xl" />
            </Link>
          </div>
        </Tilt>
      </>
    )
};

export default ProjectCard;
