import { Routes, Route, Outlet, useParams } from "react-router-dom";

import { GridItem } from "./GridItem";
import { Project } from "./Modal";
import { Modal } from "./Modal";

interface GridLayoutProps {
  projects: Project[];
  title: string;
}

export const GridLayout: React.FC<GridLayoutProps> = ({ projects, title }) => {
  const { url } = useParams();

  return (
    <div className="container mx-auto p-6">
      <h2 className="mb-8 text-center font-header text-3xl font-bold text-primary">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <GridItem index={index} project={project} />
        ))}
      </div>

      <Outlet />
    </div>
  );
};
