import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Register from "./pages/Register/Register";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";

const browserRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<NotFound />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="register" element={<Register />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={browserRouter} />;
}

export default App;
