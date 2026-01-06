import PageHeader from '@/app/components/PageHeader'
import React from 'react'

// Data for pricing plans
const pricingPlans = [
  {
    name: 'Starter Plan',
    description: 'Ideal for individuals and small teams just getting started with our platform.',
    price: 19,
    period: '/week',
    features: [
      'Access to all basic features',
      'Assisted onboarding support',
      'CPM Overage: Up to 10,000',
    ],
    nonFeatures: [
      'Program reviews 1x a month',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom integrations',
    ],
    isPopular: false,
  },
  {
    name: 'Popular Plan',
    description: 'Perfect for growing businesses that need more power, features, and dedicated support.',
    price: 39,
    period: '/Month',
    features: [
      'Access to all features',
      'Assisted onboarding support',
      'CPM Overage: Unlimited',
      'Program reviews 1x a month',
      'Dedicated account manager',
    ],
    nonFeatures: [
      '24/7 priority support',
      'Custom integrations',
    ],
    isPopular: true,
  },
  {
    name: 'Custom Plan',
    description: 'For large organizations with specific needs, requiring a tailor-made solution.',
    price: 69,
    period: '/Month',
    features: [
      'Access to all features',
      'Assisted onboarding support',
      'CPM Overage: Unlimited',
      'Program reviews 1x a month',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom integrations',
    ],
    nonFeatures: [],
    isPopular: false,
  },
];

interface Plan {
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  nonFeatures: string[];
  isPopular: boolean;
}

const PricingCard = ({ plan }: { plan: Plan }) => {
  return (
    <div className={`pricing-card rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-3 hover:shadow-lg cursor-pointer relative ${plan.isPopular ? 'border-secondary shadow-lg' : 'border-black'}`}>
      {plan.isPopular && <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full absolute -top-3 right-5">Most Popular</span>}
      <h3 className='font-semibold text-2xl mb-3 Lufga text-black'>
        {plan.name}
      </h3>

      <p className='text-black mb-8 min-h-[72px]'>
        {plan.description}
      </p>

      <div className='pricing-content flex gap-1 items-end mb-8'>
        <h2 className='text-5xl font-bold GolosText'>
          ${plan.price}
        </h2>

        <span className='text-black text-xl font-semibold GolosText'>
          {plan.period}
        </span>

      </div>

      <button className={`btn border w-full cursor-pointer transition-all duration-300 GolosText text-xl px-4 py-1 rounded-md ${plan.isPopular ? 'bg-black text-white' : 'border-black hover:bg-black hover:text-white'}`}>
        Try For Free
      </button>

      <div className='pricing-list py-8'>
        <h4 className='text-black mb-5 GolosText font-semibold'>
          Key Features:
        </h4>

        <ul className='list-item'>
          {plan.features.map((feature, index) => (
            <li key={index} className='flex gap-3 GolosText mb-3'>
              <i className='bi bi-check-circle-fill text-black'></i> {feature}
            </li>
          ))}
        </ul>

        {plan.nonFeatures.length > 0 && (
          <ul className='list-item opacity-50'>
            {plan.nonFeatures.map((feature, index) => (
              <li key={index} className='flex gap-3 GolosText mb-3'>
                <i className='bi bi-x-circle-fill text-gray-400'></i> {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <>
      <PageHeader
        title="Pricing"
        currentPage="Pricing"
      />

      <div className='px-[8%] lg:px-[16%] py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Pricing