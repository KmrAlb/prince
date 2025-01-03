import ImageCard from './Imagecard';

const latestWorksData = [
  {
    src: '/images/hero.jpg',
    alt: 'Wedding Couple Portrait',
    category: 'Wedding Couple Portrait',
  },
  {
    src: '/images/pre-wedding.jpg',
    alt: 'Pre-Wedding Shoot',
    category: 'Pre-Wedding Shoot',
  },
  {
    src: '/images/engagement.jpg',
    alt: 'Engagement Session',
    category: 'Engagement Session',
  },
  {
    src: '/images/reception.jpg',
    alt: 'Reception Highlights',
    category: 'Reception Highlights',
  },
  {
    src: '/images/ceremony.jpg',
    alt: 'Ceremony Moments',
    category: 'Ceremony Moments',
  },
  {
    src: '/images/family.jpg',
    alt: 'Family Portraits',
    category: 'Family Portraits',
  },
];

const LatestWorks = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Our Latest Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestWorksData.map((work, index) => (
            <ImageCard
              key={index}
              src={work.src}
              alt={work.alt}
              category={work.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;
