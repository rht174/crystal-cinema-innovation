import { IS_GITHUB_PAGES, BASE_PATH } from "./constants";

export const getImagePath = (path: string): string => {
  return IS_GITHUB_PAGES ? `${BASE_PATH}${path}` : path;
};
