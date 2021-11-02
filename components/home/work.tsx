import HeaderSmall from '../../shared/components/header-small';
import Link from 'next/link';
import { useContext } from 'react';
import { WorkDetailsContext } from "shared/utils/contexts";
import { WorkDetails } from "shared/utils/types";

export default function Work(): JSX.Element {
  const workDetails: WorkDetails = useContext(WorkDetailsContext);
  return (
    <>
      <div className="relative h-auto py-10 lg:py-20">
        <img
          src="/images/vectors/circle-spin.svg"
          alt="Circle Vector"
          className="absolute -right-16 md:-right-64 top-52 md:top-0 lg:bottom-36 w-1/3 2xl:w-1/3 pointer-events-none animate-spin"
        />
        <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
            <div className="items-center w-3/4 relative">
              <img
                src="/images/vectors/boxes.svg"
                alt="Box Vector"
                className="block absolute right-0 top-0 w-20 md:w-16 lg:w-52 opacity-60"
              />
              <HeaderSmall text="Que fais-je ?" />
              <h1 className="mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-4xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                { workDetails.resume} {' '}
                <span className="text-pink font-bold">{workDetails.title}</span> dans une :
              </h1>
              <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                {workDetails.company}
              </h1>
              <div className="sm:ml-52 xl:ml-96">
                <Link href="/work">
                  <img
                    src="/images/vectors/arrows-right.svg"
                    alt="Next"
                    className="w-14 mt-10 sm:mt-0 transform-all animate-translateright"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12  md:col-span-5 lg:col-span-6 flex flex-col items-center justify-center">
            <img
              src={workDetails.logo}
              alt="Works at"
              className="w-48 lg:w-full p-10 sm:p-24 md:p-4 lg:p-24"
            />
          </div>
        </div>
      </div>
    </>
  );
}
