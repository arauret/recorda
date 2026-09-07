import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'recorda. — La seva vida. La seva veu. Per sempre.',
  description: 'Una conversa per guardar els records de l’avi o l’àvia.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ca"><body>{children}</body></html>;
}
