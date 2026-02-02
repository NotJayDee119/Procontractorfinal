// Script to generate all location-service page components
const fs = require('fs');
const path = require('path');

const locations = [
  { name: 'Fort Lauderdale', fileName: 'FortLauderdale' },
  { name: 'Miami Shores', fileName: 'MiamiShores' },
  { name: 'Miami-Dade', fileName: 'MiamiDade' },
  { name: 'Broward', fileName: 'Broward' }
];

const services = [
  { name: 'Kitchen Remodeling', slug: 'kitchen-remodeling' },
  { name: 'Bathroom Remodeling', slug: 'bathroom-remodeling' },
  { name: 'Home Remodeling', slug: 'home-remodeling' },
  { name: 'Home Additions', slug: 'home-additions' }
];

const generateComponent = (locationName, locationFileName, serviceName, serviceSlug) => {
  const componentName = `${locationFileName}${serviceName.replace(/\s+/g, '')}`;
  
  return `import React from 'react';
import LocationServiceTemplate from '../LocationServiceTemplate';
import { serviceDescriptions } from '../../../data/locationsData';

const ${componentName} = () => {
    return (
        <LocationServiceTemplate
            cityName="${locationName}"
            serviceName="${serviceName}"
            serviceSlug="${serviceSlug}"
            serviceData={serviceDescriptions['${serviceSlug}']}
        />
    );
};

export default ${componentName};
`;
};

// Generate all components
const outputDir = path.join(__dirname, 'src', 'pages', 'locations', 'services');

locations.forEach(location => {
  services.forEach(service => {
    const content = generateComponent(location.name, location.fileName, service.name, service.slug);
    const fileName = `${location.fileName}${service.name.replace(/\s+/g, '')}.jsx`;
    const filePath = path.join(outputDir, fileName);
    
    fs.writeFileSync(filePath, content);
    console.log(`Created: ${fileName}`);
  });
});

console.log('All location-service pages generated successfully!');
