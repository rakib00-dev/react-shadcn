import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Build Stunning Websites with Ease
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Leverage reusable components, modern UI libraries, and
          performance-optimized tools to bring your ideas to life.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/get-started">
            <Button size="lg" className="cursor-pointer">
              Get Started
            </Button>
          </a>
          <a href="/learn-more">
            <Button variant="outline" size="lg" className="cursor-pointer">
              Learn More
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
