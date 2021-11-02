import Lading from "./landing";
import Skills from "./skills";
import Work from "./work";


export default function HomePage (): JSX.Element {
  return (
    <>
      <div className="bg-blue pt-28">
        <div className="overflow-x-hidden">
          <Lading />
          <Skills />
          <Work />
        </div>
      </div>
    </>
  );
};

