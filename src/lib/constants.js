export const CONTACT = {
  whatsappNumber: '212696682053',
  whatsappDisplay: '+212 696682053',
  email: 'contact@qar.nounmotion.store',
  instagram: 'https://instagram.com/nounmotion',
  instagramHandle: '@nounmotion',
  domain: 'qar.nounmotion.store',
};

export const BRAND = { name: 'Nounmotion' };

export function buildWhatsAppUrl(text = '') {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
