import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import TextCards from 'shared/components/text-cards';
import Button from 'shared/components/buttons';
import HeaderSmall from 'shared/components/header-small';
import ProjectCard from 'shared/components/project-card';
import { ProjectDetailsContext } from 'shared/utils/contexts';
import { Project } from 'shared/utils/types';
import SkillsCard from "../../shared/components/skills-cards";

export default function Projects(): JSX.Element {
  const router = useRouter();
  const projectDetails: Project[] = useContext(ProjectDetailsContext);
  return (
    <>
      <div>
        <div className="relative h-auto py-10 lg:py-20">
          <img
            src="/images/vectors/heart.svg"
            alt="Circle Vector"
            className="absolute -right-50p md:-right-96 bottom-16 md:-bottom-20 pointer-events-none animate-pulse"
          />
          <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
            <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
              <div className="items-center w-3/4 relative">
                <img
                  src="/images/vectors/boxes.svg"
                  alt="Box Vector"
                  className="block absolute right-0 top-0 w-20 md:w-16 lg:w-52 opacity-60"
                />
                <HeaderSmall text="Voyons Voir" />
                <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-4xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                  Voici quelques <span className="text-pink font-bold">projets</span> sur les quel j&apos;ai eu l&apos;honneur de travailler
                </h1>
                <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                  C&apos;est par  <span className="text-pink font-bold">ici.</span>
                </h1>
                <div className="sm:ml-52 xl:ml-96 transform rotate-90">
                  <Link href="#projects">
                    <img
                      src="/images/vectors/arrows-right.svg"
                      alt="Next"
                      className="hidden lg:block w-14 lg:mt-24 xl:mt-16 sm:mt-0 transform-all animate-translateright "
                    />
                  </Link>
                </div>
              </div>
            </div>
              <SkillsCard />
          </div>
        </div>
        <div className="relative h-auto sm:h-auto md:h-auto ml-4 sm:mx-12 md:mx-16" id="projects">
          <div className="grid md:grid-cols-2 gap-4 place-items-center">
            {projectDetails.map((project: Project) => (
              <ProjectCard
                project={project}
                key={project.title}
              />
            ))}
          </div>
          <div className="flex justify-center mt-10 lg:mt-4">
            <Button
              type="solid"
              text="Voir plus 🔥"
              onClickHandler={() => router.push('/projects')}
            />
          </div>
        </div>
      </div>
    </>
  );
}
