import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const MainPage = lazy(() => import("views/pages/MainPage"));
const RegistrationPage = lazy(() => import("views/pages/RegistrationPage"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/registration",
        element: <RegistrationPage />,
    },
]);

function RouterPage() {
    return (
        <Suspense fallback={<div>로딩 중...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default RouterPage;
