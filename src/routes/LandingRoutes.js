import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';

// dashboard routing
const Homepage = Loadable(lazy(() => import('views/Home')));

// ==============================|| MAIN ROUTING ||============================== //

const LandingRoutes = {
    path: '/',
    element: <Homepage />
};

export default LandingRoutes;
