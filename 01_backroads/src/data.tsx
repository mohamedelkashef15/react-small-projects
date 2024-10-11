import { faWallet, faTree, faSocks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IServicesItem } from "./components/interfaces";

export const PageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

export const servicesData: IServicesItem[] = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faWallet} />,
    heading: "Saving Money",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faTree} />,
    heading: "Endless Hiking",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faSocks} />,
    heading: "Amazing Comfort",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
];
