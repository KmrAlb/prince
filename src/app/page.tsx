import Hero from '@/components/Hero';
import ImageGrid from '@/components/Imagegrid';1

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Latest Work</h2>
        <ImageGrid />
      </div>
    </>
  );
}