import * as React from 'react';
import Particles from 'react-particles-js';

import { PARTICLES_JS_CONFIG } from '../../settings';
import './Particles.scss';

const RParticles: React.FC = () => {
  return (
    <Particles
      params={PARTICLES_JS_CONFIG}
      className='particles-canvas'
    />
  );
};

export default RParticles;
