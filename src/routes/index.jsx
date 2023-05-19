import { useRoutes } from 'react-router-dom';
import MainPage from '../view/MainPage';
import Second from '../view/Second';
import BANPage from '../view/BANPage';

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
  }
];

const Routes = () => {
  return useRoutes(routes);
  // return <KotProvider>{useRoutes(routes)}</KotProvider>;
};

export default Routes;
