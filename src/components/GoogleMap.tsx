import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Função para inicializar o mapa
    const initializeMap = () => {
      if (window.google && mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: -1.4558096, lng: -48.4902157 }, // Coordenadas de Belém, PA
          zoom: 15,
          styles: [
            {
              featureType: "all",
              elementType: "geometry.fill",
              stylers: [{ color: "#fefefe" }]
            },
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [{ color: "#87CEEB" }]
            }
          ]
        });

        // Adicionar marcador
        new window.google.maps.Marker({
          position: { lat: -1.4558096, lng: -48.4902157 },
          map: map,
          title: "Local da Festa - Anthony 1 ano",
          icon: {
            url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#dc2626"/>
                <path d="M16 8C13.79 8 12 9.79 12 12C12 16 16 24 16 24S20 16 20 12C20 9.79 18.21 8 16 8ZM16 14C14.9 14 14 13.1 14 12C14 10.9 14.9 10 16 10C17.1 10 18 10.9 18 12C18 13.1 17.1 14 16 14Z" fill="white"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(32, 32)
          }
        });
      }
    };

    // Carregar o script do Google Maps se ainda não foi carregado
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO2lK6x7C0GrFE&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      window.initMap = initializeMap;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }

    return () => {
      // Cleanup se necessário
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-2xl">
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-2 text-accent">
          <MapPin className="w-6 h-6" />
          <h3 className="text-xl font-bold">Localização da Festa</h3>
          <MapPin className="w-6 h-6" />
        </div>
        
        <div className="text-center space-y-2">
          <p className="text-lg font-semibold text-foreground">
            Rua das Flores, 123 - Festa Kids
          </p>
          <p className="text-sm text-foreground/70">
            Belém, Pará
          </p>
        </div>

        <div 
          ref={mapRef} 
          className="w-full h-80 rounded-lg border-2 border-primary/20 shadow-lg"
          style={{ minHeight: '320px' }}
        />
        
        <div className="text-center">
          <p className="text-sm text-foreground/60">
            📍 Clique no mapa para abrir no Google Maps
          </p>
        </div>
      </div>
    </Card>
  );
};