import type { MetaFunction, LoaderFunction } from "react-router";

export namespace Route {
export type MetaArgs = Parameters<MetaFunction>[0];
export type LoaderArgs = Parameters<LoaderFunction>[0];
}
