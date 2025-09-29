import { ReactNode } from "react";

export type NavRouteTypes = {
  name: string;
  path: string;
};

export type NavRoutesTypes = {
  name: string;
  path: string;
  childRoutes?: NavRouteTypes[];
};

export type NavContentTypes = { cta: string; routes: NavRoutesTypes[] };

export type SearchParams = {
  id: string;
  tab: string;
  artId: string;
};
