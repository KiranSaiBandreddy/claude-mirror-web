
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Star, Zap } from 'lucide-react';
import BenefitsList from '../components/BenefitsList';
import { useToast } from '@/hooks/use-toast';

// Mock functions for user authentication - these would be replaced with actual auth
const checkUserAccount = () => {
  // Mock implementation - would check if user has an account
  return false; // For testing, assume user doesn't have an account
};

const checkRemainingTime = () => {
  // Mock implementation - would check if user has remaining time
  return 0; // For testing, assume user has no time remaining
};

const LandingPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePayForAccess = () => {
    if (!checkUserAccount()) {
      // User doesn't have an account, redirect to account creation
      navigate('/create-account');
    } else {
      // User has an account, redirect to payment
      navigate('/payment');
    }
  };

  const handleLaunchClaude = () => {
    if (!checkUserAccount()) {
      // User doesn't have an account
      toast({
        title: "Account Required",
        description: "You need an account to use Claude AI. Please create one or login.",
        variant: "destructive",
      });
      return;
    }

    const remainingTime = checkRemainingTime();
    if (remainingTime > 0) {
      // User has remaining time, redirect to Claude AI
      navigate('/claude');
    } else {
      // User has no remaining time
      toast({
        title: "No Time Remaining",
        description: "You don't have any remaining time. Please purchase more time to continue.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center">Claude AI on Demand</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Access Claude AI When You Need It</h2>
            <p className="text-lg mb-6">
              Get premium AI assistance without monthly subscriptions. 
              Pay only for what you use - 2 hours at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700"
                onClick={handlePayForAccess}
              >
                Get 2 Hours Access for $5
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleLaunchClaude}
              >
                Launch Claude AI
              </Button>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img 
              src="/lovable-uploads/17779ee7-0cb3-4795-a507-79a1d24b3090.png" 
              alt="Claude AI Flow" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Service</h2>
          <BenefitsList />
        </section>

        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-indigo-100 p-3 rounded-full mb-4">
                    <Zap className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="font-bold mb-2">Pay & Access</h3>
                  <p>Purchase 2 hours of Claude AI access whenever you need it. No subscription required.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-indigo-100 p-3 rounded-full mb-4">
                    <Star className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="font-bold mb-2">Premium Experience</h3>
                  <p>Enjoy the full capabilities of Claude AI with a clean, distraction-free interface.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-indigo-100 p-3 rounded-full mb-4">
                    <Clock className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="font-bold mb-2">Time Management</h3>
                  <p>Your 2-hour session starts when you begin. Pause and resume anytime within 24 hours.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2025 Claude AI on Demand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
