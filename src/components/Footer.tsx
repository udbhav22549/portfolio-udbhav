export default function Footer() {
	return (
		<>
			<div className='w-full py-80'>
				<p className='font-robotoMono-regular text-center'>
					Made this far? Lets build something together.
				</p>
				<h4 className='font-roboto-extrabold text-center'>
					I&apos;m open to work full time!
				</h4>
			</div>
			<footer className='flex items-center  justify-center flex-col md:flex-row md:justify-between'>
				<ul className='flex justify-center items-center md:justify-start gap-12'>
					<li>
						<a
							href='https://www.linkedin.com/in/udbhavyadav'
							target='_blank'>
							Linkedin
						</a>
					</li>
					<li>
						<a
							href='https://github.com/udbhav22549'
							target='_blank'>
							Github
						</a>
					</li>
					<li>
						<a
							href='https://drive.google.com/file/d/1QxIpqivK-NJLX9qpNJZ5lmRxaOMaFg99/view?usp=drive_link'
							target='_blank'>
							Resume
						</a>
					</li>
				</ul>
				<p className='my-12 md:my-0 text-center md:text-right'>
					{/* Design credits @akhil_tj */}
				</p>
			</footer>
		</>
	)
}
