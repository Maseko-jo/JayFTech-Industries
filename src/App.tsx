import React, { useState } from 'react';
import { CloudBackground } from './components/CloudBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { CrisisImpactSection } from './components/CrisisImpactSection';
import { WellnessCheck } from './components/WellnessCheck';
import { FounderSection } from './components/FounderSection';
import { ServicesSection } from './components/ServicesSection';
import { TalentSection } from './components/TalentSection';
import { RoadmapSection } from './components/RoadmapSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { TalentModal } from './components/TalentModal';
import { ServiceItem, BookingRequest } from './types';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTalentOpen, setIsTalentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isCustomQuote, setIsCustomQuote] = useState(false);
  const [, setRequests] = useState<BookingRequest[]>([]);

  const openBooking = (service: ServiceItem | null = null, custom = false) => {
    setSelectedService(service);
    setIsCustomQuote(custom);
    setIsBookingOpen(true);
  };

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen relative overflow-x-clip">
      <CloudBackground />

      <div className="relative z-10">
        <Navbar onOpenBooking={() => openBooking()} onOpenTalent={() => setIsTalentOpen(true)} />
        <main>
          <Hero onOpenBooking={() => openBooking()} onStartCheck={() => scrollTo('wellness')} />
          <StorySection />
          <CrisisImpactSection />
          <WellnessCheck onOpenBooking={() => openBooking()} />
          <FounderSection onOpenBooking={() => openBooking()} />
          <ServicesSection onSelectService={s => openBooking(s)} onCustomQuote={() => openBooking(null, true)} />
          <TalentSection onOpenTalentModal={() => setIsTalentOpen(true)} />
          <RoadmapSection />
        </main>
        <Footer onOpenBooking={() => openBooking()} />
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService={selectedService}
        isCustomQuote={isCustomQuote}
        onBookingSuccess={b => setRequests(prev => [b, ...prev])}
      />
      <TalentModal isOpen={isTalentOpen} onClose={() => setIsTalentOpen(false)} />
    </div>
  );
};

export default App;
