/* ============================================================
   BORA Brandbook — Part 1
   Cover · Sumário · A Marca · Logotipo · Versões · Proteção & usos
   ============================================================ */
const DS = window.BoraDesignSystem_24e027;
const { Eyebrow, Tag, Badge } = DS;

const L = {
  full:   "assets/brand-kit/logo/bora-lockup-horizontal-color.png",
  navy:   "assets/brand-kit/logo/bora-lockup-horizontal-navy.png",
  orange: "assets/brand-kit/logo/bora-lockup-horizontal-orange.png",
  white:  "assets/brand-kit/logo/bora-lockup-horizontal-white.png",
  stacked: "assets/brand-kit/logo/bora-lockup-stacked-color.png",
  stackedWhite: "assets/brand-kit/logo/bora-lockup-stacked-white.png",
};
const M = {
  full:   "assets/brand-kit/logo/bora-mark-color.png",
  navy:   "assets/brand-kit/logo/bora-mark-navy.png",
  orange: "assets/brand-kit/logo/bora-mark-orange.png",
  white:  "assets/brand-kit/logo/bora-mark-white.png",
  amber:  "assets/logo-versions/bora-mark-amber.png",
};

/* ---- shared section header ---- */
function SecHead({ n, eyebrow, title, lead, onDark }) {
  return (
    <div>
      <div className="sec-head">
        <span className="sec-num">{n}</span>
        <Eyebrow tone={onDark ? "onDark" : "brand"}>{eyebrow}</Eyebrow>
      </div>
      <h2 className="sec-title">{title}</h2>
      {lead && <p className="sec-lead">{lead}</p>}
    </div>
  );
}

/* =====================  0 · COVER  ===================== */
function Cover() {
  return (
    <section className="page page--navy-deep grainband cover" id="cover">
      <div className="cover__wm" aria-hidden="true">BO<br/>RA</div>
      <div className="cover__top">
        <img className="cover__mark" src={M.full} alt="Marca Bora" />
        <div className="cover__meta">
          Identidade Visual<br/>Edição 2026<br/>v1.0
        </div>
      </div>
      <div>
        <h1 className="cover__title">Brand<span className="accent">book</span></h1>
        <p className="cover__sub">O guia da marca Bora — consultoria em gestão de projetos que funciona de verdade.</p>
        <div className="cover__rule">
          <span className="seg" style={{ background: "var(--navy-400)", width: 280 }}></span>
          <span className="seg" style={{ background: "var(--cream)", width: 116 }}></span>
          <span className="seg" style={{ background: "var(--orange-500)", width: 46 }}></span>
          <span className="seg" style={{ background: "var(--amber-500)", width: 24 }}></span>
          <span className="seg" style={{ background: "var(--green-500)", width: 24 }}></span>
        </div>
      </div>
    </section>
  );
}

/* =====================  1 · SUMÁRIO  ===================== */
const TOC = [
  ["01", "A marca", "#marca"],
  ["02", "Logotipo", "#logo"],
  ["03", "Versões do logo", "#versoes"],
  ["04", "Proteção & usos incorretos", "#protecao"],
  ["05", "Cores", "#cores"],
  ["06", "Tipografia", "#tipografia"],
  ["07", "Voz & tom", "#voz"],
  ["08", "Textura & grão", "#textura"],
  ["09", "Iconografia", "#icones"],
  ["10", "Componentes", "#componentes"],
  ["11", "Aplicações", "#aplicacoes"],
];
function Contents() {
  return (
    <section className="page page--navy" id="sumario">
      <SecHead n="—" eyebrow="Sumário" title="O que tem aqui dentro" onDark />
      <div className="toc" style={{ marginTop: 48 }}>
        {TOC.map(([n, t, href]) => (
          <a className="toc__item" href={href} key={n}>
            <span className="toc__n">{n}</span>
            <span className="toc__t">{t}</span>
            <span className="toc__dots"></span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* =====================  2 · A MARCA  ===================== */
function Brand() {
  return (
    <section className="page page--cream" id="marca">
      <SecHead
        n="01"
        eyebrow="A marca"
        title="“Bora” é a ideia inteira."
        lead="Bora é gíria brasileira para “vamos lá, vamos fazer acontecer”. A marca existe para tornar a gestão de projetos humana, direta e energética — o oposto do azul corporativo frio que domina o setor."
      />
      <hr className="divider" />
      <div className="two">
        <div>
          <Eyebrow>Posicionamento</Eyebrow>
          <p style={{ fontSize: 19, lineHeight: 1.7, fontWeight: 300, marginTop: 14, color: "var(--text-body)" }}>
            Em 2026 a marca deixou o nome <b>I²</b> e o azul de origem para trás. O laranja queimado
            sobre o navy profundo sinaliza <b>energia, acessibilidade e ação</b> — “a cor do bora” —
            enquanto o navy mantém a autoridade. Azul é o default de 80% das consultorias; o laranja
            diferencia.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
            <Tag>PMP</Tag><Tag>Scrum</Tag><Tag>Agile</Tag>
          </div>
        </div>
        <div style={{ display: "grid", gap: 16 }}>
          <div style={{ background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: 30 }}>
            <Eyebrow>Missão</Eyebrow>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 26, lineHeight: 1.2, margin: "12px 0 0" }}>
              Ajudar times a sair do caos <span style={{ color: "var(--orange-500)" }}>›</span> e entregar com consistência.
            </p>
          </div>
          <div className="kv" style={{ gridTemplateColumns: "1fr", gap: 0 }}>
            <div className="kv__row" style={{ borderColor: "var(--border-subtle)" }}><b>De</b> <span style={{ color: "var(--text-muted)" }}>I² · azul · corporativo</span></div>
            <div className="kv__row" style={{ borderColor: "var(--border-subtle)" }}><b>Para</b> <span style={{ color: "var(--orange-600)" }}>Bora · laranja · humano</span></div>
            <div className="kv__row" style={{ borderColor: "var(--border-subtle)", borderBottom: 0 }}><b>Site</b> <span style={{ color: "var(--text-muted)" }}>boraprojetos.com</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================  2 · LOGOTIPO  ===================== */
function Logo() {
  return (
    <section className="page page--paper" id="logo">
      <SecHead
        n="02"
        eyebrow="Logotipo"
        title="A marca Bora"
        lead="O logotipo combina o B-mark — a letra B carregando uma seta amarela em forma de papel descolando, como um post-it que sobe — com o wordmark “Bora” redesenhado em Syne SemiBold, a mesma tipografia de todas as artes. O B-mark é a versão principal e funciona sozinho."
      />
      <div className="logo-hero" style={{ marginTop: 44 }}>
        <img src={L.full} alt="Logotipo Bora completo" style={{ width: 480 }} />
      </div>
      <div className="anat" style={{ marginTop: 40 }}>
        <div className="anat__art"><img src={M.full} alt="B-mark Bora" /></div>
        <div>
          <Eyebrow>Anatomia do B-mark</Eyebrow>
          <ul className="anat__list" style={{ marginTop: 14 }}>
            <li><span className="anat__k">B</span><div className="anat__v"><b>O contêiner</b><span>A letra B em Syne, sólida e amigável, dá a base de autoridade da marca.</span></div></li>
            <li><span className="anat__k">↗</span><div className="anat__v"><b>A seta ascendente</b><span>Em âmbar, é o glifo mais branded da Bora — progresso e direção (“bora →”).</span></div></li>
            <li><span className="anat__k">▟</span><div className="anat__v"><b>O peel de papel</b><span>A dobra de post-it traz a textura tátil e o tom “feito com intenção”.</span></div></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* =====================  3 · VERSÕES  ===================== */
function Versions() {
  return (
    <section className="page page--cream" id="versoes">
      <SecHead
        n="03"
        eyebrow="Versões do logo"
        title="Nas cores da marca, com e sem fundo"
        lead="O wordmark é definido em Syne SemiBold. Use a versão colorida sempre que possível. Sobre fundos cheios, recorra ao monocromático (navy, laranja ou branco knockout) para máxima legibilidade. Todas as versões existem com fundo transparente."
      />

      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, margin: "44px 0 18px" }}>Logotipo completo</h3>
      <div className="four">
        <div className="lv lv--cream"><img src={L.full} alt="" /><span className="lv__cap">Colorido · cream</span></div>
        <div className="lv lv--white"><img src={L.full} alt="" /><span className="lv__cap">Colorido · branco</span></div>
        <div className="lv lv--navy"><img src={L.white} alt="" /><span className="lv__cap">Knockout · navy</span></div>
        <div className="lv lv--orange"><img src={L.white} alt="" /><span className="lv__cap">Knockout · laranja</span></div>
      </div>
      <div className="four" style={{ marginTop: 20 }}>
        <div className="lv lv--check"><img src={L.full} alt="" /><span className="lv__cap">Colorido · sem fundo</span></div>
        <div className="lv lv--check"><img src={L.navy} alt="" /><span className="lv__cap">Navy · sem fundo</span></div>
        <div className="lv lv--check"><img src={L.orange} alt="" /><span className="lv__cap">Laranja · sem fundo</span></div>
        <div className="lv lv--navy"><img src={L.orange} alt="" /><span className="lv__cap">Laranja · navy</span></div>
      </div>

      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, margin: "48px 0 18px" }}>B-mark (ícone)</h3>
      <p className="muted" style={{ marginTop: -8, marginBottom: 20, fontSize: 15, maxWidth: 640 }}>Para favicon, avatar de redes, marca d’água e usos em espaços reduzidos.</p>
      <div className="four">
        <div className="lv lv--cream"><img style={{ width: "52%" }} src={M.full} alt="" /><span className="lv__cap">Colorido</span></div>
        <div className="lv lv--navy"><img style={{ width: "52%" }} src={M.white} alt="" /><span className="lv__cap">Knockout · navy</span></div>
        <div className="lv lv--orange"><img style={{ width: "52%" }} src={M.white} alt="" /><span className="lv__cap">Knockout · laranja</span></div>
        <div className="lv lv--check"><img style={{ width: "52%" }} src={M.navy} alt="" /><span className="lv__cap">Navy · sem fundo</span></div>
      </div>
    </section>
  );
}

/* =====================  4 · PROTEÇÃO & USOS  ===================== */
function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" opacity=".4"/>
      <path d="M9 9l6 6M15 9l-6 6"/>
    </svg>
  );
}
function Protection() {
  const misuses = [
    ["Não distorça", "Nunca estique, comprima ou incline o logotipo.", { transform: "scaleX(1.5)" }],
    ["Não recolora fora da paleta", "Cores aprovadas apenas — sem azul, sem gradientes alheios.", { filter: "hue-rotate(150deg) saturate(1.4)" }],
    ["Não aplique sombra/efeito", "Sem drop-shadow, contorno, bisel ou brilho.", { filter: "drop-shadow(0 6px 6px rgba(0,0,0,.5))" }],
  ];
  return (
    <section className="page page--paper" id="protecao">
      <SecHead n="04" eyebrow="Proteção & usos" title="Como manter o logo intacto" />
      <div className="clear" style={{ marginTop: 44 }}>
        <div>
          <Eyebrow>Área de proteção</Eyebrow>
          <p className="muted" style={{ fontSize: 15, lineHeight: 1.6, margin: "10px 0 18px", maxWidth: 420 }}>
            Reserve, em todos os lados, no mínimo a altura da seta do B-mark como espaço livre. Nada de
            texto, imagem ou borda dentro dessa margem.
          </p>
          <div className="clear__box">
            <div className="clear__inner">
              <span className="clear__pad" style={{ top: 14, left: "50%", transform: "translateX(-50%)" }}>↕</span>
              <span className="clear__pad" style={{ left: 12, top: "50%", transform: "translateY(-50%)" }}>↔</span>
              <img src={L.full} alt="" />
            </div>
          </div>
        </div>
        <div>
          <Eyebrow>Tamanho mínimo</Eyebrow>
          <p className="muted" style={{ fontSize: 15, lineHeight: 1.6, margin: "10px 0 18px", maxWidth: 360 }}>
            Abaixo destes limites, a seta perde definição. Em telas use o B-mark no lugar do logotipo completo.
          </p>
          <div className="clear__box" style={{ justifyContent: "flex-start" }}>
            <div className="minsize">
              <div className="minsize__b"><img src={L.full} style={{ width: 150 }} alt="" /><span>Logotipo · 120px mín.</span></div>
              <div className="minsize__b"><img src={M.full} style={{ width: 46 }} alt="" /><span>B-mark · 24px mín.</span></div>
            </div>
          </div>
        </div>
      </div>

      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, margin: "52px 0 20px" }}>Usos incorretos</h3>
      <div className="misuse">
        {misuses.map(([t, d, st]) => (
          <div className="misuse__c" key={t}>
            <div className="misuse__art"><img src={L.full} style={st} alt="" /></div>
            <span className="misuse__x"><IconX /> {t}</span>
            <p className="misuse__t">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { SecHead, Cover, Contents, Brand, Logo, Versions, Protection, L, M });
