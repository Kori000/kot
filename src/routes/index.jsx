import { useRoutes } from 'react-router-dom';
import MainPage from '../view/MainPage';
import Second from '../view/Second';
import BANPage from '../view/BANPage';
import NotFoundPage from '../view/404Page';

const routes = [
  {
    path: '',
    element: <MainPage />
  },
  {
    path: '/second',
    element: <Second />
  },
  {
    path: '/ban',
    element: <BANPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

const Routes = () => {
  return useRoutes(routes);
};

export default Routes;
