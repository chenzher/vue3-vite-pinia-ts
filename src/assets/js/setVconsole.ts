import Vconsole from 'vconsole';
import { needVconsole } from '../../../build/config';

export const setVconsole = () => {
  const env = import.meta.env.VITE_ENV;
  if (needVconsole && env !== 'production') {
    const vConsole = new Vconsole();
    setTimeout(() => {
      vConsole.setSwitchPosition(0, 100);
    }, 0);
  }
};
