import FlutteringSVG from '@/app/animations/FlutteringSvg'
// import Image from 'next/image'

export default function AboutHero() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen md:min-h-[94vh] mx-auto relative pb-14 md:pb-0'>
			{/* <Image
				src='/akshay-2.jpg'
				height={272}
				width={272}
				alt='A picture of Akshay'
				className='aspect-square z-10 object-cover grayscale pt-6 md:pt-0'
			/> */}
			<p className='font-robotoMono-regular text-start w-full md:text-center pt-[60px]'>
				Hello Again!
			</p>
			<h1 className='font-roboto-extrabold pt-4 text-start w-full md:text-center'>
				I&apos;m Udbhav Yadav
			</h1>
			<p className='font-robotoMono-regular text-start w-full md:text-center leading-6 pt-4 max-w-3xl'>
			I&#39;m an aspiring Software Development Engineer (SDE) with a strong background in software development, ML/AI, and signal processing. I specialize in designing efficient and scalable applications while leveraging cutting-edge technologies to solve complex challenges. Actively seeking opportunities to contribute as an SDE, I&#39;m committed to learning, growing, and making a difference in the tech world.
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
