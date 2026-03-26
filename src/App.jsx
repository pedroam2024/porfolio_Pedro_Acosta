import { useState, useEffect } from "react";

// ── Año autogenerado ──────────────────────────────────────────
const CURRENT_YEAR = new Date().getFullYear();

// ── Datos multilenguaje ───────────────────────────────────────
const i18n = {
  es: {
    label: "ES",
    eyebrow: `Currículum Vitae · ${CURRENT_YEAR}`,
    role: "Analista Desarrollador Senior · Lic. en Ciencias Informáticas",
    available: "Disponible para proyectos remotos",
    nav: {
      download: "Descargar PDF",
      profile: "Perfil",
      tech: "Stack Técnico",
      languages: "Idiomas",
      education: "Formación",
      experience: "Experiencia",
      competencies: "Competencias",
      ai: "IA & Integraciones",
    },
    profile: `Licenciado en Ciencias Informáticas con más de <strong>7 años de experiencia</strong> en desarrollo de software para entornos de alta criticidad. Actualmente en <strong>Electroban SAECA</strong> (retail & financiamiento, +35 sucursales), con trayectoria en <strong>sistemas bancarios, microservicios, GeneXus + GX Server, Azure</strong> e integración de servicios externos (WhatsApp API, plataformas de mensajería y terceros). Uso activo de <strong>IA (Claude, ChatGPT, Copilot, Gemini)</strong> para análisis, investigación y soporte QA. Referente técnico con experiencia en sistemas <strong>24/7 y pipelines CI/CD empresariales</strong>.`,
    langLevels: ["Nativo", "Intermedio", "Básico"],
    aiTools: [
      { name: "Claude · ChatGPT · Gemini", desc: "Análisis, investigación y síntesis técnica" },
      { name: "GitHub Copilot", desc: "Asistencia en código, revisión y QA" },
      { name: "WhatsApp Business API", desc: "Integración de canales de mensajería" },
      { name: "APIs de terceros", desc: "Servicios externos, pasarelas y conectores" },
    ],
    experience: [
      {
        when: `Abr 2025\nActual`,
        role: "Analista Desarrollador · Mantenimiento de Sistemas",
        co: "Electroban SAECA",
        sector: "Retail · Financiamiento · +35 Sucursales",
        pills: [["gx","GeneXus v17"],["gx","GX Server"],["az","Azure"],["git","Git"],["ai","IA Tools"],["wa","WhatsApp API"]],
        items: [
          "Desarrollo y mantenimiento de sistemas de gestión comercial y financiamiento en GeneXus v17 + GX Server para operación de más de 35 sucursales a nivel nacional.",
          "Mantenimiento de sistemas de créditos al consumo, control de stock, ventas y gestión de cobranzas en entorno de alta disponibilidad.",
          "Integración de servicios externos (APIs de mensajería, pasarelas de pago y plataformas de terceros) con los sistemas core de la empresa.",
          "Uso de herramientas IA (Claude, Copilot) para soporte en análisis de incidencias, investigación técnica y pruebas QA.",
          "Coordinación con áreas comerciales y financieras para relevamiento de requerimientos y validación de cambios en sistemas productivos.",
        ],
      },
      {
        when: "Feb 2023\nAbr 2025",
        role: "Analista Desarrollador Senior",
        co: "I-LINE S.A.",
        sector: "Sector Financiero · Bancario",
        pills: [["gx","GeneXus v17"],["gx","GX Server"],["az","Azure"],["git","Git"],["ai","Copilot"],["wa","WhatsApp API"]],
        items: [
          "Desarrollo de módulos críticos en GeneXus v17 + GX Server para sistemas bancarios 24/7 con cientos de usuarios concurrentes.",
          "Integración de WhatsApp Business API y servicios externos de mensajería para notificaciones transaccionales en tiempo real.",
          "Implementación de microservicios e integración con orquestadores sobre Azure para automatización de flujos bancarios.",
          "Uso de Claude, ChatGPT y Copilot para análisis de requerimientos, investigación técnica y soporte en pruebas QA.",
          "Diseño e integración de módulos SARC (Riesgo de Crédito) y gestión documental con trazabilidad completa en Azure.",
          "Referente técnico en relevamientos con clientes del sector financiero; integración con burós de crédito vía Web Services seguros.",
        ],
      },
      {
        when: "Jul 2021\nEne 2023",
        role: "Analista Desarrollador",
        co: "Benito Roggio e Hijos S.A.",
        sector: "Construcción & Infraestructura",
        pills: [["gx","GeneXus v17"],["gx","GX Server"],["az","Azure"],["git","Git"],["ai","IA Tools"]],
        items: [
          "Desarrollo de módulos RRHH y CRM en GeneXus + GX Server para gestión de más de 500 colaboradores.",
          "Integración de APIs externas para conectividad entre sistemas de orquestación y ERP corporativo en Azure.",
          "Uso de IA (Gemini, ChatGPT) para análisis de datos, revisión de lógica de negocio y documentación técnica.",
          "Implementación de sistema de gestión documental con control de versiones y auditoría completa.",
          "Coordinación directa con clientes internos para relevamiento y validación de entregables.",
        ],
      },
      {
        when: "Sep 2018\nJun 2021",
        role: "Analista Desarrollador",
        co: "S@N – Systems and Networks",
        sector: "Consultoría de Software",
        pills: [["net","C#"],["java","Java"],["git","Git"],["az","Azure"],["wa","APIs Externas"]],
        items: [
          "Desarrollo de sistemas CRM con C#, Java y GeneXus; versionado empresarial con Git.",
          "Integración de APIs de terceros: servicios de mensajería, pasarelas de pago y conectores B2B.",
          "Implementación de microservicios con APIs REST y Web Services SOAP en entornos de alta carga.",
          "Migración de sistemas legados a arquitecturas modernas desplegadas en Azure.",
          "Soporte técnico nivel 2 y 3 en sistemas de misión crítica con SLAs exigentes.",
        ],
      },
    ],
    education: [
      { t: "Lic. Ciencias Informáticas", s: "Énfasis en Sistemas Informáticos", p: "UAA · 2012 – 2017" },
      { t: "Certificación SQL Server", s: "Nivel Intermedio", p: "SNPP" },
      { t: "Certificación Oracle", s: "Nivel Intermedio", p: "SNPP" },
      { t: "GeneXus 15 – Analista Jr.", s: "Certificado", p: "Soluciones Integrales" },
    ],
    tags: ["Sistemas Bancarios","Microservicios","Orquestadores","GeneXus v17","GX Server","Azure","Git Empresarial","CI/CD","SARC · Riesgo Crediticio","Burós de Crédito","WhatsApp Business API","APIs de Terceros","Integraciones B2B","Claude · ChatGPT · Gemini","GitHub Copilot","QA con IA","Gestión Documental","CRM","RRHH","Web Services","REST · SOAP",".NET C#","Java","SQL Server","Oracle","Sistemas 24/7","Referente Técnico"],
    competenciesTitle: "Competencias Clave",
    footer: `Pedro J. Acosta Mereles · Senior Analyst Developer · Asunción, Paraguay · ${CURRENT_YEAR}`,
  },

  en: {
    label: "EN",
    eyebrow: `Curriculum Vitae · ${CURRENT_YEAR}`,
    role: "Senior Systems Analyst & Developer · B.Sc. Computer Science",
    available: "Available for remote projects",
    nav: {
      download: "Download PDF",
      profile: "Profile",
      tech: "Tech Stack",
      languages: "Languages",
      education: "Education",
      experience: "Experience",
      competencies: "Core Skills",
      ai: "AI & Integrations",
    },
    profile: `Computer Science graduate with over <strong>7 years of experience</strong> delivering software for high-criticality environments. Currently at <strong>Electroban SAECA</strong> (retail & consumer finance, 35+ branches), with a strong track record in <strong>banking systems, microservices, GeneXus + GX Server, Azure</strong> and external service integrations (WhatsApp API, messaging platforms and third-party connectors). Active user of <strong>AI tools (Claude, ChatGPT, Copilot, Gemini)</strong> for analysis, research and QA support. Technical lead with experience in <strong>24/7 systems and enterprise CI/CD pipelines</strong>.`,
    langLevels: ["Native", "Intermediate", "Basic"],
    aiTools: [
      { name: "Claude · ChatGPT · Gemini", desc: "Technical analysis, research & synthesis" },
      { name: "GitHub Copilot", desc: "Code assistance, review & QA support" },
      { name: "WhatsApp Business API", desc: "Messaging channel integration" },
      { name: "Third-party APIs", desc: "External services, gateways & connectors" },
    ],
    experience: [
      {
        when: `Apr 2025\nPresent`,
        role: "Systems Analyst & Developer · Systems Maintenance",
        co: "Electroban SAECA",
        sector: "Retail · Consumer Finance · 35+ Branches",
        pills: [["gx","GeneXus v17"],["gx","GX Server"],["az","Azure"],["git","Git"],["ai","AI Tools"],["wa","WhatsApp API"]],
        items: [
          "Development and maintenance of commercial and consumer finance systems in GeneXus v17 + GX Server for a 35+ branch national retail operation.",
          "Maintenance of credit, inventory, sales and collections systems in a high-availability environment.",
          "Integration of external services (messaging APIs, payment gateways and third-party platforms) with core business systems.",
          "Use of AI tools (Claude, Copilot) for incident analysis support, technical research and QA testing.",
          "Coordination with commercial and finance teams for requirements gathering and production system change validation.",
        ],
      },
      {
        when: "Feb 2023\nApr 2025",
        role: "Senior Systems Analyst & Developer",
        co: "I-LINE S.A.",
        sector: "Financial · Banking Sector",
        pills: [["gx","GeneXus v17"],["gx","GX Server"],["az","Azure"],["git","Git"],["ai","Copilot"],["wa","WhatsApp API"]],
        items: [
          "Built and maintained critical GeneXus v17 + GX Server modules for banking systems operating 24/7 with hundreds of concurrent users.",
          "Integrated WhatsApp Business API and external messaging services for real-time transactional notifications.",
          "Implemented microservices and orchestrator integrations on Azure to automate core banking workflows.",
          "Leveraged Claude, ChatGPT and Copilot for requirements analysis, technical research and QA test support.",
          "Designed and integrated SARC (Credit Risk) and document management modules with full Azure traceability.",
          "Served as technical lead in financial-sector client discovery; integrated credit bureaus via secure Web Services.",
        ],
      },
      {
        when: "Jul 2021\nJan 2023",
        role: "Systems Analyst & Developer",
        co: "Benito Roggio e Hijos S.A.",
        sector: "Construction & Infrastructure",
        pills: [["gx","GeneXus v17"],["gx","GX Server"],["az","Azure"],["git","Git"],["ai","AI Tools"]],
        items: [
          "Developed HR and CRM modules in GeneXus + GX Server for workforce management of 500+ employees.",
          "Integrated external APIs to connect orchestration systems with the corporate ERP on Azure.",
          "Used AI tools (Gemini, ChatGPT) for data analysis, business logic review and technical documentation.",
          "Implemented a document management system with version control and full audit trail.",
          "Coordinated directly with internal clients for requirements gathering and deliverable validation.",
        ],
      },
      {
        when: "Sep 2018\nJun 2021",
        role: "Systems Analyst & Developer",
        co: "S@N – Systems and Networks",
        sector: "Software Consulting",
        pills: [["net","C#"],["java","Java"],["git","Git"],["az","Azure"],["wa","External APIs"]],
        items: [
          "Built CRM systems with C#, Java and GeneXus; enterprise version control with Git.",
          "Integrated third-party APIs: messaging services, payment gateways and B2B connectors.",
          "Implemented microservices with REST APIs and SOAP Web Services in high-load environments.",
          "Migrated legacy systems to modern architectures deployed on Azure.",
          "Provided Level 2 & 3 support for mission-critical systems under demanding SLAs.",
        ],
      },
    ],
    education: [
      { t: "B.Sc. Computer Science", s: "Systems Informatics Track", p: "UAA · 2012 – 2017" },
      { t: "SQL Server Certification", s: "Intermediate Level", p: "SNPP" },
      { t: "Oracle Certification", s: "Intermediate Level", p: "SNPP" },
      { t: "GeneXus 15 – Jr. Analyst", s: "Certified", p: "Soluciones Integrales" },
    ],
    tags: ["Banking Systems","Microservices","Orchestrators","GeneXus v17","GX Server","Azure","Enterprise Git","CI/CD","SARC · Credit Risk","Credit Bureaus","WhatsApp Business API","Third-party APIs","B2B Integrations","Claude · ChatGPT · Gemini","GitHub Copilot","AI-assisted QA","Document Management","CRM","HR Systems","Web Services","REST · SOAP",".NET C#","Java","SQL Server","Oracle","24/7 Systems","Technical Lead"],
    competenciesTitle: "Core Competencies",
    footer: `Pedro J. Acosta Mereles · Senior Analyst Developer · Asunción, Paraguay · ${CURRENT_YEAR}`,
  },

  pt: {
    label: "PT",
    eyebrow: `Currículo · ${CURRENT_YEAR}`,
    role: "Analista Desenvolvedor Sênior · Lic. em Ciência da Computação",
    available: "Disponível para projetos remotos",
    nav: {
      download: "Baixar PDF",
      profile: "Perfil",
      tech: "Stack Técnico",
      languages: "Idiomas",
      education: "Formação",
      experience: "Experiência",
      competencies: "Competências",
      ai: "IA & Integrações",
    },
    profile: `Licenciado em Ciência da Computação com mais de <strong>7 anos de experiência</strong> em desenvolvimento de software para ambientes de alta criticidade. Atualmente na <strong>Electroban SAECA</strong> (varejo & financiamento ao consumidor, +35 filiais), com trajetória em <strong>sistemas bancários, microsserviços, GeneXus + GX Server, Azure</strong> e integração de serviços externos (WhatsApp API, plataformas de mensagens e conectores de terceiros). Uso ativo de <strong>IA (Claude, ChatGPT, Copilot, Gemini)</strong> para análise, pesquisa e suporte QA. Referência técnica com experiência em <strong>sistemas 24/7 e pipelines CI/CD empresariais</strong>.`,
    langLevels: ["Nativo", "Intermediário", "Básico"],
    aiTools: [
      { name: "Claude · ChatGPT · Gemini", desc: "Análise técnica, pesquisa e síntese" },
      { name: "GitHub Copilot", desc: "Assistência em código, revisão e QA" },
      { name: "WhatsApp Business API", desc: "Integração de canais de mensagens" },
      { name: "APIs de terceiros", desc: "Serviços externos, gateways e conectores" },
    ],
    experience: [
      {
        when: `Abr 2025\nAtual`,
        role: "Analista Desenvolvedor · Manutenção de Sistemas",
        co: "Electroban SAECA",
        sector: "Varejo · Financiamento ao Consumidor · +35 Filiais",
        pills: [["gx","GeneXus v17"],["gx","GX Server"],["az","Azure"],["git","Git"],["ai","IA Tools"],["wa","WhatsApp API"]],
        items: [
          "Desenvolvimento e manutenção de sistemas de gestão comercial e financiamento em GeneXus v17 + GX Server para operação nacional com mais de 35 filiais.",
          "Manutenção de sistemas de crédito ao consumidor, controle de estoque, vendas e cobranças em ambiente de alta disponibilidade.",
          "Integração de serviços externos (APIs de mensagens, gateways de pagamento e plataformas de terceiros) com os sistemas core da empresa.",
          "Uso de IA (Claude, Copilot) para suporte em análise de incidentes, pesquisa técnica e testes QA.",
          "Coordenação com áreas comerciais e financeiras para levantamento de requisitos e validação de alterações em sistemas produtivos.",
        ],
      },
      {
        when: "Fev 2023\nAbr 2025",
        role: "Analista Desenvolvedor Sênior",
        co: "I-LINE S.A.",
        sector: "Setor Financeiro · Bancário",
        pills: [["gx","GeneXus v17"],["gx","GX Server"],["az","Azure"],["git","Git"],["ai","Copilot"],["wa","WhatsApp API"]],
        items: [
          "Desenvolvimento de módulos críticos em GeneXus v17 + GX Server para sistemas bancários 24/7 com centenas de usuários simultâneos.",
          "Integração da WhatsApp Business API e serviços de mensagens externos para notificações transacionais em tempo real.",
          "Implementação de microsserviços e orquestradores no Azure para automação de fluxos bancários.",
          "Uso de Claude, ChatGPT e Copilot para análise de requisitos, pesquisa técnica e suporte em testes QA.",
          "Design e integração de módulos SARC (Risco de Crédito) e gestão documental com rastreabilidade no Azure.",
          "Referência técnica em levantamentos financeiros; integração com bureaus de crédito via Web Services seguros.",
        ],
      },
      {
        when: "Jul 2021\nJan 2023",
        role: "Analista Desenvolvedor",
        co: "Benito Roggio e Hijos S.A.",
        sector: "Construção & Infraestrutura",
        pills: [["gx","GeneXus v17"],["gx","GX Server"],["az","Azure"],["git","Git"],["ai","IA Tools"]],
        items: [
          "Desenvolvimento de módulos de RH e CRM em GeneXus + GX Server para gestão de mais de 500 colaboradores.",
          "Integração de APIs externas para conectar sistemas de orquestação com o ERP corporativo no Azure.",
          "Uso de IA (Gemini, ChatGPT) para análise de dados, revisão de lógica de negócio e documentação técnica.",
          "Implementação de sistema de gestão documental com controle de versões e auditoria completa.",
          "Coordenação com clientes internos para levantamento de requisitos e validação de entregas.",
        ],
      },
      {
        when: "Set 2018\nJun 2021",
        role: "Analista Desenvolvedor",
        co: "S@N – Systems and Networks",
        sector: "Consultoria de Software",
        pills: [["net","C#"],["java","Java"],["git","Git"],["az","Azure"],["wa","APIs Externas"]],
        items: [
          "Desenvolvimento de sistemas CRM com C#, Java e GeneXus; versionamento empresarial com Git.",
          "Integração de APIs de terceiros: serviços de mensagens, gateways de pagamento e conectores B2B.",
          "Implementação de microsserviços com APIs REST e Web Services SOAP em ambientes de alta carga.",
          "Migração de sistemas legados para arquiteturas modernas implantadas no Azure.",
          "Suporte técnico nível 2 e 3 em sistemas de missão crítica com SLAs exigentes.",
        ],
      },
    ],
    education: [
      { t: "Lic. Ciência da Computação", s: "Ênfase em Sistemas", p: "UAA · 2012 – 2017" },
      { t: "Certificação SQL Server", s: "Nível Intermediário", p: "SNPP" },
      { t: "Certificação Oracle", s: "Nível Intermediário", p: "SNPP" },
      { t: "GeneXus 15 – Analista Jr.", s: "Certificado", p: "Soluciones Integrales" },
    ],
    tags: ["Sistemas Bancários","Microsserviços","Orquestradores","GeneXus v17","GX Server","Azure","Git Empresarial","CI/CD","SARC · Risco de Crédito","Bureau de Crédito","WhatsApp Business API","APIs de Terceiros","Integrações B2B","Claude · ChatGPT · Gemini","GitHub Copilot","QA com IA","Gestão Documental","CRM","RH","Web Services","REST · SOAP",".NET C#","Java","SQL Server","Oracle","Sistemas 24/7","Referência Técnica"],
    competenciesTitle: "Competências",
    footer: `Pedro J. Acosta Mereles · Senior Analyst Developer · Asunção, Paraguay · ${CURRENT_YEAR}`,
  },
};

// ── Datos estáticos ───────────────────────────────────────────
const skillBars = [
  { name: "GeneXus (v8 – v17) + GX Server", pct: 96, bar: "gx" },
  { name: "Git · Enterprise CI/CD",          pct: 90, bar: "git" },
  { name: "Azure (Cloud · DevOps · Deploy)", pct: 83, bar: "az" },
  { name: ".NET C# / Visual Studio",         pct: 88, bar: "def" },
  { name: "SQL Server · Oracle · PgSQL",     pct: 85, bar: "def" },
  { name: "Java · REST · SOAP · APIs",       pct: 80, bar: "def" },
  { name: "Microservicios · Orquestadores",  pct: 78, bar: "def" },
  { name: "IA Tools (Claude·GPT·Copilot)",   pct: 85, bar: "ai"  },
];

const langNames = {
  es: ["Español", "Inglés", "Portugués"],
  en: ["Spanish", "English", "Portuguese"],
  pt: ["Espanhol", "Inglês", "Português"],
};

const pillColor = { gx:"#b8945a", az:"#0078d4", git:"#e8502d", net:"#68217a", java:"#f47920", ai:"#10a37f", wa:"#25d366" };
const pillBg    = { gx:"rgba(184,148,90,.1)", az:"rgba(0,120,212,.1)", git:"rgba(232,80,45,.08)", net:"rgba(104,33,122,.08)", java:"rgba(244,121,32,.08)", ai:"rgba(16,163,127,.1)", wa:"rgba(37,211,102,.1)" };
const barGrad   = { gx:["#b8945a","#e8d4b0"], az:["#0078d4","#5aa8e8"], git:["#e8502d","#e8876a"], ai:["#10a37f","#4ccea8"], def:["#8a8070","#b0a090"] };

const heroLabels = {
  es: [["gx","GeneXus v17"],["gx","GX Server"],["az","Azure"],["git","Git Enterprise"],["def","Microservicios"],["ai","IA Tools"],["wa","WhatsApp API"]],
  en: [["gx","GeneXus v17"],["gx","GX Server"],["az","Azure"],["git","Git Enterprise"],["def","Microservices"],["ai","AI Tools"],["wa","WhatsApp API"]],
  pt: [["gx","GeneXus v17"],["gx","GX Server"],["az","Azure"],["git","Git Enterprise"],["def","Microsserviços"],["ai","IA Tools"],["wa","WhatsApp API"]],
};

const badgeBorder = { gx:"rgba(184,148,90,.35)", az:"rgba(0,120,212,.4)", git:"rgba(232,80,45,.35)", ai:"rgba(16,163,127,.35)", wa:"rgba(37,211,102,.35)", def:"rgba(255,255,255,.12)" };
const badgeColor  = { gx:"#c9a84c", az:"#5aa8e8", git:"#e8876a", ai:"#4ccea8", wa:"#4fd97a", def:"rgba(255,255,255,.4)" };

const tagCls = (tag) => {
  const t = tag.toLowerCase();
  if (/azure/.test(t)) return "tag tag-az";
  if (/git/.test(t))   return "tag tag-git";
  if (/claude|chatgpt|gemini|copilot|ia·|ai-|ai assisted|con ia|com ia|qa con|qa with/.test(t)) return "tag tag-ai";
  if (/whatsapp|b2b/.test(t)) return "tag tag-wa";
  if (/bancari|banking|microserv|orquest|sarc|24\/7|referente|technical lead|referência/.test(t)) return "tag tag-hi";
  return "tag";
};

// ── Estilos ───────────────────────────────────────────────────
const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ink:#0d0d0d;--paper:#f7f4ef;--gold:#b8945a;--gold-lt:#e8d4b0;--muted:#8a8070;--dark:#131313;--dark2:#191919;--accent:#c4a265;--sidebar-w:295px}
html{scroll-behavior:smooth}
body{background:var(--paper);font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}

.nav{position:fixed;top:0;left:0;right:0;z-index:300;height:52px;display:flex;align-items:center;padding:0 1.5rem;gap:1rem;justify-content:space-between;background:rgba(247,244,239,.96);backdrop-filter:blur(18px);border-bottom:1px solid var(--gold-lt)}
.nav-name{font-family:'Cormorant Garamond',serif;font-size:.9rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--ink);white-space:nowrap;flex-shrink:0}
.nav-r{display:flex;align-items:center;gap:.6rem}
.lsw{display:flex;gap:3px}
.lb{background:transparent;border:1px solid var(--gold-lt);color:var(--muted);font-size:.62rem;font-weight:500;letter-spacing:.1em;padding:.26rem .52rem;cursor:pointer;transition:all .17s;font-family:'DM Sans',sans-serif;text-transform:uppercase}
.lb:hover{border-color:var(--gold);color:var(--gold)}
.lb.on{background:var(--dark);color:var(--gold-lt);border-color:var(--dark)}
.dlb{background:var(--dark);color:var(--gold-lt);border:none;padding:.42rem 1.1rem;font-family:'DM Sans',sans-serif;font-size:.62rem;font-weight:500;letter-spacing:.18em;text-transform:uppercase;cursor:pointer;transition:all .2s;white-space:nowrap}
.dlb:hover{background:var(--gold);color:#fff}

.hero{background:var(--dark);color:#fff;padding:6.5rem 4rem 3.5rem;position:relative;overflow:hidden;min-height:42vh;display:flex;flex-direction:column;justify-content:flex-end}
.h-grain{position:absolute;inset:0;opacity:.035;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:160px}
.h-tl{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,var(--gold),var(--gold-lt),var(--gold),transparent)}
.h-wm{position:absolute;right:1.5rem;bottom:-2rem;font-family:'Cormorant Garamond',serif;font-size:clamp(5rem,15vw,11rem);font-weight:700;line-height:1;color:rgba(255,255,255,.022);letter-spacing:-.04em;user-select:none;pointer-events:none}
.h-ey{font-size:.58rem;letter-spacing:.4em;text-transform:uppercase;color:var(--gold);margin-bottom:.9rem;display:flex;align-items:center;gap:.8rem}
.h-ey::before{content:'';display:block;width:2.2rem;height:1px;background:var(--gold)}
.h-name{font-family:'Cormorant Garamond',serif;font-size:clamp(2.6rem,6.5vw,5rem);font-weight:300;line-height:.95;letter-spacing:-.01em}
.h-name em{font-style:normal;color:var(--gold);font-weight:700}
.h-role{margin-top:.9rem;font-size:.68rem;font-weight:300;letter-spacing:.22em;color:rgba(255,255,255,.36);text-transform:uppercase}
.h-stack{margin-top:1rem;display:flex;flex-wrap:wrap;gap:.35rem}
.hbadge{font-size:.57rem;letter-spacing:.09em;text-transform:uppercase;padding:.2rem .6rem;font-weight:500;border:1px solid}
.h-avail{display:inline-flex;align-items:center;gap:.45rem;margin-top:.9rem;background:rgba(184,148,90,.1);border:1px solid rgba(184,148,90,.28);padding:.26rem .78rem;font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:var(--gold)}
.h-dot{width:5px;height:5px;border-radius:50%;background:#4caf50;animation:pulse 1.8s ease infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
.h-contacts{margin-top:1.4rem;display:flex;flex-wrap:wrap;gap:.4rem 1.5rem}
.h-contacts a,.h-contacts span{font-size:.7rem;color:rgba(255,255,255,.38);text-decoration:none;display:flex;align-items:center;gap:.4rem;transition:color .2s}
.h-contacts a:hover{color:var(--gold)}
.hs{color:rgba(184,148,90,.25)}

.cv-body{display:grid;grid-template-columns:var(--sidebar-w) 1fr}
.sb{background:var(--dark2);color:#fff;padding:2.6rem 1.8rem}
.ss{margin-bottom:2.2rem}
.sl{font-size:.55rem;letter-spacing:.4em;text-transform:uppercase;color:var(--gold);margin-bottom:1.1rem;display:flex;align-items:center;gap:.6rem}
.sl::after{content:'';flex:1;height:1px;background:rgba(184,148,90,.16)}
.pp{font-size:.77rem;line-height:1.9;color:rgba(255,255,255,.5);font-weight:300}
.pp strong{color:rgba(255,255,255,.88);font-weight:500}
.ski{margin-bottom:.9rem}
.skr{font-size:.67rem;color:rgba(255,255,255,.58);margin-bottom:5px;font-weight:300}
.skt{height:2px;background:rgba(255,255,255,.07)}
.lr{display:flex;justify-content:space-between;align-items:center;padding:.45rem 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:.73rem}
.ln{color:rgba(255,255,255,.74)}
.ll{font-size:.6rem;letter-spacing:.12em;color:var(--gold);text-transform:uppercase}
.eb{margin-bottom:1.1rem}
.et{font-size:.76rem;color:rgba(255,255,255,.82);font-weight:500;line-height:1.35}
.es2{font-size:.68rem;color:rgba(255,255,255,.3);margin-top:2px;font-style:italic}
.ep{font-size:.66rem;color:var(--gold);margin-top:3px;letter-spacing:.05em}
.ai-tool{display:flex;align-items:flex-start;gap:.6rem;margin-bottom:.9rem;padding-bottom:.9rem;border-bottom:1px solid rgba(255,255,255,.05)}
.ai-tool:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}
.ai-dot{width:6px;height:6px;border-radius:50%;background:var(--gold);flex-shrink:0;margin-top:.35rem}
.ai-name{font-size:.72rem;color:rgba(255,255,255,.8);font-weight:500;line-height:1.3}
.ai-desc{font-size:.65rem;color:rgba(255,255,255,.35);margin-top:2px;font-style:italic}

.mc{background:var(--paper);padding:2.6rem 2.8rem}
.sh{display:flex;align-items:center;gap:1rem;margin-bottom:1.8rem}
.sh h2{font-family:'Cormorant Garamond',serif;font-size:1.45rem;font-weight:400;color:var(--ink);white-space:nowrap}
.sl2{flex:1;height:1px;background:linear-gradient(90deg,var(--gold-lt),transparent)}
.sw{margin-bottom:2.4rem}
.er{display:grid;grid-template-columns:108px 1fr;gap:0 1.8rem;margin-bottom:1.8rem;padding-bottom:1.8rem;border-bottom:1px solid rgba(0,0,0,.052);position:relative}
.er:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}
.ew{font-size:.6rem;color:var(--gold);letter-spacing:.06em;line-height:1.7;padding-top:.2rem;font-weight:500;text-transform:uppercase;white-space:pre-line}
.en2{position:absolute;left:107px;top:7px;width:7px;height:7px;border-radius:50%;background:var(--gold);border:2px solid var(--paper);box-shadow:0 0 0 1px var(--gold)}
.epo{font-family:'Cormorant Garamond',serif;font-size:1.08rem;font-weight:600;color:var(--ink);line-height:1.2;margin-bottom:2px}
.eco{font-size:.63rem;color:var(--muted);letter-spacing:.15em;text-transform:uppercase;margin-bottom:2px}
.esc{font-size:.6rem;color:var(--gold);letter-spacing:.1em;text-transform:uppercase;margin-bottom:.6rem;font-style:italic}
.epills{display:flex;flex-wrap:wrap;gap:.28rem;margin-bottom:.6rem}
.epill{font-size:.54rem;letter-spacing:.08em;text-transform:uppercase;padding:.17rem .48rem;font-weight:500;border:1px solid}
.eu{list-style:none}
.eu li{font-size:.75rem;color:#575757;line-height:1.82;padding-left:1rem;position:relative;margin-bottom:.08rem}
.eu li::before{content:'—';position:absolute;left:0;color:var(--gold);font-size:.65rem}
.tags{display:flex;flex-wrap:wrap;gap:.38rem}
.tag{font-size:.58rem;letter-spacing:.09em;text-transform:uppercase;padding:.26rem .68rem;border:1px solid var(--gold-lt);color:var(--muted);transition:all .17s;cursor:default}
.tag:hover{background:var(--gold);color:#fff;border-color:var(--gold)}
.tag-hi{background:rgba(184,148,90,.09);border-color:rgba(184,148,90,.38);color:var(--accent);font-weight:500}
.tag-az{background:rgba(0,120,212,.07);border-color:rgba(0,120,212,.28);color:#0078d4}.tag-az:hover{background:#0078d4;color:#fff;border-color:#0078d4}
.tag-git{background:rgba(232,80,45,.07);border-color:rgba(232,80,45,.22);color:#c0401a}.tag-git:hover{background:#e8502d;color:#fff;border-color:#e8502d}
.tag-ai{background:rgba(16,163,127,.08);border-color:rgba(16,163,127,.28);color:#0d9e7a}.tag-ai:hover{background:#10a37f;color:#fff;border-color:#10a37f}
.tag-wa{background:rgba(37,211,102,.08);border-color:rgba(37,211,102,.28);color:#1a9e4a}.tag-wa:hover{background:#25d366;color:#fff;border-color:#25d366}

.cvf{background:var(--dark);padding:.9rem 3rem;display:flex;align-items:center;justify-content:center;gap:2rem}
.fl{flex:1;height:1px;background:rgba(184,148,90,.2)}
.ft{font-size:.58rem;letter-spacing:.28em;text-transform:uppercase;color:rgba(255,255,255,.16)}

@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
.fu{opacity:0;animation:fadeUp .7s cubic-bezier(.16,1,.3,1) forwards}
.d1{animation-delay:.05s}.d2{animation-delay:.12s}.d3{animation-delay:.2s}.d4{animation-delay:.28s}.d5{animation-delay:.36s}
.lf{transition:opacity .22s ease}.lf.out{opacity:0}

@media(max-width:800px){
  .h-wm{display:none}
  .hero{padding:5rem 1.5rem 2.5rem;min-height:auto}
  .cv-body{grid-template-columns:1fr}
  .sb{padding:2rem 1.5rem}
  .mc{padding:2rem 1.5rem}
  .er{grid-template-columns:1fr;gap:.25rem}
  .en2{display:none}
}
@media(max-width:520px){.nav-name{display:none}}
@media print{
  .nav{display:none!important}
  body{padding-top:0!important}
  .fu{opacity:1!important;animation:none!important}
  .lf{opacity:1!important}
  .h-dot{animation:none!important}
  @page{margin:0;size:A4}
}
`;

// ── Componente principal ──────────────────────────────────────
export default function App() {
  const [lang, setLang]     = useState("es");
  const [filled, setFilled] = useState(false);
  const [fading, setFading] = useState(false);
  const t = i18n[lang];

  useEffect(() => {
    const id = setTimeout(() => setFilled(true), 500);
    return () => clearTimeout(id);
  }, []);

  const switchLang = (l) => {
    if (l === lang) return;
    setFading(true);
    setTimeout(() => { setLang(l); setFading(false); }, 210);
  };

  const barStyle = (bar, pct) => {
    const [c1, c2] = barGrad[bar] || barGrad.def;
    return {
      width: filled ? `${pct}%` : "0%",
      height: "100%",
      background: `linear-gradient(90deg,${c1},${c2})`,
      transition: "width 1.4s cubic-bezier(.16,1,.3,1)",
    };
  };

  return (
    <>
      <style>{css}</style>
      <div style={{ paddingTop: 52 }}>

        {/* NAV */}
        <nav className="nav">
          <span className="nav-name">Pedro J. Acosta M.</span>
          <div className="nav-r">
            <div className="lsw">
              {["es","en","pt"].map(l => (
                <button key={l} className={`lb${lang===l?" on":""}`} onClick={() => switchLang(l)}>
                  {i18n[l].label}
                </button>
              ))}
            </div>
            <button className="dlb" onClick={() => window.print()}>⬇ {t.nav.download}</button>
          </div>
        </nav>

        <div className={`lf${fading?" out":""}`}>

          {/* HERO */}
          <div className="hero">
            <div className="h-grain"/><div className="h-tl"/>
            <div className="h-wm">PA</div>
            <div className="h-ey fu d1">{t.eyebrow}</div>
            <h1 className="h-name fu d2">Pedro J.<br/><em>Acosta</em> Mereles</h1>
            <p className="h-role fu d3">{t.role}</p>
            <div className="h-stack fu d3">
              {heroLabels[lang].map(([type, label]) => (
                <span key={label} className="hbadge" style={{ borderColor: badgeBorder[type], color: badgeColor[type] }}>
                  {label}
                </span>
              ))}
            </div>
            <div className="fu d4">
              <div className="h-avail"><span className="h-dot"/>{t.available}</div>
            </div>
            <div className="h-contacts fu d5">
              <a href="mailto:pedro-me1@hotmail.com">✉ pedro-me1@hotmail.com</a>
              <span className="hs">·</span>
              <span>📞 0984 117 678</span>
              <span className="hs">·</span>
              <span>📍 Asunción, Paraguay</span>
              <span className="hs">·</span>
              <a href="https://www.linkedin.com/in/pedro-acosta-011b48100/" target="_blank" rel="noreferrer">in LinkedIn</a>
              <span className="hs">·</span>
              <a href="https://acostapedroacosta.wixsite.com/porfolio-pedroam" target="_blank" rel="noreferrer">🌐 Portfolio</a>
            </div>
          </div>

          {/* BODY */}
          <div className="cv-body">

            {/* SIDEBAR */}
            <aside className="sb">
              <div className="ss fu d2">
                <div className="sl">{t.nav.profile}</div>
                <p className="pp" dangerouslySetInnerHTML={{ __html: t.profile }}/>
              </div>
              <div className="ss fu d3">
                <div className="sl">{t.nav.tech}</div>
                {skillBars.map(s => (
                  <div className="ski" key={s.name}>
                    <div className="skr">{s.name}</div>
                    <div className="skt"><div style={barStyle(s.bar, s.pct)}/></div>
                  </div>
                ))}
              </div>
              <div className="ss fu d3">
                <div className="sl">{t.nav.ai}</div>
                {t.aiTools.map((tool, i) => (
                  <div className="ai-tool" key={i}>
                    <div className="ai-dot"/>
                    <div>
                      <div className="ai-name">{tool.name}</div>
                      <div className="ai-desc">{tool.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ss fu d4">
                <div className="sl">{t.nav.languages}</div>
                {langNames[lang].map((l, i) => (
                  <div className="lr" key={l}>
                    <span className="ln">{l}</span>
                    <span className="ll">{t.langLevels[i]}</span>
                  </div>
                ))}
              </div>
              <div className="ss fu d5">
                <div className="sl">{t.nav.education}</div>
                {t.education.map((e, i) => (
                  <div className="eb" key={i}>
                    <div className="et">{e.t}</div>
                    <div className="es2">{e.s}</div>
                    <div className="ep">{e.p}</div>
                  </div>
                ))}
              </div>
            </aside>

            {/* MAIN */}
            <main className="mc">
              <div className="sw fu d2">
                <div className="sh"><h2>{t.nav.experience}</h2><div className="sl2"/></div>
                {t.experience.map((e, i) => (
                  <div className="er" key={i}>
                    <div className="ew">{e.when}</div>
                    <div className="en2"/>
                    <div>
                      <div className="epo">{e.role}</div>
                      <div className="eco">{e.co}</div>
                      <div className="esc">{e.sector}</div>
                      <div className="epills">
                        {e.pills.map(([type, label], j) => (
                          <span key={j} className="epill" style={{ color: pillColor[type], background: pillBg[type], borderColor: pillColor[type]+"55" }}>
                            {label}
                          </span>
                        ))}
                      </div>
                      <ul className="eu">
                        {e.items.map((item, j) => <li key={j}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="sw fu d4">
                <div className="sh"><h2>{t.competenciesTitle}</h2><div className="sl2"/></div>
                <div className="tags">
                  {t.tags.map(tag => <span className={tagCls(tag)} key={tag}>{tag}</span>)}
                </div>
              </div>
            </main>
          </div>

          {/* FOOTER */}
          <div className="cvf">
            <div className="fl"/>
            <span className="ft">{t.footer}</span>
            <div className="fl"/>
          </div>

        </div>
      </div>
    </>
  );
}
