import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Calendar, Leaf, Snowflake, Sun, CloudRain } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Hudson Landscaping
            <span className="block text-4xl md:text-5xl text-green-600">& Snow Services</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Professional landscaping and snow removal services for all seasons. 
            Transform your outdoor space and keep it beautiful year-round.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/calendar">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Appointment
              </Button>
            </Link>
            <a href="#services">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Services
              </Button>
            </a>
          </div>

          {/* Seasonal Icons */}
          <div className="flex justify-center items-center space-x-8 text-gray-600">
            <div className="flex flex-col items-center">
              <Leaf className="w-8 h-8 text-green-500 mb-2" />
              <span className="text-sm font-medium">Spring</span>
            </div>
            <div className="flex flex-col items-center">
              <Sun className="w-8 h-8 text-yellow-500 mb-2" />
              <span className="text-sm font-medium">Summer</span>
            </div>
            <div className="flex flex-col items-center">
              <CloudRain className="w-8 h-8 text-orange-500 mb-2" />
              <span className="text-sm font-medium">Fall</span>
            </div>
            <div className="flex flex-col items-center">
              <Snowflake className="w-8 h-8 text-blue-500 mb-2" />
              <span className="text-sm font-medium">Winter</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20"></div>
      </div>
    </section>
  )
}

export default Hero