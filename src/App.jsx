import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Database,
  Globe2,
  Mail,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const companyName = "Infocus Global Technologies PTY LTD";
const email = "sales@infocusglobaltech.com";

const services = [
  {
    icon: Server,
    title: "Managed IT Operations",
    desc: "Structured IT support, service desk coordination, escalation handling and operational support for modern businesses.",
  },
  {
    icon: Cloud,
    title: "Cloud & Microsoft 365",
    desc: "Microsoft 365, email, Teams, SharePoint, OneDrive, cloud productivity and modern workplace administration.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Endpoint Protection",
    desc: "Security-first support covering endpoint protection, antivirus, access hygiene, device hardening and practical risk reduction.",
  },
  {
    icon: Network,
    title: "Infrastructure & Networking",
    desc: "Network, Wi-Fi, routing, server, connectivity and business infrastructure support designed for stability and scale.",
  },
  {
    icon: Globe2,
    title: "Global Remote Support",
    desc: "Remote-first service coverage across APAC, Middle East, Africa, India, Canada and supported international regions, excluding USA and Europe.",
  },
  {
    icon: Database,
    title: "Device Lifecycle & Procurement",
    desc: "Procurement, deployment, device lifecycle planning, workstation readiness and business technology standardisation.",
  },
];

const regions = [
  "Australia HQ",
  "New Zealand",
  "India",
  "Singapore",
  "Malaysia",
  "United Arab Emirates",
  "Middle East",
  "Africa",
  "Canada",
  "APAC Region",
  "Global Remote Support",
  "Cloud Operations",
];

function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Services", "Global Presence", "Contact"];

  function goTo(item) {
    setPage(item);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header className="siteHeader">
      <div className="wrap navBar">
        <button className="brand" type="button" onClick={() => goTo("Home")}>
          <img src="/logo.png" alt="Infocus Global Technologies" />
          <div>
            <strong>Infocus Global</strong>
            <span>Technologies PTY LTD</span>
          </div>
        </button>

        <nav className={open ? "navLinks open" : "navLinks"}>
          {links.map((link) => (
            <button key={link} type="button" className={page === link ? "active" : ""} onClick={() => goTo(link)}>
              {link}
            </button>
          ))}
        </nav>

        <button className="navCta" type="button" onClick={() => goTo("Contact")}>Contact</button>
        <button className="menuBtn" type="button" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="serviceCard">
      <div className="serviceIcon"><Icon /></div>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
    </article>
  );
}

function CommandCentre() {
  return (
    <div className="commandCentre">
      <div className="windowBar">
        <span />
        <span />
        <span />
        <strong>Global Operations Console</strong>
      </div>

      <div className="globeCore">
        <Globe2 />
        <i className="ring ringOne" />
        <i className="ring ringTwo" />
        <i className="ring ringThree" />
      </div>

      <div className="consoleRows">
        <p><CheckCircle2 /> Australia HQ coordination</p>
        <p><CheckCircle2 /> APAC, Middle East, Africa & Canada support</p>
        <p><CheckCircle2 /> Structured global remote operations</p>
      </div>
    </div>
  );
}

function Home({ setPage }) {
  return (
    <>
      <section className="heroSection">
        <video className="heroVideo" autoPlay muted loop playsInline>
          <source src="/Logo.mp4" type="video/mp4" />
        </video>
        <div className="heroOverlay" />
        <div className="heroGridPattern" />

        <div className="wrap heroGrid">
          <div className="heroCopy reveal">
            <p className="heroPill"><Sparkles size={16} /> Australia HQ • Global IT Operations • Multi-region Delivery</p>
            <h1>Global technology operations built for modern businesses.</h1>
            <p>
              Infocus Global Technologies PTY LTD delivers secure IT support, cloud services,
              infrastructure operations, cybersecurity and business technology delivery across supported global regions.
            </p>
            <div className="heroActions">
              <button className="primaryBtn" type="button" onClick={() => setPage("Services")}>Explore Services <ArrowRight size={18} /></button>
              <button className="secondaryBtn" type="button" onClick={() => setPage("Global Presence")}>View Global Presence</button>
            </div>
            <div className="heroStats">
              <div><strong>AU HQ</strong><span>Australia headquartered</span></div>
              <div><strong>Global</strong><span>Multi-region service delivery</span></div>
              <div><strong>Secure</strong><span>Cloud, infrastructure and operations</span></div>
            </div>
          </div>

          <CommandCentre />
        </div>
      </section>

      <section className="wrap section introSection reveal">
        <div className="sectionHead wide">
          <p className="eyebrow">Enterprise Technology Partner</p>
          <h2>Designed for organisations that need reliable systems, clear support and scalable technology operations.</h2>
          <p>
            We combine remote-first service delivery, technical operations capability and practical business understanding to support companies across multiple regions and operating environments.
          </p>
        </div>
      </section>

      <section className="wrap section reveal">
        <div className="sectionHead">
          <p className="eyebrow">Core Capabilities</p>
          <h2>IT services that keep businesses connected, protected and operational.</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      </section>

      <GlobalMapSection />
    </>
  );
}

function About() {
  return (
    <main className="pageWrap">
      <section className="aboutHero">
        <div className="wrap aboutGrid">
          <div>
            <p className="eyebrow">About Infocus</p>
            <h1>A winning technology story built from service discipline, operational clarity and global ambition.</h1>
            <p className="pageLead">
              Infocus Global Technologies PTY LTD was built on a simple belief: businesses should not lose momentum because their technology is unreliable, confusing or poorly supported. Our story is a winning story of focus, resilience and execution — turning practical IT problem-solving into a premium global technology operations brand.
            </p>
          </div>
          <div className="aboutImageCard">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop" alt="Technology operations team" />
          </div>
        </div>
      </section>

      <section className="wrap storySection">
        <div className="storyContent">
          <p className="eyebrow">Our Story</p>
          <h2>From focused support to global technology operations.</h2>
          <p>
            Infocus Global Technologies began with a practical understanding of what businesses truly need from technology: stability, responsiveness and clarity. In the early stages, the focus was direct — solve the problem, support the user and keep operations moving.
          </p>
          <p>
            Over time, that service mindset evolved into a broader operational model. We recognised that modern businesses were no longer operating from one desk, one office or one country. Teams were becoming distributed, cloud platforms were becoming essential and communication systems were becoming business-critical.
          </p>
          <p>
            That shift shaped our growth. Infocus Global Technologies developed into a modern technology partner capable of supporting managed IT operations, Microsoft 365 environments, infrastructure, cybersecurity, communications and global remote support models.
          </p>
          <p>
            Today, our approach is built for businesses that need dependable IT support across regions, devices and users. Headquartered in Australia, we support APAC, Middle East, Africa, India, Canada and selected global regions, through a focused multi-region remote-first support model.
          </p>
          <p>
            Our story is not built on exaggerated promises. It is built on execution, accountability and the belief that great technology support should feel calm, structured and dependable. Infocus Global Technologies is being shaped as a serious, premium and trusted technology partner — the quiet operational strength behind businesses that want to scale without technology friction.
          </p>
        </div>

        <div className="timeline">
          <div><strong>01</strong><h3>Service Foundation</h3><p>Built around problem solving, user support and reliable technical delivery.</p></div>
          <div><strong>02</strong><h3>Operational Expansion</h3><p>Expanded into managed IT, cloud, networking, communications and security support.</p></div>
          <div><strong>03</strong><h3>Global Delivery Model</h3><p>Designed a remote-first support model for distributed businesses and multi-region teams.</p></div>
          <div><strong>04</strong><h3>Enterprise Mindset</h3><p>Focused on scalable systems, structured support, security and long-term partnerships.</p></div>
        </div>
      </section>
    </main>
  );
}

function Services() {
  return (
    <main className="wrap page">
      <p className="eyebrow">Services</p>
      <h1>Managed IT, cloud, cybersecurity, communications and infrastructure support.</h1>
      <p className="pageLead">
        Infocus Global Technologies supports businesses with practical, scalable and security-conscious technology services across supported global regions.
      </p>
      <div className="serviceGrid pageServices">
        {services.map((service) => <ServiceCard key={service.title} service={service} />)}
      </div>
    </main>
  );
}

function GlobalMapSection() {
  return (
    <section className="globalMapSection reveal">
      <div className="wrap mapLayout">
        <div className="mapStats">
          <div><span>HQ</span><strong>Australia</strong><p>Headquarters, coordination and operational leadership.</p></div>
          <div><span>Reach</span><strong>Global</strong><p>Supported regions across APAC, Middle East, Africa, India and Canada.</p></div>
          <div><span>Delivery</span><strong>Remote-first</strong><p>Focused multi-region service delivery with enterprise-grade coordination.</p></div>
        </div>

        <div className="mapCanvas">
          <div className="mapLabel">Global Service Presence</div>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            alt="Global Presence Map"
            className="realWorldMap"
          />

          <span className="mapNode australia"></span>
          <span className="mapNode nz"></span>
          <span className="mapNode india"></span>
          <span className="mapNode singapore"></span>
          <span className="mapNode middleeast"></span>
          <span className="mapNode africa"></span>
          <span className="mapNode canada"></span>

          <div className="line l1"></div>
          <div className="line l2"></div>
          <div className="line l3"></div>
          <div className="line l4"></div>

          <p className="mapFootnote">
            APAC • Middle East • Africa • India • Canada • Australia HQ • Remote-first global operations
          </p>
        </div>
      </div>
    </section>
  );
}

function GlobalPresence() {
  return (
    <main className="pageWrap">
      <section className="wrap page">
        <p className="eyebrow">Global Presence</p>
        <h1>Australia headquartered with focused international delivery.</h1>
        <p className="pageLead">
          Our global support model is built for organisations operating across supported regions. We provide remote-first IT support and coordination across APAC, Middle East, Africa, India, Canada and Australia. Our delivery is focused on selected high-priority global regions where we can provide clear, responsive and reliable support.
        </p>
        <div className="regionGrid">
          {regions.map((region) => <span key={region}>{region}</span>)}
        </div>
      </section>
      <GlobalMapSection />
    </main>
  );
}

function Contact() {
  return (
    <main className="wrap page contactPage">
      <div>
        <p className="eyebrow">Contact</p>
        <h1>Start a conversation with Infocus Global Technologies.</h1>
        <p className="pageLead">
          For managed IT operations, cybersecurity, Microsoft 365, infrastructure, cloud or global support enquiries, contact our team by email.
        </p>
        <div className="emailCard">
          <Mail />
          <div>
            <span>Email</span>
            <strong>{email}</strong>
          </div>
        </div>
      </div>

      <form
  className="contactForm"
  action={`https://formsubmit.co/${email}`}
  method="POST"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_subject" value="New Infocus Global Website Lead" />
  <input type="hidden" name="_next" value="https://infocusglobal.vercel.app/" />
        <input name="name" required placeholder="Full Name" />
        <input type="email" name="email" required placeholder="Business Email" />
        <input name="company" placeholder="Company Name" />
        <select name="service">
          <option>Service Interested In</option>
          <option>Managed IT Operations</option>
          <option>Microsoft 365 & Cloud</option>
          <option>Cybersecurity</option>
          <option>Infrastructure & Networking</option>
          <option>Global Remote Support</option>
          <option>Device Lifecycle & Procurement</option>
        </select>
        <textarea name="message" rows="6" required placeholder="Tell us about your requirement" />
        <button className="primaryBtn full" type="submit">Submit Enquiry</button>
      </form>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <style>{css}</style>
      <Nav page={page} setPage={setPage} />
      {page === "Home" && <Home setPage={setPage} />}
      {page === "About" && <About />}
      {page === "Services" && <Services />}
      {page === "Global Presence" && <GlobalPresence />}
      {page === "Contact" && <Contact />}
      <footer>
        <div className="wrap footerGrid">
          <div>
            <img src="/logo.png" alt="Infocus Global Technologies" />
            <div>
              <h3>{companyName}</h3>
              <p>Australia HQ • Global IT Services • Multi-region Delivery</p>
            </div>
          </div>
          <p>{email}</p>
        </div>
      </footer>
    </div>
  );
}

const css = `
:root{--black:#05070d;--navy:#07142d;--blue:#0057c8;--sky:#0ea5e9;--soft:#eef6ff;--text:#0f172a;--muted:#5b6c80;--line:#dbe7f3;--card:#ffffff}
*{box-sizing:border-box}html,body,#root{width:100%;min-height:100%;margin:0;padding:0;max-width:none;text-align:left}body{font-family:Inter,Arial,Helvetica,sans-serif;background:#eef6ff;color:var(--text);overflow-x:hidden}button,input,textarea,select{font-family:inherit}button{cursor:pointer}.wrap{width:min(100% - 48px,1320px);margin:0 auto}.heroSection,.globalMapSection,.aboutHero,footer{width:100vw;margin-left:calc(50% - 50vw)}.siteHeader{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.94);border-bottom:1px solid var(--line);backdrop-filter:blur(16px)}.navBar{height:104px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:flex;align-items:center;gap:14px;background:transparent;border:0;text-align:left;color:var(--black)}.brand img{width:88px;height:88px;object-fit:contain}.brand strong{display:block;font-size:22px;letter-spacing:-.03em}.brand span{display:block;color:var(--blue);font-weight:900;text-transform:uppercase;letter-spacing:.08em;font-size:12px}.navLinks{display:flex;gap:26px;align-items:center}.navLinks button{border:0;background:transparent;color:var(--black);font-weight:800;font-size:15px;padding:10px 0;border-bottom:3px solid transparent}.navLinks button.active,.navLinks button:hover{color:var(--blue);border-bottom-color:var(--blue)}.navCta{border:0;background:linear-gradient(135deg,var(--blue),var(--sky));color:white;border-radius:999px;padding:14px 22px;font-weight:900}.menuBtn{display:none;border:0;background:var(--black);color:white;border-radius:10px;padding:10px}.heroSection{position:relative;min-height:calc(100vh - 104px);background:var(--black);color:white;overflow:hidden;display:flex;align-items:center}.heroVideo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.3}.heroOverlay{position:absolute;inset:0;background:linear-gradient(110deg,rgba(5,7,13,.96),rgba(7,20,45,.82),rgba(0,87,200,.38))}.heroGridPattern{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px);background-size:54px 54px;animation:gridMove 28s linear infinite}@keyframes gridMove{from{background-position:0 0}to{background-position:162px 108px}}.heroGrid{position:relative;z-index:2;display:grid;grid-template-columns:minmax(0,1.05fr) minmax(360px,.95fr);gap:72px;align-items:center;padding:94px 0;min-height:calc(100vh - 104px)}.heroPill{display:inline-flex;align-items:center;gap:8px;background:rgba(14,165,233,.12);border:1px solid rgba(125,211,252,.22);color:#a8e4ff;border-radius:999px;padding:10px 16px;font-weight:900;margin:0 0 24px}.heroCopy h1{font-size:clamp(44px,5vw,78px);line-height:1.02;letter-spacing:-2.6px;margin:0 0 24px;color:#fff;text-shadow:0 18px 44px rgba(0,0,0,.35)}.heroCopy p{font-size:19px;line-height:1.8;color:#dceeff;max-width:720px;margin:0}.heroActions{display:flex;gap:14px;flex-wrap:wrap;margin-top:34px}.primaryBtn,.secondaryBtn{border:0;border-radius:999px;padding:15px 24px;font-weight:900;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:10px;transition:.25s}.primaryBtn{background:linear-gradient(135deg,var(--blue),var(--sky));color:white;box-shadow:0 18px 38px rgba(0,87,200,.28)}.secondaryBtn{background:white;color:var(--blue)}.primaryBtn:hover,.secondaryBtn:hover{transform:translateY(-3px)}.primaryBtn.full{width:100%}.heroStats{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:36px}.heroStats div{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);border-radius:18px;padding:17px}.heroStats strong{display:block;font-size:22px}.heroStats span{font-size:13px;color:#cfe8ff}.commandCentre{background:rgba(255,255,255,.94);color:var(--black);border:1px solid rgba(255,255,255,.35);border-radius:28px;padding:28px;box-shadow:0 34px 80px rgba(0,0,0,.3);animation:float 5s ease-in-out infinite}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}.windowBar{display:flex;gap:8px;border-bottom:1px solid var(--line);padding-bottom:16px}.windowBar span{width:10px;height:10px;border-radius:50%;background:#ff5f57}.windowBar span:nth-child(2){background:#ffbd2e}.windowBar span:nth-child(3){background:#28c840}.windowBar strong{margin-left:auto}.globeCore{height:260px;display:grid;place-items:center;position:relative}.globeCore svg{width:120px;height:120px;color:var(--blue);z-index:3}.ring{position:absolute;border:2px solid rgba(0,87,200,.18);border-radius:50%;animation:spin 14s linear infinite}.ringOne{width:245px;height:125px}.ringTwo{width:180px;height:265px;animation-duration:18s}.ringThree{width:260px;height:260px;animation-duration:22s}@keyframes spin{to{transform:rotate(360deg)}}.consoleRows{display:grid;gap:12px}.consoleRows p{margin:0;background:#eef6ff;border:1px solid var(--line);border-radius:14px;padding:14px;font-weight:800;display:flex;align-items:center;gap:10px}.consoleRows svg{color:var(--blue);flex:none}.reveal{animation:fadeUp .75s ease both}@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}.section,.page{padding:92px 0}.sectionHead{max-width:860px;margin-bottom:38px}.sectionHead.wide{max-width:1000px}.eyebrow{color:var(--blue);font-size:13px;text-transform:uppercase;letter-spacing:.1em;font-weight:900}.sectionHead h2,.page h1,.storyContent h2{font-size:clamp(36px,4vw,58px);line-height:1.1;color:var(--black);margin:12px 0 18px}.sectionHead p,.pageLead{font-size:18px;line-height:1.78;color:var(--muted);max-width:920px}.introSection{padding-bottom:30px}.serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.serviceCard{background:white;border:1px solid var(--line);border-radius:22px;padding:30px;min-height:286px;box-shadow:0 14px 34px rgba(5,7,13,.06);transition:.25s}.serviceCard:hover{transform:translateY(-8px);box-shadow:0 26px 58px rgba(0,87,200,.13)}.serviceIcon{width:62px;height:62px;border-radius:18px;background:linear-gradient(135deg,#e8f4ff,#fff);color:var(--blue);display:grid;place-items:center;margin-bottom:22px;border:1px solid var(--line)}.serviceIcon svg{width:31px;height:31px}.serviceCard h3{font-size:22px;margin:0 0 12px;color:var(--black)}.serviceCard p{line-height:1.68;color:var(--muted);margin:0}.globalMapSection{padding:94px 0;background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.mapLayout{display:grid;grid-template-columns:340px 1fr;gap:42px;align-items:center}.mapStats{display:grid;gap:18px}.mapStats div{background:linear-gradient(135deg,#06142d,#0057c8);color:white;border-radius:22px;padding:28px;box-shadow:0 18px 42px rgba(0,87,200,.23)}.mapStats span{text-transform:uppercase;letter-spacing:.1em;color:#a8e4ff;font-size:12px;font-weight:900}.mapStats strong{display:block;font-size:34px;margin:8px 0}.mapStats p{color:#dceeff;line-height:1.6;margin:0}.mapCanvas{position:relative;min-height:560px;background:linear-gradient(135deg,#f8fbff,#eef6ff);border:1px solid var(--line);border-radius:30px;overflow:hidden;box-shadow:0 20px 48px rgba(5,7,13,.08);padding:44px}.realWorldMap{width:100%;height:100%;object-fit:contain;opacity:.22;filter:grayscale(100%) contrast(1.1)}.mapLabel{position:absolute;left:30px;top:24px;background:white;border:1px solid var(--line);border-radius:999px;padding:10px 18px;font-weight:900;color:var(--blue);z-index:5}.mapNode{position:absolute;width:14px;height:14px;border-radius:50%;background:#009dff;z-index:5;box-shadow:0 0 0 rgba(0,157,255,.6);animation:pulse 2s infinite}.mapNode::after{content:"";position:absolute;inset:-6px;border-radius:50%;border:1px solid rgba(0,157,255,.25)}@keyframes pulse{0%{transform:scale(1);box-shadow:0 0 0 0 rgba(0,157,255,.7)}70%{transform:scale(1.15);box-shadow:0 0 0 16px rgba(0,157,255,0)}100%{transform:scale(1)}}.australia{right:17%;bottom:28%}.nz{right:11%;bottom:24%}.india{right:38%;top:48%}.singapore{right:31%;top:58%}.middleeast{right:48%;top:42%}.africa{left:48%;top:52%}.canada{left:22%;top:27%}.line{position:absolute;height:2px;background:linear-gradient(90deg,transparent,rgba(0,157,255,.8),transparent);z-index:3;animation:flow 3s linear infinite}.l1{width:300px;right:26%;top:50%;transform:rotate(14deg)}.l2{width:260px;right:18%;top:58%;transform:rotate(-12deg)}.l3{width:340px;left:26%;top:44%;transform:rotate(8deg)}.l4{width:180px;right:40%;top:46%;transform:rotate(24deg)}@keyframes flow{0%{opacity:.2}50%{opacity:.9}100%{opacity:.2}}.mapFootnote{position:absolute;bottom:22px;left:50%;transform:translateX(-50%);color:#7a8ca3;font-weight:800;text-align:center;width:100%}.aboutHero{padding:92px 0;background:linear-gradient(135deg,#eef6ff,#fff)}.aboutGrid{display:grid;grid-template-columns:1fr .9fr;gap:56px;align-items:center}.aboutGrid h1{font-size:clamp(40px,4.7vw,68px);line-height:1.05;letter-spacing:-2px;margin:12px 0 22px;color:var(--black)}.aboutImageCard{background:white;border:1px solid var(--line);border-radius:28px;padding:14px;box-shadow:0 26px 60px rgba(5,7,13,.1)}.aboutImageCard img{width:100%;display:block;border-radius:20px}.storySection{padding:92px 0;display:grid;grid-template-columns:1.08fr .92fr;gap:58px}.storyContent p{font-size:17px;line-height:1.86;color:var(--muted)}.timeline{display:grid;gap:18px}.timeline div{background:white;border:1px solid var(--line);border-radius:20px;padding:26px;box-shadow:0 14px 34px rgba(5,7,13,.06)}.timeline strong{display:inline-flex;background:#e8f4ff;color:var(--blue);border-radius:999px;padding:8px 12px;margin-bottom:14px}.timeline h3{font-size:22px;margin:0 0 10px;color:var(--black)}.timeline p{color:var(--muted);line-height:1.65}.pageWrap{background:#eef6ff}.pageServices{margin-top:36px}.regionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:38px}.regionGrid span{background:white;border:1px solid var(--line);border-radius:18px;padding:22px;text-align:center;font-weight:900;color:var(--black);box-shadow:0 12px 28px rgba(5,7,13,.05)}.contactPage{display:grid;grid-template-columns:.9fr 1.1fr;gap:54px;align-items:start}.emailCard{margin-top:30px;background:white;border:1px solid var(--line);border-radius:22px;padding:26px;display:flex;gap:16px;align-items:center;box-shadow:0 14px 34px rgba(5,7,13,.06)}.emailCard svg{width:42px;height:42px;color:var(--blue)}.emailCard span{display:block;color:var(--muted);font-weight:800}.emailCard strong{display:block;color:var(--black);font-size:20px}.contactForm{background:white;border:1px solid var(--line);border-radius:24px;padding:32px;box-shadow:0 18px 44px rgba(5,7,13,.08);display:grid;gap:14px}.contactForm input,.contactForm textarea,.contactForm select{width:100%;border:1px solid #c8d7e3;border-radius:12px;padding:15px;background:#f9fbff;font-size:15px}.contactForm input:focus,.contactForm textarea:focus,.contactForm select:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 4px rgba(0,87,200,.12)}footer{background:#05070d;color:white;padding:38px 0}.footerGrid{display:flex;justify-content:space-between;gap:26px;align-items:center}.footerGrid>div{display:flex;gap:16px;align-items:center}.footerGrid img{width:58px;height:58px;object-fit:contain;background:white;border-radius:10px}.footerGrid h3{margin:0 0 5px}.footerGrid p{margin:0;color:#dceeff}@media(max-width:980px){.heroSection,.globalMapSection,.aboutHero,footer{width:100%;margin-left:0}.navCta{display:none}.menuBtn{display:inline-flex}.navLinks{display:none}.navLinks.open{display:flex;position:absolute;left:24px;right:24px;top:104px;background:white;border:1px solid var(--line);border-radius:16px;padding:14px;box-shadow:0 20px 50px rgba(0,0,0,.15);flex-direction:column;align-items:stretch}.navLinks button{text-align:left;padding:14px}.heroGrid,.mapLayout,.aboutGrid,.storySection,.contactPage{grid-template-columns:1fr}.serviceGrid,.regionGrid,.aboutCards{grid-template-columns:1fr 1fr}.footerGrid{flex-direction:column;align-items:flex-start}}@media(max-width:620px){.wrap{width:min(100% - 32px,1220px)}.navBar{height:84px}.brand img{width:62px;height:62px}.brand strong{font-size:16px}.brand span{font-size:10px}.navLinks.open{top:84px}.heroGrid{padding:64px 0}.heroCopy h1{font-size:42px}.heroStats,.serviceGrid,.regionGrid,.aboutCards{grid-template-columns:1fr}.section,.page,.storySection,.aboutHero,.globalMapSection{padding:60px 0}.primaryBtn,.secondaryBtn{width:100%}.mapCanvas{min-height:360px}.worldShape{inset:55px 20px 30px}.mapStats strong{font-size:28px}.emailCard{align-items:flex-start}.emailCard strong{font-size:16px;word-break:break-word}}
`;
