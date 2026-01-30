export default function Home() {
  return (
    <>
      {/* Hero section */}
      <header className="hero">
        <div className="hero-text">
          <h1>Beautiful Floors, Expertly Installed</h1>
          <p>Your home or business deserves floors that last and impress.</p>
          <a href="/contact" className="cta-button">
            Get a Free Quote
          </a>
        </div>
      </header>

      {/* Service area section */}
      <section className="service-area-section">
        <h2 className="service-area-title">Our Service Area</h2>

        <div className="map-wrapper-small">
          <iframe
            src="https://serviceareamaps.com/map/e0d699ef2214?embed=1"
            title="Service Area Map"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}
