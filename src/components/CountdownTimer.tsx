
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface CountdownTimerProps {
  initialTimeInMinutes?: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialTimeInMinutes = 120 }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Convert minutes to seconds
  const [timeLeft, setTimeLeft] = useState(initialTimeInMinutes * 60);
  
  useEffect(() => {
    // Exit early if time is up
    if (timeLeft <= 0) {
      toast({
        title: "Time's Up!",
        description: "Your session has ended. Please purchase more time to continue.",
        variant: "destructive",
      });
      navigate('/');
      return;
    }
    
    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    // Warning when 5 minutes remain
    if (timeLeft === 300) {
      toast({
        title: "5 Minutes Remaining",
        description: "Your session is about to end. Consider purchasing more time.",
      });
    }
    
    return () => clearInterval(timerId);
  }, [timeLeft, toast, navigate]);
  
  // Convert seconds to hours, minutes, seconds
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  
  // Format time as HH:MM:SS
  const timeString = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].join(':');
  
  return (
    <Card className="w-auto">
      <CardContent className="pt-4 pb-2 flex items-center">
        <div className="mr-2">Time Remaining:</div>
        <div className="font-mono font-bold">{timeString}</div>
      </CardContent>
    </Card>
  );
};

export default CountdownTimer;
