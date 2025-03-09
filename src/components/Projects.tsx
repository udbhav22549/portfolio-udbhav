import { ProjectData } from '@/types/project'
import Project from './Project'

export default function Projects() {
	const projects: ProjectData[] = [
		{
			id: 1,
			title: 'Machine Learning Model for Skin Cancer Detection',
			description:
				'Developed and validated a machine learning model that enhances cancer detection and diagnosis accuracy and efficiency. Designed a predictive model to detect cancer using machine learning algorithms, focusing on optimizing accuracy and diagnostic capabilities through data preprocessing and evaluation with Python and scikit-learn.',
			slideImages: [
				// '/project/rent80/cover.png',
				// '/project/rent80/1.png',
				// '/project/rent80/2.png',
				// '/project/rent80/3.png',
				// '/project/rent80/4.png',
				// '/project/rent80/5.png',
			],
			stack: ['Python', 'Scikit-learn', 'Tensorflow'],
			// viewLiveUrl: 'https://www.rent80.com',
		},
		{
			id: 2,
			title: 'BlogMan',
			description:
				'A fully functional blog web application built with Django, featuring user authentication, post creation, editing, deleting, and liking functionality. It includes a responsive UI, a rich text editor (TinyMCE), and an intuitive user experience.',
			slideImages: [
				// '/project/one.png',
				// '/project/two.png',
				// '/project/three.png',
			],
			stack: ['Python', 'Django', 'Bootstrap'],
			viewCodeUrl:
				'https://github.com/udbhav22549/BlogMan',
			// viewLiveUrl: 'https://localshopper.example.com',
		},
		{
			id: 3,
			title: 'StickHero Game',
			description:
				'Developed StickHero game using object-oriented programming principles. Created game screens using SceneBuilder tool. Developed and deployed game mechanics, enhancing stick extension, platform generation, and collision detection efficiency through optimized object-oriented programming techniques. Designed intuitive user interfaces and game controls in JavaFX to increase player engagement.',
			slideImages: [
				// '/project/download (1).png',
				// '/project/job-seeker/cover.png',
				// '/project/job-seeker/1.png',
				// '/project/job-seeker/2.png',
				// '/project/job-seeker/3.png',
				// '/project/job-seeker/4.png',
				// '/project/job-seeker/5.png',
			],
			stack: ['Java', 'JavaFX', 'SceneBuilder'],
			viewCodeUrl:
				'https://github.com/udbhav22549/StickHero',
			// viewLiveUrl: 'https://localshopper.example.com',
		},
		{
			id: 4,
			title: 'Custom Assembler and Simulator',
			description:
				'Created an assembler and simulator for a hypothetical Instruction Set Architecture (ISA) based on RISCV. TheAssembler converts Assembly Code into a Binary string, which is then utilized by the simulator to initialize register values efficiently.',
			slideImages: [
				// '/project/doubtss/cover.png',
				// '/project/doubtss/1.png',
				// '/project/doubtss/2.png',
				// '/project/doubtss/3.png',
				// '/project/doubtss/4.png',
			],
			stack: [
				'Python',
				// 'Next.js',
				// 'Prisma',
				// 'Firebase',
				// 'Prisma',
				// 'LangChain',
				// 'OpenAI API',
			],
			// viewCodeUrl: 'https://github.com/AkshayBenny/doubtss-chatbot',
			// viewLiveUrl: 'https://doubtss.com',
		},
	]

	return (
		<div className='space-y-[200px]'>
			{projects.map((project) => (
				<Project
					key={project.id}
					data={project}
				/>
			))}
		</div>
	)
}
