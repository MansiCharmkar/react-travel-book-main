import "./global.css";
import LoginPage from "./pages/LoginPage";
import AppPage from "./pages/AppPage";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from "react-router";

const AppRoutesV1 = function () {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/app" element={<AppPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

const AppRoutesV2 = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/product", element: <ProductPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/app", element: <AppPage /> },
    { path: "*", element: <ErrorPage /> },
]);

function App() {
    // return <AppRoutesV1 />;
    return <RouterProvider router={AppRoutesV2} />;
}

export default App;
