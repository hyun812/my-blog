import { projects } from '@/constants/about';
import Image from 'next/image';

const Project = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold">프로젝트</h2>
      <div className="mt-10">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col gap-8 sm:flex-row mb-16"
          >
            <div className="w-28 h-28">
              <Image
                src={project.imageSrc}
                width={110}
                height={110}
                alt="profile"
                className="border object-cover shadow-sm rounded-md"
              />
            </div>
            <div className="flex-1">
              <a
                href={project.githubLink}
                className="flex items-center mt-2"
              >
                <h3
                  className={`text-xl font-semibold underline underline-offset-4  pointerHover:hover:text-primary-500 dark:pointerHover:hover:text-primary-400`}
                >
                  {project.title}, {project.name}
                </h3>
              </a>
              <div className="flex justify-between items-center mt-2">
                <p className="font-semibold">{project.role}</p>
                <p className="text-sm text-basic-400">{project.period}</p>
              </div>
              <p className="text-sm mt-3">{project.skills.join(', ')}</p>
              <ul className="list-disc pl-3 pt-3 flex flex-col gap-2">
                {project.descriptions.map((description) => (
                  <li key={description}>{description}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
