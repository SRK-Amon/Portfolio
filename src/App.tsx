import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import HomeMeLayaout from './Layouts/HomeLayaout'
import NotFound from './pages/NotFound'
import RainEffect from './components/RainEffect'

const App = () => {
  return (
    <BrowserRouter>
      <RainEffect />
      <Routes>
        <Route path='/' element={<HomeMeLayaout />}>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
        </Route>
          <Route path='/*' element={<NotFound  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App