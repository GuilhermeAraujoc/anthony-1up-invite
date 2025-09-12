import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CountdownTimer } from './CountdownTimer';
import { EventDetails } from './EventDetails';
import { Gift, Heart, PartyPopper, MapPin } from 'lucide-react';
import marioHero from '@/assets/mario-hero.png';
import marioStar from '@/assets/mario-star.png';

export const PartyInvitation = () => {
  // Data do aniversário - você pode ajustar esta data
  const partyDate = new Date('2024-12-15T15:00:00');

  const handleConfirmPresence = () => {
    // Você pode adicionar lógica para enviar RSVP por WhatsApp ou email
    const message = encodeURIComponent(
      'Olá! Confirmo presença no aniversário de 1 ano do Anthony! 🎉'
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header com foto do Mario */}
        <div className="text-center space-y-6">
          <div className="relative inline-block">
            <img 
              src={marioHero} 
              alt="Super Mario" 
              className="w-80 h-auto mx-auto rounded-2xl shadow-mario mario-jump"
            />
            <img 
              src={marioStar} 
              alt="Star" 
              className="absolute -top-4 -right-4 w-16 h-16 star-sparkle"
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-mario bg-clip-text text-transparent">
              Anthony faz 1 aninho!
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium">
              Venha celebrar essa aventura especial conosco! 🎮
            </p>
          </div>
        </div>

        {/* Contador Regressivo */}
        <Card className="p-8 bg-card/80 backdrop-blur-sm shadow-2xl">
          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center justify-center gap-2">
              <PartyPopper className="w-8 h-8" />
              Contagem Regressiva
              <PartyPopper className="w-8 h-8" />
            </h2>
            <CountdownTimer targetDate={partyDate} />
          </div>
        </Card>

        {/* Detalhes do Evento */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-accent">
            Informações da Festa
          </h2>
          <EventDetails />
        </div>

        {/* Mensagem Especial */}
        <Card className="p-8 bg-gradient-to-r from-warning/20 to-primary/20 border-warning/50">
          <div className="text-center space-y-4">
            <Heart className="w-12 h-12 mx-auto text-secondary" />
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              Uma Aventura Muito Especial!
            </h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Nosso pequeno herói está completando seu primeiro ano de vida! 
              Venha se juntar a nós nesta celebração épica com muita diversão, 
              brincadeiras e momentos inesquecíveis no mundo do Super Mario!
            </p>
          </div>
        </Card>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleConfirmPresence}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-luigi px-8 py-4 text-lg font-bold transform transition-all duration-300 hover:scale-105"
          >
            <Gift className="w-5 h-5 mr-2" />
            Confirmar Presença
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-bold"
            onClick={() => window.open('https://maps.google.com/?q=Rua+das+Flores+123', '_blank')}
          >
            <MapPin className="w-5 h-5 mr-2" />
            Ver Local
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center text-foreground/60 text-sm">
          <p>Com muito amor, a família do Anthony 💙</p>
        </div>
      </div>
    </div>
  );
};