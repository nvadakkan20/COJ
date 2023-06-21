import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTasks = Loadable(lazy(() => import('views/utilities/Tasks')));
const UtilsEvents = Loadable(lazy(() => import('views/utilities/Events')));
const UtilsProgress = Loadable(lazy(() => import('views/utilities/Progress')));
const UtilsCourses = Loadable(lazy(() => import('views/utilities/Courses')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-tasks',
          element: <UtilsTasks />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-events',
          element: <UtilsEvents />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-progress',
          element: <UtilsProgress />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-courses',
          element: <UtilsCourses />
        }
      ]
    },
  ]
};

export default MainRoutes;
