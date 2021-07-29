import { registerPlugin } from '@capacitor/core';

import type { PaciolanSdkPlugin } from './definitions';

const PaciolanSdk = registerPlugin<PaciolanSdkPlugin>('Paciolan', {
  web: () => import('./web').then(m => new m.PaciolanSdkPluginWeb()),
});

export * from './definitions';
export { PaciolanSdk };
