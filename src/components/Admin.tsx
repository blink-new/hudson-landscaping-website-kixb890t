import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Badge } from './ui/badge'
import { 
  Calendar, 
  Settings, 
  Users, 
  Package, 
  Shield,
  Edit,
  Trash2,
  Plus
} from 'lucide-react'

interface AdminProps {
  user: any
}

const Admin: React.FC<AdminProps> = ({ user }) => {
  const [adminPassword, setAdminPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Mock appointments data
  const [appointments] = useState([
    {
      id: '1',
      date: '2024-01-15',
      time: '10:00 AM',
      customer: 'john@example.com',
      service: 'Lawn Mowing',
      status: 'confirmed',
      price: 160
    },
    {
      id: '2',
      date: '2024-01-16',
      time: '2:00 PM',
      customer: 'jane@example.com',
      service: 'Snow Removal',
      status: 'pending',
      price: 200
    }
  ])

  const handleAdminLogin = () => {
    // Simple admin authentication (in production, this would be more secure)
    if (adminPassword === 'admin123') {
      setIsAuthenticated(true)
    } else {
      alert('Invalid admin password')
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="text-center py-16">
              <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
              <p className="text-gray-600">Please log in to access the admin panel.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Admin Authentication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="admin-password">Admin Password</Label>
                <Input
                  id="admin-password"
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter admin password"
                />
              </div>
              <Button onClick={handleAdminLogin} className="w-full">
                Access Admin Panel
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Demo password: admin123
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Admin Dashboard</h1>
          <p className="text-xl text-gray-600">Manage your landscaping business</p>
        </div>

        <Tabs defaultValue="appointments" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="appointments" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Appointments</span>
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Services</span>
            </TabsTrigger>
            <TabsTrigger value="packages" className="flex items-center space-x-2">
              <Package className="w-4 h-4" />
              <span>Packages</span>
            </TabsTrigger>
            <TabsTrigger value="customers" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Customers</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="appointments" className="mt-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Upcoming Appointments</CardTitle>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Appointment
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{appointment.service}</p>
                            <p className="text-sm text-gray-600">{appointment.customer}</p>
                          </div>
                          <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                            {appointment.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{appointment.date}</p>
                        <p className="text-sm text-gray-600">{appointment.time}</p>
                        <p className="text-sm font-medium text-green-600">${appointment.price}</p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="mt-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Service Management</CardTitle>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Service
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Manage your seasonal services here. You can add, edit, or remove services for each season.
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Current pricing:</strong> $20/hour per person for all services
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="packages" className="mt-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Package Management</CardTitle>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Package
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create and manage your package deals to offer customers comprehensive service plans.
                </p>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Active packages:</strong> 10 packages currently available for booking
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Customer Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  View and manage your customer database, including contact information and service history.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium">john@example.com</p>
                    <p className="text-sm text-gray-600">Total appointments: 5</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium">jane@example.com</p>
                    <p className="text-sm text-gray-600">Total appointments: 3</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Admin