import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'IC Design System',
    description: 'Design system components.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
			<body className={openSans.className}>{children}</body>
        </html>
    );
}

// this is where the shared 2/3 1/3 (root layout) grid would go (IF this was the payer repo)
// however, since this is the design-system repo, the page will just display all of our components.
// biller or payer specific layouts will likely be built in their respective repositories
// good to know: if necessary we can use Route Groups to create multiple root layouts...
// when a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-synchronized.
// ex: Features that rely on useEffect (e.g logging page views) and useState (e.g a per-page feedback form).

// do NOT manually add <head> tags! use the Metadata API which automatically handles advanced requirements such as streaming and de-duplicating <head> elements