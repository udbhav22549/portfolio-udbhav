import type { Metadata } from 'next'
import { Roboto, Roboto_Mono } from 'next/font/google'
import './globals.css'
import ClientProviders from '@/components/providers/ClientProvider'

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
	weight: '900',
})

const robotoMono = Roboto_Mono({
	variable: '--font-roboto-mono',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
	title: 'Udbhav Yadav | Software Developer',
	icons: 'favicon.svg',
	description:
		"I'm Udbhav Yadav, a passionate software developer who loves building fast, user-friendly, and scalable softwares.",
	openGraph: {
		title: 'Udbhav Yadav | Software Developer',
		description:
			"I'm Udbhav Yadav, a passionate software developer who loves building fast, user-friendly, and scalable softwares.",
		url: 'https://www.akshaybenny.com',
		images: [
			{
				url: 'https://www.akshaybenny.com/opengraph.png',
				width: 800,
				height: 600,
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body
				className={`${roboto.variable} ${robotoMono.variable} antialiased text-lightText`}>
				<ClientProviders>{children}</ClientProviders>
			</body>
		</html>
	)
}
