import { styles } from '../../styles/styles';

export const Hero = () => {
  return (
    <div className="container prose max-w-none flex flex-col h-screen justify-center items-start">
      <p className="text-cyan-300 m-0 tracking-wider">Hi, my name is</p>
      <h2 className={styles.textGradient}>Hanna Kozak</h2>
      <h1 className={styles.textGradient}>Frontend Developer</h1>
      <p className="tracking-wider py-4 text-white w-100 md:w-3/4 xl:w-1/2">
        I&apos;am a frontend developer focused on creating clean & user-firendly
        websites and application. Currently, I&apos;m actively searching for my
        next challenge in the frontend development space.
      </p>
      <button className="rounded border-2 border-cyan-300 text-cyan-300 tracking-wider py-2 px-4 hover:bg-background-hover">
        Portfolio
      </button>
    </div>
  );
};
