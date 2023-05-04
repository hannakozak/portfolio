import { styles } from '../../styles/styles';
import { Project } from '../../types/types';

interface ProjectPreviewProps {
  data: Project;
}
export const ProjectPreview = ({ data }: ProjectPreviewProps) => {
  return (
    <div
      className={`${styles.scaleOnHover} prose flex flex-col justify-start px-6 h-[550px]`}
    >
      <div>
        <img src={data.image} className="rounded" />
      </div>
      <h2 className={styles.textGradient}>{data.name}</h2>
      <p className="text-white m-0">{data.description}</p>
      <p className="text-white m-0">Technologies: {data.technologies}</p>
      <div className="flex gap-3 ">
        <a
          href={data.live}
          className="text-cyan-300 no-underline my-3 hover:text-purple-500"
        >
          Live
        </a>
        <a
          href={data.code}
          className="text-cyan-300 no-underline my-3 px-3 hover:text-purple-500"
        >
          Code
        </a>
      </div>
    </div>
  );
};
