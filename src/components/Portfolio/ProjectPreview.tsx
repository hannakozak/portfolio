import { styles } from '../../styles/styles';
import { Project } from '../../types/types';

interface ProjectPreviewProps {
  data: Project;
}
export const ProjectPreview = ({ data }: ProjectPreviewProps) => {
  return (
    <div
      className={`${styles.scaleOnHover} prose flex flex-col justify-start p-6  py-3`}
    >
      <div>
        <img
          alt={`Screenshot of ${data.name}`}
          src={data.image}
          className="rounded"
        />
      </div>
      <h2 className={styles.textGradient}>{data.name}</h2>
      <p className="text-white m-0">{data.description}</p>
      <p className="text-white m-0 mt-5">
        Technologies:{' '}
        <span className="text-cyan-300 font-bold">{data.technologies}</span>
      </p>
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
