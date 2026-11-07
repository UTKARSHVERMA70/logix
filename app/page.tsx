import { ArrowUpRight, ChevronDown, Globe2, Menu, MoveRight, PackageCheck, Truck, UsersRound } from 'lucide-react'

const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gemini_generated_video_76f4ef39-uguAKtV0dGzN9zVyAAeSqK76MoBc8H.mp4'
const referenceImageUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S2QVeOZ5B5YS48rbj8gLjFtCJI53TY.png'
const deliveryImageUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1M7cndhGyzgjJXtoJxZwIsIaYGV1yd.png'

const services = ['Land Transportation', 'Air Freight', 'Ocean Freight', 'Freight Forwarding', 'Supply Chain Management']

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero-section" id="home">
        <div className="hero-media">
          <div className="topbar">
            <a className="brand" href="#home" aria-label="SwiftMove home">
              <span className="brand-mark"><Truck size={16} strokeWidth={2.4} /></span>
              <span>Swift<span>Move</span></span>
            </a>
            <nav className="desktop-nav" aria-label="Primary navigation">
              <a className="active" href="#home">Home</a>
              <a href="#about">About us</a>
              <a href="#services">Service</a>
              <a href="#insight">Insight</a>
              <a href="#contact">Contact us</a>
            </nav>
            <div className="top-actions">
              <button className="language" aria-label="Choose language">EN <ChevronDown size={12} /></button>
              <button className="icon-button" aria-label="Open menu"><Menu size={17} /></button>
            </div>
          </div>
          <video autoPlay muted loop playsInline preload="metadata" aria-label="Truck traveling on a highway" poster={referenceImageUrl}>
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow light"><span className="spark">✦</span> Your Global Logistics Partner</div>
            <h1>Smart Logistics <span className="hero-word-image"><img src={referenceImageUrl} alt="Colorful freight trucks" /></span> Solutions<br /><span>That Move the <span className="hero-word-image hero-word-image-wide"><img src={deliveryImageUrl} alt="SwiftMove delivery driver" /></span> World.</span></h1>
            <div className="hero-buttons">
              <a className="button primary" href="#contact">Get a Quote <ArrowUpRight size={15} /></a>
              <a className="button ghost" href="#about">Learn More <MoveRight size={15} /></a>
            </div>
          </div>
          <div className="hero-trust"><div className="avatar-stack"><span>JM</span><span>AK</span><span>LS</span><span>+50</span></div><small>Business Clients</small></div>
          <div className="hero-stat"><span className="stat-image"><Truck size={24} /></span><strong>10,000+</strong><small>Successful Shipments</small></div>
        </div>

        <div className="partner-row"><span className="eyebrow"><span className="spark">✦</span> Our Trusted Partner</span><div className="logos"><b>◉ Logi<span>psum</span></b><b>◒ Logi<span>psum</span></b><b>◌ Logi<span>psum</span></b><b>◈ Logi<span>psum</span></b><b>◉ Logi<span>psum</span></b></div></div>
      </section>

      <section className="about-section section-grid" id="about">
        <div className="section-copy"><div className="section-kicker">About SwiftMove Logistics</div><h2>Your Trusted Partner<br />in Global Logistics</h2><p>SwiftMove Logistics delivers more than shipments — we deliver confidence, precision, and smart technology that moves businesses forward.</p><a className="text-link" href="#contact">Discover our story <ArrowUpRight size={15} /></a></div>
        <div className="about-cards"><article className="dark-card"><div className="small-icon"><Globe2 size={16} /></div><h3>Delivering Excellence Every Mile</h3><p>We&apos;re committed to providing efficient, transparent, and technology-driven logistics solutions that keep businesses globally moving.</p></article><article className="light-card"><div className="small-icon orange"><PackageCheck size={16} /></div><h3>Shaping the Future of Global Logistics</h3><p>Our vision is to build a smarter logistics ecosystem powered by innovation, sustainability, and seamless global connectivity.</p></article><div className="tracking-card"><div className="tracking-top"><span>Shipment tracking</span><span className="live-dot">Live update</span></div><div className="tracking-route"><div><small>Tracking number</small><strong>SM-8472-LOG</strong></div><div className="route-badge">On the way</div></div><div className="progress"><span /></div><div className="tracking-steps"><span className="complete">Picked up</span><span className="complete">In transit</span><span>Delivered</span></div><div className="tracking-meta"><span>Dallas, TX → Atlanta, GA</span><b>Arrives tomorrow</b></div></div></div>
      </section>

      <section className="services-section" id="services"><div className="section-heading"><div><div className="eyebrow"><span className="spark">✦</span> What we do</div><h2>Logistics that move<br />business forward.</h2></div><p>From first mile to final delivery, our integrated solutions make every shipment simpler, safer, and smarter.</p></div><div className="service-list">{services.map((service, index) => <a href="#contact" className="service-row" key={service}><span className="service-number">0{index + 1}.</span><span>{service}</span><ArrowUpRight size={18} /></a>)}</div></section>

      <section className="quote-section" id="insight"><div className="quote-visual"><div className="visual-label"><UsersRound size={15} /> Trusted by teams worldwide</div><div className="visual-stat"><strong>98%</strong><span>on-time delivery rate</span></div></div><div className="quote-copy"><div className="eyebrow"><span className="spark">✦</span> Client testimonials</div><h2>What our partners<br />say about us</h2><blockquote>“SwiftMove has changed the way we think about logistics. Every delivery is on time, every update is clear, and their team genuinely feels like an extension of ours.”</blockquote><div className="person"><div className="person-avatar">AT</div><div><strong>Alex Thompson</strong><span>Operations Director, Northstar</span></div><div className="stars">★★★★★</div></div></div></section>

      <section className="cta-section" id="contact"><div className="cta-marquee"><span>Move smarter.</span><span className="marquee-image"><Truck size={32} /></span><span>Get a quote.</span><span className="marquee-image dark"><Truck size={32} /></span><span>SwiftMove.</span></div><div className="cta-content"><div><h2>Ready to move<br /><span>your business?</span></h2><p>Tell us what you need to move. We&apos;ll take care of the rest.</p></div><a className="button primary" href="mailto:hello@swiftmove.io">Start a conversation <ArrowUpRight size={15} /></a></div><footer><a className="brand" href="#home"><span className="brand-mark"><Truck size={16} /></span><span>Swift<span>Move</span></span></a><div className="footer-links"><a href="#about">About us</a><a href="#services">Services</a><a href="#insight">Insights</a><a href="#contact">Contact</a></div><span className="copyright">© 2025 SwiftMove Logistics</span></footer></section>
    </main>
  )
}
