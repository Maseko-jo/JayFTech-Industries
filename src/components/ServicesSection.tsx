import React, { useState } from 'react';
import { SERVICES_CATALOG } from '../data/mockData';
import { ServiceCategory, ServiceItem } from '../types';
import { Check, MapPin, Globe, ArrowRight, MessageSquare } from 'lucide-react';
import { Reveal, Segmented } from './motion';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onCustomQuote: () => void;
}

const CATEGORIES = ['All', 'Hardware', 'Networking', 'Cloud & Software', 'Cybersecurity', 'Web & Custom'] as const;
type Filter = (typeof CATEGORIES)[number];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onCustomQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<Filter>('All');

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_CATALOG
    : SERVICES_CATALOG.filter(s => s.category === (selectedCategory as ServiceCategory));

  return (
    <section id="services" className="py-20 sm:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <div className="eyebrow mb-5">Services</div>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl text-ink">What I can help with.</h2>
          <p className="mt-4 text-neutral-600">
            Pick whatever sounds closest to what you need. We’ll have a quick conversation, work out what your
            business actually needs, and agree the scope together before any work starts.
          </p>
        </Reveal>

        <Reveal className="flex justify-center mb-10">
          <Segmented options={CATEGORIES} value={selectedCategory} onChange={setSelectedCategory} />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {filteredServices.map((service, i) => (
            <div
              key={`${selectedCategory}-${service.id}`}
              className="pop-in glass lift rounded-[28px] p-6 flex flex-col"
              style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'backwards' }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-500">
                  {service.isOnSite ? <MapPin className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
                  {service.isOnSite ? 'On site' : 'Remote'} · {service.category}
                </span>
                {service.popular && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-ink text-white">
                    Popular
                  </span>
                )}
              </div>

              <h3 className="font-display font-bold text-xl text-ink">{service.title}</h3>
              <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{service.shortDesc}</p>

              <div className="mt-5 space-y-2 flex-1">
                {service.deliverables.map(item => (
                  <div key={item} className="flex items-start gap-2 text-[13px] text-neutral-700">
                    <Check className="w-4 h-4 text-ink shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => onSelectService(service)} className="btn-ink mt-6 py-3 text-sm group">
                Let’s talk about this
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        <Reveal>
          <div className="glass rounded-[28px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-ink text-white flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display font-bold text-lg text-ink">Something not on the list?</p>
                <p className="text-sm text-neutral-600 mt-0.5">Tell me what’s going on and we’ll figure out the right fix together.</p>
              </div>
            </div>
            <button onClick={onCustomQuote} className="btn-glass shrink-0 px-6 py-3 text-sm">
              Describe your problem
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
