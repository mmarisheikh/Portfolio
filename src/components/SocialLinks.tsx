import { cn } from "@/lib/utils";
import { Facebook, Linkedin } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://www.facebook.com/profile.php?id=61552335700518&mibextid=ZbWKwL", icon: <Facebook /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/mariyam-sheikh-33a11b300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <Linkedin /> },
  
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
