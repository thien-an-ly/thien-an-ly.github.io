import { Link } from "react-router-dom";

import { Project } from "./Modal";

interface ItemProps {
  index: number;
  project: Project;
}

export const GridItem: React.FC<ItemProps> = ({ index, project }) => (
  <Link to={`/games/${project.url}`} className="group">
    <div
      key={index}
      className="group relative 
      overflow-hidden rounded-lg bg-secondaryVariant 
      text-primaryVariant"
    >
      <img
        src={project.cover}
        alt={project.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mb-2 text-sm">{project.description}</p>
        <a
          href={project.link}
          className="inline-block font-body text-lg text-accent hover:font-semibold hover:text-primary"
        >
          View project
        </a>
      </div>
    </div>
  </Link>
);
