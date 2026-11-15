import React, { useEffect, useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSheet } from './motion';
import { SendButtons } from './SendButtons';

interface TalentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TalentModal: React.FC<TalentModalProps> = ({ isOpen, onClose }) => {
  const dialogProps = useSheet(isOpen, onClose);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Johannesburg');
  const [qualification, setQualification] = useState('');
  const [skills, setSkills] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) setSubmitted(false);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 60, spread: 55, origin: { y: 0.7 }, colors: ['#0a0a0b', '#a3a3a3', '#ffffff'] });
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
            <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Founding network</p>
            <h3 className="font-display font-bold text-2xl mt-0.5">Register your interest</h3>
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
            <h4 className="font-display font-bold text-2xl mt-5">Almost done, {fullName.split(' ')[0]}</h4>
            <p className="text-sm text-neutral-600 mt-2 max-w-sm mx-auto leading-relaxed">
              Send your details to me below. When the first intake opens, the next step is a quick chat and a
              short practical task, then shadowing on real jobs in {city}.
            </p>
            <div className="mt-6">
              <SendButtons
                subject={`Joining the JayFTech network: ${fullName}`}
                message={[
                  `Hi Jordan, I'd like to join the JayFTech network.`,
                  '',
                  `Name: ${fullName}`,
                  `Area: ${city}`,
                  `Email: ${email}`,
                  `Phone: ${phone}`,
                  `Studied: ${qualification}`,
                  '',
                  `What I can do: ${skills}`,
                ].join('\n')}
              />
            </div>
            <button onClick={onClose} className="press mt-3 text-xs text-neutral-500 hover:text-ink px-3 py-2 rounded-full">Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="label">Full name *</label>
                <input required className="field" value={fullName} onChange={e => setFullName(e.target.value)} />
              </div>
              <div>
                <label className="label">Area *</label>
                <select className="field" value={city} onChange={e => setCity(e.target.value)}>
                  <option>Johannesburg</option>
                  <option>Pretoria</option>
                  <option>Cape Town</option>
                  <option>Durban</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="label">Email *</label>
                <input required type="email" className="field" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div>
                <label className="label">Cell / WhatsApp *</label>
                <input required type="tel" className="field" value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
            </div>
            <div>
              <label className="label">What did you study, and where? *</label>
              <input required className="field" placeholder="e.g. IT diploma, TVET college / bootcamp / self-taught" value={qualification} onChange={e => setQualification(e.target.value)} />
            </div>
            <div>
              <label className="label">What can you actually do? *</label>
              <textarea
                required
                rows={3}
                className="field resize-none"
                placeholder="Networks, laptops, websites, cloud… tell me about something you’ve set up or fixed."
                value={skills}
                onChange={e => setSkills(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-ink w-full py-4 text-sm">Continue</button>
            <p className="text-[11px] text-center text-neutral-400">
              Your details are only used to contact you about JayFTech work.
            </p>
          </form>
        )}
      </div>
    </dialog>
  );
};
