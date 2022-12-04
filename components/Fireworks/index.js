import React from 'react';
import Particles from 'react-particles';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';

import { rgbToHsl, setRangeValue, stringToRgb } from 'tsparticles-engine';

export class ParticlesContainer {
  // this customizes the component tsParticles installation
  async customInit(engine) {
    // this adds the preset to tsParticles, you can safely use the
    await loadFireworksPreset(engine);
  }

  render() {
    const fixRange = (value, min, max) => {
      const diffSMax = value.max > max ? value.max - max : 0;
      let res = setRangeValue(value);

      if (diffSMax) {
        res = setRangeValue(value.min - diffSMax, max);
      }

      const diffSMin = value.min < min ? value.min : 0;

      if (diffSMin) {
        res = setRangeValue(0, value.max + diffSMin);
      }

      return res;
    };

    const fireworksOptions = ['#eee', '#ddd', '#ccc', '#bbb', '#aaa']
      .map((color) => {
        const rgb = stringToRgb(color);

        if (!rgb) {
          return undefined;
        }

        const hsl = rgbToHsl(rgb),
          sRange = fixRange({ min: hsl.s - 20, max: hsl.s + 20 }, 0, 100),
          lRange = fixRange({ min: hsl.l - 20, max: hsl.l + 20 }, 0, 100);

        return {
          color: {
            value: {
              h: hsl.h,
              s: sRange,
              l: lRange,
            },
          },
          stroke: {
            width: 0,
          },
          number: {
            value: 0,
          },
          collisions: {
            enable: false,
          },
          opacity: {
            value: {
              min: 0.1,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 0.7,
              sync: false,
              startValue: 'max',
              destroy: 'min',
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 2 },
            animation: {
              enable: true,
              speed: 5,
              count: 1,
              sync: false,
              startValue: 'min',
              destroy: 'none',
            },
          },
          life: {
            count: 1,
            duration: {
              value: {
                min: 1,
                max: 2,
              },
            },
          },
          move: {
            decay: 0.05,
            enable: true,
            gravity: {
              enable: true,
              inverse: false,
              acceleration: 5,
            },
            speed: { min: 5, max: 10 },
            direction: 'none',
            outModes: 'destroy',
          },
        };
      })
      .filter((t) => t !== undefined);

    const options = {
      detectRetina: true,
      fpsLimit: 120,
      emitters: {
        direction: 'top',
        life: {
          count: 0,
          duration: 0.1,
          delay: 0.1,
        },
        rate: {
          delay: 1,
          quantity: 1,
        },
        size: {
          width: 100,
          height: 0,
        },
        position: {
          y: 100,
          x: 50,
        },
      },
      particles: {
        number: {
          value: 0,
        },
        destroy: {
          mode: 'split',
          split: {
            count: 1,
            factor: {
              value: 0.333333,
            },
            rate: {
              value: 100,
            },
            particles: fireworksOptions,
          },
        },
        life: {
          count: 1,
        },
        shape: {
          type: 'line',
        },
        size: {
          value: {
            min: 0.1,
            max: 50,
          },
          animation: {
            enable: true,
            sync: true,
            speed: 90,
            startValue: 'max',
            destroy: 'min',
          },
        },
        stroke: {
          color: {
            value: '#eee',
          },
          width: 1,
        },
        rotate: {
          path: true,
        },
        move: {
          enable: true,
          gravity: {
            acceleration: 15,
            enable: true,
            inverse: true,
            maxSpeed: 100,
          },
          speed: {
            min: 10,
            max: 20,
          },
          outModes: {
            default: 'destroy',
            top: 'none',
          },
        },
      },
    };

    return <Particles options={options} init={this.customInit} />;
  }
}

export default ParticlesContainer;
