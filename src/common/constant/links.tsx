import {
  BiBriefcaseAlt2 as BusinessIcon,
  BiCalendar as ChitChatIcon,
  BiCoffee as CoffeeIcon,
  BiFile as PDFIcon,
  BiPin as WebsiteIcon,
} from "react-icons/bi";

import { LinkProps } from "../types/link";

export const LINKS: LinkProps[] = [
  {
    label: "Personal Website & Portfolio",
    icon: <WebsiteIcon size={21} className="text-neutral-600" />,
    href: "https://sammcnab.co.uk",
    className: "bg-emerald-700",
    target: "_blank",
  },
  {
    label: "Resume & Curriculum Vitae",
    icon: <PDFIcon size={21} className="text-neutral-600" />,
    href: "https://sammcnab.co.uk/about",
    className: "bg-sky-700",
    target: "_blank",
  },
  {
    label: "Quick Chat",
    icon: <ChitChatIcon size={21} className="text-neutral-600" />,
    href: "https://www.sammcnab.co.uk/contact",
    className: "bg-rose-600",
    target: "",
  },
];
