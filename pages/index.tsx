import type { NextPage } from "next";
import HomePage from "../components/home";
import { PersonalDetails} from "../shared/utils/types";
import {PersonalDetailsContext} from "../shared/utils/contexts";
import getPersonalDetails from "../shared/utils/apiServices";
import SocialBar from "../shared/components/socialBar";
import Layout from "../components/layout/Layout";

type Props = {
  personalDetails: PersonalDetails;
};

const Home = ({personalDetails}: Props): JSX.Element => {
  return (
    <>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <Layout>
          <SocialBar/>
          <HomePage/>
        </Layout>
      </PersonalDetailsContext.Provider>
    </>
  );
};


export default Home;

export async function getStaticProps(): Promise<{
  props: { personalDetails: PersonalDetails};
}> {
  const data = (await getPersonalDetails()) as PersonalDetails;
  const personalDetails:any = data;
  return { props: { personalDetails} };
}