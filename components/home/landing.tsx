import { useContext } from 'react';
import { PersonalDetailsContext } from 'shared/utils/contexts';
import { PersonalDetails } from 'shared/utils/types';
import HeaderSmall from "../../shared/components/header-small";
import Image from "next/image";
export default function Lading(): JSX.Element {
  const personalDetails: PersonalDetails = useContext(PersonalDetailsContext);
  return (
    <div className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="w-20 mt-10  rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
            <Image width="100%" height="100%" src="/images/vectors/triangle.svg"
                 alt="" className="animate-spin" />
          </div>
          <div className="sm:max-w-lg">
            <HeaderSmall text="Qui suis-je ?" />
            <h1 className="text-6xl font font-extrabold tracking-tight text-gray-300 sm:text-6xl">{personalDetails.name}</h1>
            <p className="mt-4 text-xl text-gray-500">{personalDetails.resume}</p>
          </div>
          <div>
            <div className="mt-10">
              <div aria-hidden="true"
                   className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                <div
                  className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="parent rounded-lg sm:opacity-0 lg:opacity-100">
                        <div className="child1">
                          <Image layout="fill"  src="/images/vectors/circle-spin.svg"
                               alt="" className="animate-spin" />
                        </div>
                        <div className="child2" >
                          <Image layout="fill" src="/images/astro.svg"
                               alt="" />
                        </div>
                        <div className="child3">
                          <Image layout="fill"  src="/images/stars.svg"
                               alt="" className="animate-pulse " />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#"
                 className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">En savoir plus
              </a>
            </div>
          </div>
        </div>
      <div className="w-20 mt-10  rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
        <Image width="100%" height="100%" src="/images/vectors/triangle.svg"
             alt="" className="animate-spin" />
      </div>
        <div className="w-75p  rounded-lg overflow-hidden mb-10 sm:opacity-0 lg:opacity-100">
          <Image width="100%" height="100%" src="/images/vectors/triangle.svg"
               alt="" className="animate-spin float-right" />
        </div>
    </div>
  )
}