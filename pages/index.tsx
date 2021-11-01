import type { NextPage } from "next";
import HomePage from "../components/home";
import { PersonalDetails } from "../shared/utils/types";
import { PersonalDetailsContext } from "../shared/utils/contexts";
import getPersonalDetails from "../shared/utils/apiServices";
import SocialBar from "../shared/components/socialBar";

type Props = {
  personalDetails: PersonalDetails;
};

const Home = ({ personalDetails }: Props): JSX.Element => {
  return (
    <>
      <PersonalDetailsContext.Provider value={personalDetails}>
          <SocialBar />
          <HomePage />
      </PersonalDetailsContext.Provider>
    </>
  );
};


export default Home;

export async function getStaticProps(): Promise<{
  props: { personalDetails: PersonalDetails };
}> {
  const personalDetails = (await getPersonalDetails()) as PersonalDetails;
  return { props: { personalDetails } };
}