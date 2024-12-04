import React from 'react';

const testimonialData = [
  {
    quote: "We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it.",
    name: "Bessie Cooper",
    role: "Co-Founder, CEO",
    companyLogo: "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/alterbone.svg",
    avatar: "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/avatar-male-1.png"
  },
  {
    quote: "I didn't know designing in Figma could be this individualized. I'd never considered it before, but Landingfolio changed my mind.",
    name: "Albert Flores",
    role: "Senior Product Manager",
    companyLogo: "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/ridoria.svg",
    avatar: "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/avatar-female-1.png"
  },
  {
    quote: "We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it.",
    name: "Jenny Wilson",
    role: "Head of Marketing",
    companyLogo: "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/incanto.svg",
    avatar: "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/avatar-female-2.png"
  }
];

const TestimonialCard = ({ quote, name, role, companyLogo, avatar }) => (
  <div className="flex-1 flex-shrink-0 basis-full md:basis-1/3">
    <div className="p-8">
      <blockquote>
        <p className="text-lg leading-relaxed text-gray-900 mb-4">{quote}</p>
      </blockquote>
      <p className="font-semibold text-base text-gray-900">{name}</p>
      <p className="text-sm text-gray-600">{role}</p>
      <div className="flex items-center justify-between mt-6 pt-6 border-t">
        <img className="h-8 w-auto" src={companyLogo} alt="Company logo" />
        <img className="w-10 h-10 rounded-full" src={avatar} alt={name} />
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <div className="py-12 px-4 md:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Don't just take our words. Over 1000+ people trust us.
        </h2>
      </div>
      <div className="flex flex-wrap gap-8 justify-center max-w-7xl mx-auto">
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;