import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Check, Star, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const Packages: React.FC = () => {
  const packages = [
    {
      id: 'year-round-complete',
      name: 'Year-Round Complete Care',
      price: 2400,
      duration: 12,
      popular: true,
      features: [
        'Spring cleanup and preparation',
        'Summer lawn maintenance (weekly)',
        'Fall cleanup and winterization',
        'Snow removal (residential)',
        'Seasonal fertilizer applications',
        'Pest and weed control',
        'Priority scheduling',
        '24/7 emergency service'
      ]
    },
    {
      id: 'seasonal-maintenance',
      name: 'Seasonal Maintenance Package',
      price: 800,
      duration: 3,
      popular: false,
      features: [
        'Season-specific maintenance',
        'Bi-weekly service visits',
        'Basic lawn care',
        'Trimming and pruning',
        'Seasonal cleanup',
        'Equipment maintenance'
      ]
    },
    {
      id: 'snow-season-premium',
      name: 'Snow Season Premium',
      price: 1200,
      duration: 4,
      popular: false,
      features: [
        'Unlimited snow removal',
        'Ice management services',
        'Driveway and walkway clearing',
        'Salt/sand application',
        '24/7 emergency response',
        'Commercial services available'
      ]
    },
    {
      id: 'lawn-perfection',
      name: 'Lawn Perfection Package',
      price: 600,
      duration: 6,
      popular: false,
      features: [
        'Weekly lawn mowing',
        'Edging and trimming',
        'Fertilizer applications',
        'Weed control treatment',
        'Aeration services',
        'Overseeding as needed'
      ]
    },
    {
      id: 'landscape-design-build',
      name: 'Landscape Design & Build',
      price: 3500,
      duration: 12,
      popular: false,
      features: [
        'Custom landscape design',
        'Professional installation',
        'Plant selection and sourcing',
        'Hardscape elements',
        'Irrigation system setup',
        'One year maintenance included'
      ]
    },
    {
      id: 'spring-summer-combo',
      name: 'Spring & Summer Combo',
      price: 1400,
      duration: 6,
      popular: true,
      features: [
        'Spring cleanup and prep',
        'Summer maintenance program',
        'Weekly lawn care',
        'Flower bed maintenance',
        'Trimming and pruning',
        'Pest control services'
      ]
    },
    {
      id: 'commercial-grounds',
      name: 'Commercial Grounds Care',
      price: 5000,
      duration: 12,
      popular: false,
      features: [
        'Year-round commercial maintenance',
        'Multiple service visits per week',
        'Professional appearance standards',
        'Emergency response included',
        'Seasonal decorating options',
        'Dedicated account manager'
      ]
    },
    {
      id: 'weekend-warrior',
      name: 'Weekend Warrior Package',
      price: 400,
      duration: 3,
      popular: false,
      features: [
        'Weekend-only services',
        'Flexible scheduling',
        'Basic lawn maintenance',
        'Cleanup services',
        'Equipment provided',
        'Perfect for busy homeowners'
      ]
    },
    {
      id: 'eco-friendly-care',
      name: 'Eco-Friendly Care Package',
      price: 900,
      duration: 6,
      popular: false,
      features: [
        'Organic fertilizers only',
        'Natural pest control',
        'Native plant recommendations',
        'Water-conscious practices',
        'Compost services',
        'Sustainable landscaping'
      ]
    },
    {
      id: 'holiday-ready',
      name: 'Holiday Ready Package',
      price: 300,
      duration: 2,
      popular: false,
      features: [
        'Pre-holiday cleanup',
        'Seasonal decorating',
        'Lighting installation',
        'Post-holiday cleanup',
        'Storage services',
        'Perfect for entertaining'
      ]
    }
  ]

  return (
    <section id="packages" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Package Deals</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save money with our comprehensive package deals designed for year-round care and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`relative hover:shadow-xl transition-shadow ${pkg.popular ? 'ring-2 ring-green-500' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-600 text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-green-600">${pkg.price}</span>
                  <span className="text-gray-600 ml-2">/ {pkg.duration} months</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Link to="/calendar" state={{ packageId: pkg.id }}>
                    <Button 
                      className={`w-full ${pkg.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}
                      variant={pkg.popular ? 'default' : 'outline'}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book This Package
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages