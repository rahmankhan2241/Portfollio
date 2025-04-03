import { useState } from "react";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar, Briefcase } from "lucide-react";

export function Experience() {
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company selection */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {experiences.map((experience, index) => (
              <Button
                key={experience.company}
                variant={activeExperience === index ? "default" : "outline"}
                className={cn(
                  "justify-start h-auto py-4 px-6",
                  "border-2 transition-all duration-300",
                  activeExperience === index && "border-primary shadow-sm",
                  activeExperience !== index && "hover:border-primary/50"
                )}
                onClick={() => setActiveExperience(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border border-border overflow-hidden flex-shrink-0">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">{experience.company}</h3>
                    <p className={cn(
                      "text-sm",
                      activeExperience === index ? "text-primary-foreground" : "text-muted-foreground"
                    )}>
                      {experience.position}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>

          {/* Experience details */}
          <div className="lg:col-span-3 bg-card rounded-xl p-8 border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 -translate-y-8 translate-x-8 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 translate-y-8 -translate-x-8 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={experiences[activeExperience].logo}
                  alt={`${experiences[activeExperience].company} logo`}
                  className="w-16 h-16 object-contain rounded-lg border border-border p-2"
                />
                <div>
                  <h3 className="text-xl font-bold">{experiences[activeExperience].position}</h3>
                  <p className="text-muted-foreground">{experiences[activeExperience].company}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Calendar className="w-4 h-4" />
                <span>{experiences[activeExperience].duration}</span>
              </div>
              
              {/* Responsibilities Section with Bullet Points */}
              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Responsibilities
                </h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {experiences[activeExperience].description.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
