import { useState, useEffect } from 'react';
import { flameA, flameB, flameC, flameD, flameE, flameF } from './paths';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { getIndex, useFlubber } from './use-flubber';

const paths = [flameE, flameC, flameD, flameB, flameF, flameA, flameE];
const colors = [
  // '#00cc88',
  // '#0099ff',
  // '#8855ff',
  // '#ff0055',
  // '#ee4444',
  // '#ffcc00',
  // '#00cc88',
  'hsla(0, 0%, 95%, 1)',
  'hsla(0, 0%, 95%, 1)',
  'hsla(0, 0%, 95%, 1)',
  'hsla(0, 0%, 95%, 1)',
  'hsla(0, 0%, 95%, 1)',
  'hsla(0, 0%, 95%, 1)',
  'hsla(0, 0%, 95%, 1)',
];

export default function Flames() {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 1.5,
      ease: 'easeInOut',
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });

    return () => animation.stop();
  }, [pathIndex]);

  return (
    <div className="border-4 border-green-900">
      <svg width="384" height="384">
        <g transform="translate(90 0) scale(4 4)">
          <motion.path fill={fill} d={path} />
        </g>
      </svg>
    </div>
  );
}
