import { Navigate, Route, BrowserRouter, Routes, useLocation } from 'react-router-dom'
import { LangProvider } from './i18n/LangProvider.jsx'
import HomePage from './pages/HomePage.jsx'
import AnimationListPage from './pages/AnimationListPage.jsx'
import AnimationProjectPage from './pages/AnimationProjectPage.jsx'
import VrLandingPage from './pages/VrLandingPage.jsx'
import SenseOfNowherePage from './pages/SenseOfNowherePage.jsx'
import IllustrationListPage from './pages/IllustrationListPage.jsx'
import IllustrationProjectPage from './pages/IllustrationProjectPage.jsx'
import ComicsListPage from './pages/ComicsListPage.jsx'
import ComicsProjectPage from './pages/ComicsProjectPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

function TrailingSlashRedirect() {
  const { pathname, search, hash } = useLocation()
  if (pathname !== '/' && !pathname.endsWith('/')) {
    return <Navigate to={`${pathname}/${search}${hash}`} replace />
  }
  return null
}

function AppRoutes() {
  return (
    <>
      <TrailingSlashRedirect />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/zh/" element={<HomePage />} />

        <Route path="/animation/" element={<AnimationListPage />} />
        <Route path="/zh/animation/" element={<AnimationListPage />} />
        <Route path="/animation/:slug/" element={<AnimationProjectPage />} />
        <Route path="/zh/animation/:slug/" element={<AnimationProjectPage />} />

        <Route path="/vr/" element={<VrLandingPage />} />
        <Route path="/zh/vr/" element={<VrLandingPage />} />
        <Route path="/vr-son/" element={<SenseOfNowherePage />} />
        <Route path="/zh/vr-son/" element={<SenseOfNowherePage />} />

        <Route path="/illustration/" element={<IllustrationListPage />} />
        <Route path="/zh/illustration/" element={<IllustrationListPage />} />
        <Route path="/illustration/:slug/" element={<IllustrationProjectPage />} />
        <Route path="/zh/illustration/:slug/" element={<IllustrationProjectPage />} />

        <Route path="/comics/" element={<ComicsListPage />} />
        <Route path="/zh/comics/" element={<ComicsListPage />} />
        <Route path="/comics/:slug/" element={<ComicsProjectPage />} />
        <Route path="/zh/comics/:slug/" element={<ComicsProjectPage />} />

        <Route path="/about-contact/" element={<AboutPage />} />
        <Route path="/zh/about-contact/" element={<AboutPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LangProvider>
        <AppRoutes />
      </LangProvider>
    </BrowserRouter>
  )
}
