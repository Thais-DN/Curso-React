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
import Login from "./pages/Login/Login";
import AuthProvider from "./providers/AuthProvider/AuthProvider";
import Posts from "./pages/Posts/Posts";
import Products from "./pages/Products/Products";
import CreateProduct from "./pages/CreateProduct/CreateProduct";

const browserRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Layout />} errorElement={<NotFound />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="posts/:postId" element={<Posts />} />
            </Route>
            <Route path="/products">
                <Route index element={<Products />} />
                <Route path="create" element={<CreateProduct />} />
                <Route path=":productId" element={null} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
        </Route>
    )
);

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={browserRouter} />
        </AuthProvider>
    );
}

export default App;
