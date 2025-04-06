
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Clock, Shield, Sparkles, Zap } from 'lucide-react';

const benefits = [
  {
    title: 'Advanced AI',
    description: 'Access to Claude's most powerful AI capabilities',
    icon: <Brain className="h-6 w-6 text-indigo-600" />
  },
  {
    title: 'Pay As You Go',
    description: 'No monthly commitments - pay only for what you need',
    icon: <Zap className="h-6 w-6 text-indigo-600" />
  },
  {
    title: 'Time Management',
    description: '2-hour sessions that fit your schedule',
    icon: <Clock className="h-6 w-6 text-indigo-600" />
  },
  {
    title: 'Privacy Focus',
    description: 'Your conversations are always private and secure',
    icon: <Shield className="h-6 w-6 text-indigo-600" />
  },
  {
    title: 'Enhanced Features',
    description: 'Premium features not available in free versions',
    icon: <Sparkles className="h-6 w-6 text-indigo-600" />
  }
];

const BenefitsList = () => {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex space-x-4 min-w-max">
        {benefits.map((benefit, index) => (
          <Card key={index} className="w-64 flex-shrink-0">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-indigo-100 p-3 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm">{benefit.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BenefitsList;
