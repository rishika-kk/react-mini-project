const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Brand New Edition</h1>
        <p>
          WE´VE SET BOLD AND AMBITIOUS TARGETS FOR 2025 AGAINST OUR FOCUS AREAS
          OF PEOPLE, PLANET AND PLAY. LEARN MORE ABOUT OUR JOURNEY TO A BETTER FUTURE
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Available on</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-logo" />
      </div>
    </main>
  );
};

export default HeroSection;
