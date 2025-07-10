import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Badge } from './ui/badge'
import { Leaf, Sun, CloudRain, Snowflake, Clock, Users, DollarSign } from 'lucide-react'

const Services: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState('spring')

  const services = {
    spring: [
      'Lawn Aeration', 'Spring Cleanup', 'Mulch Installation', 'Flower Bed Preparation', 'Seeding',
      'Fertilizer Application', 'Weed Control', 'Pruning Shrubs', 'Tree Trimming', 'Soil Testing',
      'Garden Design', 'Planting Annuals', 'Perennial Care', 'Landscape Edging', 'Irrigation Setup',
      'Drainage Solutions', 'Retaining Wall Installation', 'Pathway Creation', 'Deck Cleaning', 'Fence Repair',
      'Outdoor Lighting Installation', 'Gazebo Setup', 'Garden Maintenance', 'Lawn Dethatching', 'Overseeding'
    ],
    summer: [
      'Lawn Mowing', 'Hedge Trimming', 'Weeding', 'Watering Systems', 'Pest Control',
      'Disease Treatment', 'Deadheading Flowers', 'Vegetable Garden Care', 'Tree Care', 'Lawn Fertilizing',
      'Sprinkler Maintenance', 'Pool Landscaping', 'Patio Installation', 'Outdoor Kitchen Setup', 'Pergola Construction',
      'Outdoor Furniture Setup', 'Garden Harvesting', 'Lawn Striping', 'Edging', 'Leaf Blowing',
      'Pressure Washing', 'Outdoor Event Setup', 'Lawn Care Maintenance', 'Irrigation Repair', 'Landscape Refresh'
    ],
    fall: [
      'Leaf Removal', 'Fall Cleanup', 'Winterizing Plants', 'Bulb Planting', 'Tree Preparation',
      'Gutter Cleaning', 'Lawn Winterization', 'Mulch Refresh', 'Plant Protection', 'Tool Winterization',
      'Outdoor Furniture Storage', 'Garden Cleanup', 'Compost Setup', 'Fall Seeding', 'Aeration',
      'Fertilizer Application', 'Shrub Covering', 'Tree Wrapping', 'Sprinkler Blowout', 'Equipment Storage',
      'Landscape Lighting Check', 'Hardscape Maintenance', 'Drainage Preparation', 'Winter Plant Care', 'Seasonal Decoration'
    ],
    winter: [
      'Snow Removal', 'Ice Management', 'Driveway Clearing', 'Walkway Salting', 'Roof Snow Removal',
      'Emergency Snow Service', 'Commercial Snow Plowing', 'Residential Snow Plowing', 'Ice Dam Prevention', 'Sidewalk Clearing',
      'Parking Lot Maintenance', 'Salt Application', 'Sand Application', 'Equipment Maintenance', 'Holiday Decorating',
      'Winter Plant Care', 'Tree Damage Assessment', 'Storm Cleanup', 'Winter Prep Services', 'Heating System Check',
      'Pipe Freeze Prevention', 'Winter Mulching', 'Greenhouse Maintenance', 'Indoor Plant Care', '24/7 Emergency Service'
    ]
  }

  const seasonIcons = {
    spring: Leaf,
    summer: Sun,
    fall: CloudRain,
    winter: Snowflake
  }

  const seasonColors = {
    spring: 'text-green-600 bg-green-50',
    summer: 'text-yellow-600 bg-yellow-50',
    fall: 'text-orange-600 bg-orange-50',
    winter: 'text-blue-600 bg-blue-50'
  }

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional landscaping and maintenance services tailored to each season's unique needs.
          </p>
        </div>

        <Tabs value={selectedSeason} onValueChange={setSelectedSeason} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {Object.keys(services).map((season) => {
              const Icon = seasonIcons[season as keyof typeof seasonIcons]
              return (
                <TabsTrigger 
                  key={season} 
                  value={season}
                  className="flex items-center space-x-2"
                >
                  <Icon className="w-4 h-4" />
                  <span className="capitalize">{season}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {Object.entries(services).map(([season, serviceList]) => (
            <TabsContent key={season} value={season}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceList.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center justify-between">
                        <span>{service}</span>
                        <Badge className={seasonColors[season as keyof typeof seasonColors]}>
                          {season}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4" />
                          <span>$20/hour per person</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>Flexible scheduling</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>Professional team</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default Services