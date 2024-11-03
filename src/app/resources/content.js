import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Muhammad Shozab',
    lastName:  'Raza',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Web3 Content Creator , Web3 Researcher',
    avatar:    '/images/avatar.png',
    location:  'Asia/Karachi',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Urdu']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I am web3 researcher, content creator,Blockchain Enthusiast , and community Builder , committed to bring Pakistan onchain.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/razashozab44',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/muhammad-shozab-raza-2b1a55306/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/NakamotoDrip',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:razashozab619@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Web3 Researcher,Content Creator and community builder</>,
    subline: <>I'm NakamotoDrip aka Muhammad Shozab Raza, a Community Lead at <InlineCode>Base Pakistan</InlineCode>where I craft content<br/> and bring pakistan onchain. Also Working with <InlineCode>FrontierDAO Pakistan</InlineCode> as a content creator and social media manager.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm NakamotoDrip aka Muhammad Shozab Raza, a Community Lead at <InlineCode>Base Pakistan</InlineCode>where I craft content<br/> and bring pakistan onchain. Also Working with <InlineCode>FrontierDAO Pakistan</InlineCode> as a content creator and social media manager.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Base Pakistan',
                timeframe: '2024 - Present',
                role: 'Community Lead',
                achievements: [
                    <>committed To Bring pakistan on chain and spread awareness about web3</>,
                    <>Host Hackathons , Meetups and educational bootcamps.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/pakistan.png',
                        alt: 'base pakistan',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'FrontierDAO Pakistan',
                timeframe: '2024 - present',
                role: 'Content Creator and Social Media manager',
                achievements: [
                    <>I currently work as a social media manager at FrontierDAO Pakistan and actively manage their socials.</>,
                    <>I create valuable content for FrontierDAO Partners and Do Research about Viction Eco Partners and contribute with them .</>
                ],
                images: [ 
                    {
                        src: '/images/projects/project-01/front.jpg',
                        alt: 'FrontierDAO Pakistan',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Edu4Teen',
                timeframe: '2024 - present',
                role: 'Founder',
                achievements: [
                    <>Edu4Teen is an Ai-powered Blockchain educational platfrom built for teenagers so they can reshape thier future in Blockchain.</>,
                    
                ],
                images: [ 
                    {
                        src: '/images/projects/project-01/edu.png',
                        alt: 'FrontierDAO Pakistan',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Base Chain',
                timeframe: '2024 - present',
                role: 'Base Global Builder',
                achievements: [
                    <>I currently working as base Global Builder and actively contribute to base community</>,
                    <>Building Base Pakistan.</>
                ],
                images: [ 
                    {
                        src: '/images/projects/project-01/basepak.png',
                        alt: 'FrontierDAO Pakistan',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Web3 Pakistan',
                timeframe: '2024 - present',
                role: 'Contributor',
                achievements: [
                    <>I currently working as a Contributor in web3 pakistan.</>,
                    <>I create valuable content for web3 pakistan and do pr and outreach for them and do event management</>
                ],
                images: [ 
                    {
                        src: '/images/projects/project-01/web3pak.jpeg',
                        alt: 'FrontierDAO Pakistan',
                        width: 16,
                        height: 9
                    }
                ]
            }
            
        ]
        
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Divisional Public School ',
                description: <>Studying computer science.</>,
            },
            {
                name: 'Cyfrin Updraft',
                description: <>Studying Blockchain Development.</>,
            },
            {
                name: 'Data camp',
                description: <>Studying Data science in web3.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Content Creation',
                description: <>Able to Create engaging web3 content on any topic</>,
                images: [
                    {
                        src: '/images/projects/project-01/one.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/two.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Community Building',
                description: <>Building Web3 Communites From scratch and taking to next level</>,
                images: [
                    {
                        src: '/images/projects/project-01/front.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/basepak.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/edu.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };