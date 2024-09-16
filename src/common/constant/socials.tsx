import {
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
  BsRssFill as BlogIcon,
} from "react-icons/bs";
import { RiTwitterXFill as TwitterXIcon } from "react-icons/ri";

import { SocialItemProps } from "../types/socials";

const iconSize = 20;

export const SOCIAL_MEDIA: SocialItemProps[] = [
  {
    title: "Github",
    href: "https://github.com/smcnab1",
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Github",
    className: "text-slate-800 hover:bg-slate-800",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/sammcnab/",
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Linkedin",
    className: "text-[#0b66c2] hover:bg-[#0b66c2]",
  },
  {
    title: "X",
    href: "https://x.com/sammcnab",
    icon: <TwitterXIcon size={19} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: X",
    className: "hover:bg-black",
  },
  {
    title: "Blog",
    href: "https://sammcnab.co.uk/blog",
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Blog",
    className: "text-orange-500 hover:bg-orange-500",
  },
];
