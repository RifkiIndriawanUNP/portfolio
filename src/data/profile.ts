import type { Profile } from '@/types';

export const profile: Profile = {
  name: 'Mohammad Rifki Indriawan',
  greeting: 'Halo,',
  photo: '/images/profile.jpg',
  about: [
    "My name is Rifki Indriawan. I'm an Informatics Engineering student at Nusa Putra University with a strong interest in Data Science and Software Engineering. I enjoy building web and mobile applications, working with data, and using machine learning to solve real problems.",
    "Beyond code, I'm active in media: I edit articles as a campus journalist, create visual designs, and manage organizational content. Combining analytical and creative thinking helps me build solutions that don't just work, but are easy for people to understand and use.",
    'I love learning new things and adapting quickly to emerging technologies.',
  ],
  links: [
    { key: 'github', label: 'GitHub', href: 'https://github.com/RifkiIndriawanUNP' },
    { key: 'cv', label: 'CV', href: '/cv/CV_Mohammad_Rifki_Indriawan.pdf' },
    { key: 'email', label: 'Email', href: 'mailto:rifki.indriawan.skz@gmail.com' },
    // TODO: ganti dengan username Instagram kamu
    { key: 'instagram', label: 'Instagram', href: 'https://instagram.com/' },
  ],
};
