import Lading from "./landing";
import Skills from "./skills";


const HomePage = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28">
        <div className="overflow-x-hidden">
          <Lading />
          <Skills />
        </div>
      </div>
    </>
  );
};

export default HomePage;
