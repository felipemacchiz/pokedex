import { createBrowserRouter } from "react-router";
import PokedexList from "./features/pokedex/screens/List";
import PokedexShow from "./features/pokedex/screens/Show";
import NotFoundScreen from "./components/NotFound/Screen";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PokedexList />,
  },
  {
    path: '/pokemon/:name',
    element: <PokedexShow />,
  },
  {
    path: '/*',
    element: <NotFoundScreen />,
  },
]);
