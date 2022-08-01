import './App.css';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import renderRoute from './common/config/router/router.routes'
import routerPath from './common/config/router/router.path';
import { useMemo, useEffect } from 'react';

const ListRoute = () => {
  const location = useLocation();
  const routeList = useMemo(() => {
    return renderRoute();
    // })
  }, [location.pathname])

  // const routeList = useEffect(() => {
  //   return renderRoute();
  // }, [location.pathname])

  return (
    <Routes>
      <Route >
        {routeList.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Route>
      <Route path="*" element={<Navigate to={routerPath.common.NOT_FOUND} />} />
    </Routes>
  )
}

function App() {
  // return (
  //   <div className="App">

  //   </div>
  // );
  return (
    <BrowserRouter>
      <ListRoute />
    </BrowserRouter>
  )
}

export default App;


