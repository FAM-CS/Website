import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global, ThemeProvider } from '@emotion/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//~ File imports
import Root from './pages/Root.tsx'
import theme, { globalStyles } from './themes/theme.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import Blog from './pages/Blog.tsx'
import Error from './pages/Error.tsx'

//~ Set up router and paths
const router = createBrowserRouter([{
    path: "/",
    errorElement: <Root><Error /></Root>,
    element: <Root />,
    children: [
        { index: true, element: <About title="About | Fatima A. Moussaoui" /> },
        {
            path: "about",
            element: <About title="About | Fatima A. Moussaoui" />,
        },
        {
            path: "projects",
            element: <Projects title="Projects | Fatima A. Moussaoui" />,
        },
        {
            path: "blog",
            element: <Blog title="Blog | Fatima A. Moussaoui" />,
        }
    ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Global styles={globalStyles} />
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
)
