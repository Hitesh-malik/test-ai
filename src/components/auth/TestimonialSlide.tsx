import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TestimonialSlideProps {
  testimonial: {
    quote: string;
    author?: string;
    title?: string;
  };
}

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({ testimonial }) => {
  const [highlightedText, setHighlightedText] = useState<string[]>([]);
  
  // Words to highlight that relate to AI learning benefits
  useEffect(() => {
    const aiKeywords = [
      "AI", "personalized", "adaptive", "instant feedback", 
      "faster", "24/7", "intelligent", "mastered", "complex"
    ];
    
    // Find keywords in the testimonial
    const words = testimonial.quote.split(' ');
    const highlights = words.filter(word => 
      aiKeywords.some(keyword => 
        word.toLowerCase().includes(keyword.toLowerCase())
      )
    );
    
    setHighlightedText(highlights);
  }, [testimonial]);

  const testimonialVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.3
      }
    }
  };
  
  // Word animation for staggered text appearance
  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.3
      }
    })
  };

  // Split quote into words to animate each word separately
  const words = testimonial.quote.split(' ');

  return (
    <div className="relative">
      {/* Quote mark with pulse animation */}
      {/* <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <motion.span 
          className="text-5xl text-white inline-block"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          "
        </motion.span>
      </motion.div> */}

      <div className="min-h-[180px] relative">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={testimonialVariants}
          className="absolute inset-0"
        >
          {/* AI visual indicator */}
          <motion.div 
            className="absolute -left-6 top-0 w-1 h-full bg-blue-400 rounded-full"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ delay: 1, duration: 0.8 }}
          />
          
          <p className="text-white text-lg mb-6 leading-relaxed">
            {words.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className={`inline-block mr-1 ${highlightedText.includes(word) ? 'text-blue-300 font-semibold' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </p>
          
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSlide;