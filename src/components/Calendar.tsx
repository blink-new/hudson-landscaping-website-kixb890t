import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Calendar as CalendarIcon, DollarSign } from 'lucide-react'
import { useToast } from '../hooks/use-toast'

interface CalendarProps {
  user: { id: string; email: string } | null
}

const Calendar: React.FC<CalendarProps> = ({ user }) => {
  const location = useLocation()
  const { toast } = useToast()
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [selectedPackage, setSelectedPackage] = useState('')
  const [hours, setHours] = useState(1)
  const [people, setPeople] = useState(1)
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)

  // Pre-select package if coming from packages page
  useEffect(() => {
    if (location.state?.packageId) {
      setSelectedPackage(location.state.packageId)
    }
  }, [location.state])

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

  const packages = [
    { id: 'year-round-complete', name: 'Year-Round Complete Care', price: 2400 },
    { id: 'seasonal-maintenance', name: 'Seasonal Maintenance Package', price: 800 },
    { id: 'snow-season-premium', name: 'Snow Season Premium', price: 1200 },
    { id: 'lawn-perfection', name: 'Lawn Perfection Package', price: 600 },
    { id: 'landscape-design-build', name: 'Landscape Design & Build', price: 3500 },
    { id: 'spring-summer-combo', name: 'Spring & Summer Combo', price: 1400 },
    { id: 'commercial-grounds', name: 'Commercial Grounds Care', price: 5000 },
    { id: 'weekend-warrior', name: 'Weekend Warrior Package', price: 400 },
    { id: 'eco-friendly-care', name: 'Eco-Friendly Care Package', price: 900 },
    { id: 'holiday-ready', name: 'Holiday Ready Package', price: 300 }
  ]

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  const calculatePrice = () => {
    if (selectedPackage) {
      const pkg = packages.find(p => p.id === selectedPackage)
      return pkg ? pkg.price : 0
    }
    return hours * people * 20
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to book an appointment.",
        variant: "destructive"
      })
      return
    }

    if (!selectedDate || !selectedTime || (!selectedService && !selectedPackage)) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      })
      return
    }

    setLoading(true)

    try {
      // Here we would normally save to database
      // For now, just show success message
      toast({
        title: "Appointment booked!",
        description: `Your appointment has been scheduled for ${selectedDate} at ${selectedTime}.`,
      })

      // Reset form
      setSelectedDate('')
      setSelectedTime('')
      setSelectedService('')
      setSelectedPackage('')
      setHours(1)
      setPeople(1)
      setNotes('')
      
    } catch {
      toast({
        title: "Error",
        description: "Failed to book appointment. Please try again.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="text-center py-16">
              <CalendarIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Log In</h2>
              <p className="text-gray-600">You need to be logged in to book an appointment.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Book Your Appointment</h1>
          <p className="text-xl text-gray-600">Schedule your landscaping or snow removal service</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CalendarIcon className="w-6 h-6" />
              <span>Appointment Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <Label htmlFor="service">Individual Service (Optional)</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(services).map(([season, serviceList]) => (
                      <React.Fragment key={season}>
                        <SelectItem value={`${season}-header`} disabled className="font-bold capitalize">
                          {season} Services
                        </SelectItem>
                        {serviceList.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </React.Fragment>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Package Selection */}
              <div>
                <Label htmlFor="package">Package Deal (Optional)</Label>
                <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                  <SelectContent>
                    {packages.map((pkg) => (
                      <SelectItem key={pkg.id} value={pkg.id}>
                        {pkg.name} - ${pkg.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Hours and People (only for individual services) */}
              {selectedService && !selectedPackage && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hours">Number of Hours</Label>
                    <Input
                      id="hours"
                      type="number"
                      min="1"
                      max="12"
                      value={hours}
                      onChange={(e) => setHours(parseInt(e.target.value) || 1)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="people">Number of People</Label>
                    <Input
                      id="people"
                      type="number"
                      min="1"
                      max="10"
                      value={people}
                      onChange={(e) => setPeople(parseInt(e.target.value) || 1)}
                    />
                  </div>
                </div>
              )}

              {/* Price Display */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="font-medium">Total Price:</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">
                      ${calculatePrice()}
                    </span>
                  </div>
                  {selectedService && !selectedPackage && (
                    <p className="text-sm text-gray-600 mt-2">
                      {hours} hour{hours !== 1 ? 's' : ''} × {people} person{people !== 1 ? 's' : ''} × $20/hour
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Notes */}
              <div>
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any special requests or additional information..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={loading}
              >
                {loading ? 'Booking...' : 'Book Appointment'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Calendar