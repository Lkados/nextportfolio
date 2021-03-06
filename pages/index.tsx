import HomePage from "../components/home";
import { PersonalDetails, Project, SkillsCards, WorkDetails } from "../shared/utils/types";
import {
  PersonalDetailsContext,
  ProjectDetailsContext,
  SkillsCardsContext,
  WorkDetailsContext
} from "../shared/utils/contexts";
import { getPersonalDetails, getProjectsDetails, getSkillsCards, getWorkDetails } from "../shared/utils/apiServices";
import SocialBar from "../shared/components/socialBar";
import Work from "../components/home/work";

type Props = {
  personalDetails: PersonalDetails;
  workDetails: WorkDetails;
  skillsCardsDetails: SkillsCards[];
  projectDetails: Project[];
};

const Home = ({ personalDetails, workDetails, skillsCardsDetails, projectDetails }: Props): JSX.Element => {
  return (
    <>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <WorkDetailsContext.Provider value={workDetails}>
          <SkillsCardsContext.Provider value={skillsCardsDetails}>
            <ProjectDetailsContext.Provider value={projectDetails}>
              <SocialBar />
              <HomePage />
            </ProjectDetailsContext.Provider>
          </SkillsCardsContext.Provider>
        </WorkDetailsContext.Provider>
      </PersonalDetailsContext.Provider>
    </>
  );
};


export default Home;

export async function getServerSideProps(): Promise<{
  props: { personalDetails: PersonalDetails, workDetails: WorkDetails, skillsCardsDetails: SkillsCards[], projectDetails: Project[] };
}> {
  const personalDetails = (await getPersonalDetails()) as PersonalDetails;
  const workDetails = (await getWorkDetails()) as WorkDetails;
  const skillsCardsDetails = (await getSkillsCards()) as SkillsCards[];
  const projectDetails = (await getProjectsDetails()) as Project[];
  return { props: { personalDetails, workDetails, skillsCardsDetails, projectDetails } };
}