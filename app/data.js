/* ============== TUFA Consult — content (SQ primary / EN) ============== */
window.TUFA = {
  brand: { name: "TUFA Consult", tag: "SOLUTIONS" },

  nav: [
    { id: "home",     sq: "Ballina",   en: "Home" },
    { id: "about",    sq: "Kush jemi",  en: "About" },
    { id: "services", sq: "Shërbime",   en: "Services" },
    { id: "pricing",  sq: "Çmimet",     en: "Pricing" },
    { id: "pubs",     sq: "Publikime",  en: "Publications" },
    { id: "contact",  sq: "Kontakt",    en: "Contact" },
  ],

  ui: {
    cta_contact:   { sq: "Na kontaktoni",        en: "Get in touch" },
    cta_services:  { sq: "Shiko shërbimet",      en: "Explore services" },
    cta_all_pubs:  { sq: "Të gjitha publikimet", en: "All publications" },
    cta_read:      { sq: "Lexo",                 en: "Read" },
    cta_about:     { sq: "Më shumë për ne",      en: "More about us" },
    cta_book:      { sq: "Cakto një takim",      en: "Book a consultation" },
    filter_all:    { sq: "Të gjitha",            en: "All" },
    rights:        { sq: "Të gjitha të drejtat e rezervuara.", en: "All rights reserved." },
  },

  hero: {
    eyebrow: { sq: "Konsulencë financiare & kontabël", en: "Financial & accounting consultancy" },
    title:   { sq: "Numra të qartë.\nBiznes i qetë.", en: "Clear numbers.\nA calmer business." },
    lead:    {
      sq: "TUFA Consult ofron mbështetje të plotë në kontabilitet, programe fiskale dhe mbylljen e bilanceve — që ju të fokusoheni te rritja, jo te numrat.",
      en: "TUFA Consult provides end-to-end support in accounting, fiscal programs and balance-sheet closing — so you focus on growth, not the numbers."
    },
  },

  intro: {
    eyebrow: { sq: "Kush jemi", en: "Who we are" },
    body: {
      sq: "Jemi një studio konsulence e përkushtuar t'i japë bizneseve qartësi dhe siguri në numrat e tyre. Nga ndërmarrjet e vogla te kompanitë në rritje, ju mbështesim në çdo hap — nga mbajtja e përditshme e kontabilitetit deri te mbyllja e bilanceve vjetore.",
      en: "We are a consultancy devoted to giving businesses clarity and confidence in their numbers. From small enterprises to growing companies, we support you at every step — from day-to-day bookkeeping to closing the annual balance sheet."
    }
  },

  services: {
    eyebrow: { sq: "Çfarë bëjmë", en: "What we do" },
    title:   { sq: "Shërbime", en: "Services" },
    lead: {
      sq: "Mbështetje në të gjitha nevojat e biznesit për mbajtjen e kontabilitetit dhe mbylljen e bilanceve.",
      en: "Support across every business need for keeping the books and closing balances."
    },
    items: [
      { n: "01", icon: "ledger",
        t: { sq: "Shërbime Financiare & Kontabilitet", en: "Financial & Accounting Services" },
        d: { sq: "Mbajtja e plotë e kontabilitetit, regjistrimi i transaksioneve dhe raportimi periodik financiar.",
             en: "Full bookkeeping, transaction recording and periodic financial reporting." } },
      { n: "02", icon: "chip",
        t: { sq: "Programe Fiskale & Kontabël", en: "Fiscal & Accounting Programs" },
        d: { sq: "Konfigurim dhe administrim i programeve fiskale e kontabël, në përputhje me legjislacionin në fuqi.",
             en: "Setup and administration of fiscal and accounting software, compliant with current legislation." } },
      { n: "03", icon: "scale",
        t: { sq: "Mbyllje Bilancesh & Pasqyra", en: "Balance-Sheet Closing & Statements" },
        d: { sq: "Përgatitja dhe mbyllja e bilanceve vjetore e pasqyrave financiare, të sakta dhe në afat.",
             en: "Preparation and closing of annual balance sheets and statements — accurate and on time." } },
      { n: "04", icon: "doc",
        t: { sq: "Konsulencë Fiskale", en: "Fiscal Consulting" },
        d: { sq: "Këshillim për detyrimet tatimore, deklarimet dhe optimizimin fiskal të biznesit.",
             en: "Guidance on tax obligations, declarations and the fiscal optimization of the business." } },
      { n: "05", icon: "support",
        t: { sq: "Mbështetje për Biznese", en: "Business Support" },
        d: { sq: "Suport i vazhdueshëm për çdo nevojë të biznesit në fushën financiare dhe kontabël.",
             en: "Ongoing support for every business need in finance and accounting." } },
      { n: "06", icon: "chart",
        t: { sq: "Raportim & Analizë", en: "Reporting & Analysis" },
        d: { sq: "Raporte të qarta menaxheriale që e kthejnë informacionin financiar në vendime.",
             en: "Clear management reports that turn financial data into decisions." } },
    ]
  },

  pricing: {
    eyebrow: { sq: "Paketat", en: "Plans" },
    title:   { sq: "Çmime të qarta, pa surpriza", en: "Clear pricing, no surprises" },
    lead: {
      sq: "Tri paketa kontabiliteti të përshtatura me ritmin e biznesit tuaj — nga regjistrime gjashtëmujore deri te mbështetje e plotë mujore. Tarifa përcaktohet sipas vëllimit dhe nevojave.",
      en: "Three accounting packages tailored to your business rhythm — from six-monthly bookkeeping to full monthly support. The fee is set by volume and needs."
    },
    unit: { sq: "Lekë / muaj", en: "ALL / month" },
    tiers: [
      { id: "start", featured: false,
        name: "Start",
        tagline: { sq: "Për biznese në hapat e parë", en: "For businesses in their first steps" },
        price:   { sq: "15.000 – 45.000", en: "15,000 – 45,000" },
        foot:    { sq: "Tarifa minimale 15.000 Lekë/muaj", en: "Minimum fee 15,000 ALL/month" },
        highlights: {
          sq: ["Regjistrime kontabël 6-mujore", "Deklarime tatimore të plota", "Komunikim pa limit", "Përgjigje brenda 1 jave", "Programi EasyPOS"],
          en: ["6-monthly bookkeeping", "Full tax declarations", "Unlimited communication", "Response within 1 week", "EasyPOS software (local)"]
        } },
      { id: "standart", featured: true,
        name: "Standart",
        tagline: { sq: "Më e zgjedhura nga bizneset", en: "Most chosen by businesses" },
        price:   { sq: "50.000 – 80.000", en: "50,000 – 80,000" },
        foot:    { sq: "Gjithçka te Start, plus më shumë", en: "Everything in Start, plus more" },
        highlights: {
          sq: ["Regjistrime kontabël 3-mujore", "Pasqyra financiare vjetore", "Përgjigje brenda 1 dite", "Takime çdo 3 muaj", "Programi EasyPOS"],
          en: ["3-monthly bookkeeping", "Annual financial statements", "Response within 1 day", "Meetings every 3 months", "EasyPOS software (local)"]
        } },
      { id: "premium", featured: false,
        name: "Premium",
        tagline: { sq: "Mbështetje e plotë, çdo muaj", en: "Full support, every month" },
        price:   { sq: "mbi 80.000", en: "over 80,000" },
        foot:    { sq: "Shërbimi më i plotë", en: "The most complete service" },
        highlights: {
          sq: ["Regjistrime kontabël mujore", "Përgjigje brenda 1 ore", "Faturim & pagesa bankare", "Mbështetje ligjore & kontrata", "Programi EasyBooks (online)"],
          en: ["Monthly bookkeeping", "Response within 1 hour", "Invoicing & bank payments", "Legal support & contracts", "EasyBooks software (online)"]
        } },
    ],
    groups: [
      { name: { sq: "Shërbime", en: "Services" }, rows: [
        { f: { sq: "Regjistrime kontabël", en: "Bookkeeping entries" },
          d: { sq: "Rakordimi i regjistrimeve kontabël", en: "Reconciliation of accounting entries" },
          v: { start: { sq: "6-Mujore", en: "6-monthly" }, standart: { sq: "3-Mujore", en: "3-monthly" }, premium: { sq: "Mujore", en: "Monthly" } } },
        { f: { sq: "Deklarime tatimore", en: "Tax declarations" },
          d: { sq: "Deklarimet tatimore për të gjitha përgjegjësitë tatimore", en: "Tax declarations for all fiscal liabilities" },
          v: { start: true, standart: true, premium: true } },
        { f: { sq: "Përgatitja e Pasqyrave Financiare", en: "Financial statements" },
          d: { sq: "Përgatitja e pasqyrave financiare vjetore", en: "Preparation of annual financial statements" },
          v: { start: false, standart: true, premium: true } },
        { f: { sq: "Dosjet e punonjësve", en: "Employee files" },
          d: { sq: "Administrimi i dosjes së personelit (kontrata, regjistra)", en: "Personnel file management (contracts, records)" },
          v: { start: false, standart: false, premium: true } },
      ] },
      { name: { sq: "Suport", en: "Support" }, rows: [
        { f: { sq: "Komunikimi", en: "Communication" },
          d: { sq: "Komunikimi nëpërmjet telefonit, e-mailit apo mesazheve", en: "Communication by phone, e-mail or messaging" },
          v: { start: { sq: "Pa limit", en: "Unlimited" }, standart: { sq: "Pa limit", en: "Unlimited" }, premium: { sq: "Pa limit", en: "Unlimited" } } },
        { f: { sq: "Koha e përgjigjes", en: "Response time" },
          d: { sq: "Koha e përgjigjes nga zyra e kontabilitetit për rastin", en: "Response time from the accounting office per case" },
          v: { start: { sq: "1 Javë", en: "1 week" }, standart: { sq: "1 Ditë", en: "1 day" }, premium: { sq: "1 Orë", en: "1 hour" } } },
        { f: { sq: "Ndryshime në regjistrim tregtar", en: "Trade-register changes" },
          d: { sq: "Ndryshime të anëtarëve, kontakte", en: "Member changes, contacts" },
          v: { start: false, standart: false, premium: true } },
        { f: { sq: "Takime", en: "Meetings" },
          d: { sq: "Mundësia e organizimit të takimeve", en: "Ability to organize meetings" },
          v: { start: { sq: "6-Mujore", en: "6-monthly" }, standart: { sq: "3-Mujore", en: "3-monthly" }, premium: { sq: "Mujore", en: "Monthly" } } },
        { f: { sq: "Parashikimi i rezultatit tatimor", en: "Tax-result forecast" },
          d: { sq: "Përgatitja e raporteve periodike për parashikimin e tatimit", en: "Periodic reports forecasting tax due" },
          v: { start: { sq: "6-Mujore", en: "6-monthly" }, standart: { sq: "3-Mujore", en: "3-monthly" }, premium: { sq: "Mujore", en: "Monthly" } } },
        { f: { sq: "Raport Financiar", en: "Financial report" },
          d: { sq: "Përgatitja dhe diskutimi i raporteve të brendshme (real)", en: "Preparation and discussion of internal reports (real)" },
          v: { start: { sq: "Këshillim", en: "Advisory" }, standart: { sq: "Rishikim", en: "Review" }, premium: { sq: "Përgatitje", en: "Full prep" } } },
        { f: { sq: "Lëshim i faturave tatimore", en: "Issuing tax invoices" },
          d: { sq: "Lëshimi i faturave tatimore nga ana jonë", en: "We issue tax invoices on your behalf" },
          v: { start: false, standart: false, premium: true } },
        { f: { sq: "Pagesa në bankë", en: "Bank payments" },
          d: { sq: "Kryerja e pagesës së detyrimeve (e-banking ose sportel banke)", en: "Settling liabilities (e-banking or at the counter)" },
          v: { start: false, standart: false, premium: true } },
        { f: { sq: "Ligjore", en: "Legal" },
          d: { sq: "Përgatitja e kontratave dhe opinione ligjore", en: "Drafting contracts and legal opinions" },
          v: { start: false, standart: false, premium: true } },
      ] },
      { name: { sq: "Software", en: "Software" }, rows: [
        { f: { sq: "EasyPOS", en: "EasyPOS" },
          d: { sq: "Administrimi dhe ruajtja e të dhënave", en: "Local data management and storage" },
          v: { start: true, standart: true, premium: false } },
        { f: { sq: "EasyBooks", en: "EasyBooks" },
          d: { sq: "Administrimi i të dhënave online dhe akses i plotë në çdo moment", en: "Online data management with full access anytime" },
          v: { start: false, standart: false, premium: true } },
      ] },
    ],
    notes: {
      sq: [
        "Nuk përfshihen shërbimet për: (a) Leje qëndrimi, (b) Licencë, (c) Procedura për largim nga puna të punonjësve, (d) Mbrojtje marke.",
        "Tarifa minimale nuk aplikohet për të gjitha rastet, por është çmimi minimal në të gjitha bashkëpunimet. Pas diskutimeve tona, mund të rezultojë që paketa Start të ketë çmim më të lartë se 15.000 Lekë/muaj.",
      ],
      en: [
        "The following are not included: (a) Residence permits, (b) Licensing, (c) Employee dismissal procedures, (d) Trademark protection.",
        "The minimum fee does not apply to every case but is the floor across all engagements. After our discussion, the Start package may end up higher than 15,000 ALL/month.",
      ]
    }
  },

  process: {
    eyebrow: { sq: "Si punojmë", en: "How we work" },
    title:   { sq: "Një proces i thjeshtë, i parashikueshëm", en: "A simple, predictable process" },
    steps: [
      { k: "01", t: { sq: "Njohja",     en: "Discovery" }, d: { sq: "Kuptojmë biznesin, strukturën dhe nevojat tuaja financiare.", en: "We understand your business, structure and financial needs." } },
      { k: "02", t: { sq: "Konfigurimi", en: "Setup" },    d: { sq: "Vendosim sistemin kontabël e fiskal të përshtatur me biznesin.", en: "We set up the accounting and fiscal system tailored to you." } },
      { k: "03", t: { sq: "Mbajtja",    en: "Bookkeeping" },d: { sq: "Regjistrojmë e administrojmë çdo transaksion me saktësi.", en: "We record and manage every transaction with precision." } },
      { k: "04", t: { sq: "Raportimi",  en: "Reporting" },  d: { sq: "Bilancet, pasqyrat dhe raportet — gjithmonë në afat.", en: "Balances, statements and reports — always on time." } },
    ]
  },

  values: {
    eyebrow: { sq: "Parime", en: "Principles" },
    items: [
      { t: { sq: "Saktësi", en: "Precision" }, d: { sq: "Çdo shifër e kontrolluar, çdo afat i respektuar.", en: "Every figure checked, every deadline kept." } },
      { t: { sq: "Transparencë", en: "Transparency" }, d: { sq: "E dini gjithmonë ku qëndron biznesi juaj.", en: "You always know where your business stands." } },
      { t: { sq: "Konfidencialitet", en: "Confidentiality" }, d: { sq: "Të dhënat tuaja i trajtojmë me kujdes maksimal.", en: "Your data is handled with the utmost care." } },
      { t: { sq: "Përkushtim", en: "Commitment" }, d: { sq: "Një partner që përgjigjet kur keni nevojë.", en: "A partner who responds when you need them." } },
    ]
  },

  pubs: {
    eyebrow: { sq: "Publikime", en: "Publications" },
    title:   { sq: "Njohuri & analiza", en: "Insight & analysis" },
    lead: {
      sq: "Shkrime praktike mbi fiskalitetin, kontabilitetin dhe raportimin financiar për bizneset.",
      en: "Practical writing on fiscal policy, accounting and financial reporting for businesses."
    },
    cats: [
      { id: "fiskale",      sq: "Fiskale",      en: "Fiscal" },
      { id: "kontabilitet", sq: "Kontabilitet", en: "Accounting" },
      { id: "raportim",     sq: "Raportim",     en: "Reporting" },
      { id: "legjislacion", sq: "Legjislacion", en: "Legislation" },
    ],
    items: [
      { cat: "fiskale", date: { sq: "Mars 2026", en: "March 2026" }, read: "6",
        t: { sq: "Ndryshimet e reja në ligjin për TVSH-në: çfarë duhet të dini", en: "New VAT law changes: what you need to know" },
        x: { sq: "Një përmbledhje e ndryshimeve më të fundit dhe ndikimi i tyre te bizneset e vogla e të mesme.", en: "A summary of the latest changes and their impact on small and medium businesses." } },
      { cat: "kontabilitet", date: { sq: "Shkurt 2026", en: "February 2026" }, read: "5",
        t: { sq: "Si të përgatisni bilancin vjetor pa stres", en: "How to prepare your annual balance sheet without stress" },
        x: { sq: "Një listë praktike kontrolli për mbylljen e qetë të vitit financiar.", en: "A practical checklist for a calm financial year-end close." } },
      { cat: "fiskale", date: { sq: "Janar 2026", en: "January 2026" }, read: "4",
        t: { sq: "Dixhitalizimi i faturës fiskale: udhëzues praktik", en: "Fiscal invoice digitalization: a practical guide" },
        x: { sq: "Hapat për t'u përshtatur me sistemin e faturimit elektronik pa ndërprerje.", en: "Steps to adopt electronic invoicing without disruption." } },
      { cat: "raportim", date: { sq: "Dhjetor 2025", en: "December 2025" }, read: "7",
        t: { sq: "Treguesit financiarë që çdo biznes i vogël duhet të ndjekë", en: "Financial indicators every small business should track" },
        x: { sq: "Nga likuiditeti te marzhi — metrikat që tregojnë shëndetin e biznesit.", en: "From liquidity to margin — the metrics that show business health." } },
      { cat: "legjislacion", date: { sq: "Nëntor 2025", en: "November 2025" }, read: "5",
        t: { sq: "Detyrimet tatimore për bizneset e reja", en: "Tax obligations for new businesses" },
        x: { sq: "Çfarë duhet të regjistroni dhe deklaroni gjatë vitit të parë të aktivitetit.", en: "What to register and declare during your first year of activity." } },
      { cat: "kontabilitet", date: { sq: "Tetor 2025", en: "October 2025" }, read: "6",
        t: { sq: "Kontabiliteti i kostos: bazat për prodhuesit", en: "Cost accounting: the basics for manufacturers" },
        x: { sq: "Si të llogarisni koston reale të produktit dhe të çmoni me besim.", en: "How to compute true product cost and price with confidence." } },
    ]
  },

  contact: {
    eyebrow: { sq: "Kontakt", en: "Contact" },
    title:   { sq: "Le të flasim për numrat tuaj", en: "Let's talk about your numbers" },
    lead: {
      sq: "Na shkruani për një konsultë fillestare pa pagesë. Ju përgjigjemi brenda një dite pune.",
      en: "Write to us for a free initial consultation. We reply within one business day."
    },
    fields: {
      name:    { sq: "Emri i plotë",     en: "Full name" },
      email:   { sq: "Email",            en: "Email" },
      company: { sq: "Biznesi / Kompania", en: "Business / Company" },
      message: { sq: "Si mund t'ju ndihmojmë?", en: "How can we help?" },
      send:    { sq: "Dërgo mesazhin", en: "Send message" },
      sent:    { sq: "Faleminderit! Do t'ju kontaktojmë së shpejti.", en: "Thank you! We'll be in touch shortly." },
    },
    details: [
      { k: { sq: "Email",     en: "Email" },   v: "info@tufa.consulting" },
      { k: { sq: "Telefon",   en: "Phone" },   v: "+355 69 60 52 163" },
      { k: { sq: "Adresa",    en: "Address" }, v: { sq: "Rr. Bardhok Biba, Tiranë, Shqipëri", en: "Rr. Bardhok Biba, Tirana, Albania" } },
      { k: { sq: "Orari",     en: "Hours" },   v: { sq: "Hën–Pre, 09:00–17:00", en: "Mon–Fri, 09:00–17:00" } },
    ]
  },
};
