import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { User, Shield } from 'lucide-react'
import { blink } from '../blink/client'

interface LoginModalProps {
  onClose: () => void
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const handleLogin = () => {
    blink.auth.login()
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Welcome to Hudson Landscaping</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="text-center">
            <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <p className="text-gray-600">
              Sign in to book appointments and manage your landscaping services.
            </p>
          </div>

          <div className="space-y-3">
            <Button onClick={handleLogin} className="w-full bg-green-600 hover:bg-green-700">
              <User className="w-4 h-4 mr-2" />
              Sign In / Sign Up
            </Button>
            
            <p className="text-xs text-center text-gray-500">
              Secure authentication powered by Blink
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal