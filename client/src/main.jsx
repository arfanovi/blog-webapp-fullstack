import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import PostDetail from "./pages/PostDetail.jsx"
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import UserProfile from "./pages/UserProfile.jsx"
import Authors from "./pages/Author.jsx"
import CreatePost from "./pages/CreatePost.jsx"
import EditPost from "./pages/EditPost.jsx"
import CategoryPost from "./pages/CategoryPosts.jsx"
import AuthorPosts from "./pages/AuthorPosts.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Logout from "./pages/Logout.jsx"
import AuthorCard from './components/AuthorCard.jsx'
import Author from './pages/Author.jsx'
import DeletePost from './pages/DeletePost.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path:"/posts/:id", element:<PostDetail/>},
      {path: "register", element: <Register/> },
      {path: "login", element: <Login/> },
      {path: "profile/:id", element: <UserProfile/> },
      {path: "/authors", element: <Author/> },
      {path: "create", element: <CreatePost/> },
      {path: "/posts/categories/:category", element: <CategoryPost/> },
      {path: "/posts/author/:authorId", element: <AuthorPosts/> },
      {path: "myposts/:id", element: <Dashboard/> },
      {path: "posts/:id/edit", element: <EditPost/> },
      {path: "posts/:id/delete", element: <DeletePost/> },
      {path: "logout", element: <Logout/> },


    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)



