import { Card } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Star } from 'lucide-react';

interface EventDetail {
  icon: any;
  label: string;
  value: string;
  color: 'primary' | 'secondary' | 'accent' | 'warning';
}

export const EventDetails = () => {
  const details: EventDetail[] = [
    {
      icon: Calendar,
      label: 'Data',
      value: 'Domingo, 15 de Dezembro de 2024',
      color: 'primary',
    },
    {
      icon: Clock,
      label: 'Horário',
      value: '15:00 às 18:00',
      color: 'secondary',
    },
    {
      icon: MapPin,
      label: 'Local',
      value: 'Rua das Flores, 123 - Festa Kids',
      color: 'accent',
    },
    {
      icon: Star,
      label: 'Tema',
      value: 'Super Mario Bros',
      color: 'warning',
    },
  ];

  const getCardStyles = (color: string) => {
    const styles = {
      primary: 'bg-primary text-primary-foreground shadow-mario',
      secondary: 'bg-secondary text-secondary-foreground shadow-lg',
      accent: 'bg-accent text-accent-foreground shadow-luigi',
      warning: 'bg-warning text-warning-foreground shadow-star',
    };
    return styles[color as keyof typeof styles];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {details.map((detail, index) => {
        const IconComponent = detail.icon;
        return (
          <Card 
            key={detail.label}
            className={`p-6 transform transition-all duration-300 hover:scale-105 float ${getCardStyles(detail.color)}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <IconComponent className="w-8 h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium opacity-90">
                  {detail.label}
                </p>
                <p className="text-lg font-bold truncate">
                  {detail.value}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};