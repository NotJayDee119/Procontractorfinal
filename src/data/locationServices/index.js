// Central export for all location-based service data

import { kitchenRemodelingSer } from './kitchenRemodeling';
import { bathroomRemodelingSer } from './bathroomRemodeling';
import { homeAdditionsSer } from './homeAdditions';
import { homeRemodelingSer } from './homeRemodeling';
import { newConstructionSer } from './newConstruction';

export const locationServicesData = {
    'kitchen-remodeling': kitchenRemodelingSer,
    'bathroom-remodeling': bathroomRemodelingSer,
    'home-additions': homeAdditionsSer,
    'home-remodeling': homeRemodelingSer,
    'new-construction': newConstructionSer
};

// Helper function to get service data for a specific location
export const getServiceData = (serviceSlug, cityName) => {
    const serviceData = locationServicesData[serviceSlug];
    
    if (!serviceData) {
        console.error(`Service not found: ${serviceSlug}`);
        return null;
    }

    const locationData = serviceData.locations[cityName];
    
    if (!locationData) {
        console.error(`Location data not found for: ${cityName} in service: ${serviceSlug}`);
        return null;
    }
    
    return {
        serviceName: serviceData.serviceName,
        serviceSlug: serviceData.serviceSlug,
        features: serviceData.defaultFeatures,
        shortDesc: locationData?.heroDescription || `Professional ${serviceData.serviceName.toLowerCase()} services in ${cityName}`,
        ...locationData
    };
};

export { kitchenRemodelingSer, bathroomRemodelingSer, homeAdditionsSer, homeRemodelingSer, newConstructionSer };
