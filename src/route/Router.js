import Author from "../pages/Author/Author";
import Colors from "../pages/Colors/Colors";
import Main from "../pages/Main/Main";
import { AUTHOR_PAGE_PATH, COLORS_PAGE_PATH, MAIN_PAGE_PATH } from "../utils/path";

export const router = [
    {
      path: MAIN_PAGE_PATH,
      element: <Main />,
    },
    {
      path: AUTHOR_PAGE_PATH,
      element: <Author />,
    },
    {
      path: COLORS_PAGE_PATH,
      element: <Colors />,
    },
  ];