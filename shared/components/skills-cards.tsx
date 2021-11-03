import TextCards from "./text-cards";
import { SkillsCards } from "../utils/types";
import { useContext } from "react";
import { SkillsCardsContext } from "../utils/contexts";


export default function SkillsCard(): JSX.Element {
  const skillsCardsDetails: SkillsCards[] = useContext(SkillsCardsContext);
  return (
      <div className="relative col-span-12 md:col-span-5 lg:col-span-6 flex flex-col">
        {skillsCardsDetails.map((card) => {
          return (
            <div
              className={card.classe}>
              <TextCards
                key={card.id}
                heading={card.title}
                text={card.description}
                color={card.color}
              />
            </div>
          );
        })}
      </div>
  );
}