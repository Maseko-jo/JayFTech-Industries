import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { CONTACT, whatsappLink, emailLink } from '../data/contact';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="px-3 sm:px-6 pb-6 pt-10">
      <div className="glass-dark max-w-6xl mx-auto rounded-[36px] p-8 sm:p-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-ink flex items-center justify-center font-display font-bold">JF</div>
              <span className="font-display font-bold text-xl">JayFTech Industries</span>
            </div>
            <p className="text-sm text-white/60 mt-4 leading-relaxed">
              Healthy tech for South African small businesses, and a first real break for the young techs who
              look after it.
            </p>
            <button onClick={onOpenBooking} className="press mt-6 rounded-full bg-white text-ink font-semibold px-6 py-3 text-sm hover:bg-neutral-100">
              Start a conversation
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs uppercase tracking-wider text-white/40 mb-3">Contact</p>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href={whatsappLink('Hi Jordan, I found JayFTech online and would like to chat.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`tel:${CONTACT.phoneTel}`} className="inline-flex items-center gap-2 hover:text-white">
                    <Phone className="w-4 h-4" /> {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={emailLink('JayFTech enquiry')} className="inline-flex items-center gap-2 hover:text-white break-all">
                    <Mail className="w-4 h-4 shrink-0" /> {CONTACT.email}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/40 mb-3">Explore</p>
              <ul className="space-y-2 text-white/70">
                <li><a href="#story" className="hover:text-white">Why JayFTech</a></li>
                <li><a href="#wellness" className="hover:text-white">Wellness check</a></li>
                <li><a href="#founder" className="hover:text-white">Starts with me</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/40 mb-3">Work</p>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#talent" className="hover:text-white">Join the network</a></li>
                <li><a href="#roadmap" className="hover:text-white">Roadmap</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} JayFTech Industries · Founded by Jordan Maseko</span>
          <span>Johannesburg, South Africa</span>
        </div>
      </div>
    </footer>
  );
};
