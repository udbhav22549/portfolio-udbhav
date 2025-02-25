'use client'
import FlutteringSVG from '@/app/animations/FlutteringSvg'

export default function Hero() {
	return (
		<div className='flex flex-col items-start md:items-center justify-center h-[94vh]  mx-auto relative'>
			<p className='font-robotoMono-regular text-start md:text-center'>
				Hello World
			</p>
			<h1 className='font-roboto-extrabold text-start md:text-center'>
				I&apos;m Udbhav Yadav
			</h1>
			<p className='font-robotoMono-regular leading-6 text-start md:text-center max-w-3xl'>
			I&apos;m an aspiring Software Development Engineer (SDE) with a strong background in software development, ML/AI, and signal processing. I specialize in designing efficient and scalable applications while leveraging cutting-edge technologies to solve complex challenges. Actively seeking opportunities to contribute as an SDE, I&apos;m committed to learning, growing, and making a difference in the tech world.

			</p>
			<div className='hidden md:flex absolute left-0 bottom-52'>
				<FlutteringSVG />
			</div>
			<div className='absolute z-0 right-0 top-64'>
				<FlutteringSVG type='right' />
			</div>
		</div>
	)
}
