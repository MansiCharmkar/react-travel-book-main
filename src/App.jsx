import "./global.css";
import LoginPage from "./pages/LoginPage";
import AppPage from "./pages/AppPage";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

import {
    BrowserRouter,
    createBrowserRouter,
    Navigate,
    Route,
    RouterProvider,
    Routes,
} from "react-router";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import { CitiesProvider } from "./contexts/citiesContext";
import AddCityForm from "./components/AddCityForm";
import City from "./components/City";

const AppRoutesV1 = function () {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="product" element={<ProductPage />} />
                <Route path="login" element={<LoginPage />} />

                <Route
                    path="app"
                    element={
                        <CitiesProvider>
                            <AppPage />
                        </CitiesProvider>
                    }
                >
                    <Route index element={<Navigate replace to="cities" />} />
                    <Route path="cities" element={<CityList />} />
                    <Route path="countries" element={<CountryList />} />
                </Route>

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

const AppRoutesV2 = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/product", element: <ProductPage /> },
    { path: "/login", element: <LoginPage /> },
    {
        path: "/app",
        element: (
            <CitiesProvider>
                <AppPage />
            </CitiesProvider>
        ),
        children: [
            { index: true, element: <Navigate replace to="cities" /> },
            { path: "cities", element: <CityList /> },
            { path: "countries", element: <CountryList /> },
            { path: "form", element: <AddCityForm /> },
            { path: "city/:id", element: <City /> },
        ],
    },
    { path: "*", element: <ErrorPage /> },
]);

function App() {
    // return <AppRoutesV1 />;
    return <RouterProvider router={AppRoutesV2} />;
}

export default App;
