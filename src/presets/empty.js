import samples from '../samples.config.json';
import { uuid } from '../services/uuid';

export default {
  bpm: 80,
  channels: [
    {
      id: uuid(),
      sample: samples[0],
      gain: 1,
      notes: [],
    },
  ],
};