import { motion } from 'framer-motion';

const Snowman = () => {
  return (
    <div className="absolute bottom-0 right-0 w-24 h-48 block block z-50">
      <motion.div
        id="snowman"
        className="absolute w-24 h-48 top-24 right-24"
        initial={{ right: '-160px', top: '-180px' }}
        animate={{
          right: '240px',
          top: ['-200px', '-220px', '-180px', '-220px'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        {/* Head */}
        <motion.div
          initial={{ y: '5px' }}
          animate={{ y: '10px' }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute bottom-30 left-4 rounded-full bg-white w-16 h-16 border border-black z-40"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{
              scale: [
                1.1, 0.9, 1.1, 0.9, 1.1, 0.9, 0, 1.1, 0.9, 1.1, 0.9, 1.1, 0.9,
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
            className="rounded-full bg-black h-2 w-2 absolute top-6 left-4"
          />
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{
              scale: [
                1.1, 0.9, 1.1, 0.9, 1.1, 0.9, 0, 1.1, 0.9, 1.1, 0.9, 1.1, 0.9,
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
            className="rounded-full bg-black h-2 w-2  absolute top-6 left-8"
          />
          {/* Nose */}
          <div>
            <motion.div
              className="absolute left-2 top-8 border-solid border-r-fire-dark-yellow border-r-24 border-y-transparent border-y-8 border-l-0"
              initial={{ rotate: '-5deg' }}
              animate={{ rotate: '5deg' }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            ></motion.div>
          </div>
        </motion.div>
        {/* Torso */}
        <motion.div
          initial={{ y: '-5px' }}
          animate={{ y: '5px' }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute bottom-16 left-2 rounded-full bg-white w-20 h-20  border border-black z-30 "
        >
          {/* left arm */}
          <motion.span
            className="w-12 h-2 bg-brown-800 block z-40 rounded-full absolute rotate-30"
            initial={{ rotate: '-15deg', top: '36px', left: '-32px' }}
            animate={{ rotate: '15deg', top: '32px', left: '-36px' }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          >
            <span className="w-6 h-2 bg-brown-900 block z-40 rounded-full absolute left-0 top-2 rotate-135" />
            <span className="w-6 h-2 bg-brown-900 block z-40 rounded-full absolute left-0 -top-2 rotate-45" />
          </motion.span>
          {/* right arm */}
          <motion.span
            className="w-12 h-2 bg-brown-800 block z-40 rounded-full absolute rotate-n30"
            initial={{ rotate: '-15deg', top: '36px', right: '-32px' }}
            animate={{ rotate: '15deg', top: '32px', right: '-36px' }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          >
            <span className="w-6 h-2 bg-brown-900 block z-40 rounded-full absolute right-0 top-2 rotate-n135" />
            <span className="w-6 h-2 bg-brown-900 block z-40 rounded-full absolute right-0 -top-2 rotate-n45" />
          </motion.span>
        </motion.div>
        {/* Base */}
        <motion.div
          className="absolute bottom-0 left-0 rounded-full bg-white w-24 h-24 border border-black z-20"
          initial={{ y: '5px' }}
          animate={{ y: '-5px' }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Snowman;
