import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  project: Project;
}

export interface Project {
  url: string;
  title: string;
  description: string;
  cover: string;
  media: string[] | null;
  link: string;
}

export const Modal: React.FC<ModalProps> = ({ project }) => {
  const navigate = useNavigate();

  const clickBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={clickBackdrop}
    >
      <div className="relative w-full max-w-md rounded-lg bg-white p-6">
        <button
          onClick={closeModal}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
        >
          <FaTimes className="text-xl" />
        </button>
        <h2 className="mb-4 text-xl font-bold">{project.title}</h2>
        <img
          src={project.cover}
          alt={project.title}
          className="mb-4 h-48 w-full object-cover"
        />
        <p className="mb-4">{project.description}</p>
        <a href={project.link} className="text-blue-500 hover:text-blue-400">
          View Project
        </a>
      </div>
    </div>
  );
};
