import React from 'react';
import '../styles/AboutPlan.css';
import peruMap from '../images/peru_map.jpg'; 
import whitneyMap from '../images/whitney_map.jpg';
import xinjiangMap from '../images/xinjiang_map.jpg';

const FuturePlans = () => {
  const plans = [
    {
      date: '2025 Summer',
      location: 'Peru',
      description: 'Plan to hike to Machu Picchu and take photos.',
      map: peruMap,
    },
    {
      date: '2025 Thanksgiving',
      location: 'Mount Whitney',
      description: 'Plan to climb Mount Whitney and capture a sunrise photo. Climbing snowy mountains is a challenging adventure I’m addicted to.',
      map: whitneyMap,
    },
    {
      date: '2026 Summer',
      location: 'Xinjiang, China',
      description: 'Hope to do a road trip in Xinjiang and photograph the summer galaxy in a remote, non-life area.',
      map: xinjiangMap,
    },
  ];

  return (
    <section className="future-plans">
      <header className="future-plans-header">
        <h2>Future Plans</h2>
      </header>
      <div className="timeline">
        {plans.map((plan, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{plan.date}</h3>
              <p><strong>Destination:</strong> {plan.location}</p>
              <p>{plan.description}</p>
            </div>
            <div className="timeline-map">
              <img src={plan.map} alt={`Map of ${plan.location}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FuturePlans;
