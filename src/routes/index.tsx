import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import heroImg from "@/assets/hero-construction.jpg";
import logoImg from "@/assets/smi-logo.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const principles = [
  {
    t: "Customer Service",
    b: "We respond to the needs of our customers through adaptation of latest industry trends and tailoring of our service offering so that we always remain relevant.",
  },
  {
    t: "Sustainability",
    b: "We manage our operations in sustainable and responsible ways together with our people, suppliers and customers for the benefit of society and the environment.",
  },
  {
    t: "Passion",
    b: "We deeply enjoy our work. Our passion is manifested through personal commitment in everything we do.",
  },
  {
    t: "Compliance",
    b: "We execute all our processes with discipline, consistency, innovation and readiness for efficiency within best industry practices and codes of conduct.",
  },
  {
    t: "People",
    b: "We treat earthlings with respect, which forms an integral part of their safety and welfare through diversity and inclusion.",
  },
  {
    t: "Teamwork",
    b: "We achieve growth and efficiency through collaboration and respect which are essential for learning, personal development and organisational growth.",
  },
];

const practices = [
  {
    n: "01",
    title: "Business Administration",
    items: ["Administration", "Business Development", "Finance", "Human Resources", "Legal"],
  },
  {
    n: "02",
    title: "Turnkey Solutions",
    groups: [
      {
        h: "Professional Services",
        items: [
          "Architecture",
          "Engineering",
          "Environmental",
          "Facilities Management",
          "Health & Safety",
          "Landscape Architecture",
          "Project & Construction Management",
          "Property Valuations",
          "Quantity Surveying",
        ],
      },
      {
        h: "Construction",
        items: ["Estimation", "Bidding", "Execution", "Completion"],
      },
      {
        h: "Facilities Management",
        items: ["Operations", "Maintenance"],
      },
    ],
  },
  {
    n: "03",
    title: "Transaction Advisory",
    groups: [
      {
        h: "Facilities Management",
        items: [
          "Strategy Development",
          "Strategy Implementation Planning",
          "Procurement & Implementation",
          "Performance Monitoring",
          "Project Rescue",
          "Capital Asset Revitalisation Solutions",
          "Asset Whole Life Cost Modelling",
        ],
      },
      {
        h: "Public Private Partnerships",
        items: [
          "Public Sector Technical Advisory",
          "Private Sector Technical Advisory",
          "Independent Certifier",
          "Lender's Technical Advisor",
          "Independent Monitor",
          "Contract Management Facilitation",
        ],
      },
    ],
  },
  {
    n: "04",
    title: "Development Management",
    items: [
      "Predevelopment Planning",
      "Preconstruction & Development",
      "Construction",
      "Post Construction",
    ],
  },
];

const branches = [
  { name: "Johannesburg Branch", address: "Johannesburg, South Africa" },
  { name: "Cape Town Branch", address: "Cape Town, South Africa" },
];

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/75 border-b hairline animate-nav-in">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="Super Man Industries"
            className="h-10 w-auto transition-transform duration-500 group-hover:rotate-[8deg]"
          />
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            (Pty) Ltd · ZA
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 lg:gap-12 text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
          <a href="#top" className="hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#who" className="hover:text-foreground transition-colors">
            Who We Are
          </a>
          <a href="#how" className="hover:text-foreground transition-colors">
            How We Connect
          </a>
          <a href="#what" className="hover:text-foreground transition-colors">
            What We Do
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="group relative overflow-hidden text-[11px] uppercase tracking-[0.2em] px-5 py-2.5 bg-brand-red text-primary-foreground shadow-[0_8px_24px_-12px_oklch(0.58_0.19_28_/_0.7)] hover:shadow-[0_14px_32px_-10px_oklch(0.58_0.19_28_/_0.85)] transition-all"
        >
          <span className="relative z-10">Get in Touch</span>
          <span className="absolute inset-0 -translate-x-full bg-[oklch(0.32_0.13_258)] transition-transform duration-500 group-hover:translate-x-0" />
        </a>
      </div>
    </header>
  );
}

function Globe({ className = "" }: { className?: string }) {
  const dots = [
    [200, 20],
    [380, 200],
    [200, 380],
    [20, 200],
    [80, 110],
    [320, 110],
    [80, 290],
    [320, 290],
    [200, 140],
    [200, 260],
    [140, 200],
    [260, 200],
  ];

  return (
    <svg viewBox="0 0 400 400" className={`globe-spin ${className}`} aria-hidden="true">
      <defs>
        <radialGradient id="g-fill" cx="35%" cy="35%" r="75%">
          <stop offset="0%" stopColor="oklch(0.55 0.13 245)" />
          <stop offset="60%" stopColor="oklch(0.32 0.13 258)" />
          <stop offset="100%" stopColor="oklch(0.18 0.08 258)" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="180" fill="url(#g-fill)" opacity="0.95" />
      <g fill="none" stroke="oklch(0.92 0.02 240)" strokeWidth="1.2" opacity="0.55">
        <ellipse cx="200" cy="200" rx="180" ry="180" />
        <ellipse cx="200" cy="200" rx="180" ry="60" />
        <ellipse cx="200" cy="200" rx="180" ry="120" />
        <ellipse cx="200" cy="200" rx="60" ry="180" />
        <ellipse cx="200" cy="200" rx="120" ry="180" />
        <path d="M20 200 Q200 80 380 200" />
        <path d="M20 200 Q200 320 380 200" />
      </g>
      <g fill="oklch(0.96 0.02 240)">
        {dots.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.5" />
        ))}
      </g>
    </svg>
  );
}

function BrandRule({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <div className="h-[3px] w-full bg-[oklch(0.58_0.19_28)] origin-left -skew-y-[0.8deg]" />
      <div className="mt-1 h-[1px] w-full bg-[oklch(0.58_0.19_28)] origin-left -skew-y-[0.8deg] opacity-50" />
    </div>
  );
}

function Marquee({ items }: { items: string[] }) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y hairline bg-background py-6">
      <div className="marquee-track flex gap-12 whitespace-nowrap will-change-transform">
        {repeated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 font-serif text-3xl md:text-5xl tracking-tight"
          >
            <span className="text-foreground">{item}</span>
            <span className="brand-red text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden grain">
      <img
        src={heroImg}
        alt="Steel framework of a high-rise at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 h-[115%] w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background" />
      <div className="pointer-events-none absolute -right-32 -top-24 w-[700px] max-w-[80vw] opacity-[0.18] mix-blend-multiply">
        <Globe className="w-full h-auto" />
      </div>
      <BrandRule className="absolute top-24 inset-x-0" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-40 pb-24 min-h-screen flex flex-col justify-between">
        <div className="hero-fade hero-delay-1 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-10 bg-primary" />
          <span>Super Man Industries (Pty) Ltd — Johannesburg · Cape Town</span>
        </div>

        <div className="max-w-5xl">
          <h1 className="font-serif text-[clamp(2.75rem,8.5vw,9rem)] leading-[0.92] tracking-[-0.02em]">
            <span className="block overflow-hidden">
              <span className="hero-line hero-line-1 block">Construction is</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line hero-line-2 block">
                our <em className="italic brand-red">passion</em>.
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line hero-line-3 block">Projects are</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line hero-line-4 block">
                our <em className="italic">profession</em>.
              </span>
            </span>
          </h1>
          <div className="hero-fade hero-delay-2">
            <p className="mt-10 max-w-2xl text-base md:text-lg text-foreground/80 leading-relaxed">
              Structured expertise that guides every decision — from concept to completion —
              delivering certainty, compliance, and lasting asset value.
            </p>
          </div>
        </div>

        <div className="hero-fade hero-delay-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t hairline pt-8">
            <Stat k="2015" v="Established" />
            <Stat k="L1" v="BBBEE @ 135%" />
            <Stat k="04" v="Practice areas" />
            <Stat k="ZA" v="Two branches" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="scroll-line block h-6 w-px bg-primary" />
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="group">
      <div className="font-serif text-4xl md:text-5xl tracking-tight transition-colors group-hover:text-primary">
        {k}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{v}</div>
    </div>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
      <span className="brand-red">{n}</span>
      <span className="h-px w-12 bg-border" />
      <span>{label}</span>
    </div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`reveal-up ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

function Welcome() {
  return (
    <section id="welcome" className="border-t hairline bg-card">
      <BrandRule className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-10" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionLabel n="00" label="Welcome" />
          <Reveal>
            <h2 className="mt-8 font-serif text-4xl md:text-5xl leading-[1] tracking-tight">
              Partner with us on your next{" "}
              <em className="italic brand-blue">construction venture</em>.
            </h2>
          </Reveal>
        </div>
        <Reveal
          delay={0.1}
          className="lg:col-span-8 space-y-6 text-base md:text-[17px] leading-relaxed text-foreground/85"
        >
          <p>
            In the construction industry, the Professional Services Stages represent a structured,
            risk-managed process through which a project is conceived, planned, designed, procured,
            constructed, and brought into operation. These stages typically include project
            initiation and briefing, concept and viability assessment, detailed design and
            documentation, procurement and contract administration, construction monitoring, and
            close-out with commissioning and handover.
          </p>
          <p>
            At each stage, Super Man Industries adds measurable value by translating the Client's
            strategic objectives into technically sound, compliant, and buildable solutions — while
            proactively managing cost, time, quality, safety, and risk.
          </p>
          <p>
            Through disciplined project governance, technical due diligence, and coordinated
            multi-disciplinary oversight, SMI encourages informed decision-making, regulatory
            compliance, minimised variations, and optimised life-cycle performance — ultimately
            protecting the Client's investment and enabling predictable, successful project
            outcomes.
          </p>
          <p className="font-serif text-2xl md:text-3xl pt-4 text-foreground">
            Contact us now to find out how SMI can partner with you on your next construction
            venture. Looking forward to collaborating with you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Who() {
  const cards = [
    { t: "Our Mission", b: "To solve, advise and develop with passion and consistency." },
    {
      t: "Our Vision",
      b: "To be a multi-skilled, multi-talented organisation aligned with industry-leading best practice.",
    },
    {
      t: "Our Drive",
      b: "Striving for superior quality with the aim of ensuring sustainable living environments for our fellow earthlings.",
    },
  ];

  return (
    <section id="who" className="border-t hairline relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-10 w-[520px] opacity-[0.08]">
        <Globe className="w-full h-auto" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionLabel n="01" label="Who We Are" />
        </div>
        <div className="lg:col-span-8 space-y-10">
          <Reveal>
            <p className="font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
              Super Man Industries was created to meet an imperative need for uncompromised
              professionalism in the built environment — existing to provide{" "}
              <em className="italic brand-blue">superior, customer-centric</em> solutions.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {cards.map((card, index) => (
              <Reveal key={card.t} delay={index * 0.08}>
                <div className="bg-background p-8 h-full group relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                  <div className="text-[11px] uppercase tracking-[0.22em] brand-red">{card.t}</div>
                  <p className="mt-4 text-base text-foreground/85 leading-relaxed">{card.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function How() {
  return (
    <section id="how" className="border-t hairline bg-card">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <SectionLabel n="02" label="How We Connect" />
          </div>
          <Reveal className="lg:col-span-8">
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Six principles
              <br /> that hold the
              <br />
              <em className="italic brand-red">work</em> together.
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {principles.map((principle, index) => (
            <Reveal key={principle.t} delay={(index % 3) * 0.08}>
              <div className="group border-t hairline pt-6 relative">
                <div className="absolute -top-px left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-16" />
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-3xl tracking-tight brand-blue">{principle.t}</h3>
                  <span className="font-serif text-2xl text-muted-foreground group-hover:brand-red transition-colors">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-4 text-base text-foreground/80 leading-relaxed">{principle.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ItemList({ items }: { items: string[] }) {
  return (
    <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-[13px] uppercase tracking-[0.14em] text-foreground/80">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <span className="h-px w-5 bg-primary" /> {item}
        </li>
      ))}
    </ul>
  );
}

function What() {
  return (
    <section id="what" className="border-t hairline relative overflow-hidden">
      <div className="pointer-events-none absolute -right-48 top-20 w-[560px] opacity-[0.07]">
        <Globe className="w-full h-auto" />
      </div>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <SectionLabel n="03" label="What We Do" />
          </div>
          <Reveal className="lg:col-span-8">
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Four practices.
              <br />
              <em className="italic text-muted-foreground">One discipline.</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {practices.map((practice) => (
            <Reveal key={practice.n} delay={0.05}>
              <article className="group relative bg-background p-10 lg:p-14 h-full transition-all duration-500 hover:bg-card hover:-translate-y-1">
                <span className="absolute top-0 left-0 h-[3px] w-0 bg-primary transition-all duration-700 group-hover:w-24" />
                <span className="absolute top-0 right-0 h-0 w-[3px] bg-[oklch(0.32_0.13_258)] transition-all duration-700 group-hover:h-24" />
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] uppercase tracking-[0.3em] brand-red">
                    P/{practice.n}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    Division
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-4xl lg:text-5xl tracking-tight brand-blue">
                  {practice.title}
                </h3>

                {"items" in practice && practice.items ? <ItemList items={practice.items} /> : null}

                {"groups" in practice && practice.groups ? (
                  <div className="mt-10 space-y-8">
                    {practice.groups.map((group) => (
                      <div key={group.h}>
                        <div className="text-[11px] uppercase tracking-[0.22em] brand-red">
                          {group.h}
                        </div>
                        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 text-[13px] uppercase tracking-[0.14em] text-foreground/80">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-center gap-3">
                              <span className="h-px w-5 bg-primary" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="px-3 py-1.5 bg-brand-red text-primary-foreground">
            BBBEE Level 1 @ 135%
          </span>
          <span>Co. Reg. No. 2015 / 024200 / 07</span>
          <span>www.super-man.co.za</span>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t hairline bg-card relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[600px] opacity-[0.08]">
        <Globe className="w-full h-auto" />
      </div>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionLabel n="04" label="Contact Us" />
          <h2 className="mt-10 font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Our
            <br />
            <em className="italic brand-red">contacts</em>.
          </h2>
          <p className="mt-8 max-w-md text-base text-foreground/75 leading-relaxed">
            Two branches across South Africa. One team, ready to partner on your next construction
            venture.
          </p>
        </div>
        <div className="lg:col-span-7 lg:pl-8 grid sm:grid-cols-2 gap-px bg-border">
          {branches.map((branch) => (
            <div key={branch.name} className="bg-background p-8">
              <div className="text-[11px] uppercase tracking-[0.25em] brand-red">Address</div>
              <div className="mt-3 font-serif text-2xl brand-blue">{branch.name}</div>
              <div className="mt-1 text-sm text-foreground/75">{branch.address}</div>
            </div>
          ))}
          <div className="bg-background p-8">
            <div className="text-[11px] uppercase tracking-[0.25em] brand-red">Phone</div>
            <a
              href="tel:+27838781032"
              className="mt-3 block font-serif text-2xl hover:text-primary transition-colors"
            >
              +27 83 878 1032
            </a>
          </div>
          <div className="bg-background p-8">
            <div className="text-[11px] uppercase tracking-[0.25em] brand-red">Working Hours</div>
            <div className="mt-3 font-serif text-2xl">9am — 4pm</div>
          </div>
          <div className="bg-background p-8 sm:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.25em] brand-red">E-mail</div>
            <a
              href="mailto:admin@super-man.co.za"
              className="mt-3 block font-serif text-2xl md:text-3xl hover:text-primary transition-colors"
            >
              admin@super-man.co.za
            </a>
            <a
              href="mailto:adrian@super-man.co.za"
              className="mt-1 block font-serif text-2xl md:text-3xl hover:text-primary transition-colors"
            >
              adrian@super-man.co.za
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        <div className="flex items-center gap-3 text-foreground">
          <img src={logoImg} alt="Super Man Industries" className="h-8 w-auto" />
        </div>
        <div>Co. Reg. No. 2015 / 024200 / 07 · BBBEE Level 1 @ 135%</div>
        <div>© {new Date().getFullYear()} Super Man Industries (Pty) Ltd</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee items={["Construction is our passion", "Projects are our profession"]} />
      <Welcome />
      <Who />
      <How />
      <What />
      <Contact />
      <Footer />
    </main>
  );
}
