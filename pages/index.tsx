import { useEffect, useState } from 'react';

// import Flames from '../components/Flame'
// import Fire from '../components/Fire';
import Floor from '../components/Floor';
import Woods from '../components/Woods';
import Flames from '../components/Flames';
import SnowFall from '../components/SnowFall';
import Fireworks from '../components/Fireworks';

export default function YuleLog() {
  const [currentAnimation, setCurrentAnimation] = useState('snow');

  useEffect(() => {
    setTimeout(() => {
      setCurrentAnimation(currentAnimation === 'snow' ? 'fireworks' : 'snow');
    }, 10000);
  }, [currentAnimation]);
  return (
    <>
      <div className="h-screen w-screen bg-black flex items-center justify-center relative">
        {/* <Fire /> */}
        {currentAnimation === 'fireworks' && (
          <div className="fixed bottom-0 left-0 z-20">
            <Fireworks />
          </div>
        )}
        {currentAnimation === 'snow' && (
          <div className="fixed bottom-0 left-0 z-20">
            <SnowFall />
          </div>
        )}
        <div className="fixed bottom-0 w-1/3 h-1/3 flex items-center justify-center z-30">
          <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex justify-center items-center w-32 h-32">
            <Flames />
          </div>
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex justify-center items-center">
            <Woods />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 z-10">
          <Floor />
        </div>
      </div>
    </>
  );
}
