import { useEffect, useState } from 'react';

export default function Loading() {
  const [dot, setDot] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      if (dot.length >= 3) {
        setDot([]);
      } else {
        setDot([...dot, '.']);
      }
    }, 700);
    return () => clearTimeout();
  }, [dot]);

  return (
    <div className="fixed h-full w-full z-20 bg-gray-900 opacity-80 flex flex-col justify-center items-center">
      <div className="sm:text-center md:text-left">
        <span className="text-5xl text-white mb-4">
          <strong className="text-blue-500">USER</strong>LIST
        </span>
      </div>
      <div className="flex text-white font-semibold text-2xl">
        <span>Now Loading</span>
        <span className="ml-3 w-3">{dot}</span>
      </div>
    </div>
  );
}
