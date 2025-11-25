import { useEffect } from 'react';

const ProjectSchemaMarkup = ({ projects = [] }) => {
  useEffect(() => {
    // Create structured data for projects
    const projectsStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Amon Sharma Portfolio Projects',
      description: 'A collection of web development and design projects by Amon Sharma',
      itemListElement: projects.map((project, index) => ({
        '@type': 'CreativeWork',
        position: index + 1,
        name: project.title || `Project ${index + 1}`,
        description: project.description || 'A creative project showcasing modern web development techniques',
        creator: {
          '@type': 'Person',
          name: 'Amon Sharma',
          jobTitle: 'Full Stack Developer & UI/UX Designer',
        },
        dateCreated: project.dateCreated || new Date().toISOString(),
        keywords: project.keywords || ['web development', 'react', 'next.js', 'ui/ux design'],
        url: project.url || `${process.env.SITE_URL || 'https://amon-sharma.vercel.app'}/#projects`,
        image: project.image || '/assets/photo1.png',
        programmingLanguage: project.technologies || ['JavaScript', 'React', 'CSS'],
      })),
    };

    // Create script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(projectsStructuredData);
    script.id = 'projects-schema';

    // Remove existing schema if it exists
    const existingScript = document.getElementById('projects-schema');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new schema
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById('projects-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [projects]);

  return null;
};

export default ProjectSchemaMarkup;
