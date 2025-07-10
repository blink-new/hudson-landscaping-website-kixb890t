import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { blink } from './blink/client'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Packages from './components/Packages'
import Calendar from './components/Calendar'
import Admin from './components/Admin'
import LoginModal from './components/LoginModal'
import { Toaster } from './components/ui/toaster'
import Footer from './components/Footer'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showLoginModal, setShowLoginModal] = useState(false)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header user={user} onLogin={() => setShowLoginModal(true)} />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Services />
              <Packages />
            </main>
          } />
          <Route path="/calendar" element={<Calendar user={user} />} />
          <Route path="/admin" element={<Admin user={user} />} />
        </Routes>

        <Footer />

        {showLoginModal && (
          <LoginModal onClose={() => setShowLoginModal(false)} />
        )}
        
        <Toaster />
      </div>
    </Router>
  )
}

export default App