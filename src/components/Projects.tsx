
import { useState, useEffect, useRef } from "react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

type ProjectCategory = 'Excel' | 'Python' | 'Power BI' | 'SQL' | 'All';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Get category from URL if it exists
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category') as ProjectCategory | null;
    if (category && ['Excel', 'Python', 'Power BI', 'SQL'].includes(category)) {
      setSelectedCategory(category);
    }
  }, []);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleMouseEnter = (index: number) => {
    const timer = setTimeout(() => {
      setHoveredProject(index);
      const video = videoRefs.current[index];
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {
          // Video play failed (common due to autoplay restrictions)
          console.log("Video playback was prevented");
        });
      }
    }, 2000);
    setHoverTimer(timer);
  };

  const handleMouseLeave = (index: number) => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      setHoverTimer(null);
    }
    setHoveredProject(null);
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        
        <div className="flex justify-center mb-10">
          <ToggleGroup type="single" value={selectedCategory} onValueChange={(value) => value && setSelectedCategory(value as ProjectCategory)}>
            <ToggleGroupItem value="All" className="px-6">All</ToggleGroupItem>
            <ToggleGroupItem value="Excel" className="px-6">Excel</ToggleGroupItem>
            <ToggleGroupItem value="Python" className="px-6">Python</ToggleGroupItem>
            <ToggleGroupItem value="Power BI" className="px-6">Power BI</ToggleGroupItem>
            <ToggleGroupItem value="SQL" className="px-6">SQL</ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <a 
              key={project.title} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:shadow-lg"
            >
              <div 
                className="relative aspect-video overflow-hidden"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={cn(
                    "w-full h-full object-cover transition-opacity duration-500",
                    hoveredProject === index ? "opacity-0" : "opacity-100"
                  )}
                />
                {project.video && (
                  <video
                    ref={el => videoRefs.current[index] = el}
                    src={project.video}
                    muted
                    loop
                    playsInline
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                      hoveredProject === index ? "opacity-100" : "opacity-0"
                    )}
                  />
                )}
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded-md">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                <p className="mt-2 text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
