import { GridLayout } from "../components/page-components/GridLayout";
import { Project } from "../components/page-components/Modal";

export const gamesProjects: Project[] = [
  {
    url: "rift-n-sync",
    title: "Game 1",
    description: "A fun co-op game.",
    cover: "path/to/image1.jpg",
    media: [],
    link: "/games/rift-&-sync",
  },
  {
    url: "afterlight",
    title: "Game 2",
    description: "An exciting puzzle adventure.",
    cover: "path/to/image2.jpg",
    media: [],
    link: "/projects/game-2",
  },
];

export const Games: React.FC = () => {
  return <GridLayout projects={gamesProjects} title="Games Projects" />;
};
