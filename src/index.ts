import { registerPlugin } from '@capacitor/core';

import type { WallpaperChangerPlugin } from './definitions';

const WallpaperChanger = registerPlugin<WallpaperChangerPlugin>('WallpaperChanger', {
  web: () => import('./web').then(m => new m.WallpaperChangerWeb()),
});

export * from './definitions';
export { WallpaperChanger };
