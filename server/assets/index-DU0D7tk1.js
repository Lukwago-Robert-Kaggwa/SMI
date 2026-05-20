import { jsxs, jsx } from "react/jsx-runtime";
const heroImg = "/assets/hero-construction-DVXY33on.jpg";
const logoImg = "/assets/smi-logo-CtcEttJa.jpg";
const principles = [{
  t: "Customer Service",
  b: "We respond to the needs of our customers through adaptation of latest industry trends and tailoring of our service offering so that we always remain relevant."
}, {
  t: "Sustainability",
  b: "We manage our operations in sustainable and responsible ways together with our people, suppliers and customers for the benefit of society and the environment."
}, {
  t: "Passion",
  b: "We deeply enjoy our work. Our passion is manifested through personal commitment in everything we do."
}, {
  t: "Compliance",
  b: "We execute all our processes with discipline, consistency, innovation and readiness for efficiency within best industry practices and codes of conduct."
}, {
  t: "People",
  b: "We treat earthlings with respect, which forms an integral part of their safety and welfare through diversity and inclusion."
}, {
  t: "Teamwork",
  b: "We achieve growth and efficiency through collaboration and respect which are essential for learning, personal development and organisational growth."
}];
const practices = [{
  n: "01",
  title: "Business Administration",
  items: ["Administration", "Business Development", "Finance", "Human Resources", "Legal"]
}, {
  n: "02",
  title: "Turnkey Solutions",
  groups: [{
    h: "Professional Services",
    items: ["Architecture", "Engineering", "Environmental", "Facilities Management", "Health & Safety", "Landscape Architecture", "Project & Construction Management", "Property Valuations", "Quantity Surveying"]
  }, {
    h: "Construction",
    items: ["Estimation", "Bidding", "Execution", "Completion"]
  }, {
    h: "Facilities Management",
    items: ["Operations", "Maintenance"]
  }]
}, {
  n: "03",
  title: "Transaction Advisory",
  groups: [{
    h: "Facilities Management",
    items: ["Strategy Development", "Strategy Implementation Planning", "Procurement & Implementation", "Performance Monitoring", "Project Rescue", "Capital Asset Revitalisation Solutions", "Asset Whole Life Cost Modelling"]
  }, {
    h: "Public Private Partnerships",
    items: ["Public Sector Technical Advisory", "Private Sector Technical Advisory", "Independent Certifier", "Lender's Technical Advisor", "Independent Monitor", "Contract Management Facilitation"]
  }]
}, {
  n: "04",
  title: "Development Management",
  items: ["Predevelopment Planning", "Preconstruction & Development", "Construction", "Post Construction"]
}];
const branches = [{
  name: "Johannesburg Branch",
  address: "Johannesburg, South Africa"
}, {
  name: "Cape Town Branch",
  address: "Cape Town, South Africa"
}];
function Nav() {
  return /* @__PURE__ */ jsx("header", { className: "fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/75 border-b hairline animate-nav-in", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-3 group", children: [
      /* @__PURE__ */ jsx("img", { src: logoImg, alt: "Super Man Industries", className: "h-10 w-auto transition-transform duration-500 group-hover:rotate-[8deg]" }),
      /* @__PURE__ */ jsx("span", { className: "hidden md:inline text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "(Pty) Ltd · ZA" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-10 lg:gap-12 text-[13px] uppercase tracking-[0.18em] text-muted-foreground", children: [
      /* @__PURE__ */ jsx("a", { href: "#top", className: "hover:text-foreground transition-colors", children: "Home" }),
      /* @__PURE__ */ jsx("a", { href: "#who", className: "hover:text-foreground transition-colors", children: "Who We Are" }),
      /* @__PURE__ */ jsx("a", { href: "#how", className: "hover:text-foreground transition-colors", children: "How We Connect" }),
      /* @__PURE__ */ jsx("a", { href: "#what", className: "hover:text-foreground transition-colors", children: "What We Do" }),
      /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-foreground transition-colors", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxs("a", { href: "#contact", className: "group relative overflow-hidden text-[11px] uppercase tracking-[0.2em] px-5 py-2.5 bg-brand-red text-primary-foreground shadow-[0_8px_24px_-12px_oklch(0.58_0.19_28_/_0.7)] hover:shadow-[0_14px_32px_-10px_oklch(0.58_0.19_28_/_0.85)] transition-all", children: [
      /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Get in Touch" }),
      /* @__PURE__ */ jsx("span", { className: "absolute inset-0 -translate-x-full bg-[oklch(0.32_0.13_258)] transition-transform duration-500 group-hover:translate-x-0" })
    ] })
  ] }) });
}
function Globe({
  className = ""
}) {
  const dots = [[200, 20], [380, 200], [200, 380], [20, 200], [80, 110], [320, 110], [80, 290], [320, 290], [200, 140], [200, 260], [140, 200], [260, 200]];
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 400 400", className: `globe-spin ${className}`, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("radialGradient", { id: "g-fill", cx: "35%", cy: "35%", r: "75%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.55 0.13 245)" }),
      /* @__PURE__ */ jsx("stop", { offset: "60%", stopColor: "oklch(0.32 0.13 258)" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.18 0.08 258)" })
    ] }) }),
    /* @__PURE__ */ jsx("circle", { cx: "200", cy: "200", r: "180", fill: "url(#g-fill)", opacity: "0.95" }),
    /* @__PURE__ */ jsxs("g", { fill: "none", stroke: "oklch(0.92 0.02 240)", strokeWidth: "1.2", opacity: "0.55", children: [
      /* @__PURE__ */ jsx("ellipse", { cx: "200", cy: "200", rx: "180", ry: "180" }),
      /* @__PURE__ */ jsx("ellipse", { cx: "200", cy: "200", rx: "180", ry: "60" }),
      /* @__PURE__ */ jsx("ellipse", { cx: "200", cy: "200", rx: "180", ry: "120" }),
      /* @__PURE__ */ jsx("ellipse", { cx: "200", cy: "200", rx: "60", ry: "180" }),
      /* @__PURE__ */ jsx("ellipse", { cx: "200", cy: "200", rx: "120", ry: "180" }),
      /* @__PURE__ */ jsx("path", { d: "M20 200 Q200 80 380 200" }),
      /* @__PURE__ */ jsx("path", { d: "M20 200 Q200 320 380 200" })
    ] }),
    /* @__PURE__ */ jsx("g", { fill: "oklch(0.96 0.02 240)", children: dots.map(([cx, cy], i) => /* @__PURE__ */ jsx("circle", { cx, cy, r: "3.5" }, i)) })
  ] });
}
function BrandRule({
  className = ""
}) {
  return /* @__PURE__ */ jsxs("div", { className: `pointer-events-none ${className}`, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("div", { className: "h-[3px] w-full bg-[oklch(0.58_0.19_28)] origin-left -skew-y-[0.8deg]" }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 h-[1px] w-full bg-[oklch(0.58_0.19_28)] origin-left -skew-y-[0.8deg] opacity-50" })
  ] });
}
function Marquee({
  items
}) {
  const repeated = [...items, ...items, ...items];
  return /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden border-y hairline bg-background py-6", children: /* @__PURE__ */ jsx("div", { className: "marquee-track flex gap-12 whitespace-nowrap will-change-transform", children: repeated.map((item, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-12 font-serif text-3xl md:text-5xl tracking-tight", children: [
    /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item }),
    /* @__PURE__ */ jsx("span", { className: "brand-red text-2xl", children: "✦" })
  ] }, `${item}-${i}`)) }) });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-screen overflow-hidden grain", children: [
    /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Steel framework of a high-rise at golden hour", width: 1920, height: 1080, className: "absolute inset-0 h-[115%] w-full object-cover opacity-30" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background" }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-32 -top-24 w-[700px] max-w-[80vw] opacity-[0.18] mix-blend-multiply", children: /* @__PURE__ */ jsx(Globe, { className: "w-full h-auto" }) }),
    /* @__PURE__ */ jsx(BrandRule, { className: "absolute top-24 inset-x-0" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-40 pb-24 min-h-screen flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "hero-fade hero-delay-1 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary" }),
        /* @__PURE__ */ jsx("span", { children: "Super Man Industries (Pty) Ltd — Johannesburg · Cape Town" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-5xl", children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-serif text-[clamp(2.75rem,8.5vw,9rem)] leading-[0.92] tracking-[-0.02em]", children: [
          /* @__PURE__ */ jsx("span", { className: "block overflow-hidden", children: /* @__PURE__ */ jsx("span", { className: "hero-line hero-line-1 block", children: "Construction is" }) }),
          /* @__PURE__ */ jsx("span", { className: "block overflow-hidden", children: /* @__PURE__ */ jsxs("span", { className: "hero-line hero-line-2 block", children: [
            "our ",
            /* @__PURE__ */ jsx("em", { className: "italic brand-red", children: "passion" }),
            "."
          ] }) }),
          /* @__PURE__ */ jsx("span", { className: "block overflow-hidden", children: /* @__PURE__ */ jsx("span", { className: "hero-line hero-line-3 block", children: "Projects are" }) }),
          /* @__PURE__ */ jsx("span", { className: "block overflow-hidden", children: /* @__PURE__ */ jsxs("span", { className: "hero-line hero-line-4 block", children: [
            "our ",
            /* @__PURE__ */ jsx("em", { className: "italic", children: "profession" }),
            "."
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hero-fade hero-delay-2", children: /* @__PURE__ */ jsx("p", { className: "mt-10 max-w-2xl text-base md:text-lg text-foreground/80 leading-relaxed", children: "Structured expertise that guides every decision — from concept to completion — delivering certainty, compliance, and lasting asset value." }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hero-fade hero-delay-3", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 border-t hairline pt-8", children: [
        /* @__PURE__ */ jsx(Stat, { k: "2015", v: "Established" }),
        /* @__PURE__ */ jsx(Stat, { k: "L1", v: "BBBEE @ 135%" }),
        /* @__PURE__ */ jsx(Stat, { k: "04", v: "Practice areas" }),
        /* @__PURE__ */ jsx(Stat, { k: "ZA", v: "Two branches" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "scroll-indicator absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { children: "Scroll" }),
      /* @__PURE__ */ jsx("span", { className: "scroll-line block h-6 w-px bg-primary" })
    ] })
  ] });
}
function Stat({
  k,
  v
}) {
  return /* @__PURE__ */ jsxs("div", { className: "group", children: [
    /* @__PURE__ */ jsx("div", { className: "font-serif text-4xl md:text-5xl tracking-tight transition-colors group-hover:text-primary", children: k }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground", children: v })
  ] });
}
function SectionLabel({
  n,
  label
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground", children: [
    /* @__PURE__ */ jsx("span", { className: "brand-red", children: n }),
    /* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-border" }),
    /* @__PURE__ */ jsx("span", { children: label })
  ] });
}
function Reveal({
  children,
  className = "",
  delay = 0
}) {
  return /* @__PURE__ */ jsx("div", { className: `reveal-up ${className}`, style: {
    animationDelay: `${delay}s`
  }, children });
}
function Welcome() {
  return /* @__PURE__ */ jsxs("section", { id: "welcome", className: "border-t hairline bg-card", children: [
    /* @__PURE__ */ jsx(BrandRule, { className: "mx-auto max-w-[1400px] px-6 lg:px-10 pt-10" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsx(SectionLabel, { n: "00", label: "Welcome" }),
        /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("h2", { className: "mt-8 font-serif text-4xl md:text-5xl leading-[1] tracking-tight", children: [
          "Partner with us on your next",
          " ",
          /* @__PURE__ */ jsx("em", { className: "italic brand-blue", children: "construction venture" }),
          "."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 0.1, className: "lg:col-span-8 space-y-6 text-base md:text-[17px] leading-relaxed text-foreground/85", children: [
        /* @__PURE__ */ jsx("p", { children: "In the construction industry, the Professional Services Stages represent a structured, risk-managed process through which a project is conceived, planned, designed, procured, constructed, and brought into operation. These stages typically include project initiation and briefing, concept and viability assessment, detailed design and documentation, procurement and contract administration, construction monitoring, and close-out with commissioning and handover." }),
        /* @__PURE__ */ jsx("p", { children: "At each stage, Super Man Industries adds measurable value by translating the Client's strategic objectives into technically sound, compliant, and buildable solutions — while proactively managing cost, time, quality, safety, and risk." }),
        /* @__PURE__ */ jsx("p", { children: "Through disciplined project governance, technical due diligence, and coordinated multi-disciplinary oversight, SMI encourages informed decision-making, regulatory compliance, minimised variations, and optimised life-cycle performance — ultimately protecting the Client's investment and enabling predictable, successful project outcomes." }),
        /* @__PURE__ */ jsx("p", { className: "font-serif text-2xl md:text-3xl pt-4 text-foreground", children: "Contact us now to find out how SMI can partner with you on your next construction venture. Looking forward to collaborating with you." })
      ] })
    ] })
  ] });
}
function Who() {
  const cards = [{
    t: "Our Mission",
    b: "To solve, advise and develop with passion and consistency."
  }, {
    t: "Our Vision",
    b: "To be a multi-skilled, multi-talented organisation aligned with industry-leading best practice."
  }, {
    t: "Our Drive",
    b: "Striving for superior quality with the aim of ensuring sustainable living environments for our fellow earthlings."
  }];
  return /* @__PURE__ */ jsxs("section", { id: "who", className: "border-t hairline relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -left-40 top-10 w-[520px] opacity-[0.08]", children: /* @__PURE__ */ jsx(Globe, { className: "w-full h-auto" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40 grid lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsx(SectionLabel, { n: "01", label: "Who We Are" }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8 space-y-10", children: [
        /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("p", { className: "font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight", children: [
          "Super Man Industries was created to meet an imperative need for uncompromised professionalism in the built environment — existing to provide",
          " ",
          /* @__PURE__ */ jsx("em", { className: "italic brand-blue", children: "superior, customer-centric" }),
          " solutions."
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-px bg-border", children: cards.map((card, index) => /* @__PURE__ */ jsx(Reveal, { delay: index * 0.08, children: /* @__PURE__ */ jsxs("div", { className: "bg-background p-8 h-full group relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" }),
          /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.22em] brand-red", children: card.t }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-foreground/85 leading-relaxed", children: card.b })
        ] }) }, card.t)) })
      ] })
    ] })
  ] });
}
function How() {
  return /* @__PURE__ */ jsx("section", { id: "how", className: "border-t hairline bg-card", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 mb-20", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsx(SectionLabel, { n: "02", label: "How We Connect" }) }),
      /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-8", children: /* @__PURE__ */ jsxs("h2", { className: "font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight", children: [
        "Six principles",
        /* @__PURE__ */ jsx("br", {}),
        " that hold the",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { className: "italic brand-red", children: "work" }),
        " together."
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16", children: principles.map((principle, index) => /* @__PURE__ */ jsx(Reveal, { delay: index % 3 * 0.08, children: /* @__PURE__ */ jsxs("div", { className: "group border-t hairline pt-6 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-px left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-16" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-3xl tracking-tight brand-blue", children: principle.t }),
        /* @__PURE__ */ jsxs("span", { className: "font-serif text-2xl text-muted-foreground group-hover:brand-red transition-colors", children: [
          "0",
          index + 1
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-foreground/80 leading-relaxed", children: principle.b })
    ] }) }, principle.t)) })
  ] }) });
}
function ItemList({
  items
}) {
  return /* @__PURE__ */ jsx("ul", { className: "mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-[13px] uppercase tracking-[0.14em] text-foreground/80", children: items.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsx("span", { className: "h-px w-5 bg-primary" }),
    " ",
    item
  ] }, item)) });
}
function What() {
  return /* @__PURE__ */ jsxs("section", { id: "what", className: "border-t hairline relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-48 top-20 w-[560px] opacity-[0.07]", children: /* @__PURE__ */ jsx(Globe, { className: "w-full h-auto" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 mb-20", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsx(SectionLabel, { n: "03", label: "What We Do" }) }),
        /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-8", children: /* @__PURE__ */ jsxs("h2", { className: "font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight", children: [
          "Four practices.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "italic text-muted-foreground", children: "One discipline." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-px bg-border", children: practices.map((practice) => /* @__PURE__ */ jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxs("article", { className: "group relative bg-background p-10 lg:p-14 h-full transition-all duration-500 hover:bg-card hover:-translate-y-1", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute top-0 left-0 h-[3px] w-0 bg-primary transition-all duration-700 group-hover:w-24" }),
        /* @__PURE__ */ jsx("span", { className: "absolute top-0 right-0 h-0 w-[3px] bg-[oklch(0.32_0.13_258)] transition-all duration-700 group-hover:h-24" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-[11px] uppercase tracking-[0.3em] brand-red", children: [
            "P/",
            practice.n
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: "Division" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-8 font-serif text-4xl lg:text-5xl tracking-tight brand-blue", children: practice.title }),
        "items" in practice && practice.items ? /* @__PURE__ */ jsx(ItemList, { items: practice.items }) : null,
        "groups" in practice && practice.groups ? /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-8", children: practice.groups.map((group) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.22em] brand-red", children: group.h }),
          /* @__PURE__ */ jsx("ul", { className: "mt-3 grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 text-[13px] uppercase tracking-[0.14em] text-foreground/80", children: group.items.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "h-px w-5 bg-primary" }),
            " ",
            item
          ] }, item)) })
        ] }, group.h)) }) : null
      ] }) }, practice.n)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 bg-brand-red text-primary-foreground", children: "BBBEE Level 1 @ 135%" }),
        /* @__PURE__ */ jsx("span", { children: "Co. Reg. No. 2015 / 024200 / 07" }),
        /* @__PURE__ */ jsx("span", { children: "www.super-man.co.za" })
      ] })
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "border-t hairline bg-card relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -bottom-32 -left-32 w-[600px] opacity-[0.08]", children: /* @__PURE__ */ jsx(Globe, { className: "w-full h-auto" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40 grid lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsx(SectionLabel, { n: "04", label: "Contact Us" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-10 font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight", children: [
          "Our",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "italic brand-red", children: "contacts" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-md text-base text-foreground/75 leading-relaxed", children: "Two branches across South Africa. One team, ready to partner on your next construction venture." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 lg:pl-8 grid sm:grid-cols-2 gap-px bg-border", children: [
        branches.map((branch) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-8", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.25em] brand-red", children: "Address" }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 font-serif text-2xl brand-blue", children: branch.name }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-foreground/75", children: branch.address })
        ] }, branch.name)),
        /* @__PURE__ */ jsxs("div", { className: "bg-background p-8", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.25em] brand-red", children: "Phone" }),
          /* @__PURE__ */ jsx("a", { href: "tel:+27838781032", className: "mt-3 block font-serif text-2xl hover:text-primary transition-colors", children: "+27 83 878 1032" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background p-8", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.25em] brand-red", children: "Working Hours" }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 font-serif text-2xl", children: "9am — 4pm" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-background p-8 sm:col-span-2", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.25em] brand-red", children: "E-mail" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:admin@super-man.co.za", className: "mt-3 block font-serif text-2xl md:text-3xl hover:text-primary transition-colors", children: "admin@super-man.co.za" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:adrian@super-man.co.za", className: "mt-1 block font-serif text-2xl md:text-3xl hover:text-primary transition-colors", children: "adrian@super-man.co.za" })
        ] })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t hairline", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[11px] uppercase tracking-[0.22em] text-muted-foreground", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 text-foreground", children: /* @__PURE__ */ jsx("img", { src: logoImg, alt: "Super Man Industries", className: "h-8 w-auto" }) }),
    /* @__PURE__ */ jsx("div", { children: "Co. Reg. No. 2015 / 024200 / 07 · BBBEE Level 1 @ 135%" }),
    /* @__PURE__ */ jsxs("div", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Super Man Industries (Pty) Ltd"
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Marquee, { items: ["Construction is our passion", "Projects are our profession"] }),
    /* @__PURE__ */ jsx(Welcome, {}),
    /* @__PURE__ */ jsx(Who, {}),
    /* @__PURE__ */ jsx(How, {}),
    /* @__PURE__ */ jsx(What, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
