import { ExperienceData, Work } from '@/types/experience'
import Image from 'next/image'

export default function Experiences() {
	const experiences: ExperienceData[] = [
		{
			id: 1,
			position: 'Undergraduate Researcher',
			company: 'Cognitive Science Lab, IIIT Delhi',
			// homepage: 'https://www.lascade.com',
			responsibilities: [
				'Developing and evaluating machine learning models to predict higher cognitive functions using neuroimaging markers in subclinical anxiety.',
				'Conducting comprehensive data analysis to identify key predictors and validate model performance.'
			],
			// work: [
			// 	{
			// 		src: '/experience/lascade/2.png',
			// 		href: 'https://www.rent80.com',
			// 	},
			// 	{
			// 		src: '/experience/lascade/1.png',
			// 		href: 'https://www.flights70.com',
			// 	},
			// 	{
			// 		src: '/experience/lascade/3.png',
			// 		href: 'https://www.hotels70.com',
			// 	},
			// ],
		},
		{
			id: 3,
			position: 'Undergraduate Researcher',
			company: 'Department of ECE, IIIT Delhi',
			responsibilities: [
				'Leading a signal processing project to separate and analyze mixed signals through advanced source separation techniques.',
				'Working to implement algorithms like Independent Component Analysis (ICA) and Principal Component Analysis (PCA) to extract key signal components.',
			],
			// work: [
			// 	{
			// 		src: '/experience/rotafox/1.png',
			// 		href: '',
			// 	},
			// ],
		},
		{
			id: 2,
			position: 'Associate',
			company: 'GSY Consulting Pvt. Ltd.',
			responsibilities: [
				' Working part time as a SAP Security Associate responsible for creating users and authorizations in the system, ensuring that security roles are SOX compliant, responsible for pulling out audit reports from the system.',
				'Fixing access issues of users by re-provisioning their user ID after verifying their PERNR and Position are active in SAP.',
			],
		},
		{
			id: 4,
			position: 'Outreach Coordinator',
			company: 'Enveave',
			responsibilities: [
				' Established and maintained relationships with key stakeholders, including academic institutions and industry partners, enhancing resource mobilization and project support.',
			],
		},
	]

	return (
		<div className='w-full md:mt-80'>
			<h4 className='font-roboto-extrabold'>My Experience</h4>
			<div className='border-t border-[#F5F5F5] border-opacity-10 mt-5 pt-4 md:pt-10'>
				{/* Desktop Layout: Table */}
				<div className='hidden md:block'>
					<table className='w-full table-auto border-separate border-spacing-x-0 border-spacing-y-10'>
						<tbody className='align-top space-y-[40px]'>
							{experiences.map((exp) => (
								<tr key={exp.id}>
									<td className='w-1/3 font-robotoMono-bold text-lg p-3 text-lightText align-top'>
										{exp.position}, {exp.company}
									</td>
									<td className='w-2/3 p-3 align-top'>
										<ul className='list-disc list-inside space-y-2 text-lightText mb-10'>
											{exp.responsibilities.map(
												(item, index) => (
													<li key={index}>{item}</li>
												)
											)}
										</ul>
										<div className='flex flex-wrap gap-6'>
											{exp.work &&
												exp.work.map((w: Work, idx) => {
													if (w.href === '') {
														return (
															<button
																key={`disabled-${idx}`}
																disabled
																className='cursor-not-allowed'>
																<Image
																	src={w.src}
																	width={100}
																	height={100}
																	alt='Thumbnail of disabled link'
																/>
															</button>
														)
													} else {
														return (
															<a
																key={w.href}
																href={w.href}
																target='_blank'
																rel='noopener noreferrer'>
																<Image
																	src={w.src}
																	width={100}
																	height={100}
																	alt={`Thumbnail of ${w.href}`}
																/>
															</a>
														)
													}
												})}
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Mobile Layout: Stacked */}
				<div className='block md:hidden space-y-16 pt-8'>
					{experiences.map((exp) => (
						<div
							key={exp.id}
							className='mb-10'>
							<h3 className='font-robotoMono-bold pb-4'>
								{exp.position}, {exp.company}
							</h3>
							<ul className='list-disc list-inside space-y-4 text-lightText mb-10'>
								{exp.responsibilities.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
							<div className='flex flex-wrap gap-6'>
								{exp.work &&
									exp.work.map((w: Work, idx) => {
										if (w.href === '') {
											return (
												<button
													key={`disabled-${idx}`}
													disabled
													className='cursor-not-allowed'>
													<Image
														src={w.src}
														width={100}
														height={100}
														alt='Thumbnail of disabled link'
													/>
												</button>
											)
										} else {
											return (
												<a
													key={w.href}
													href={w.href}
													target='_blank'
													rel='noopener noreferrer'>
													<Image
														src={w.src}
														width={100}
														height={100}
														alt={`Thumbnail of ${w.href}`}
													/>
												</a>
											)
										}
									})}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
