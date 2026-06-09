/* ============================================================
   BORA · Brand Kit — interactive download page
   ============================================================ */
const KDS = window.BoraDesignSystem_24e027;
const { Eyebrow: KEye, Tag: KTag, Button: KBtn } = KDS;

const KIT = "assets/brand-kit/";
const DLIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v12M7 11l5 5 5-5M5 21h14" />
  </svg>
);

/* one downloadable asset tile */
function Asset({ src, stage, name, fmt, href, imgStyle }) {
  return (
    <div className="asset">
      <div className={"asset__stage stage--" + stage}>
        <img src={src} alt={name} style={imgStyle} />
      </div>
      <div className="asset__bar">
        <div className="asset__meta">
          <div className="asset__name">{name}</div>
          <div className="asset__fmt">{fmt}</div>
        </div>
        <a className="dl" href={href} download><DLIcon /> Baixar</a>
      </div>
    </div>
  );
}

function SectionHead({ n, eyebrow, title, lead, right }) {
  return (
    <div className="kit-head">
      <div>
        <KEye>{n} · {eyebrow}</KEye>
        <h2>{title}</h2>
        {lead && <p>{lead}</p>}
      </div>
      {right}
    </div>
  );
}

/* ---------------- LOGO ---------------- */
function LogoSection() {
  const L = KIT + "logo/";
  return (
    <section className="kit" id="logo">
      <div className="wrap">
        <SectionHead n="01" eyebrow="Logotipo" title="Logo, agora em Syne"
          lead="O wordmark foi redesenhado na tipografia da marca — Syne ExtraBold, a mesma de todas as artes. A marca (o B-mark) é a versão principal e funciona sozinha; o lockup com texto entra quando há espaço." />

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
          <KTag>PNG transparente</KTag><KTag>300+ dpi</KTag><KTag>Cor · Navy · Branco · Laranja</KTag>
        </div>

        <div className="subhead">Marca (principal · sem texto)</div>
        <div className="grid g4">
          <Asset src={L+"bora-mark-color.png"}  stage="check"  name="Marca · colorida"  fmt="PNG · 512px" href={L+"bora-mark-color.png"} imgStyle={{maxWidth:"58%"}} />
          <Asset src={L+"bora-mark-white.png"}  stage="navy"   name="Marca · branca"    fmt="PNG · 512px" href={L+"bora-mark-white.png"} imgStyle={{maxWidth:"58%"}} />
          <Asset src={L+"bora-mark-orange.png"} stage="cream"  name="Marca · laranja"   fmt="PNG · 512px" href={L+"bora-mark-orange.png"} imgStyle={{maxWidth:"58%"}} />
          <Asset src={L+"bora-mark-navy.png"}   stage="cream"  name="Marca · navy"      fmt="PNG · 512px" href={L+"bora-mark-navy.png"} imgStyle={{maxWidth:"58%"}} />
        </div>

        <div className="subhead">Lockup horizontal (com texto)</div>
        <div className="grid g2">
          <Asset src={L+"bora-lockup-horizontal-color.png"} stage="cream"  name="Horizontal · cor"    fmt="PNG transparente" href={L+"bora-lockup-horizontal-color.png"} />
          <Asset src={L+"bora-lockup-horizontal-white.png"} stage="navy"   name="Horizontal · branco" fmt="PNG transparente" href={L+"bora-lockup-horizontal-white.png"} />
          <Asset src={L+"bora-lockup-horizontal-navy.png"}  stage="white"  name="Horizontal · navy"   fmt="PNG transparente" href={L+"bora-lockup-horizontal-navy.png"} />
          <Asset src={L+"bora-lockup-horizontal-orange.png"} stage="navy"  name="Horizontal · laranja" fmt="PNG transparente" href={L+"bora-lockup-horizontal-orange.png"} />
        </div>

        <div className="subhead">Lockup empilhado</div>
        <div className="grid g2">
          <Asset src={L+"bora-lockup-stacked-color.png"} stage="cream" name="Empilhado · cor"    fmt="PNG transparente" href={L+"bora-lockup-stacked-color.png"} imgStyle={{maxHeight:"82%"}} />
          <Asset src={L+"bora-lockup-stacked-white.png"} stage="navy"  name="Empilhado · branco" fmt="PNG transparente" href={L+"bora-lockup-stacked-white.png"} imgStyle={{maxHeight:"82%"}} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAVICON ---------------- */
function FaviconSection() {
  const F = KIT + "favicon/";
  return (
    <section className="kit" id="favicon">
      <div className="wrap">
        <SectionHead n="02" eyebrow="Favicons & ícones de app" title="Para abas, atalhos e apps"
          lead="A marca em tamanhos prontos: favicons transparentes para o site e ícones de cantos arredondados sobre navy para iOS/Android e PWA." />

        <div className="fav-mock" style={{ marginBottom: 32 }}>
          <div className="fav-tab"><img src={F+"favicon-32.png"} alt="" /> borapm.com.br</div>
        </div>

        <div className="grid g4">
          <Asset src={F+"favicon-16.png"} stage="white" name="favicon 16" fmt="PNG · 16px" href={F+"favicon-16.png"} imgStyle={{width:16,maxWidth:16}} />
          <Asset src={F+"favicon-32.png"} stage="white" name="favicon 32" fmt="PNG · 32px" href={F+"favicon-32.png"} imgStyle={{width:32,maxWidth:32}} />
          <Asset src={F+"favicon-48.png"} stage="white" name="favicon 48" fmt="PNG · 48px" href={F+"favicon-48.png"} imgStyle={{width:48,maxWidth:48}} />
          <Asset src={F+"apple-touch-icon-180.png"} stage="cream" name="apple-touch 180" fmt="PNG · 180px" href={F+"apple-touch-icon-180.png"} imgStyle={{width:90,maxWidth:90}} />
          <Asset src={F+"app-icon-192.png"} stage="cream" name="app icon 192" fmt="PNG · 192px" href={F+"app-icon-192.png"} imgStyle={{width:96,maxWidth:96}} />
          <Asset src={F+"app-icon-512.png"} stage="cream" name="app icon 512" fmt="PNG · 512px" href={F+"app-icon-512.png"} imgStyle={{width:120,maxWidth:120}} />
        </div>
        <p className="note" style={{ marginTop: 22 }}>
          No <code>&lt;head&gt;</code> do site: <code>&lt;link rel="icon" href="favicon-32.png"&gt;</code> e <code>&lt;link rel="apple-touch-icon" href="apple-touch-icon-180.png"&gt;</code>.
        </p>
      </div>
    </section>
  );
}

/* ---------------- ICONS ---------------- */
const ICON_NAMES = ["bora-arrow","arrow-right","target","layers","calendar-check","users","check-circle","compass","trending-up","clipboard-list","message"];
function IconsSection() {
  const I = KIT + "icons/";
  return (
    <section className="kit" id="icones">
      <div className="wrap">
        <SectionHead n="03" eyebrow="Iconografia" title="Ícones de UI · estilo Lucide"
          lead="Conjunto outline de traço 1.5–2px que combina com Syne e DM Sans. A seta é o glifo da marca. Clique para baixar o SVG (recolorível via currentColor)." />
        <div className="icons-grid">
          {ICON_NAMES.map((n) => (
            <a className="icon-cell" key={n} href={I+n+".svg"} download>
              <span className="icon-cell__dl">SVG ↓</span>
              <img src={I+n+".svg"} alt={n} />
              <span>{n}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- APPLICATIONS ---------------- */
function AppSection() {
  const S = KIT + "social/", E = KIT + "email/", P = KIT + "social/posts/";
  const PILLARS = [
    { key: "edu", nm: "Educação em GP", pc: "var(--amber-500)", ds: "Conceitos e frameworks que ensinam." },
    { key: "pos", nm: "Posicionamento", pc: "var(--orange-500)", ds: "A visão e as opiniões da Bora." },
    { key: "hum", nm: "Humanização", pc: "var(--coral)", ds: "Histórias, bastidores e a marca." },
    { key: "cas", nm: "Caso & Aplicação", pc: "var(--green-500)", ds: "Casos reais e aplicação prática." },
  ];
  return (
    <section className="kit" id="aplicacoes">
      <div className="wrap">
        <SectionHead n="04" eyebrow="Aplicações" title="Modelos prontos pra usar"
          lead="Modelos já montados no sistema da marca — é só baixar, editar o texto (e trocar a imagem, quando houver) e publicar." />

        {/* Banner de perfil */}
        <div className="subhead">Banner de perfil · LinkedIn <span className="dim">(1584 × 396)</span></div>
        <div className="app-full">
          <img src={S+"linkedin-banner-1584x396.png"} alt="Banner LinkedIn Bora" />
        </div>
        <div style={{ marginTop: 14 }}>
          <a className="dl" href={S+"linkedin-banner-1584x396.png"} download><DLIcon/> Baixar banner (PNG)</a>
        </div>

        {/* Modelos de post, por pilar */}
        <div className="subhead" style={{ marginTop: 52 }}>Modelos de post · LinkedIn <span className="dim">(1080 × 1080)</span></div>
        <p className="note" style={{ marginTop: -4, marginBottom: 26 }}>
          Dois modelos por pilar de comunicação do calendário editorial — um <b>só com texto</b> (título + subtítulo) e outro com <b>campo de imagem</b>. Coerentes entre si, diferenciados pela cor de cada pilar.
        </p>
        {PILLARS.map((p) => (
          <div className="pillar-group" key={p.key}>
            <div className="pillar-head">
              <span className="dot" style={{ background: p.pc }}></span>
              <span className="nm">{p.nm}</span>
              <span className="ds">{p.ds}</span>
            </div>
            <div className="grid g2">
              <Asset src={P+p.key+"-texto.png"} stage="post" name="Só texto" fmt="PNG · 1080² · título + subtítulo" href={P+p.key+"-texto.png"} />
              <Asset src={P+p.key+"-imagem.png"} stage="post" name="Texto + imagem" fmt="PNG · 1080² · com campo de imagem" href={P+p.key+"-imagem.png"} />
            </div>
          </div>
        ))}

        <div className="postcta">
          <div>
            <div className="postcta__t">Quer os posts já preenchidos com o conteúdo do calendário?</div>
            <div className="postcta__d">32 propostas (jun–ago) montadas nos modelos — com data, pilar e legenda, editáveis e baixáveis em PNG, JPEG e HTML.</div>
          </div>
          <a className="dl dl--solid" href="Propostas de Posts Bora.html" target="_blank" rel="noopener">Abrir propostas de posts ›</a>
        </div>

        {/* Assinatura */}
        <div className="subhead" style={{ marginTop: 52 }}>Assinatura de e-mail</div>
        <div className="email-card" style={{ maxWidth: 640 }}>
          <div className="email-prev">
            <div className="sig-render">
              <div className="sig-row">
                <img className="sig-mark" src={KIT+"logo/bora-mark-color.png"} alt="Bora" />
                <div className="sig-div"></div>
                <div>
                  <div className="sig-name">Paula Balduino</div>
                  <div className="sig-role">Comunicação &amp; Marketing · Bora</div>
                  <div className="sig-contact">
                    <b>borapm.com.br</b> · paula@borapm.com.br<br/>
                    WhatsApp · (11) 9 9999-9999<br/>
                    Gestão de projetos · PMP · Scrum · Agile
                  </div>
                </div>
              </div>
              <a className="sig-btn" href="#">Bora conversar ›</a>
            </div>
          </div>
          <div className="asset__bar">
            <div className="asset__meta">
              <div className="asset__name">Assinatura HTML</div>
              <div className="asset__fmt">marca embutida · cole no Gmail/Outlook</div>
            </div>
            <a className="dl" href={E+"assinatura-bora.html"} download><DLIcon/> Baixar HTML</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRESENTATION ---------------- */
function PresentationSection() {
  const P = KIT + "slides/";
  const slides = [
    ["slide-titulo.png", "Capa · navy", "Abertura com logotipo e headline"],
    ["slide-conteudo.png", "Conteúdo · cream", "Tópicos com bullets e descrição"],
    ["slide-citacao.png", "Citação · laranja", "Frase de impacto em campo de cor"],
    ["slide-stats.png", "Resultado · navy", "Métricas grandes em Syne"],
  ];
  return (
    <section className="kit" id="apresentacao">
      <div className="wrap">
        <SectionHead n="05" eyebrow="Apresentação" title="Modelos de slides 16:9"
          lead="Quatro layouts prontos no sistema da marca — capa, conteúdo, citação e resultado. Abra a apresentação editável (HTML; vira PDF com Cmd/Ctrl + P) ou baixe cada slide como imagem."
          right={<a className="dl dl--solid" href="Apresentação Bora.html" target="_blank" rel="noopener">Abrir apresentação ›</a>} />
        <div className="grid g2">
          {slides.map(([f, name, desc]) => (
            <div className="asset" key={f}>
              <div className="asset__stage stage--wide"><img src={P + f} alt={name} /></div>
              <div className="asset__bar">
                <div className="asset__meta">
                  <div className="asset__name">{name}</div>
                  <div className="asset__fmt">PNG · 1920×1080 · {desc}</div>
                </div>
                <a className="dl" href={P + f} download><DLIcon /> Baixar</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAGE ---------------- */
function BrandKit() {
  return (
    <div>
      <header className="kit-top">
        <div className="grain-x"></div>
        <div className="kit-top__ghost">BORA</div>
        <div className="wrap kit-top__inner">
          <div>
            <img className="kit-top__mark" src={KIT+"logo/bora-mark-color.png"} alt="Bora" />
            <h1>Media Kit<span className="dot">.</span></h1>
            <p>Logos, favicons, ícones, modelos e apresentações da marca Bora — prontos para baixar e usar.</p>
          </div>
          <KBtn variant="primary" arrow onClick={() => window.scrollTo({ top: document.getElementById('logo').offsetTop - 60, behavior: 'smooth' })}>
            Ver os arquivos
          </KBtn>
        </div>
      </header>

      <nav className="kit-nav">
        <div className="wrap kit-nav__inner">
          <a href="#logo">Logotipo</a>
          <a href="#favicon">Favicons</a>
          <a href="#icones">Ícones</a>
          <a href="#aplicacoes">Aplicações</a>
          <a href="#apresentacao">Apresentação</a>
          <a href="Propostas de Posts Bora.html">Propostas</a>
        </div>
      </nav>

      <LogoSection />
      <FaviconSection />
      <IconsSection />
      <AppSection />
      <PresentationSection />

      <footer className="kit-foot">
        <div className="wrap">
          <div className="big">Bora<span className="dot">.</span></div>
          <p>Vamos resolver isso juntos. · borapm.com.br</p>
        </div>
      </footer>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<BrandKit />);
