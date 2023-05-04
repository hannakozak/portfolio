import data from '../../data/data.json';
import { ProjectPreview } from './ProjectPreview';

export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="container mx-auto prose max-w-none h-screen grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {data.data.map((project) => (
        <ProjectPreview
          key={project.name}
          data={{
            name: project.name,
            description: project.description,
            technologies: project.technologies,
            image: project.image,
            live: project.live,
            code: project.code,
          }}
        />
      ))}
    </section>
  );
};
