import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Container, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import theme from './theme/index.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Favorites from './pages/Favorites.tsx'
import { Toaster } from 'sonner'
import Layout from './components/Layout.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/favorites",
    element: <Layout><Favorites /></Layout>
  },
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container >
        <Toaster richColors />
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  </React.StrictMode>,
)
