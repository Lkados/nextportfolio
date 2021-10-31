import SKILLS from '../../shared/utils/skills';
import { Skill } from '../../shared/utils/types';
import { BeakerIcon } from '@heroicons/react/solid'

export default function SkillsIcons(): JSX.Element {
  return (
    <div className="flex items-center justify-center grid grid-cols-12 lg:mt-16 flex-wrap w-5/6 md:w-full xl:w-5/6">
      {SKILLS.map(({ src, name }: Skill) => {
        return (
          <div key={1} className="flex items-start col-span-4">
            <img src={src} alt={name} key={src} className="p-2 sm:p-6 h-16 sm:h-24" />
          </div>
        );
      })}
    </div>
  );
}
