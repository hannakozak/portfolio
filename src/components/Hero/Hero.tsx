import { styles } from '../../styles/styles';

export const Hero = () => {
  return (
    <div className="container prose max-w-none flex flex-col h-screen justify-center items-start">
      <p className="text-cyan-300 m-0 tracking-wider">Hi, my name is</p>
      <h2 className={`${styles.textGradient} text-6xl`}>Hanna Kozak</h2>
      <h1 className={`${styles.textGradient} text-6xl invisible md:visible`}>
        Web Developer
      </h1>
      <p className="tracking-wider py-4 text-white w-80 md:w-3/4 xl:w-1/2 -mt-24 md:mt-0">
        I'm a web developer passionate about building clean, user friendly
        websites and applications. I enjoy working across the frontend and
        fullstack spectrum and am currently seeking my next challenge in web
        development.
      </p>
      <a href="#portfolio">
        <button className="rounded border-2 border-cyan-300  text-cyan-300 tracking-wider py-2 px-4 hover:text-purple-500 hover:border-purple-500">
          Portfolio
        </button>
      </a>
    </div>
  );
};
