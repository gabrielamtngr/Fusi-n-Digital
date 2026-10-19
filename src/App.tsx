import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Talent from './pages/Talent'
import FusionadosLeader from './pages/FusionadosLeader'
import Opportunities from './pages/Opportunities'
import PandaTrainee from './pages/PandaTrainee'
import Work from './pages/Work'
import CaseStudy from './pages/CaseStudy'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import { Privacy, Terms } from './pages/Legal'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="servicios" element={<Services />} />
        <Route path="servicios/:slug" element={<ServiceDetail />} />
        <Route path="talento" element={<Talent />} />
        <Route path="talento/fusionados-leader" element={<FusionadosLeader />} />
        <Route path="talento/oportunidades" element={<Opportunities />} />
        <Route path="talento/panda-trainee" element={<PandaTrainee />} />
        <Route path="trabajo" element={<Work />} />
        <Route path="trabajo/:slug" element={<CaseStudy />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="privacidad" element={<Privacy />} />
        <Route path="terminos" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
