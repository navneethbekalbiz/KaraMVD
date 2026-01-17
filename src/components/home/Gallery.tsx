import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import acneScarBfr from '@/assets/ACNESCARBFR.jpg';
import acneScarAft from '@/assets/acnescarclean.jpg';

export const Gallery: React.FC = () => {
  const galleryItems = [
    {
      title: "Acne Scar Reduction",
      category: "Acne & Pigmentation",
      src: acneScarBfr,
      afterSrc: acneScarAft
    },
    {
      title: "Laser Hair Reduction",
      category: "Laser Aesthetics",
      src: "https://images.unsplash.com/photo-1596910547037-846b7dd4cdd8?q=80&w=1000&auto=format&fit=crop",
      afterSrc: "https://images.unsplash.com/photo-1556942040-aec072282741?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "PRP Hair Treatment",
      category: "Hair Restoration",
      src: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1000&auto=format&fit=crop",
      afterSrc: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Botox & Dermal Fillers",
      category: "Anti-Aging",
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
      afterSrc: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Chemical Peels",
      category: "Skin Rejuvenation",
      src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop",
      afterSrc: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const cards = galleryItems.map((item, index) => (
    <Card
      key={index}
      card={{
        src: item.src,
        afterSrc: item.afterSrc,
        title: item.title,
        category: item.category,
        content: (
          <div className="flex flex-col gap-6">
            <p className="font-sans text-lg text-obsidian/80 leading-relaxed font-light">
              Achieve visible, life-changing results with our specialized {item.title.toLowerCase()}.
              We utilize advanced techniques to ensure minimal downtime and maximum aesthetic improvement.
            </p>
            <div className="p-6 bg-sand/30 rounded-2xl border border-obsidian/5">
              <h4 className="font-display text-xl mb-4">Treatment Highlights</h4>
              <ul className="list-disc list-inside space-y-2 font-sans text-obsidian/70">
                <li>Expert consultation and analysis</li>
                <li>FDA-approved technology</li>
                <li>Personalized care plan</li>
              </ul>
            </div>
          </div>
        )
      }}
      index={index}
    />
  ));

  return (
    <section id="gallery" className="py-24 md:py-36 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-8">
        <Reveal width="100%">
          <div className="flex flex-col items-center text-center w-full">
            <span className="text-gold font-sans tracking-[0.2em] text-xs uppercase block mb-4">Real Patients • Real Results</span>
            <h2 className="font-display text-4xl md:text-5xl text-obsidian mb-2">Visible Transformations</h2>
          </div>
        </Reveal>
      </div>

      <div className="w-full h-full">
        <Carousel items={cards} autoScroll={true} />
      </div>
    </section>
  );
};