import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://vidacompartida.com'),
  title: {
    default: 'Vida Compartida — La teva història. La seva veu. Per sempre.',
    template: '%s | Vida Compartida',
  },
  description: 'Conserva la història de les persones que estimes. Fes-los preguntes, guarda la seva veu i converteix els seus records en una història familiar.',
  keywords: [
    'història de vida',
    'història familiar',
    'preguntes per als avis',
    'entrevista als avis',
    'records familiars',
    'memòries familiars',
    'història dels avis',
  ],
  openGraph: {
    title: 'Vida Compartida — La teva història. La seva veu. Per sempre.',
    description: 'Fes-li preguntes. Escolta les seves històries. Guarda la seva veu.',
    type: 'website',
    locale: 'ca_ES',
    siteName: 'Vida Compartida',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vida Compartida — La teva història. La seva veu. Per sempre.',
    description: 'Conserva les històries i la veu de les persones que estimes.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ca"><body>{children}</body></html>;
}
