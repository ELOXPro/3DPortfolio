import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    console.log(progress, total, loaded, item);
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
    }
  }, [progress, total, loaded, item]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
  flex items-center justify-center bg-blue-100 
  ${started ? "opacity-0" : "opacity-100"}`}
    >
      <div className="w-32 h-32 relative">
        <svg className="z-20 absolute left-0 top-0 w-full h-full fill-blue-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.7824 50.754">
          <path d="m93.8298 59.7162-.0114 5.4576 9.9798 9.9389-5.454-.0196-19.9248 19.9507 5.3505.0134 20.0303-19.943 9.9968 9.956.006-5.3505zm.2196 7.9065-.0723 9.4062 3.8907-3.808 1.8138-.0414zm17.8594 7.4797 3.8318 3.868.0522 1.8128 5.5221-5.6658zm11.8354.0268L103.82 95.0794l5.35.014 20.0319-19.9445zm-19.9269 2.7037-7.2332 7.2084 7.2358 7.2605 7.2331-7.2083zm-.1003 1.7653 1.0744 1.047-4.1873 4.2974 1.0738 1.0464 2.4427-2.5063 1.0744 1.047-2.4428 2.5063 1.0744 1.047 4.1879-4.297 1.0738 1.0465-4.1873 4.2974-1.047 1.0744-2.1482-2.094-1.0744-1.047-1.0743-1.0469-1.0744-1.0464 1.047-1.0744zm-9.8872 5.518-.0114 5.458 19.9786 19.896.006-5.3505zm-1.7989 4.2742-5.5221 5.6658 9.4061.015-3.8318-3.868zm21.8158 3.7543-3.8908 3.808-1.8133.0414 5.6317 5.5567z" transform="translate(-78.4194 -59.7162)"/>
        </svg>
        <div
          className="absolute left-0 top-0 w-full h-full bg-blue-700 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
        <div className="w-full h-full bg-blue-100 opacity-100"/>
        <h2 className="text-base md:text-3xl font-bold text-center text-blue-700">Loading</h2>
      </div>
    </div>
  );
};