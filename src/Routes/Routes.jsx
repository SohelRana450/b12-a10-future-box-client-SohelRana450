import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import ExploreArtworks from "../Pages/ExploreArtworks";
import AddArtwork from "../Pages/AddArtwork";
import MyGallery from "../Pages/MyGallery";
import MyFavorites from "../Pages/MyFavorites";
import AuthLayout from "../Layout/AuthLayout";

const router = createBrowserRouter(
    [
        {
          path: "/",
          element: <HomeLayout></HomeLayout>,
          children: [
            {
                index: true,
                element:<Home></Home>
            },
            {
                path: "/explore-artworks",
                element: <ExploreArtworks></ExploreArtworks>
            },
            {
                path: "/add-artwork",
                element: <AddArtwork></AddArtwork>
            },
            {
                path: "/my-gallery",
                element: <MyGallery></MyGallery>
            },
            {
                path: "/my-favorites",
                element: <MyFavorites></MyFavorites>
            }
          ]

        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                
            ]
        }
    ]
)

export default router;