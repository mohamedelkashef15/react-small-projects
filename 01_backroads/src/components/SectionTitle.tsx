import { ISectionTitle } from "./interfaces";

function SectionTitle({ name1, name2 }: ISectionTitle) {
  return (
    <h2 className="heading-2">
      {name1} <span className="text-primary">{name2}</span>
    </h2>
  );
}

export default SectionTitle;
