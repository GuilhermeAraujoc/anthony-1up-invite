import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Dias', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
      {timeUnits.map((unit, index) => (
        <Card 
          key={unit.label} 
          className={`p-4 text-center transform transition-all duration-300 hover:scale-105 ${
            index % 2 === 0 
              ? 'bg-primary text-primary-foreground shadow-mario' 
              : 'bg-secondary text-secondary-foreground shadow-lg'
          }`}
        >
          <div className="text-3xl md:text-4xl font-bold bounce-gentle">
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base font-medium mt-1">
            {unit.label}
          </div>
        </Card>
      ))}
    </div>
  );
};