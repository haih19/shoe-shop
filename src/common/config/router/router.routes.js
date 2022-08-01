// import HomePage from 'pages/home/HomePage';
import HomePage from '../../../pages/home/HomePage';
// import PageNotFound from 'pages/error/PageNotFound';
import PageNotFound from '../../../pages/error/PageNotFound';
// import CartPage from 'pages/app/Cart/CartPage';
import CartPage from '../../../pages/app/Cart/CartPage';
// import AccountPage from 'pages/app/Account';
import AccountPage from '../../../pages/app/Account/AccountPage';
import SignUpPage from '../../../pages/auth/SignUp/SignUpPage';
import LoginPage from '../../../pages/auth/Login/LoginPage';
import DashboardPage from '../../../pages/admin/Dashboard/DashboardPage';
import routerPath from './router.path';


const staticRoute = [
    {
        path: routerPath.common.HOME,
        element: <HomePage />
    },
    {
        path: routerPath.common.NOT_FOUND,
        element: <PageNotFound />
    },
    {
        path: routerPath.app.CART,
        element: <CartPage />
    }
]

const deleteRoute = [
    {
        path: routerPath.auth.USER_REGISTER,
        element: <SignUpPage />
    },
    {
        path: routerPath.auth.LOGIN,
        element: <LoginPage />
    }
]

const clientRoute = [
    {
        path: routerPath.app.MY_ACCOUNT,
        element: <AccountPage />
    }
]

const adminRoute = [
    {
        path: routerPath.admin.DASHBOARD,
        element: <DashboardPage />
    }
]


const renderRoute = () => {
    return [...staticRoute, ...clientRoute]
}

export default renderRoute