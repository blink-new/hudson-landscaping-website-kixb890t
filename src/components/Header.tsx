import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { Leaf, Phone, Mail, LogOut, User, Calendar } from 'lucide-react'
import { blink } from '../blink/client'

interface HeaderProps {
  user: any
  onLogin: () => void
}

const Header: React.FC<HeaderProps> = ({ user, onLogin }) => {
  const location = useLocation()

  const handleLogout = () => {
    blink.auth.logout()
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top contact bar */}
        <div className="py-2 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(216) 316-7289</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(216) 379-1335</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>dniaura@iCloud.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>ethanpmoore@iCloud.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 font-serif">Hudson Landscaping</h1>
                <p className="text-sm text-gray-600">& Snow Services</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors ${
                  location.pathname === '/' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/calendar" 
                className={`font-medium transition-colors ${
                  location.pathname === '/calendar' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Book Appointment
              </Link>
              {user && (
                <Link 
                  to="/admin" 
                  className={`font-medium transition-colors ${
                    location.pathname === '/admin' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  Admin
                </Link>
              )}
            </nav>

            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span>{user.email}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    <LogOut className="w-4 h-4 mr-1" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button onClick={onLogin}>
                  Login
                </Button>
              )}
              <Link to="/calendar">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header