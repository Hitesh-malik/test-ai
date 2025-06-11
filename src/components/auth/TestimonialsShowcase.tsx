import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TestimonialSlide from './TestimonialSlide';
import UserAvatars from './UserAvatars';
// import AIWritingAnimation from './AIWritingAnimation';

const TestimonialsShowcase: React.FC = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Updated testimonials data focused on AI-assisted learning
 const testimonials = [
  {
    quote: "AI in education isn’t just the future — it’s the revolution that’s making learning more personal, powerful, and accessible than ever before.",
  },
  {
    quote: "With AI as your guide, there are no limits to what you can learn. It's like unlocking your full potential, one insight at a time.",
  },
  {
    quote: "The best learning doesn’t happen alone — it happens with intelligent support. AI empowers you to grow faster, smarter, and more confidently.",
  }
];


  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);


  return (
    <div className="h-full flex flex-col">
      {/* Updated heading */}
      <div className="mb-auto">
        <motion.h2
          className="text-3xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          How AI<br />
          Accelerates Learning.
        </motion.h2>

        <TestimonialSlide 
          testimonial={testimonials[testimonialIndex]} 
          key={testimonialIndex}
        />

      </div>

      {/* Updated bottom info card */}
      {/* <motion.div
        className="mt-12 p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <h3 className="text-xl font-bold text-white mb-2">
          Learn smarter, not harder with AI
        </h3>
        <p className="text-white text-opacity-80 mb-4">
          Join over 10,000 learners who've mastered skills in half the time using our AI-powered personalized learning system.
        </p>
        <UserAvatars />
      </motion.div> */}

      {/* AI Writing Animation - this fits perfectly with the AI learning theme */}
      {/* <AIWritingAnimation /> */}
    </div>
  );
};

export default TestimonialsShowcase;