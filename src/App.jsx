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
import { AuthProvider } from "./contexts/userContext";
import { Toaster } from "react-hot-toast";

const AppRoutesV1 = function () {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="product" element={<ProductPage />} />
                <Route path="Account" element={<LoginPage />} />

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

function App() {
    // return <AppRoutesV1 />;

    return (
        <AuthProvider>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    duration: 5000,
                    removeDelay: 1000,
                    style: {
                        background: "#fff9db",
                        color: "#343a40",
                        fontSize: "1.4rem",
                        borderRadius: "0.4rem",
                    },
                }}
            />
            <RouterProvider
                router={createBrowserRouter([
                    { path: "/", element: <HomePage /> },
                    { path: "/product", element: <ProductPage /> },
                    { path: "/account", element: <LoginPage /> },
                    {
                        path: "/app",
                        element: (
                            <CitiesProvider>
                                <AppPage />
                            </CitiesProvider>
                        ),
                        children: [
                            {
                                index: true,
                                element: <Navigate replace to="cities" />,
                            },
                            { path: "cities", element: <CityList /> },
                            { path: "countries", element: <CountryList /> },
                            { path: "form", element: <AddCityForm /> },
                            { path: "city/:id", element: <City /> },
                        ],
                    },
                    { path: "*", element: <ErrorPage /> },
                ])}
            />
        </AuthProvider>
    );
}

export default App;
