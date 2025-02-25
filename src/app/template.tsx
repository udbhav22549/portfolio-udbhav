'use client'

import { animatePageIn } from '@/utils/animations'
import SpotlightCursor from '@/app/animations/SpotlightCursor'
import ReactLenis from 'lenis/react'
import { useEffect } from 'react'
import BackToTopButton from './animations/BackToTopButton'

export default function Template({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		animatePageIn()
	}, [])
	return (
		<ReactLenis root>
			<div
				id='banner-1'
				className='min-h-screen bg-[#ffffff] z-[99] fixed top-0 left-0 w-1/4  border-black border-x-2'
			/>
			<div
				id='banner-2'
				className='min-h-screen bg-[#ffffff] z-[99] fixed top-0 left-1/4 w-1/4 border-black border-x-2'
			/>
			<div
				id='banner-3'
				className='min-h-screen bg-[#ffffff] z-[99] fixed top-0 left-2/4 w-1/4 border-black border-x-2'
			/>
			<div
				id='banner-4'
				className='min-h-screen bg-[#ffffff] z-[99] fixed top-0 left-3/4 w-1/4 border-black border-x-2'
			/>
			<SpotlightCursor />
			<BackToTopButton />
			{children}
		</ReactLenis>
	)
}
