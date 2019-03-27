import Payments from './lib/Payments';

import IConfig from './lib/interfaces/IConfig';

export function payments(paymentsConfig: IConfig) {
  return new Payments(paymentsConfig);
}
