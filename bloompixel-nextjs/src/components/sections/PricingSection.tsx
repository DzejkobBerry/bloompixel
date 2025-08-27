'use client';

import { useState } from 'react';
import { pricingPlans } from '@/data/pricing';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: 'outline' | 'primary' | 'premium';
}

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const getPrice = (plan: PricingPlan) => {
    if (billingPeriod === 'yearly') {
      return Math.round(plan.price * 12 * 0.8); // 20% discount for yearly
    }
    return plan.price;
  };

  const getPeriodText = () => {
    return billingPeriod === 'monthly' ? '/miesiąc' : '/rok';
  };

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Wybierz swój <span className="highlight">plan</span></h2>
          <p className="section-subtitle">Elastyczne pakiety dostosowane do Twoich potrzeb</p>
          
          <div className="billing-toggle">
            <span className={billingPeriod === 'monthly' ? 'active' : ''}>Miesięcznie</span>
            <div className="toggle-switch" onClick={() => setBillingPeriod(prev => prev === 'monthly' ? 'yearly' : 'monthly')}>
              <div className={`toggle-slider ${billingPeriod === 'yearly' ? 'yearly' : ''}`}></div>
            </div>
            <span className={billingPeriod === 'yearly' ? 'active' : ''}>
              Rocznie
              <span className="discount-badge">-20%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <span>Najpopularniejszy</span>
                </div>
              )}
              
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="price">
                  <span className="currency">PLN</span>
                  <span className="amount">{getPrice(plan)}</span>
                  <span className="period">{getPeriodText()}</span>
                </div>
              </div>

              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className="fas fa-check"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-footer">
                <button className={`btn btn-${plan.buttonVariant} pricing-btn`}>
                  {plan.buttonText}
                </button>
              </div>

              {plan.popular && <div className="card-glow"></div>}
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <p>
            <i className="fas fa-info-circle"></i>
            Wszystkie ceny są netto. Możliwość dostosowania pakietu do indywidualnych potrzeb.
          </p>
        </div>
      </div>

      <style jsx>{`
        .pricing {
          padding: 10rem 0;
          background: var(--dark-primary);
          position: relative;
          overflow: hidden;
        }
        
        .pricing::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 6rem;
          position: relative;
          z-index: 1;
        }
        
        .section-header h2 {
          font-size: 4.8rem;
          font-weight: 800;
          margin-bottom: 2rem;
          color: var(--light);
        }
        
        .highlight {
          background: linear-gradient(135deg, var(--violet-primary), var(--pink-primary));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .section-subtitle {
          font-size: 1.8rem;
          color: var(--light-secondary);
          max-width: 600px;
          margin: 0 auto 4rem;
          line-height: 1.6;
        }
        
        .billing-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          background: var(--dark-secondary);
          padding: 1rem 2rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: inline-flex;
        }
        
        .billing-toggle span {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--light-secondary);
          transition: color 0.3s ease;
          position: relative;
        }
        
        .billing-toggle span.active {
          color: var(--light);
        }
        
        .discount-badge {
          background: var(--violet-primary);
          color: var(--light);
          padding: 0.2rem 0.6rem;
          border-radius: 12px;
          font-size: 1rem;
          margin-left: 0.5rem;
        }
        
        .toggle-switch {
          width: 50px;
          height: 24px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          position: relative;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        
        .toggle-slider {
          width: 20px;
          height: 20px;
          background: var(--violet-primary);
          border-radius: 50%;
          position: absolute;
          top: 2px;
          left: 2px;
          transition: transform 0.3s ease;
        }
        
        .toggle-slider.yearly {
          transform: translateX(26px);
        }
        
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          position: relative;
          z-index: 1;
        }
        
        .pricing-card {
          background: var(--dark-secondary);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--border-radius);
          padding: 3rem;
          position: relative;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .pricing-card.popular {
          border-color: var(--violet-primary);
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.2);
          transform: scale(1.05);
        }
        
        .pricing-card.popular:hover {
          transform: scale(1.05) translateY(-10px);
        }
        
        .popular-badge {
          position: absolute;
          top: -1px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, var(--violet-primary), var(--pink-primary));
          color: var(--light);
          padding: 0.8rem 2rem;
          border-radius: 0 0 20px 20px;
          font-size: 1.2rem;
          font-weight: 600;
        }
        
        .pricing-header {
          text-align: center;
          margin-bottom: 3rem;
          padding-top: 2rem;
        }
        
        .pricing-header h3 {
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--light);
          margin-bottom: 1rem;
        }
        
        .plan-description {
          color: var(--light-secondary);
          font-size: 1.4rem;
          margin-bottom: 2rem;
          line-height: 1.5;
        }
        
        .price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .currency {
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--light-secondary);
        }
        
        .amount {
          font-size: 4.8rem;
          font-weight: 800;
          color: var(--light);
        }
        
        .period {
          font-size: 1.6rem;
          color: var(--light-secondary);
        }
        
        .pricing-features {
          margin-bottom: 3rem;
        }
        
        .pricing-features ul {
          list-style: none;
          padding: 0;
        }
        
        .pricing-features li {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .pricing-features li:last-child {
          border-bottom: none;
        }
        
        .pricing-features i {
          color: var(--violet-primary);
          font-size: 1.4rem;
          flex-shrink: 0;
        }
        
        .pricing-features span {
          color: var(--light-secondary);
          font-size: 1.4rem;
          line-height: 1.5;
        }
        
        .pricing-btn {
          width: 100%;
          padding: 1.5rem;
          font-size: 1.6rem;
          font-weight: 600;
        }
        
        .btn-premium {
          background: linear-gradient(135deg, var(--violet-primary), var(--pink-primary));
          color: var(--light);
          border: none;
        }
        
        .btn-premium:hover {
          background: linear-gradient(135deg, var(--pink-primary), var(--violet-primary));
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
        }
        
        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
          border-radius: var(--border-radius);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .pricing-card.popular .card-glow {
          opacity: 1;
        }
        
        .pricing-note {
          text-align: center;
          margin-top: 4rem;
          position: relative;
          z-index: 1;
        }
        
        .pricing-note p {
          color: var(--light-secondary);
          font-size: 1.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        
        .pricing-note i {
          color: var(--violet-primary);
        }
        
        @media (max-width: 768px) {
          .pricing {
            padding: 6rem 0;
          }
          
          .section-header h2 {
            font-size: 3.2rem;
          }
          
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .pricing-card {
            padding: 2rem;
          }
          
          .pricing-card.popular {
            transform: none;
          }
          
          .pricing-card.popular:hover {
            transform: translateY(-10px);
          }
          
          .billing-toggle {
            flex-direction: column;
            gap: 1rem;
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}