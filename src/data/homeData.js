// Projects data
export const projects = [
  {
    title: "Kitchen",
    client: "Karolina",
    contractor: "Home Care Contractors",
    budget: "$140,000",
    testimonial: "It was a really fantastic experience, and I was happy with the work.",
    image: kitchenImage
  },
  {
    title: "Living Room",
    client: "Michael Anderson",
    contractor: "Home Care Contractors",
    budget: "$85,000",
    testimonial: "The transformation exceeded our expectations. Professional team and quality work throughout.",
    image: livingRoomImage
  },
  {
    title: "Bathroom Remodel",
    client: "Sarah Johnson",
    contractor: "Home Care Contractors",
    budget: "$65,000",
    testimonial: "Beautiful craftsmanship and attention to detail. They made our dream bathroom a reality.",
    image: bathroomImage
  }
];

// Import step images
import photoslide1 from '../assets/Slider1/photoslide1.avif';
import step2Image from '../assets/Slider1/be6b51_99d06defa2ab4cfcb85d811f39d8464d~mv2.avif';
import step3Image from '../assets/Slider1/be6b51_68fd38a489034d1097528c85c75d67a8~mv2.avif';

// Import project images
import kitchenImage from '../assets/Slider2/Modern Stainless Steel Kitchen.avif';
import livingRoomImage from '../assets/Slider2/d8.avif';
import bathroomImage from '../assets/Slider2/d4.avif';

// Steps data
export const steps = [
  {
    title: "Exploratory Consultation",
    image: photoslide1,
    description: "Start with a phone call to determine if we are the right fit for your project goals. Following our initial call, our renovation expert will visit your site to assess the space, take precise measurements, and discuss your vision and style preferences in detail. We focus on understanding your specific needs to provide the highly personalized oversight that defines our firm."
  },
  {
    title: "Planning & Transparency",
    image: step2Image,
    description: "You will receive a detailed quote and design concept rooted in our commitment to radical transparency and honest pricing. Once approved, we guide you through material selections and finalize the project scope, ensuring there is a clear roadmap before work begins. A deposit confirms your place in our calendar, moving the project from the planning phase into procurement."
  },
  {
    title: "Masterful Execution",
    image: step3Image,
    description: "Juan Carlos and the team handle every detail, from coordinating skilled subcontractors to overseeing daily progress with direct on-site project management. We maintain open lines of communication throughout the build to minimize delays and uphold our standards of quality control. Upon completion, we conduct a final walkthrough to ensure every detail meets your expectations and provide you with full care instructions for your new space."
  }
];

// Testimonials data
export const testimonials = [
  {
    text: "We had an incredible experience with Procontractors. From start to finish, everything was seamless and professional.",
  },
  {
    text: "The transparency and hands-on management made this the easiest renovation we've ever done.",
  },
  {
    text: "Highly recommended for anyone needing both residential and light commercial services. Exceptional quality and accountability.",
  }
];

// Star Ratings data - synced with testimonials
export const starRatings = [
  [
    { platform: "Michael J.", style: "default" },
    { platform: "Andrea A.", style: "highlighted" },
    { platform: "JD Bryan", style: "default" }
  ],
  [
    { platform: "Andrea A", style: "default" },
    { platform: "JD Bryan", style: "highlighted" },
    { platform: "Michael J.", style: "default" }
  ],
  [
    { platform: "JD Bryan", style: "default" },
    { platform: "Michael J.", style: "highlighted" },
    { platform: "Andrea A", style: "default" }
  ]
];
