import React from 'react';
import './Quality.css';

const Quality = () => {
  return (
    <section className='section'>
      <div className='section-content'>
        <h2>Our Core Values</h2>
        <p className='main-text'>
          Discover what makes us stand out in the industry
        </p>
        <div className='values'>
          <div className='value'>
            <h3>Quality Standards</h3>
            <p>
              We uphold the highest standards of quality in our steel products,
              ensuring reliability and durability.
            </p>
          </div>
          <div className='value'>
            <h3>Innovative Solutions</h3>
            <p>
              We continually innovate to deliver cutting-edge steel products
              that meet market needs.
            </p>
          </div>
          <div className='value'>
            <h3>Customer Commitment</h3>
            <p>
              Customer satisfaction is our priority. We provide personalized
              service and customized steel solutions.
            </p>
          </div>
          <div className='value'>
            <h3>24 X 7 Support</h3>
            <p>
              We offer round-the-clock support to meet our clients' needs
              promptly.
            </p>
          </div>
          <div className='value'>
            <h3>Eco-Friendly Practices</h3>
            <p>
              We prioritize sustainability with eco-friendly materials and
              processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
