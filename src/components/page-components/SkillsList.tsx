const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Unity",
  "Python",
  "C#",
];

const SkillsList: React.FC = () => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <span key={index} className="font-normal text-secondary">
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SkillsList;
