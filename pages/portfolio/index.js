

import Layout from '@/components/layout/layout';
import React from 'react';

const ProjectCard = ({ imageSrc, title, description, liveUrl }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <img src={imageSrc} alt={title} className="w-full h-40 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-600 hover:underline border border-blue-600 rounded-full py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 bg-gray-300"
            >
                View Live
            </a>
        </div>
    );
};

const FrontendCard = ({ title, description, features }) => (
    <div className="border rounded p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <p className="mt-3">Key Features:</p>
        <ul className="list-disc list-inside text-gray-600">
            {features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
        </ul>
    </div>
);

const FrontendTechnologies = () => {
    return (
        <div className="flex space-x-4">
            <FrontendCard
                title="ReactJS"
                description="ReactJS is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of their applications."
                features={[
                    "Virtual DOM for efficient updates",
                    "Component-based architecture",
                    "Declarative syntax for UI creation",
                    "JSX for embedding UI in JavaScript",
                    "Rich ecosystem and community support",
                ]}
            />

            <FrontendCard
                title="Next.js"
                description="Next.js is a popular React framework that simplifies the process of building production-ready web applications. It provides server-side rendering (SSR), automatic code splitting, and other performance optimizations out of the box."
                features={[
                    "Server-side rendering (SSR)",
                    "Automatic code splitting",
                    "Static site generation (SSG)",
                    "Built-in routing and API support",
                    "CSS-in-JS and styled-components support",
                ]}
            />
        </div>
    );
};

const BackendCard = ({ title, description, features }) => (
    <div className="border rounded p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <p className="mt-3">Key Features:</p>
        <ul className="list-disc list-inside text-gray-600">
            {features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
        </ul>
    </div>
);

const BackendTechnologies = () => {
    return (
        <div className="flex space-x-4">
            <BackendCard
                title="Node.js"
                description="Node.js is a server-side JavaScript runtime environment that enables developers to build scalable and efficient network applications. It uses an event-driven, non-blocking I/O model that makes it ideal for real-time applications and APIs."
                features={[
                    "Non-blocking, event-driven architecture",
                    "Asynchronous I/O operations",
                    "Huge package ecosystem via npm",
                    "Suitable for real-time applications",
                    "JavaScript-based for full-stack use",
                ]}
            />

            <BackendCard
                title="Django with Next.js and Tailwind"
                description="Django, a high-level Python web framework, can be combined with Next.js and Tailwind to create powerful full-stack applications. Django handles backend logic, database management, and provides an admin interface for content management. Next.js ensures optimal rendering and SEO performance, while Tailwind CSS simplifies UI styling."
                features={[
                    "Backend logic and database management",
                    "Server-rendered React with Next.js",
                    "Responsive and utility-first UI with Tailwind CSS",
                    "Admin interface for content management",
                    "Python-based for backend development",
                ]}
            />
        </div>
    );
};

const TechnologyCard = ({ title, description, features, image }) => (
    <div className="border rounded p-4 shadow-md flex flex-col">
        <img src={image} alt={`${title} Logo`} className="w-32 h-16 self-center mb-2" />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <p className="mt-3">Key Features:</p>
        <ul className="list-disc list-inside text-gray-600">
            {features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
        </ul>
    </div>
);


const portfolio = () => {
    const imgg = '../protfolio/public/sadaqa.png'
    const projectsData = [
        {
            title: 'Saddaqa Box',
            description: 'A web application for managing donations through volunteers',
            imageSrc: "https://pbs.twimg.com/media/FtGLj0aWIAAQROu.png",
            liveUrl: 'https://sadakah-box.netlify.app/',
        },
        {
            title: 'Student Tracking',
            description: 'A system for managing student attendence using face recognition',
            imageSrc: 'https://www.lystloc.com/blog/wp-content/uploads/2023/03/How-Lystface-Helps-In-Tracking-Student-And-Teacher-Attendance.webp',
            liveUrl: 'https://github.com/ahmaderaqi/Attendance-tracking-midProject',
        },
        {
            title: 'Bazar',
            description: 'An e-commerce platform for buying and selling products and converting the auctions to e-auctions',
            imageSrc: 'https://img.freepik.com/free-vector/gadgets-auction_1284-22060.jpg',
            liveUrl: 'https://front-end-fawn.vercel.app/',
        },
    ];

    return (
        <Layout>

            <div className="min-h-screen bg-gray-100 py-8">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h1 className="text-3xl font-semibold text-center mb-8">Software Projects Gallery</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {projectsData.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imageSrc={project.imageSrc}
                                liveUrl={project.liveUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-8">
                <h1 className="text-3xl font-semibold mb-6">Frontend Technologies</h1>
                <div className="flex space-x-4">
                    <TechnologyCard
                        title="ReactJS"
                        description="ReactJS is a popular JavaScript library for building user interfaces."
                        features={[
                            "Virtual DOM for efficient updates",
                            "Component-based architecture",
                            "Declarative syntax for UI creation",
                            "JSX for embedding UI in JavaScript",
                            "Rich ecosystem and community support",
                        ]}
                        image="https://ionicframework.com/docs/icons/logo-react-icon.png"
                    />

                    <TechnologyCard
                        title="Next.js"
                        description="Next.js is a popular React framework that simplifies the process of building production-ready web applications."
                        features={[
                            "Server-side rendering (SSR)",
                            "Automatic code splitting",
                            "Static site generation (SSG)",
                            "Built-in routing and API support",
                            "CSS-in-JS and styled-components support",
                        ]}
                        image="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
                    />
                </div>

                <h1 className="text-3xl font-semibold mt-8 mb-6">Backend Technologies</h1>
                <div className="flex space-x-4">
                    <TechnologyCard
                        title="Node.js"
                        description="Node.js is a server-side JavaScript runtime environment that enables developers to build scalable and efficient network applications."
                        features={[
                            "Non-blocking, event-driven architecture",
                            "Asynchronous I/O operations",
                            "Huge package ecosystem via npm",
                            "Suitable for real-time applications",
                            "JavaScript-based for full-stack use",
                        ]}
                        image="https://seeklogo.com/images/N/nodejs-logo-D26404F360-seeklogo.com.png"
                    />

                    <TechnologyCard
                        title="Django with Next.js and Tailwind"
                        description="Django, a high-level Python web framework, can be combined with Next.js and Tailwind to create powerful full-stack applications."
                        features={[
                            "Backend logic and database management",
                            "Server-rendered React with Next.js",
                            "Responsive and utility-first UI with Tailwind CSS",
                            "Admin interface for content management",
                            "Python-based for backend development",
                        ]}
                        image="https://d1wrxu8gicsgam.cloudfront.net/wp-content/files/django-logo-big.jpg"
                    />
                </div>
            </div>



        </Layout>

    );
};

export default portfolio;









