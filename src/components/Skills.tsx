
import { useRef, useState } from "react";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Rating } from "@/components/Rating";

type SkillRating = {
  skillId: string;
  rating: number;
};

export function Skills() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [skillRatings, setSkillRatings] = useState<SkillRating[]>([]);

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  const handleRatingChange = (skillId: string, rating: number) => {
    setSkillRatings((prev) => {
      const existingRatingIndex = prev.findIndex((r) => r.skillId === skillId);
      
      if (existingRatingIndex > -1) {
        const updatedRatings = [...prev];
        updatedRatings[existingRatingIndex].rating = rating;
        return updatedRatings;
      } else {
        return [...prev, { skillId, rating }];
      }
    });
  };

  const getRatingForSkill = (skillId: string): number => {
    return skillRatings.find((r) => r.skillId === skillId)?.rating || 0;
  };

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        
        <div className="relative">
          <ScrollArea className="w-full">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 py-4 px-1 pb-10 snap-x snap-mandatory"
            >
              {skills.map((skill, index) => (
                <div 
                  key={`${skill.name}-${index}`} 
                  className="flex-shrink-0 w-40 h-auto flex flex-col items-center justify-center gap-3 rounded-xl border border-border/50 bg-background p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/50 hover:scale-105 snap-center"
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <span className="font-medium text-center">{skill.name}</span>

                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
