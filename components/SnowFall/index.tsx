import React from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadSnowPreset } from 'tsparticles-preset-snow';

export class ParticlesContainer extends React.Component {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadSnowPreset(engine);
  }

  render() {
    const options = {
      // background: {
      //   color: 'red',
      // },
      particles: {
        move: {
          direction: "bottom",
          enable: true,
          random: false,
          straight: false,
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
        },
        size: {
          value: { min: 1, max: 5 },
        },
        wobble: {
          distance: 20,
          enable: true,
          speed: {
            min: -15,
            max: -5,
          },
        },
      },
    };

    return <Particles options={options} init={this.customInit} />;
  }
}

export default ParticlesContainer;
