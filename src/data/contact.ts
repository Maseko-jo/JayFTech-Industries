// Jordan's contact details. Change them here and the whole site updates.
export const CONTACT = {
  phoneDisplay: '067 924 6782',
  phoneTel: '+27679246782',
  whatsapp: '27679246782', // international format, no + or spaces
  email: 'jordanmaseko.18@gmail.com',
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const emailLink = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString().replace(/\+/g, '%20');
  return `mailto:${CONTACT.email}${query ? `?${query}` : ''}`;
};
