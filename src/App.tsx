import { Route, Routes, useLocation } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { useScrollReveal } from '@/lib/hooks'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { HomePage } from '@/pages/HomePage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { StudioPage } from '@/pages/StudioPage'
import { ContactPage } from '@/pages/ContactPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export default function App() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useScrollReveal([pathname])

  return (
    <div className="flex min-h-svh flex-col">
      <ScrollToTop />
      <SiteHeader transparent={isHome} />

      <main key={pathname} className={cn('page-enter flex-1', !isHome && 'pt-16 md:pt-20')}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <SiteFooter />
    </div>
  )
}
