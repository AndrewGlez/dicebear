export type ToJpeg = (avatar: Avatar, options?: Options) => Result;

export type ToPng = (avatar: Avatar, options?: Options) => Result;

export type ToWebp = (avatar: Avatar, options?: Options) => Result;

export type ToAvif = (avatar: Avatar, options?: Options) => Result;

export type Avatar = { toString(): string } | string;

export interface Result {
  toDataUri(): Promise<string>;
  toArrayBuffer(): Promise<ArrayBufferLike>;
}

export interface Exif {
  [key: string]: string;
}

export interface Options {
  fonts?: string[];
  includeExif?: boolean;
}
