import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  // 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Shopify_logo_2018.svg',
];

export default function CompanyCarousel() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start({
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        },
      },
    });
  }, [controls]);

  return (
    <section className="bg-white py-10 border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm text-muted-foreground mb-6">
          Trusted by top companies
        </h2>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-12 w-max items-center"
            animate={controls}
            ref={ref}
          >
            {[...logos, ...logos].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Company Logo"
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
