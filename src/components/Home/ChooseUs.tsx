

const ChooseUs = () => {
  return (
    <div
      className="choose-us-cont"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <img src="others.png" alt="" />
      <div className="choose-main-cont">
        <div className="choose-cont1">
          <p>Why Choose Us</p>
          <h1>Affordable, Transparent, and Hassle-Free Rentals</h1>
          <p>
            Discover a new way to rent or list properties with confidence.
            Our platform simplifies the rental process by offering transparent
            pricing, secure transactions, and multilingual support. Whether
            you're a landlord or a tenant, we provide a trusted digital space
            that connects you directly without brokers or hidden fees.
          </p>
          <a href="#about">Learn More</a>
        </div>

        <div className="choose-cont2">
          <div className="choose-list-cont1">
            <img src="choose1.svg" alt="" />
            <div>
              <h1>Transparent Pricing</h1>
              <p>
                We believe in clarity and honesty — no hidden charges or
                unnecessary fees. Landlords list properties with a simple
                pay-per-post plan, while tenants browse and rent for free.
              </p>
            </div>
          </div>

          <div className="choose-list-cont2">
            <img src="choose3.png" alt="" />
            <div>
              <h1>Customer-Focused Experience</h1>
              <p>
                Our platform is designed around your needs. From personalized
                property suggestions to real-time support, we make renting
                simple, secure, and stress-free for everyone.
              </p>
            </div>
          </div>

          <div className="choose-list-cont3">
            <img src="choose2.svg" alt="" />
            <div>
              <h1>Verified Listings</h1>
              <p>
                Every property is reviewed and verified before going live.
                We ensure that all listings are authentic, safe, and meet
                quality standards — giving you peace of mind throughout your
                rental journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
