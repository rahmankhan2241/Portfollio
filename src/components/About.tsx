
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative overflow-hidden rounded-xl group">
            <img
              src="https://res.cloudinary.com/divva13vc/image/upload/v1743058039/Ahtesham_Portfollio/zgpu6bxsbfqv6ijbxgna.png"
              alt="Shane Rahman"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Shane Rahman</h3>
            <p className="text-muted-foreground">
              Hey there ! I am Shane Rahman originally from Uttar Pradesh but for past 2 years am residing in bengaluru. I completed my graduation
              in 2023 with Bsc in field of Applied mathematics & science. After my graduation i joined a company named Atem R Tech Solutions as a 
              Data Specialist and worked there for 1 year after that having intrest in field of Data Analytics i joined K12 Techno Services as Data 
              Analyst Intern. It has been 10 months for me working here and i have gained a lot of hands on practise on data analytics.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="font-medium">Experience</h4>
                <p className="text-muted-foreground">2+ Years</p>
              </div>
              <div>
                <h4 className="font-medium">Projects Completed</h4>
                <p className="text-muted-foreground">10+</p>
              </div>
              <div>
                <h4 className="font-medium">Education</h4>
                <p className="text-muted-foreground">Bachelors of Science in Mathematics & Science</p>
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Bengaluru, Karnataka, India</p>
              </div>
            </div>
            <div className="pt-4">
              <a href="#experience" className={cn(
                "inline-flex items-center gap-2 text-primary font-medium",
                "after:content-[''] after:w-full after:h-[1px] after:bg-primary",
                "after:block after:transition-transform after:duration-300",
                "after:scale-x-0 hover:after:scale-x-100 after:origin-left"
              )}>
                View my work experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
