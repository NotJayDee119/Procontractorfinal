/**
 * ProContractors UI Component Snippets
 * 
 * Copy-paste ready React/JSX components that match the exact UI design.
 * Each component is documented with usage examples and variations.
 */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// ============================================
// SECTION COMPONENTS
// ============================================

/**
 * Light Section Wrapper
 * Usage: Wrap content in a white/light background section
 */
export const SectionLight = ({ children, className = '' }) => (
  <section className={`py-24 bg-white ${className}`}>
    <div className="max-w-7xl mx-auto px-8">
      {children}
    </div>
  </section>
);

/**
 * Dark Section Wrapper (Hero/CTA style)
 * Usage: Page headers, CTA sections
 */
export const SectionDark = ({ children, className = '' }) => (
  <section className={`relative pt-40 pb-28 bg-[#333333] overflow-hidden ${className}`}>
    {/* Decorative Background Elements */}
    <div className="hidden md:block absolute inset-0 opacity-5">
      <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-7xl mx-auto px-8 relative z-10">
      {children}
    </div>
  </section>
);

/**
 * Gradient Section Wrapper
 * Usage: Process sections, transitions between sections
 */
export const SectionGradient = ({ children, className = '' }) => (
  <section className={`py-32 bg-gradient-to-b from-[#f6f1ef] to-white ${className}`}>
    <div className="max-w-7xl mx-auto px-8">
      {children}
    </div>
  </section>
);

// ============================================
// SECTION HEADERS
// ============================================

/**
 * Section Header (Light/Centered)
 * Usage: Standard section title with optional badge and description
 */
export const SectionHeader = ({ 
  badge, 
  title, 
  description, 
  centered = true 
}) => (
  <div className={`${centered ? 'text-center' : ''} mb-20`}>
    {badge && (
      <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#333333] rounded-full mb-6">
        <span className="text-[#f6f1ef] font-custom text-sm font-semibold tracking-wide uppercase">
          {badge}
        </span>
      </div>
    )}
    
    <h2 className="text-[42px] font-custom text-[#333333] mb-6">
      {title}
    </h2>
    <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-6"></div>
    
    {description && (
      <p className={`text-[#5b5b5b] font-wix-madefor ${centered ? 'max-w-3xl mx-auto' : ''} leading-relaxed text-[16px]`}>
        {description}
      </p>
    )}
  </div>
);

/**
 * Page Header (Dark/Hero style)
 * Usage: Top of interior pages
 */
export const PageHeader = ({ badge, title, description }) => (
  <div className="text-center">
    {badge && (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5b5b5b]/30 rounded-full mb-8 backdrop-blur-sm">
        <span className="w-2 h-2 bg-[#f6f1ef] rounded-full animate-pulse"></span>
        <span className="text-[#f6f1ef] font-custom text-sm font-medium tracking-wide">
          {badge}
        </span>
      </div>
    )}

    <h1 className="text-[72px] font-custom text-[#f6f1ef] mb-6 tracking-tight">
      {title}
    </h1>
    <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
    
    {description && (
      <p className="text-[#f6f1ef]/80 font-wix-madefor text-[16px] max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

// ============================================
// BADGES
// ============================================

/**
 * Badge - Dark on Light
 * Usage: Section badges on white backgrounds
 */
export const BadgeDark = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#333333] rounded-full mb-6">
    <span className="text-[#f6f1ef] font-custom text-sm font-semibold tracking-wide uppercase">
      {children}
    </span>
  </div>
);

/**
 * Badge - Light on Dark (with pulse dot)
 * Usage: Hero sections, dark backgrounds
 */
export const BadgeLight = ({ children, showDot = true }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5b5b5b]/30 rounded-full backdrop-blur-sm">
    {showDot && <span className="w-2 h-2 bg-[#f6f1ef] rounded-full animate-pulse"></span>}
    <span className="text-[#f6f1ef] font-custom text-sm font-medium tracking-wide">
      {children}
    </span>
  </div>
);

/**
 * Badge - Secondary (Light on Light)
 * Usage: Feature badges, inline labels
 */
export const BadgeSecondary = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f6f1ef] rounded-full">
    <span className="text-[#333333] font-custom text-sm font-semibold tracking-wide uppercase">
      {children}
    </span>
  </div>
);

/**
 * Category Badge (for image overlays)
 * Usage: Card image overlays, portfolio items
 */
export const CategoryBadge = ({ children }) => (
  <div className="bg-white/95 text-[#333333] px-4 py-1.5 rounded-md text-[10px] font-custom font-bold tracking-[0.15em] shadow-md backdrop-blur-sm">
    {children}
  </div>
);

// ============================================
// BUTTONS
// ============================================

/**
 * Primary Button - Light (for dark backgrounds)
 * Usage: Hero CTAs, dark sections
 */
export const ButtonPrimaryLight = ({ children, onClick, className = '' }) => (
  <button 
    onClick={onClick}
    className={`px-12 py-5 bg-[#f6f1ef] text-[#333333] text-base font-semibold font-wix-madefor hover:bg-white hover:scale-105 transition-all duration-300 rounded-full shadow-2xl hover:shadow-[0_20px_60px_rgba(246,241,239,0.3)] ${className}`}
  >
    {children}
  </button>
);

/**
 * Primary Button - Dark (for light backgrounds)
 * Usage: Forms, cards, light sections
 */
export const ButtonPrimaryDark = ({ children, onClick, showArrow = true, className = '' }) => (
  <button 
    onClick={onClick}
    className={`px-10 py-4 bg-[#333333] text-[#f6f1ef] rounded-full font-wix-madefor font-bold hover:bg-[#5b5b5b] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3 group ${className}`}
  >
    {children}
    {showArrow && (
      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    )}
  </button>
);

/**
 * Secondary Button - Small
 * Usage: Card CTAs, inline actions
 */
export const ButtonSecondary = ({ children, onClick, className = '' }) => (
  <button 
    onClick={onClick}
    className={`px-6 py-2.5 bg-[#2a2a2a] text-white hover:bg-[#5b5b5b] transition-all duration-300 rounded-full font-wix-madefor font-semibold text-sm hover:scale-105 shadow-md ${className}`}
  >
    {children}
  </button>
);

/**
 * CTA Button with Arrow
 * Usage: Service cards, featured sections
 */
export const ButtonCTA = ({ children, onClick, className = '' }) => (
  <button 
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#333333] text-white text-[16px] font-wix-madefor font-semibold rounded-full hover:bg-[#4a4a4a] transition-all duration-300 group/btn shadow-md hover:shadow-lg tracking-wide ${className}`}
  >
    <span>{children}</span>
    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
);

/**
 * Link Button (navigation style)
 * Usage: Navigation links, text links
 */
export const LinkButton = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="relative hover:text-gray-300 transition-all duration-300 text-[15px] xl:text-[17px] group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

// ============================================
// CARDS
// ============================================

/**
 * Service Card
 * Usage: Services grid, homepage
 */
export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  linkTo, 
  linkText = "Learn More" 
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group w-full max-w-sm mx-auto border border-gray-200 hover:border-[#2a2a2a]/20 h-full">
      <div className="flex flex-col items-center text-center space-y-6 h-full">
        {/* Icon Container */}
        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-2xl group-hover:bg-[#2a2a2a]/5 transition-all duration-300">
          <div className="text-[#2a2a2a] group-hover:scale-110 transition-transform duration-300">
            {Icon && <Icon className="w-16 h-16" />}
          </div>
        </div>

        {/* Title */}
        <h4 className="font-custom font-bold text-2xl text-[#2a2a2a] leading-tight min-h-[3.5rem] flex items-center">
          {title}
        </h4>

        {/* Decorative Divider */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#2a2a2a]/30 to-transparent"></div>

        {/* Description */}
        <p className="text-gray-600 text-[16px] leading-relaxed font-wix-madefor flex-grow">
          {description}
        </p>

        {/* Button */}
        {linkTo && (
          <button 
            onClick={() => navigate(linkTo)}
            className="mt-auto px-6 py-2.5 bg-[#2a2a2a] text-white hover:bg-[#5b5b5b] transition-all duration-300 rounded-full font-wix-madefor font-semibold text-sm hover:scale-105 shadow-md"
          >
            {linkText}
          </button>
        )}
      </div>
    </div>
  );
};

/**
 * Featured Service Card
 * Usage: Services page, featured content
 */
export const FeaturedServiceCard = ({ 
  category, 
  title, 
  description, 
  image, 
  linkTo, 
  buttonText,
  features = []
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 w-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-[260px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute top-5 left-5">
          <CategoryBadge>{category.toUpperCase()}</CategoryBadge>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-[32px] font-custom text-[#333333] mb-4 leading-tight">
          {title}
        </h3>

        <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Feature List */}
        {features.length > 0 && (
          <div className="space-y-3 mb-7">
            {features.map((feature, index) => (
              <CheckmarkItem key={index}>{feature}</CheckmarkItem>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <ButtonCTA onClick={() => navigate(linkTo)}>
          {buttonText}
        </ButtonCTA>
      </div>
    </div>
  );
};

// ============================================
// LIST ITEMS
// ============================================

/**
 * Checkmark List Item
 * Usage: Feature lists, benefits
 */
export const CheckmarkItem = ({ children, className = '' }) => (
  <div className={`flex items-start gap-3 ${className}`}>
    <div className="w-5 h-5 rounded-full bg-[#333333] flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
    <span className="text-[16px] text-[#333333] font-wix-madefor leading-tight">{children}</span>
  </div>
);

/**
 * Checkmark List Item - Large
 * Usage: About page, feature sections
 */
export const CheckmarkItemLarge = ({ children }) => (
  <div className="flex items-center gap-3">
    <div className="w-6 h-6 rounded-full bg-[#333333] flex items-center justify-center flex-shrink-0">
      <svg className="w-3 h-3 text-[#f6f1ef]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
    <span className="text-[#333333] font-wix-madefor">{children}</span>
  </div>
);

// ============================================
// FORM ELEMENTS
// ============================================

/**
 * Text Input
 * Usage: Contact forms, general inputs
 */
export const TextInput = ({ 
  type = 'text', 
  name, 
  placeholder, 
  value, 
  onChange, 
  required = false,
  className = '' 
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    className={`w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl font-wix-madefor text-[#333333] text-[16px] placeholder:text-gray-400 focus:border-[#333333] focus:outline-none transition-all duration-300 hover:border-gray-300 ${className}`}
  />
);

/**
 * Textarea
 * Usage: Contact forms, message inputs
 */
export const Textarea = ({ 
  name, 
  placeholder, 
  value, 
  onChange, 
  rows = 5,
  className = '' 
}) => (
  <textarea
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    rows={rows}
    className={`w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl font-wix-madefor text-[#333333] text-[16px] placeholder:text-gray-400 focus:border-[#333333] focus:outline-none transition-all duration-300 hover:border-gray-300 resize-none ${className}`}
  ></textarea>
);

/**
 * Contact Info Box
 * Usage: Contact page, footer
 */
export const ContactInfoBox = ({ icon: Icon, label, value, href }) => (
  <div className="flex gap-5 group">
    <div className="w-14 h-14 bg-[#f6f1ef] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#333333] transition-all duration-300">
      <Icon className="w-7 h-7 text-[#333333] group-hover:text-[#f6f1ef] transition-colors duration-300" />
    </div>
    <div>
      <p className="text-sm text-[#5b5b5b] font-wix-madefor mb-1">{label}</p>
      {href ? (
        <a href={href} className="text-[#333333] font-wix-madefor font-medium hover:text-[#5b5b5b] transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-[#333333] font-wix-madefor font-medium">{value}</p>
      )}
    </div>
  </div>
);

// ============================================
// DECORATIVE ELEMENTS
// ============================================

/**
 * Section Divider
 * Usage: Below section titles
 */
export const SectionDivider = ({ className = '' }) => (
  <div className={`w-24 h-1 bg-[#5b5b5b] mx-auto ${className}`}></div>
);

/**
 * Card Divider
 * Usage: Inside cards, between elements
 */
export const CardDivider = ({ className = '' }) => (
  <div className={`w-16 h-0.5 bg-gradient-to-r from-transparent via-[#2a2a2a]/30 to-transparent ${className}`}></div>
);

/**
 * Floating Stats Badge
 * Usage: Image overlays, hero sections
 */
export const FloatingStatsBadge = ({ value, label, className = '' }) => (
  <div className={`bg-[#333333] text-[#f6f1ef] p-6 rounded-2xl shadow-2xl ${className}`}>
    <div className="text-4xl font-bold font-custom mb-1">{value}</div>
    <div className="text-sm font-wix-madefor opacity-90">{label}</div>
  </div>
);

// ============================================
// ICONS (Common SVG Icons)
// ============================================

export const Icons = {
  ArrowRight: ({ className = 'w-5 h-5' }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  
  ChevronDown: ({ className = 'w-4 h-4' }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
  
  ChevronRight: ({ className = 'w-4 h-4' }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
  
  Check: ({ className = 'w-3 h-3' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  ),
  
  Location: ({ className = 'w-5 h-5' }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  
  Phone: ({ className = 'w-5 h-5' }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  
  Email: ({ className = 'w-5 h-5' }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  
  Home: ({ className = 'w-16 h-16' }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  
  Wrench: ({ className = 'w-16 h-16' }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
};

// ============================================
// EXPORT ALL
// ============================================

export default {
  // Sections
  SectionLight,
  SectionDark,
  SectionGradient,
  
  // Headers
  SectionHeader,
  PageHeader,
  
  // Badges
  BadgeDark,
  BadgeLight,
  BadgeSecondary,
  CategoryBadge,
  
  // Buttons
  ButtonPrimaryLight,
  ButtonPrimaryDark,
  ButtonSecondary,
  ButtonCTA,
  LinkButton,
  
  // Cards
  ServiceCard,
  FeaturedServiceCard,
  
  // Lists
  CheckmarkItem,
  CheckmarkItemLarge,
  
  // Forms
  TextInput,
  Textarea,
  ContactInfoBox,
  
  // Decorative
  SectionDivider,
  CardDivider,
  FloatingStatsBadge,
  
  // Icons
  Icons,
};
