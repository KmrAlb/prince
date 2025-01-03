import Link from 'next/link';

const SAMPLE_ENGAGEMENTS = [
  { id: '1', name1: 'Alice', name2: 'Bob', image: 'hero1.jpg' },
  { id: '2', name1: 'Charlie', name2: 'Diana', image: 'hero2.webp' },
  // Add more entries as needed
];

const EngagementPage = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="section-title text-3xl font-bold text-center mb-12">
          ENGAGEMENT
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_ENGAGEMENTS.map((engagement) => (
            <div key={engagement.id} className="group relative cursor-pointer">
              <Link href={`/engagement/${engagement.id}`}>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={`/images/${engagement.image}`}
                    alt={`${engagement.name1} & ${engagement.name2}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                    <p className="text-white text-xl font-semibold">
                      {`${engagement.name1} & ${engagement.name2}`}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementPage;
