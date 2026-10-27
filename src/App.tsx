import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { Shell } from './components/Shell'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { WorkCasePage } from './pages/WorkCasePage'
import { WorkIndexPage } from './pages/WorkIndexPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<HomePage />} />
          <Route path="work" element={<WorkIndexPage />} />
          <Route path="work/:slug" element={<WorkCasePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
