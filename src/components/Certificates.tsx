
import { useRef } from "react";
import { certificates } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function Certificates() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Certificates & Achievements</h2>
        
        <div className="relative">
          <ScrollArea className="w-full">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 py-4 px-1 pb-10 snap-x snap-mandatory"
            >
              {certificates.map((certificate, index) => (
                <div 
                  key={certificate.title}
                  className={cn(
                    "min-w-[350px] md:min-w-[450px] rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden flex-shrink-0 snap-center",
                    "transform hover:-translate-y-1"
                  )}
                >
                  <div className="p-4 border-b border-border flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border border-border overflow-hidden">
                      <img
                        src={certificate.logo}
                        alt={`${certificate.issuer} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{certificate.issuer}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{certificate.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="aspect-w-16 aspect-h-9 w-full">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">{certificate.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {certificate.skills.map(skill => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
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
