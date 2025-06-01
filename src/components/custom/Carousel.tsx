import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const logos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    name: 'Google',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    name: 'Amazon',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
    name: 'Facebook',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    name: 'Microsoft',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    name: 'Apple',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Shopify_logo_2018.svg',
    name: 'Shopify',
  },
];

export default function CompanyCarousel() {
  const controls = useAnimation();

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
          >
            {[...logos, ...logos].map(({ src, name }, idx) => (
              <div key={idx} className="relative inline-block">
                <Avatar className="h-10 w-10 grayscale hover:grayscale-0 transition">
                  <AvatarImage src={src} alt={`${name} Logo`} />
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
                {idx % 3 === 0 && (
                  <Badge
                    variant="secondary"
                    className="absolute top-0 right-0 rounded-full text-xs p-1"
                  >
                    Top
                  </Badge>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
