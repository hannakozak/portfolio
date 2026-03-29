import { Project } from '../../types/types';

interface ProjectPreviewProps {
  data: Project;
}

export const ProjectPreview = ({ data }: ProjectPreviewProps) => {
  const techs = Array.isArray(data.technologies)
    ? data.technologies
    : data.technologies.split(',').map((t: string) => t.trim());

  return (
    <article className="group relative flex flex-col rounded-2xl bg-[#0a0a0f] border border-white/[0.06] transition-[border-color,box-shadow] duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.25)]">
      <div className="relative overflow-hidden rounded-2xl aspect-video px-8">
        <img
          alt={`Screenshot of ${data.name}`}
          src={data.image}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 3px)',
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />

        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={data.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full no-underline font-bold text-xs tracking-[0.12em] uppercase border-2 border-cyan-400 text-cyan-300 bg-cyan-400/20 hover:bg-cyan-400/40 shadow-[0_0_24px_rgba(6,182,212,0.5)] transition-colors duration-200"
          >
            <span>↗</span> Live
          </a>
          <a
            href={data.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full no-underline font-bold text-xs tracking-[0.12em] uppercase border-2 border-violet-400 text-violet-300 bg-violet-400/20 hover:bg-violet-400/40 shadow-[0_0_24px_rgba(139,92,246,0.5)] transition-colors duration-200"
          >
            <span>{'</>'}</span> Code
          </a>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h2 className="m-0 text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-500 to-purple-500 text-lg leading-tight tracking-[-0.02em]">
          {data.name}
        </h2>
        <p className="text-sm text-white/50 leading-relaxed m-0 line-clamp-2">
          {data.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/[0.05]">
          {techs.map((tech: string) => (
            <span
              key={tech}
              className="text-[9px] font-bold tracking-[0.14em] uppercase text-cyan-400/80 bg-cyan-400/[0.07] border border-cyan-400/[0.12] px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
