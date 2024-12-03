import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Hackathone",
      description:
        `A resume builder is an online tool that helps you create professional resumes easily with templates and guides. 
        It simplifies including key sections like work experience and skills, making your application stand out.`,
      tags: ["Html", "CSS", "Javascript",],
      link: "https://vercel.com/mariyams-projects-19ab2862/hackathone-v82u/GifCWoj3YuwdBJZhHKLDXV5KWfk5",
    },
   
    {
      title: "Shop.co",
      description:
        " The figma design, creat pixel-perfect web page that accuratrly reflect the UI at honing our skills.designs into Nextjs project styled Tailwind CSS ",
      tags: ["Nextjs", "Tailwind CSS","HTML" ],
      link: "https://www.linkedin.com/posts/mariyam-sheikh-33a11b300_turning-figma-designs-into-reality-activity-7261699810959736832-aI7r?utm_source=share&utm_medium=member_android",
    },
    {
      title: "Figma",
      description:
        "Figma template, i build a fully responsive template using HTML, Tailwind CSS and typeScript with Nextjs",
      tags: ["Nextjs","TypeScript", "HTML", "Tailwind "],
      link: "https://www.linkedin.com/posts/mariyam-sheikh-33a11b300_turning-figma-designs-into-reality-activity-7261699810959736832-aI7r?utm_source=share&utm_medium=member_android",
    },
   
    
    
    
   
    
    
    
   
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
