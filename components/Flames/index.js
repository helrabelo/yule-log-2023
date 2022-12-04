import { motion } from 'framer-motion';

import Flame from '../Flame';

const Flames = () => {
  return (
    
    <>
      <div className="relative w-96 h-96">
        <div className="absolute bottom-0 left-0 w-full h-full">
            <div className='w-32 h-32'>
              <Flame />
            </div>
          </div>
        <div className="absolute bottom-4 left-0">
          <motion.span
            className="rounded-full h-80 w-80 bg-fire-yellow block absolute left-8"
            initial={{ opacity: 0.2, scale: 0.8, bottom: '0px' }}
            animate={{ opacity: 0.4, scale: 1, bottom: '32px' }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
          />
          <motion.span
            className="rounded-full h-72 w-72 bg-fire-dark-yellow block absolute left-12"
            initial={{ opacity: 0.3, scale: 0.8, bottom: '0px' }}
            animate={{ opacity: 0.5, scale: 1, bottom: '32px' }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
          />
          <motion.span
            className="rounded-full h-64 w-64 bg-fire-light-yellow block absolute left-16"
            initial={{ opacity: 0.4, scale: 0.8, bottom: '0px' }}
            animate={{ opacity: 0.6, scale: 1, bottom: '32px' }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
          />
        </div>
      </div>
    </>
  );
};

export default Flames;
