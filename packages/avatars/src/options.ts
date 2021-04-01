/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * @deprecated use dataUri instead
 */
export type Base64 = boolean;
export type DataUri = boolean;
/**
 * @deprecated
 */
export type UserAgent = string;
export type Radius = number;
export type Size = number;
export type Margin = number;
export type Background = string | "transparent";

export interface Options {
  base64?: Base64;
  dataUri?: DataUri;
  userAgent?: UserAgent;
  radius?: Radius;
  r?: Radius;
  width?: Size;
  w?: Size;
  height?: Size;
  h?: Size;
  margin?: Margin;
  m?: Margin;
  background?: Background;
  b?: Background;
}
