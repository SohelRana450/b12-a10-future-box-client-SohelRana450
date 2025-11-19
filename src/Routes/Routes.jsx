import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import ExploreArtworks from "../Pages/ExploreArtworks";
import AddArtwork from "../Pages/AddArtwork";
import MyGallery from "../Pages/MyGallery";
import MyFavorites from "../Pages/MyFavorites";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "../Provider/PrivateRoute";
import ArtworkDetails from "../Pages/ArtworkDetails";
import UpdateGallery from "../components/UpdateGallery";
import MyGalleryDetails from "../components/MyGalleryDetails";
import UpdatedArtwork from "../Pages/UpdatedArtwork";
import MyFavoriteDetails from "../Pages/MyFavoriteDetails";

const router = createBrowserRouter(
    [
        {
          path: "/",
          element: <HomeLayout></HomeLayout>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
            {
                index: '/',
                element:<Home></Home>,
                
            },
            {
                path: "/explore-artworks",
                element: <ExploreArtworks></ExploreArtworks>
            },
            {
                path: "/add-artwork",
                element: <PrivateRoute><AddArtwork></AddArtwork></PrivateRoute>,
                
            },
            {
                path: "/artwork-details/:id",
                element: <PrivateRoute><ArtworkDetails></ArtworkDetails></PrivateRoute>,
                
            },
            {
                path: "/my-gallery",
                element: <PrivateRoute><MyGallery></MyGallery></PrivateRoute>
            },
            {
                path: "/my-gallery-details/:id",
                element: <PrivateRoute><MyGalleryDetails></MyGalleryDetails></PrivateRoute>
            },
            {
                path: "/my-favortie-details/:id",
                element: <PrivateRoute><MyFavoriteDetails></MyFavoriteDetails></PrivateRoute>
            },
            {
                path: "/updated-artwork/:id",
                
                element: <PrivateRoute><UpdatedArtwork></UpdatedArtwork></PrivateRoute>
            },
            {
                path: "/my-favorites",
                element: <PrivateRoute><MyFavorites></MyFavorites></PrivateRoute>
            }
          ]

        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <LogIn></LogIn> 
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                }
            ]
        }
    ]
)

export default router;