// Locations and their available services
export const locationsData = [
  {
    name: 'Miami Beach',
    slug: 'miami-beach',
    url: '/locations/miami-beach',
    services: [
      { 
        name: 'Kitchen Renovation', 
        slug: 'kitchen-remodeling',
        url: '/locations/miami-beach/kitchen-remodeling'
      },
      { 
        name: 'Bathroom Renovation', 
        slug: 'bathroom-remodeling',
        url: '/locations/miami-beach/bathroom-remodeling'
      },
      { 
        name: 'New Construction', 
        slug: 'new-construction',
        url: '/locations/miami-beach/new-construction'
      }
    ]
  },
  {
    name: 'Coral Gables',
    slug: 'coral-gables',
    url: '/locations/coral-gables',
    services: [
      { 
        name: 'Kitchen Renovation', 
        slug: 'kitchen-remodeling',
        url: '/locations/coral-gables/kitchen-remodeling'
      },
      { 
        name: 'Bathroom Renovation', 
        slug: 'bathroom-remodeling',
        url: '/locations/coral-gables/bathroom-remodeling'
      },
      { 
        name: 'Home Additions', 
        slug: 'home-additions',
        url: '/locations/coral-gables/home-additions'
      },
      { 
        name: 'Home Remodeling', 
        slug: 'home-remodeling',
        url: '/locations/coral-gables/home-remodeling'
      }
    ]
  },
  {
    name: 'Fort Lauderdale',
    slug: 'fort-lauderdale',
    url: '/locations/fort-lauderdale',
    services: [
      { 
        name: 'Home Remodeling', 
        slug: 'home-remodeling',
        url: '/locations/fort-lauderdale/home-remodeling'
      },
      { 
        name: 'New Construction', 
        slug: 'new-construction',
        url: '/locations/fort-lauderdale/new-construction'
      }
    ]
  },
  {
    name: 'Miami Shores',
    slug: 'miami-shores',
    url: '/locations/miami-shores',
    services: [
      { 
        name: 'Home Remodeling', 
        slug: 'home-remodeling',
        url: '/locations/miami-shores/home-remodeling'
      },
      { 
        name: 'Home Additions', 
        slug: 'home-additions',
        url: '/locations/miami-shores/home-additions'
      }
    ]
  },
  {
    name: 'Miami-Dade',
    slug: 'miami-dade',
    url: '/locations/miami-dade',
    services: []
  },
  {
    name: 'Broward',
    slug: 'broward',
    url: '/locations/broward',
    services: []
  }
];

// Service descriptions for different service types
export const serviceDescriptions = {
  'kitchen-remodeling': {
    title: 'Kitchen Remodeling',
    shortDesc: 'Transform your kitchen into a modern culinary masterpiece',
    icon: 'mixer',
    features: [
      'Custom Cabinet Installation',
      'Countertop Replacement',
      'Kitchen Island Design',
      'Lighting & Electrical Upgrades',
      'Plumbing & Fixture Installation',
      'Flooring & Backsplash'
    ]
  },
  'bathroom-remodeling': {
    title: 'Bathroom Remodeling',
    shortDesc: 'Create a luxurious spa-like bathroom retreat',
    icon: 'bathtub',
    features: [
      'Custom Shower & Tub Installation',
      'Vanity & Countertop Upgrades',
      'Tile Work & Flooring',
      'Lighting & Ventilation',
      'Plumbing Fixture Installation',
      'Accessibility Modifications'
    ]
  },
  'home-remodeling': {
    title: 'Home Remodeling',
    shortDesc: 'Complete home transformations tailored to your lifestyle',
    icon: 'home',
    features: [
      'Full Home Renovations',
      'Interior Design & Planning',
      'Structural Modifications',
      'Room Additions',
      'Flooring & Paint',
      'Electrical & Plumbing Updates'
    ]
  },
  'home-additions': {
    title: 'Home Additions',
    shortDesc: 'Expand your living space with custom additions',
    icon: 'addition',
    features: [
      'Room Additions',
      'Second Story Additions',
      'Sunroom Construction',
      'Garage Conversions',
      'ADU (Accessory Dwelling Unit)',
      'Outdoor Living Spaces'
    ]
  },
  'new-construction': {
    title: 'New Construction',
    shortDesc: 'Build your dream home from the ground up',
    icon: 'construction',
    features: [
      'Custom Home Building',
      'Site Preparation & Foundation',
      'Architectural Design Services',
      'Premium Systems Installation',
      'Luxury Finishes & Millwork',
      'Energy-Efficient Solutions'
    ]
  }
};
