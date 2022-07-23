export interface WallpaperChangerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
