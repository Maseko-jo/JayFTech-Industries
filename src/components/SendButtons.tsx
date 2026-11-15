import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { whatsappLink, emailLink } from '../data/contact';

// Hands a filled-in form over to WhatsApp or the visitor's email app,
// already addressed to Jordan with their answers written out.
export const SendButtons: React.FC<{ subject: string; message: string }> = ({ subject, message }) => (
  <div className="grid sm:grid-cols-2 gap-2">
    <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn-ink py-3.5 text-sm">
      <MessageCircle className="w-4 h-4" />
      Send on WhatsApp
    </a>
    <a href={emailLink(subject, message)} className="btn-glass py-3.5 text-sm">
      <Mail className="w-4 h-4" />
      Send by email
    </a>
  </div>
);
