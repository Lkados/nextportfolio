import ProjectCard from "../../shared/components/project-card";
import { useContext, useEffect, useState } from 'react';
import { ProjectDetailsContext } from 'shared/utils/contexts';
import { Project } from 'shared/utils/types';

const ProjectsPage = (): JSX.Element => {
  const projects = useContext(ProjectDetailsContext);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const category = [{ value: 'all', label: 'ALL' }];
  projects.forEach((project: any) =>
      project.category.forEach((cat:string) => {
      if (!category.find((c) => c.value === cat))
        category.push({ value: cat, label: cat.toUpperCase() });
    })
  );
  const [active, setActive] = useState('all');

  function changeProjects(c: any) {
    setActive(c.value);
  }
  useEffect(() => {
    if (active === 'all') {
      setFilteredProjects(projects);
    }else {
      setFilteredProjects(projects.filter((project: Project) => project.category.includes(active)));
    }
  }, [active]);
  return (
    <>
      <div className="bg-blue pt-28 pb-20">
        <div className="overflow-x-hidden">
          <div className="pt-10 ml-4 sm:mx-12 md:mx-16">
            <div className="mb-10">
              <h1 className="text-center text-3xl sm:text-2xl xl:text-3xl font-extrabold text-white leading-none mb-6">
                Quelques projets
              </h1>
              <p className="text-center text-sm sm:text-7xl font-light text-white leading-none mb-6">
                Fait avec passion
              </p>
            </div>
            <div>
              <div className="mx-auto text-center">
                {category.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => changeProjects(c)}
                    className={`${
                      active === c.value
                        ? 'text-blue bg-pink border-transparent'
                        : 'text-white border-pink'
                    } w-32 mx-4
                    border-2 py-2 rounded-xl lg:mx-4 outline-none mb-2 focus:outline-none transition-all hover:shadow-light-3xl
                    `}>
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 place-items-center">
              {filteredProjects.map((project: Project) => (
                <ProjectCard
                  project={project}
                  key={project.title}
                  filter={{ key: 'category', value: active }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
