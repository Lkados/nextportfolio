import TextCards from "./text-cards";
import { SkillsCards } from "../utils/types";
import { useContext } from "react";
import { SkillsCardsContext } from "../utils/contexts";


export default function SkillsCard(): JSX.Element {
  const skillsCards: SkillsCards[] = useContext(SkillsCardsContext);
  return (
      <div className="relative col-span-12 md:col-span-5 lg:col-span-6 flex flex-col">
        {skillsCards.map(({ id, title, description, color, classe }) => {
          return (
            <div
              className={classe}>
              <TextCards
                key={id}
                heading={title}
                text={description}
                color={color}
              />
            </div>
          );
        })}
      </div>
  );
}