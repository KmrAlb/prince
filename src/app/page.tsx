import Hero from '@/components/Hero';
import ImageGrid from '@/components/Imagegrid';1

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ImageGrid />
      </div>
    </>
  );
}