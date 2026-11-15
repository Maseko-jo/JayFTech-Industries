import React, { useEffect, useState } from 'react';
import { ServiceItem, BookingRequest } from '../types';
import { SERVICES_CATALOG } from '../data/mockData';
import { X, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSheet } from './motion';
import { SendButtons } from './SendButtons';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: ServiceItem | null;
  isCustomQuote: boolean;
  onBookingSuccess: (booking: BookingRequest) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedService,
  isCustomQuote,
  onBookingSuccess,
}) => {
  const dialogProps = useSheet(isOpen, onClose);

  const [companyName, setCompanyName] = useState('');
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Johannesburg');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [serviceId, setServiceId] = useState(SERVICES_CATALOG[0].id);
  const [submitted, setSubmitted] = useState<BookingRequest | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(null);
      if (selectedService) setServiceId(selectedService.id);
    }
  }, [isOpen, selectedService]);

  const service = SERVICES_CATALOG.find(s => s.id === serviceId) ?? SERVICES_CATALOG[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const booking: BookingRequest = {
      id: `JF-${Math.floor(1000 + Math.random() * 9000)}`,
      serviceTitle: isCustomQuote ? 'Custom request' : service.title,
      clientName,
      companyName,
      email,
      phone,
      city,
      preferredDate,
      notes,
      isCustomQuote,
      estimateZar: isCustomQuote ? 0 : service.basePriceZar,
    };
    setSubmitted(booking);
    onBookingSuccess(booking);
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 }, colors: ['#0a0a0b', '#a3a3a3', '#ffffff'] });
    } catch {
      // confetti is decoration only
    }
  };

  return (
    <dialog {...dialogProps}>
      <div className="glass-strong rounded-[28px] p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-ink">
        <div className="w-10 h-1.5 rounded-full bg-neutral-300 mx-auto -mt-2 mb-5 sm:hidden" />
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              {isCustomQuote ? 'Custom request' : 'Request a service'}
            </p>
            <h3 className="font-display font-bold text-2xl mt-0.5">
              {isCustomQuote ? 'Tell me what’s going on' : 'Let’s sort your tech out'}
            </h3>
          </div>
          <button onClick={onClose} className="press w-9 h-9 rounded-full bg-neutral-200/60 hover:bg-neutral-200 flex items-center justify-center" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="pop-in text-center py-4">
            <div className="w-16 h-16 rounded-full bg-ink text-white mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display font-bold text-2xl mt-5">Almost done, {submitted.clientName.split(' ')[0]}</h4>
            <p className="text-sm text-neutral-600 mt-2 max-w-sm mx-auto">
              Your message is ready. Send it on WhatsApp or by email and I’ll get back to you to chat through what
              you need.
            </p>
            <div className="glass rounded-3xl p-5 mt-6 text-left text-sm space-y-2">
              <Row k="Reference" v={submitted.id} />
              <Row k="Job" v={submitted.serviceTitle} />
              <Row k="Business" v={submitted.companyName} />
              <Row k="Preferred date" v={submitted.preferredDate || 'Flexible'} />
            </div>
            <p className="text-sm font-semibold mt-6 mb-3">Last step: send it to me</p>
            <SendButtons subject={`Service request ${submitted.id}: ${submitted.serviceTitle}`} message={requestMessage(submitted)} />
            <button onClick={onClose} className="press mt-3 text-xs text-neutral-500 hover:text-ink px-3 py-2 rounded-full">Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isCustomQuote && (
              <div>
                <label className="label">What do you need?</label>
                <select value={serviceId} onChange={e => setServiceId(e.target.value)} className="field">
                  {SERVICES_CATALOG.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="label">Business name *</label>
                <input required className="field" placeholder="e.g. Mthembu Logistics" value={companyName} onChange={e => setCompanyName(e.target.value)} />
              </div>
              <div>
                <label className="label">Your name *</label>
                <input required className="field" placeholder="Full name" value={clientName} onChange={e => setClientName(e.target.value)} />
              </div>
              <div>
                <label className="label">Email *</label>
                <input required type="email" className="field" placeholder="you@business.co.za" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div>
                <label className="label">Cell / WhatsApp *</label>
                <input required type="tel" className="field" placeholder="082 123 4567" value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
              <div>
                <label className="label">Area</label>
                <select className="field" value={city} onChange={e => setCity(e.target.value)}>
                  <option>Johannesburg</option>
                  <option>Pretoria</option>
                  <option>Elsewhere in Gauteng</option>
                  <option>Outside Gauteng (remote)</option>
                </select>
              </div>
              <div>
                <label className="label">Preferred date</label>
                <input type="date" className="field" value={preferredDate} onChange={e => setPreferredDate(e.target.value)} />
              </div>
            </div>
            <div>
              <label className="label">{isCustomQuote ? 'What’s going on? *' : 'Anything I should know?'}</label>
              <textarea
                rows={3}
                required={isCustomQuote}
                className="field resize-none"
                placeholder={isCustomQuote ? 'Describe the problem or what you want built…' : 'e.g. 3 new laptops, and the Wi-Fi drops in the back office'}
                value={notes}
                onChange={e => setNotes(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-ink w-full py-4 text-sm">
              Continue
            </button>
            <p className="text-[11px] text-center text-neutral-400">No commitment. We talk first and agree the scope together.</p>
          </form>
        )}
      </div>
    </dialog>
  );
};

const requestMessage = (b: BookingRequest) =>
  [
    `Hi Jordan, I'd like help from JayFTech (ref ${b.id}).`,
    '',
    `Service: ${b.serviceTitle}`,
    `Business: ${b.companyName}`,
    `Name: ${b.clientName}`,
    `Email: ${b.email}`,
    `Phone: ${b.phone}`,
    `Area: ${b.city}`,
    `Preferred date: ${b.preferredDate || 'Flexible'}`,
    b.notes ? `\nDetails: ${b.notes}` : '',
  ].join('\n').trim();

const Row: React.FC<{ k: string; v: string }> = ({ k, v }) => (
  <div className="flex justify-between gap-4">
    <span className="text-neutral-500">{k}</span>
    <span className="font-medium text-right">{v}</span>
  </div>
);
