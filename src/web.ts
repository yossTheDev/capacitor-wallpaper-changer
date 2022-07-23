import { WebPlugin } from '@capacitor/core';

import type { WallpaperChangerPlugin } from './definitions';

export class WallpaperChangerWeb extends WebPlugin implements WallpaperChangerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
