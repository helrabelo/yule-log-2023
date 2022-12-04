import Woodlog from '../../public/wood-log-icon.svg';

const Woods = () => {
  return (
    <div className="flex w-full h-full block relative min-w-32">
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 rounded-full w-32 rotate-210">
        <Woodlog className="fill-brown-900 stroke-brown-800" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full w-32 rotate-n30">
        <Woodlog className="fill-brown-900 stroke-brown-800" />
      </div>
    </div>
  );
};

export default Woods;
