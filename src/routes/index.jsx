import { useRoutes } from 'react-router-dom';
import MainPage from '../view/MainPage';
import BANPage from '../view/BANPage';

const routes = [
  {
    path: '',
    element: <MainPage />
  },
  {
    path: '/ban',
    element: <BANPage />
  }
];

const Routes = () => {
  return useRoutes(routes);
};

export default Routes;
