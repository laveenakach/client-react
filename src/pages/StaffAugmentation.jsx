import "../Layouts/components/staffAugmentation.css";
import { Helmet } from "react-helmet-async";
import heroImage from "../assets/hero_image.jpg";

const StaffAugmentation = () => {
  return (
    
    <main className="staff-augmentation-page">

      <Helmet>
              <title>
                IT Staff Augmentation Company in India | AdlerTech Connect
              </title>
              <meta
                name="description"
                content="Trusted IT staff augmentation company offering remote, hybrid, and onsite developers for startups and enterprises."
              />
      </Helmet>
      {/* ================= HERO ================= */}
      <section className="hero">
        <img src={heroImage} alt="Hero" />
       
         <div className="hero-content">
        
            <h1>IT Staff Augmentation Services</h1>

            <h2>
              Flexible IT Staffing Solutions for Growing Businesses
            </h2>

            <p className="hero-meta"><strong>
              Our IT staff augmentation model allows you to hire skilled professionals on demand—without longterm commitments. We support short-term, long-term, and project-based staffing across multiple
              technologies.
              </strong>
            </p>

            {/* <div className="hero-cta">
              <button className="btn-primary">👉 Request Resource Profiles</button>
            </div> */}

            <div className="hero-cta">
              <button className="btn-primary">Hire Remote Developers</button>
              <button className="btn-primary">Dedicated Development Teams</button>
            </div>
          </div>
        </section>
     

      {/* ================= SERVICES SNAPSHOT ================= */}
      <section className="snapshot-section">
        <h2>Services Snapshot</h2>

        <p className="section-intro">
          Flexible, scalable IT staffing tailored to your business needs.
        </p>

        <div className="benefits-grid">
          <div className="card">
            <h3>Remote Developers</h3>
          </div>

          <div className="card">
            <h3>Hybrid Teams</h3>
          </div>

          <div className="card">
            <h3>Onsite Deployment</h3>
          </div>

          <div className="card">
            <h3>Contract & Part-Time Resources</h3>
          </div>

          <div className="card">
            <h3>Dedicated Development Teams</h3>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="staff-augmentation-page offer-section">
        <h2>What We Offer</h2>

        <div className="offer-slider">
          <div className="offer-track">

            {/* ===== ORIGINAL SET ===== */}

            <div className="offer-card card1">
              <h3>Software Developers</h3>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
            </div>

            <div className="offer-card card2">
              <h3>Data Engineers & Analysts</h3>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
            </div>

            <div className="offer-card card3">
              <h3>AI / ML Engineers & Generative AI Engineers</h3>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.7 1.7 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.82-.33" />
                </svg>
              </div>
            </div>

            <div className="offer-card card4">
              <h3>Cloud & DevOps Engineers</h3>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25" />
                  <polyline points="16 16 12 12 8 16" />
                </svg>
              </div>

            </div>

            <div className="offer-card card5">
              <h3>QA & Automation Specialists</h3>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M9 3h6" />
                  <path d="M10 3v4l-5 8a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 15l-5-8V3" />
                </svg>
              </div>
            </div>

            <div className="offer-card card6">
              <h3>UI/UX Designers</h3>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="13.5" cy="6.5" r="2.5" />
                  <circle cx="17.5" cy="10.5" r="2.5" />
                  <circle cx="8.5" cy="7.5" r="2.5" />
                  <circle cx="6.5" cy="13.5" r="2.5" />
                  <path d="M12 22a10 10 0 1 1 0-20" />
                </svg>
              </div>
            </div>

            <div className="offer-card card7">
              <h3>Technical Project Managers</h3>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="9" y="2" width="6" height="4" rx="1" />
                  <path d="M9 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" />
                  <line x1="9" y1="12" x2="15" y2="12" />
                  <line x1="9" y1="16" x2="15" y2="16" />
                </svg>
              </div>
            </div>

            {/* ===== DUPLICATE FOR LOOP ===== */}

            <div className="offer-card card1">
              <h3>Software Developers</h3>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
            </div>

            <div className="offer-card card2">
              <h3>Data Engineers & Analysts</h3>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
            </div>

            <div className="offer-card card3">
              <h3>AI / ML Engineers & Generative AI Engineers</h3>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.7 1.7 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.82-.33" />
                </svg>
              </div>
            </div>

            <div className="offer-card card4">
              <h3>Cloud & DevOps Engineers</h3>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25" />
                  <polyline points="16 16 12 12 8 16" />
                </svg>
              </div>
            </div>

            <div className="offer-card card5">
              <h3>QA & Automation Specialists</h3>
              <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 3h6" />
                <path d="M10 3v4l-5 8a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 15l-5-8V3" />
              </svg>
            </div>
            </div>

            <div className="offer-card card6">
              <h3>UI/UX Designers</h3>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="13.5" cy="6.5" r="2.5" />
                  <circle cx="17.5" cy="10.5" r="2.5" />
                  <circle cx="8.5" cy="7.5" r="2.5" />
                  <circle cx="6.5" cy="13.5" r="2.5" />
                  <path d="M12 22a10 10 0 1 1 0-20" />
                </svg>
              </div>
            </div>

            <div className="offer-card card7">
              <h3>Technical Project Managers</h3>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="9" y="2" width="6" height="4" rx="1" />
                  <path d="M9 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" />
                  <line x1="9" y1="12" x2="15" y2="12" />
                  <line x1="9" y1="16" x2="15" y2="16" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHAT IS STAFF AUGMENTATION ================= */}
      <section className="what-is-section">
        <h2>What is Staff Augmentation?</h2>

        <p>
          Staff augmentation enables businesses to extend their internal teams 
          with highly skilled professionals without the long-term commitment 
          of full-time hiring.
        </p>

        <h3 style={{textAlign: "center",marginTop: "18px"}}>Benefits</h3>

        <div className="benefits-grid">
          <div className="benefit-card">No lengthy recruitment cycles</div>
          <div className="benefit-card">Reduced hiring & operational costs</div>
          <div className="benefit-card">Access to specialized skills instantly</div>
          <div className="benefit-card">Scale up or down based on demand</div>
          <div className="benefit-card">Full project control</div>
        </div>
      </section>

      {/* ================= ENGAGEMENT MODELS ================= */}
      <section className="engagement-section">
        <h2>Engagement Models</h2>

        <div className="engagement-grid">
          <div className="card">
            <h3>Contract</h3>
            <p>Short-term experts for specific project needs.</p>
          </div>

          <div className="card">
            <h3>Part-Time</h3>
            <p>Flexible specialists aligned to your budget and scope.</p>
          </div>

          <div className="card">
            <h3>Full-Time</h3>
            <p>Dedicated professionals working exclusively for your team.</p>
          </div>

          <div className="card">
            <h3>Dedicated Teams</h3>
            <p>Fully managed development teams focused on your product roadmap.</p>
          </div>
        </div>
      </section>

      {/* ================= DEPLOYMENT MODELS (VERY IMPORTANT) ================= */}
      <section className="deployment-section">
        <h2>Engagement & Deployment Models</h2>

        <p className="section-intro">
          Choose the hiring model that fits your team structure and business goals.
        </p>

        <div className="deployment-grid">

          <div className="card">
            <h3> Remote Resources</h3>
            <p>
              Fully remote professionals working in your time zone and processes.
            </p>
          </div>

          <div className="card">
            <h3>Hybrid Teams</h3>
            <p>
              Blended on-site and remote delivery for collaboration-heavy projects.
            </p>
          </div>

          <div className="card">
            <h3> Onsite Deployment</h3>
            <p>
              Resources deployed at your location for critical or regulated projects.
            </p>
          </div>

          <div className="card">
            <h3>Full-Time Resources</h3>
            <p>
              Dedicated professionals working exclusively with your organization.
            </p>
          </div>

          <div className="card">
            <h3>Part-Time & Contract</h3>
            <p>
              Cost-effective specialists for short-term or flexible needs.
            </p>
          </div>

        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="use-case-section">
        <h2>Use Cases</h2>

        <div className="use-case-grid">
          <div className="card">Product Development</div>
          <div className="card">MVP Building</div>
          <div className="card">Scaling Delivery</div>
          <div className="card">Skill Gap Filling</div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="final-cta">
        <h2>Need Ready-to-Deploy IT Talent?</h2>
        <p>
          Whether you need to fill a short-term gap or scale long-term delivery, we’ve got you covered.
        </p>
        <button className="btn-primary">👉 Request Resource Profiles</button>
      </section>

    </main>
  );
};

export default StaffAugmentation;
