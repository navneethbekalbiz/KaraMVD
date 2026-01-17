import { Doctor, NavItem, TreatmentItem, TestimonialData, StatItem } from '@/types';
import { siteConfig } from './site.config';
import aestheticDerma from '@/assets/AesthethicDerma.jpg';
import hairRestore from '@/assets/HairRestore.jpg';
import acneRevision from '@/assets/acnerevision.jpg';
import hairTransplant from '@/assets/hairtrans.jpg';
import fillers from '@/assets/fillers.jpg';
import laserReduce from '@/assets/laserreduce.jpg';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About Us', href: '/about' },
  {
    label: 'Treatments',
    href: '#treatments',
    children: [
      { label: 'Laser Hair Removal', href: 'treatments/laser-hair-removal' },
      { label: 'Anti-Aging Treatments', href: 'treatments/anti-aging-treatments' },
      { label: 'Chemical Peel', href: 'treatments/chemical-peel' },
      { label: 'Botox Treatment', href: 'treatments/botox-treatment' },
      { label: 'Dermal Fillers', href: 'treatments/dermal-fillers' },
      { label: 'PRP Hair Treatment', href: 'treatments/prp-hair-treatment' },
      { label: 'Mesotherapy', href: 'treatments/mesotherapy' },
      { label: 'Medifacial', href: 'treatments/medifacial' },
      { label: 'Microneedling RF', href: 'treatments/microneedling-rf' },
      { label: 'Acne Scar Reduction', href: 'treatments/acne-scar-reduction' },
      { label: 'Laser Hair Reduction', href: 'treatments/laser-hair-reduction' },
      { label: 'Fractional CO2', href: 'treatments/fractional-co2' }
    ]
  },
  { label: 'Videos', href: '/videos' },
  { label: 'News', href: '#' },
];

export const OPD_LOCATIONS = [
  {
    name: "Clinic",
    address: "B-11/8034, Vasant Kunj, New Delhi 110070",
    timing: "MON-SAT | 9 AM to 11:45 AM | 4 PM to 8 PM"
  },
  {
    name: "Fortis Hospital",
    address: "Vasant Kunj",
    timing: "Mon-Sat | 10 AM to 4 PM\nSunday: 11 AM to 12 PM (By Appointment Only)"
  },
  {
    name: "Madhukar Rainbow Children & Hospital",
    address: "Malviya Nagar",
    timing: "SAT | 10:30 AM to 11:30 AM"
  }
];

export const SPECIALIZATIONS = [
  {
    title: "Clinical Dermatology",
    description: "Expert diagnosis and treatment for Acne, Eczema, Pigmentation, and more.",
    image: aestheticDerma,
    tag: "Skin Health"
  },
  {
    title: "Aesthetic Procedures",
    description: "Botox, Fillers, Laser Hair Reduction, and Anti-Aging solutions.",
    image: laserReduce,
    tag: "Aesthetics"
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-rashmi-sharma',
    name: 'Dr. Rashmi Sharma',
    role: 'Senior Consultant Dermatologist',
    image: 'https://drrashmisharma.in/wp-content/uploads/2024/03/rr.jpg'
  }
];

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'acne-scars',
    title: 'Acne & Scar Treatment',
    description: 'Comprehensive solutions for active acne and scar reduction including Fractional CO2.',
    image: acneRevision,
    features: ['Chemical Peels', 'Microneedling RF', 'Laser Resurfacing']
  },
  {
    id: 'anti-aging',
    title: 'Anti-Aging & Fillers',
    description: 'Botox and Dermal Fillers for wrinkle reduction and facial contouring.',
    image: fillers,
    features: ['Botox', 'Dermal Fillers', 'Thread Lifts']
  },
  {
    id: 'skin-rejuve',
    title: 'Skin Rejuvenation',
    description: 'Restore glow with Mesotherapy, Medifacials, and PRP treatments.',
    image: aestheticDerma,
    features: ['PRP Therapy', 'Mesotherapy', 'HydraFacial']
  },
  {
    id: 'laser-hair',
    title: 'Laser Hair Reduction',
    description: 'Safe, effective, and long-lasting hair reduction using advanced laser technology suitable for Indian skin.',
    image: laserReduce,
    features: ['Diode Laser', 'Painless', 'Full Body Plans']
  }
];

export const ALL_TREATMENTS: TreatmentItem[] = [
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    subTitle: 'Experience silky smooth skin with our advanced Triple Wavelength Diode Laser technology.',
    description: 'Advanced laser technology for effective and long-lasting hair removal.',
    fullDescription: [
      "Say goodbye to the hassle of shaving, waxing, and plumbing. Our state-of-the-art Laser Hair Removal treatment offers a permanent solution for unwanted hair, using precise laser energy to target hair follicles without damaging the surrounding skin.",
      "We utilize FDA-approved diode laser technology that is safe and effective for all Indian skin types. The treatment is virtually painless, thanks to the integrated cooling mechanism that keeps your skin comfortable throughout the session.",
      "Achieve up to 90% permanent hair reduction in just a few sessions. Whether it's for the face, underarms, arms, legs, or full body, our customized treatment plans ensure the best possible results for your specific hair and skin type."
    ],
    image: laserReduce,
    features: ['Painless', 'Safe', 'Effective'],
    treatmentTypes: [
      {
        title: "Facial Hair Removal",
        description: "Precision targeting for upper lip, chin, and sidelocks."
      },
      {
        title: "Body Hair Removal",
        description: "Efficient coverage for arms, legs, back, and chest."
      },
      {
        title: "Full Body Removal",
        description: "Comprehensive packages for a complete hair-free experience."
      }
    ],
    benefitsDetail: [
      {
        title: "Permanent Reduction",
        description: "Long-term freedom from unwanted hair growth."
      },
      {
        title: "Painless Procedure",
        description: "Advanced cooling technology ensures a comfortable experience."
      },
      {
        title: "No Ingrown Hair",
        description: "Eliminates the risk of bumps and ingrown hairs caused by waxing."
      },
      {
        title: "Soft Skin",
        description: "Leaves your skin feeling significantly smoother and softer."
      }
    ],
    doctorNote: "Laser Hair Reduction is one of the most rewarding procedures we offer. It's not just about aesthetics; it's about the freedom and confidence it brings to our patients. Our technology is specifically calibrated for Indian skin, ensuring maximum safety and efficacy."
  },
  {
    id: 'anti-aging-treatments',
    title: 'Anti-Aging Treatments',
    subTitle: 'Rediscover your youthful radiance with our comprehensive range of anti-aging solutions.',
    description: 'Comprehensive anti-aging solutions to restore youthful skin.',
    fullDescription: [
      "Aging is a natural process, but looking your age doesn't have to be. Our Anti-Aging treatments are designed to reverse the visible signs of aging, such as fine lines, wrinkles, volume loss, and sagging skin, restoring a fresher, more youthful appearance.",
      "We offer a holistic approach, combining various modalities like Botox, Dermal Fillers, and Thread Lifts to achieve natural-looking results. Our goal is not to change how you look, but to help you look like the best version of yourself.",
      "Each treatment plan is personalized after a detailed facial assessment. Whether you want to smooth out dynamic wrinkles or restore lost volume to your cheeks and under-eyes, we have the expertise to deliver safe and stunning results."
    ],
    image: fillers,
    features: ['Botox', 'Fillers', 'Thread Lifts'],
    treatmentTypes: [
      {
        title: "Botox",
        description: "Relaxes muscles to smooth out crow's feet, frown lines, and forehead lines."
      },
      {
        title: "Dermal Fillers",
        description: "Restores volume to cheeks, lips, and under-eyes using hyaluronic acid."
      },
      {
        title: "Thread Lift",
        description: "Non-surgical facelift using dissolvable threads to lift sagging tissues."
      }
    ],
    benefitsDetail: [
      {
        title: "Instant Lift",
        description: "Noticeable improvement in skin firmness and contour."
      },
      {
        title: "Wrinkle Reduction",
        description: "Smooths out static and dynamic lines for a rested look."
      },
      {
        title: "Volume Restoration",
        description: "Replenishes lost volume for enhanced facial harmony."
      },
      {
        title: "Collagen Boost",
        description: "Stimulates natural collagen production for long-term benefits."
      }
    ],
    doctorNote: "The key to successful anti-aging treatment is subtlety. My approach is to enhance your natural features and restore balance, ensuring you look refreshed and rejuvenated, never 'done'. We use only US, FDA-approved products for the highest safety standards."
  },
  {
    id: 'chemical-peel',
    title: 'Chemical Peel',
    subTitle: 'Chemical peel treatment, also known as chemexfoliation, involves the application of strong chemical agents to remove the outermost layer of the skin and reveal a smoother underlying layer.',
    description: 'Exfoliate and revitalize your skin with advanced chemical peels designed to treat acne, pigmentation, and dullness.',
    fullDescription: [
      "A chemical peel is a popular cosmetic procedure that enhances the appearance and texture of the skin. By applying a specialized chemical solution to the skin, the top layer is exfoliated, resulting in a rejuvenated and more youthful complexion. Chemical peels effectively address concerns such as acne, sun damage, wrinkles, and uneven skin tone.",
      "A chemical peel treatment is a safe and advanced method to improve the appearance of your skin. Unlike invasive surgical procedures, it does not require surgery. During the treatment, the outer layer of your skin is gently removed, revealing a smoother and more evenly toned complexion.",
      "The chemical peel procedure stimulates the regeneration of fresh skin cells, resulting in a radiant and healthy radiance. The process involves the application of specially formulated products infused with natural ingredients. These products penetrate deep into the skin, providing nourishment and replenishment."
    ],
    image: aestheticDerma,
    features: ['Skin Brightening', 'Acne Control', 'Pigmentation Correction'],
    treatmentTypes: [
      {
        title: "Superficial Peels",
        description: "The mildest option, utilized on all skin types. Commonly uses glycolic acid to gently exfoliate the top layer."
      },
      {
        title: "Medium Peels",
        description: "Penetrates deeper than superficial peels. Typically chosen for treating deep scars and pigmentation issues using Trichloroacetic acid (TCA)."
      },
      {
        title: "Mixed Peels",
        description: "A combination of different chemicals and therapeutic agents like mandelic, kojic, lactic, and pyruvic acid. Primarily used for advanced skin rejuvenation."
      }
    ],
    benefitsDetail: [
      {
        title: "Pigmentation",
        description: "Highly effective in lightening dark spots, tans, hyperpigmentation, and blemishes, resulting in a more even skin tone."
      },
      {
        title: "Acne",
        description: "Great for combatting deep and stubborn acne scars and controlling active breakouts."
      },
      {
        title: "Aging Signs",
        description: "Significantly reduces the appearance of fine lines and wrinkles associated with aging."
      },
      {
        title: "Rejuvenation",
        description: "Brings you closer to achieving a radiant glow by improving the condition of your skin from within."
      }
    ],
    doctorNote: "Dr. Rashmi Sharma, with her extensive expertise in dermatology, strives to assist individuals in achieving beautiful and healthy skin, free from diseases. Our clinic is equipped with state-of-the-art technologies and facilities, ensuring that patients have comfortable experiences during their chemical peel treatments. We only use high-quality and exclusive ingredients for our chemical peels, resulting in smoother, clearer, and healthier skin."
  },
  {
    id: 'botox-treatment',
    title: 'Botox Treatment',
    subTitle: 'Reduce moderate to severe wrinkles and rejuvenate your appearance with minimally invasive Botox treatment.',
    description: 'Minimally invasive procedure to reduce facial wrinkles and fine lines.',
    fullDescription: [
      "Botox treatment is a minimally invasive procedure that is considered safe and highly effective for treating fine lines and wrinkles around the eyes and forehead. It works by blocking nerve signals to the muscles, preventing contraction and resulting in the relaxation and softening of wrinkles.",
      "Beyond cosmetic enhancements for facial wrinkles, Botox is also effective for treating medical conditions such as chronic migraines, excessive sweating (hyperhidrosis), and neck bands.",
      "The procedure involves precise injections of OnabotulinumtoxinA. Results are visible within a few days and can last for several months, making it a preferred choice for both men and women looking to maintain a youthful appearance."
    ],
    image: fillers,
    features: ['Wrinkle Reduction', 'Migraine Relief', 'Hyperhidrosis Treatment', 'Jaw Contouring'],
    treatmentTypes: [
      {
        title: "Forehead & Frown Lines",
        description: "Reduces horizontal forehead lines (10-30 units) and vertical frown lines between eyebrows (10-25 units)."
      },
      {
        title: "Crow’s Feet",
        description: "Softens lines at the corners of the eyes caused by smiling or laughing (5-15 units per side)."
      },
      {
        title: "Jawline (Masseter) & Neck",
        description: "Slims a square jaw (40-60 units) and smooths neck bands (25-50 units)."
      },
      {
        title: "Smile Lift & Bunny Lines",
        description: "Corrects drooping mouth corners and nose lines for a happier, smoother expression."
      }
    ],
    benefitsDetail: [
      {
        title: "Rejuvenate Sagging Eyebrows",
        description: "Lifts drooping eyebrows that cause a tired appearance, restoring a vibrant look."
      },
      {
        title: "Treat Hyperhidrosis",
        description: "Effectively blocks sweat glands to control excessive sweating even at rest."
      },
      {
        title: "Relieve Migraines",
        description: "Can alleviate the frequency and intensity of chronic migraine headaches."
      },
      {
        title: "Address Wrinkles",
        description: "Diminishes visibility of dynamic wrinkles, giving the face a more youthful and rejuvenated look."
      }
    ],
    doctorNote: "Botox is the preferred choice for both men and women for reducing dynamic facial wrinkles. As an expert in anti-wrinkle treatments, I ensure precise administration for natural-looking, youthful results."
  },
  {
    id: 'dermal-fillers',
    title: 'Dermal Fillers',
    subTitle: 'Restore lost volume, lift sagging skin, and smooth deep lines with premium Hyaluronic Acid fillers.',
    description: 'Restore volume and hydration to your skin with premium dermal fillers for lips, cheeks, and under-eyes.',
    fullDescription: [
      "As we grow older, the natural loss of fat in our faces can result in volume depletion, sagging skin, and the emergence of fine lines and wrinkles. Over time, these can deepen into folds such as nasolabial folds and marionette lines, giving a tired or sad appearance.",
      "Dermal fillers are both an art and a science. They consist of cross-linked Hyaluronic Acid (HA), a natural component of skin tissue. When injected, HA moisturizes and lifts the skin, revitalizing its appearance and restoring lost structural support.",
      "We use market-leading brands such as Juvéderm (Voluma, Volbella, Volift, Ultra XC, Volite) and Restylane. The procedure is comfortable, typically takes about 45 minutes to 1 hour, and offers immediate results that can last from 6 months to 2 years."
    ],
    image: fillers,
    features: ['Lip Enhancement', 'Cheek Augmentation', 'Under-eye Rejuvenation', 'Jawline Contouring'],
    treatmentTypes: [
      {
        title: "Under-Eye Rejuvenation",
        description: "Corrects the 'hollow' or tired look under the eyes caused by the loss of Hyaluronic Acid."
      },
      {
        title: "Lip Enhancement",
        description: "Adds volume to thin lips, defines the lip border, and corrects drooping corners for a more attractive smile."
      },
      {
        title: "Cheek & Temple Lift",
        description: "Restores volume to sunken cheeks and temples, lifting sagging skin for a youthful contour."
      },
      {
        title: "Fold & Wrinkle Correction",
        description: "Softens deep nasolabial folds and marionette lines that can create a sad expression."
      }
    ],
    benefitsDetail: [
      {
        title: "Seamless Integration",
        description: "Fillers blend naturally with your body's tissues to produce a flawless, unnoticeable outcome."
      },
      {
        title: "Instant Hydration & Glow",
        description: "Hyaluronic Acid effectively moisturizes the skin from within, resulting in a radiant and youthful look."
      },
      {
        title: "Reversible & Safe",
        description: "HA fillers are natural and can be dissolved with Hyaluronidase if you are ever dissatisfied."
      },
      {
        title: "Quick Recovery",
        description: "The procedure acts as a 'lunch-time' lift with minimal downtime and immediate results."
      }
    ],
    doctorNote: "Dermal fillers are both an art and a science. I believe in an individualized approach, carefully analyzing your unique facial structure to place micro-doses exactly where needed. Whether it's volumizing cheeks or refining lips, my goal is to restore harmony and balance."
  },
  {
    id: 'prp-hair-treatment',
    title: 'PRP Hair Treatment',
    subTitle: 'Accelerate hair growth and rejuvenate skin using your body\'s own healing power.',
    description: 'Stimulate natural hair growth using Platelet-Rich Plasma therapy, effective for hair thinning and hair loss.',
    fullDescription: [
      "In recent times, this emerging technology has gained significant attention and holds immense potential. The procedure entails separating platelet cells from the patient’s own blood and injecting them into the scalp, resulting in accelerated hair growth and even facial rejuvenation.",
      "Platelet-Rich Plasma (PRP) involves drawing a small fraction of your own blood, spinning it down to concentrate platelets, and reapplying it. Platelets release enzymes that promote healing and mobilize stem cells and growth factors, enhancing the hair growth process.",
      "The advantages of utilizing one’s own tissue eliminate the risk of rejection. PRP therapy is considered safe and does not carry risks of infections, bleeding, allergies, or other complications."
    ],
    image: hairRestore,
    features: ['Accelerated Growth', 'Skin Revitalization', 'No Allergic Risk', 'Natural Results'],
    treatmentTypes: [
      {
        title: "Early Stage Hair Loss",
        description: "Ideal for individuals where thinning has just begun and there is no corresponding hair growth."
      },
      {
        title: "Active Follicle Stimulation",
        description: "targets active hair follicles that are unable to grow into mature strands, boosting their development."
      },
      {
        title: "Weak Hair Quality",
        description: "Improve the density and health of hair strands that have weakened over time."
      },
      {
        title: "Stress & Nutritional Recovery",
        description: "Effective for treating hair loss caused by stress, weight loss, fever, or post-delivery conditions."
      }
    ],
    benefitsDetail: [
      {
        title: "Natural & Safe",
        description: "Utilizes your own blood and tissue, eliminating the risk of rejection or allergic reactions."
      },
      {
        title: "Dual Benefit",
        description: "Promotes faster hair growth and can also be used to revitalize skin and reduce facial lines."
      },
      {
        title: "Wound Healing",
        description: "The therapy is widely employed for wound healing and tissue repair purposes."
      },
      {
        title: "No Risks",
        description: "Considered safe with no risk of infections or other complications."
      }
    ],
    doctorNote: "PRP is a scientifically backed, emerging technology that I recommend for early-stage hair loss. By harnessing your own stem cells, we can significantly improve hair density and quality without the risks associated with surgical procedures."
  },
  {
    id: 'mesotherapy',
    title: 'Mesotherapy',
    subTitle: 'Nourish your skin from within with a cocktail of vitamins, enzymes, and antioxidants.',
    description: 'Deeply nourish your skin and scalp with micro-injections of vitamins, enzymes, and hormones.',
    fullDescription: [
      "Mesotherapy is a technique that uses micro-injections of vitamins, enzymes, hormones, and plant extracts to rejuvenate and tighten skin, as well as remove excess fat. It delivers these active ingredients directly into the mesoderm (middle layer of the skin).",
      "This treatment is highly versatile, addressing concerns from dull skin and hair loss to pigmentation and superficial wrinkles. By bypassing the skin barrier, it ensures that your cells receive 100% of the nutrients they need.",
      "The result is glowing, hydrated skin and healthier hair. We customize the 'cocktail' of nutrients based on your specific needs, whether it's brightening, anti-aging, or hair stimulation."
    ],
    image: aestheticDerma,
    features: ['Skin Rejuvenation', 'Hair Regrowth', 'Glow Boost'],
    treatmentTypes: [
      {
        title: "Facial Mesotherapy",
        description: "aka 'Mesoglow', for instant hydration, brightness, and fine line reduction."
      },
      {
        title: "Hair Mesotherapy",
        description: "Delivers essential nutrients to hair follicles to stop hair fall and promote regrowth."
      },
      {
        title: "Fat Dissolving (Lipolysis)",
        description: "Targets small pockets of stubborn fat for body contouring."
      }
    ],
    benefitsDetail: [
      {
        title: "Deep Hydration",
        description: "Hydrates the skin from the inside out for a dewy look."
      },
      {
        title: "Instant Glow",
        description: "Perfect 'party prep' treatment for dull and tired-looking skin."
      },
      {
        title: "Hair Vitality",
        description: "Strengthens hair roots and improves scalp circulation."
      },
      {
        title: "Customizable",
        description: "The nutrient blend is tailored entirely to your skin's deficiencies."
      }
    ],
    doctorNote: "Mesotherapy is like a super-vitamin shot for your skin. It bridges the gap between topical home care and more invasive procedures. It's excellent for maintenance and keeping your skin looking its absolute best year-round."
  },
  {
    id: 'medifacial',
    title: 'Medifacial',
    subTitle: 'Experience the perfect blend of medical efficacy and spa-like relaxation.',
    description: 'Medical-grade facials that go beyond salon treatments to deep cleanse, exfoliate, and hydrate your skin.',
    fullDescription: [
      "Unlike salon facials that only work on the surface, Medifacials are medical-grade treatments designed to improve the structural integrity of your skin. They use pharmaceutical-grade ingredients and advanced devices to penetrate deeper layers.",
      "Our Medifacials are customized to treat specific skin conditions like acne, pigmentation, sensitivity, and aging. They involve steps like varying strengths of chemical peels, microdermabrasion, dermaplaning, and LED light therapy.",
      "You get the relaxation of a spa day with the results of a dermatological procedure. It's the ideal monthly maintenance routine for healthy, problem-free skin."
    ],
    image: aestheticDerma,
    features: ['Deep Cleansing', 'Hydration Boost', 'Instant Glow'],
    treatmentTypes: [
      {
        title: "Hydra-Boost Facial",
        description: "Uses a vortex-fusion delivery system to exfoliate, extract, and hydrate simultaneously."
      },
      {
        title: "Anti-Acne Facial",
        description: "Deep cleanses pores, extracts comedones, and uses Blue LED light to kill acne bacteria."
      },
      {
        title: "Brightening Facial",
        description: "Infuses Vitamin C and other brighteners to reduce tan and pigmentation."
      }
    ],
    benefitsDetail: [
      {
        title: "Clinical Results",
        description: "Backed by science to actually improve skin health, not just temporary feel-good."
      },
      {
        title: "No Downtime",
        description: "Walk out with an instant glow and zero redness or irritation."
      },
      {
        title: "Deep Cleansing",
        description: "Removes debris and impurities that regular washing can't reach."
      },
      {
        title: "Stress Relief",
        description: "Includes a relaxing massage to boost circulation and lymph drainage."
      }
    ],
    doctorNote: "Think of a Medifacial as a 'reset' button for your skin. It clears out the congestion of city life—pollution, makeup, oil—and floods your skin with actives. It's the foundation of any good skincare regimen."
  },
  {
    id: 'microneedling-rf',
    title: 'Microneedling RF',
    subTitle: 'The gold standard for skin tightening and acne scar remodeling.',
    description: 'Combine microneedling with radiofrequency energy to tighten skin, reduce open pores, and fade acne scars.',
    fullDescription: [
      "Microneedling Radiofrequency (MNRF) is a revolutionary technology that combines the benefits of microneedling with the deep heating of radiofrequency energy. Insulated gold-plated needles penetrate the skin to deliver heat directly into the dermis.",
      "This process stimulates massive collagen and elastin production, which tightens loose skin, shrinks open pores, and significantly reduces the depth of acne scars and stretch marks. It essentially rebuilds the skin's foundation.",
      "MNRF is safe for all skin types and has minimal downtime compared to traditional laser resurfacing. We use the latest FDA-approved devices to ensure comfort and efficacy."
    ],
    image: acneRevision,
    features: ['Skin Tightening', 'Scar Reduction', 'Pore Minimization'],
    treatmentTypes: [
      {
        title: "Scar Resurfacing",
        description: "Deep penetration to break down fibrous scar tissue and build new collagen."
      },
      {
        title: "Non-Surgical Facelift",
        description: "Tightens the jawline and neck area by contracting the collagen fibers."
      },
      {
        title: "Pore Reduction",
        description: "Shrinks enlarged pores for a glass-skin texture."
      }
    ],
    benefitsDetail: [
      {
        title: "Dual Action",
        description: "Mechanical needling plus thermal energy gives double the collagen stimulation."
      },
      {
        title: "Texture Improvement",
        description: "Dramatic smoothing of rough skin, scars, and uneven texture."
      },
      {
        title: "Skin Tightening",
        description: "Visibly lifts and firms sagging skin over a course of sessions."
      },
      {
        title: "Safe for Dark Skin",
        description: "Unlike some lasers, MNRF is color-blind and safe for Indian skin tones."
      }
    ],
    doctorNote: "MNRF is my go-to for patients dealing with acne scars or early signs of sagging. It's an investment in your skin's future. The results are cumulative—your skin keeps improving for months after the treatment."
  },
  {
    id: 'acne-scar-reduction',
    title: 'Acne Scar Reduction',
    subTitle: 'Reclaim your confidence with our multi-modality approach to smooth, scar-free skin.',
    description: 'Advanced protocols using lasers and subcision to smooth out acne scars and improve skin texture.',
    fullDescription: [
      "Acne scars effectively tell the story of past breakouts, but they don't have to define your future. We specialize in treating all types of acne scars—ice pick, boxcar, rolling, and hypertrophic—using a combination of advanced techniques.",
      "Since no two scars are the same, no single treatment works for everyone. We design a customized protocol often combining TCA Cross, Subcision, Microneedling RF, and Fractional Lasers to lift depressed scars and re-surface the skin.",
      "Our goal is not just to reduce the appearance of scars but to improve overall skin texture and tone, giving you a smooth canvas you'll love to show off."
    ],
    image: acneRevision,
    features: ['Laser Resurfacing', 'Subcision', 'Texture Improvement'],
    treatmentTypes: [
      {
        title: "TCA Cross",
        description: "Uses high-concentration acid to chemically reconstruct deep ice-pick scars."
      },
      {
        title: "Subcision",
        description: "Releases fibrous bands pulling the skin down, instantly lifting rolling scars."
      },
      {
        title: "Laser Resurfacing",
        description: "Removes damaged outer layers to reveal fresh, smooth skin underneath."
      }
    ],
    benefitsDetail: [
      {
        title: "Smoother Texture",
        description: "Significant reduction in the depth and visibility of pits and unevenness."
      },
      {
        title: "Customized Plan",
        description: "We mix and match treatments to target your specific scar types."
      },
      {
        title: "Boosts Confidence",
        description: "Achieve the clear skin you've always wanted."
      },
      {
        title: "Long-Term Results",
        description: "The collagen built during these treatments is permanent."
      }
    ],
    doctorNote: "Treating acne scars requires patience and expertise. I often tell my patients it's a journey, not a sprint. But with the right combination of treatments, we can achieve 50-80% improvement, which is life-changing for many."
  },
  {
    id: 'laser-hair-reduction',
    title: 'Laser Hair Reduction',
    subTitle: 'Say goodbye to razors and waxing with our painless, permanent hair reduction solution.',
    description: 'Pain-free, permanent hair reduction using state-of-the-art diode laser technology.',
    fullDescription: [
      "Unwanted body hair is a common concern, and traditional methods like waxing and shaving are temporary, painful, and often lead to ingrown hairs. Laser Hair Reduction is the modern standard for smooth, hair-free skin.",
      "We use the gold-standard Diode Laser, which targets the melanin in the hair follicle, heating it up and destroying the root without harming the surrounding skin. It's safe, effective, and works on all body parts.",
      "With a course of sessions, you can achieve permanent reduction, meaning the hair grows back much finer, lighter, and slower—or stops growing altogether."
    ],
    image: laserReduce,
    features: ['Painless', 'Safe for All Skin Types', 'Permanent Results'],
    treatmentTypes: [
      {
        title: "Full Body",
        description: "The most popular choice for complete freedom from body hair."
      },
      {
        title: "Face & Neck",
        description: "Gentle yet effective treatment for sensitive facial areas."
      },
      {
        title: "Bikini & Underarms",
        description: "Hygenic and comfortable solution for intimate areas."
      }
    ],
    benefitsDetail: [
      {
        title: "Cost Effective",
        description: "Save a lifetime of money spent on waxing appointments and razors."
      },
      {
        title: "Silky Skin",
        description: "Improves skin texture and eliminates 'strawberry legs'."
      },
      {
        title: "No In-growns",
        description: "The only effective cure for painful ingrown hairs (pseudofolliculitis)."
      },
      {
        title: "Time Saving",
        description: "Wake up every day ready to go, without needing to check for stubble."
      }
    ],
    doctorNote: "I always recommend Laser Hair Reduction to anyone tired of the monthly salon cycle. It's one of the highest satisfaction procedures we perform. Our patients often say they wish they had done it sooner!"
  },
  {
    id: 'fractional-co2',
    title: 'Fractional CO2 Laser',
    subTitle: 'The ultimate resurfacing treatment for severe scars, deep wrinkles, and total skin renewal.',
    description: 'Advanced laser resurfacing for severe scars and skin texture improvement.',
    fullDescription: [
      "Fractional CO2 Laser is widely considered the gold standard for skin resurfacing. It works by creating microscopic channels of thermal injury in the skin, triggering a massive natural healing response and collagen production.",
      "This powerful treatment effectively creates 'new skin' from the inside out. It is the treatment of choice for deep acne scars, surgical scars, accidental scars, and significant signs of aging like deep wrinkles and sun damage.",
      "While it involves a few days of downtime (redness and peeling), the results are dramatic and long-lasting. One session of Fractional CO2 can often deliver results equivalent to multiple sessions of milder treatments."
    ],
    image: acneRevision,
    features: ['Deep Resurfacing', 'Scar Treatment', 'Collagen Boost'],
    treatmentTypes: [
      {
        title: "Deep Scar Revision",
        description: "Aggressive mode for remodeling hypertrophic and deep atrophic scars."
      },
      {
        title: "Skin Rejuvenation",
        description: "Lighter settings to treat fine lines, pores, and uneven tone."
      },
      {
        title: "Stretch Mark Therapy",
        description: "Significantly fades the appearance of old, white stretch marks."
      }
    ],
    benefitsDetail: [
      {
        title: "Dramatic Results",
        description: "Visible improvement in texture and firmness after just one session."
      },
      {
        title: "Collagen Factory",
        description: "Stimulates collagen production for up to 6 months post-treatment."
      },
      {
        title: "Versatile",
        description: "Treats scars, wrinkles, age spots, and loose skin simultaneously."
      },
      {
        title: "Precision",
        description: "Fractional technology leaves healthy tissue bridges for faster healing."
      }
    ],
    doctorNote: "Fractional CO2 is a powerful tool in my arsenal. It's for patients who mean business and want significant changes. We manage the downtime protocols carefully to ensure you heal quickly and comfortably."
  }
];

export const STATS: StatItem[] = [
  { value: '9+', label: 'Years of Experience' },
  { value: '5000+', label: 'Happy Patients' },
  { value: '100%', label: 'Safe Procedures' },
];

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: '1',
    quote: `${siteConfig.expertName} is wonderful. She explained the root cause of my acne and the treatment worked perfectly.`,
    author: "Riya S.",
    procedure: "Acne Treatment"
  },
  {
    id: '2',
    quote: "I had a great experience with Laser Hair Reduction here. The results are amazing and the staff is very professional.",
    author: "Anjali M.",
    procedure: "Laser Hair Reduction"
  },
  {
    id: '3',
    quote: "Highly recommend for anti-aging treatments. Subtle, natural results just as I wanted.",
    author: "Pooja K.",
    procedure: "Anti-Aging Details"
  }
];