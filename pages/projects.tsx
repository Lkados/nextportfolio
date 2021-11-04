import dynamic from 'next/dynamic';
import {
  PersonalDetails,
  Project
} from "../shared/utils/types";
import {
  PersonalDetailsContext,
  ProjectDetailsContext,
} from "../shared/utils/contexts";
import { getPersonalDetails, getProjectsDetails } from "../shared/utils/apiServices";
import SocialBar from "../shared/components/socialBar";
import Loader from "../shared/components/loader";


const ProjectsPage = dynamic(() => import('../components/projects/index'), {
  ssr: false,
  loading: () => <Loader />
});
type Props = {
  personalDetails: PersonalDetails;
  projectDetails: Project[];
};

const Projects = ({ personalDetails, projectDetails }: Props): JSX.Element => {
  return (
    <>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <ProjectDetailsContext.Provider value={projectDetails}>
          <ProjectsPage />
          <SocialBar />
        </ProjectDetailsContext.Provider>
      </PersonalDetailsContext.Provider>
    </>
  );
};
export default Projects;

export async function getServerSideProps(): Promise<{
  props: { personalDetails: PersonalDetails; projectDetails: Project[] };
}> {
  const personalDetails = (await getPersonalDetails()) as PersonalDetails;
  const projectDetails = (await getProjectsDetails()) as Project[];
  return { props: { personalDetails, projectDetails } };
}
