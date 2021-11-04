import { PersonalDetails, Project } from '../../shared/utils/types';
import { PersonalDetailsContext, ProjectDetailsContext } from '../../shared/utils/contexts';
import ProjectDetailedPage from '../../components/project-details';
import NotFound from '../404';
import { getPersonalDetails, getProjectsDetails } from '../../shared/utils/apiServices';
import SocialBar from "../../shared/components/socialBar";
import Footer from "../../shared/components/footer";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Navbar from "../../shared/components/navbar";
import Loader from "../../shared/components/loader";

type Props = {
  personalDetails: PersonalDetails;
  projectDetails: Project[];
};
const ProjectDetail = ({ personalDetails, projectDetails }: Props): JSX.Element => {
  const router = useRouter()
  const [project, setProject] = useState<Project | string>('loading');
  useEffect(() => {
    const { title } = router.query;
    const found:any = projectDetails.find((p) => p.title === title);
    setProject(found);
  }, [project]);
  if (project === 'loading') {
    return <Loader />;
  }
  return project ? (
    <>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <ProjectDetailsContext.Provider value={projectDetails}>
          <Navbar />
          <div className="bg-blue pt-28 overflow-x-hidden">
            <ProjectDetailedPage project={project as Project} />
          </div>
          <SocialBar />
        </ProjectDetailsContext.Provider>
      </PersonalDetailsContext.Provider>
    </>
  ) : (
    <NotFound />
  );
};

export default ProjectDetail;

export async function getStaticProps(): Promise<{
  props: { personalDetails: PersonalDetails; projectDetails: Project[] };
}> {
  const personalDetails = (await getPersonalDetails()) as PersonalDetails;
  const projectDetails = (await getProjectsDetails()) as Project[];
  return { props: { personalDetails, projectDetails } };
}

export async function getStaticPaths(): Promise<unknown> {
  const projectDetails = ((await getProjectsDetails()) as Project[]) || [];
  const paths = projectDetails.map((p) => {
    return { params: { title: p.title } };
  });
  return {
    paths,
    fallback: false
  };
}
