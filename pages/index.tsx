import HomePage from "../components/home";
import { PersonalDetails, WorkDetails } from "../shared/utils/types";
import { PersonalDetailsContext, WorkDetailsContext } from "../shared/utils/contexts";
import { getPersonalDetails, getWorkDetails } from "../shared/utils/apiServices";
import SocialBar from "../shared/components/socialBar";
import Work from "../components/home/work";

type Props = {
  personalDetails: PersonalDetails;
  workDetails: WorkDetails;
};

const Home = ({ personalDetails, workDetails }: Props): JSX.Element => {
  return (
    <>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <WorkDetailsContext.Provider value={workDetails}>
          <SocialBar />
          <HomePage />
        </WorkDetailsContext.Provider>
      </PersonalDetailsContext.Provider>
    </>
  );
};


export default Home;

export async function getStaticProps(): Promise<{
  props: { personalDetails: PersonalDetails, workDetails:WorkDetails };
}> {
  const personalDetails = (await getPersonalDetails()) as PersonalDetails;
  const workDetails = (await getWorkDetails()) as WorkDetails;
  return { props: { personalDetails, workDetails } };
}