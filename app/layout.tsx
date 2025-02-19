import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Favicon from "@/public/favicon.png";
import Navbar from './components/navbar/Navbar';
import dynamic from 'next/dynamic';

const RegisterModal = dynamic(() => import('./components/modals/RegisterModal'), { ssr: false });
const LoginModal = dynamic(() => import('./components/modals/LoginModal'), { ssr: false });
const RentModal = dynamic(() => import('./components/modals/RentModal'), { ssr: false });
const SearchModal = dynamic(() => import('./components/modals/SearchModal'), { ssr: false });

import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Holiday Homes & Apartment Rentals - Airbnb',
  description: 'Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb.',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <SearchModal />
        <Navbar currentUser={currentUser} />
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  );
}