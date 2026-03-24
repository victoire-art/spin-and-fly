import './globals.css';

export const metadata = {
  title: 'Spin & Fly ✈️',
  description: 'Ta prochaine destination de vacances, au hasard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ fontFamily: "'Outfit', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
