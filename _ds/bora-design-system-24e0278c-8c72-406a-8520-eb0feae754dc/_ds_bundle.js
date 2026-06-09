/* @ds-bundle: {"format":3,"namespace":"BoraDesignSystem_24e027","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Avatar","sourcePath":"components/surfaces/Avatar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/surfaces/Eyebrow.jsx"},{"name":"Stat","sourcePath":"components/surfaces/Stat.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"4bc352e20b69","components/feedback/Badge.jsx":"1addbde662a4","components/feedback/Tag.jsx":"475c9e27021f","components/forms/Field.jsx":"6371f96ad3d5","components/forms/Input.jsx":"1aa5952b1fb6","components/forms/Textarea.jsx":"814f4fd66c6b","components/surfaces/Avatar.jsx":"fd6189251363","components/surfaces/Card.jsx":"6d4a396ebea1","components/surfaces/Eyebrow.jsx":"32924951b2f0","components/surfaces/Stat.jsx":"518d58441581","ui_kits/website/Contact.jsx":"e1e53cab6aac","ui_kits/website/Hero.jsx":"f48101f6800e","ui_kits/website/Method.jsx":"0a11f857feff","ui_kits/website/Nav.jsx":"01441e8f2dfa","ui_kits/website/Services.jsx":"aea824fa8ad1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BoraDesignSystem_24e027 = window.BoraDesignSystem_24e027 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BORA Button — the brand's primary action element.
 * Variants: primary (orange), secondary (navy), ghost, soft, dark-ghost.
 * Rationed orange: only ONE primary button per view, ideally.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "13px",
      gap: "7px"
    },
    md: {
      padding: "12px 22px",
      fontSize: "15px",
      gap: "8px"
    },
    lg: {
      padding: "16px 30px",
      fontSize: "17px",
      gap: "10px"
    }
  };
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-brand)"
    },
    secondary: {
      background: "var(--navy-700)",
      color: "var(--text-on-dark)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-brand)",
      border: "1px solid var(--orange-200)",
      boxShadow: "none"
    },
    soft: {
      background: "var(--brand-soft)",
      color: "var(--text-brand)",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    "dark-ghost": {
      background: "rgba(255,255,255,0.06)",
      color: "var(--text-on-dark)",
      border: "1px solid var(--border-on-dark)",
      boxShadow: "none"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    width: fullWidth ? "100%" : "auto",
    padding: sizes[size].padding,
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    fontSize: sizes[size].fontSize,
    lineHeight: 1,
    letterSpacing: "0.01em",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
    ...variants[variant]
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = "translateY(1px) scale(0.99)";
  };
  const onUp = e => {
    e.currentTarget.style.transform = "none";
  };
  const onEnter = e => {
    if (!disabled) e.currentTarget.style.filter = "brightness(0.94)";
  };
  const onLeave = e => {
    e.currentTarget.style.filter = "none";
    e.currentTarget.style.transform = "none";
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: base,
    disabled: disabled,
    onClick: onClick,
    onMouseDown: onDown,
    onMouseUp: onUp,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children, arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BORA Badge — a small pill for status / category labels.
 * Tones map to the semantic palette: brand, success (verde), warning (âmbar),
 * neutral (navy), and dark (for navy grounds).
 */
function Badge({
  children,
  tone = "brand",
  subtle = true,
  ...rest
}) {
  const tones = {
    brand: {
      solid: {
        bg: "var(--brand)",
        fg: "#fff"
      },
      soft: {
        bg: "var(--brand-soft)",
        fg: "var(--orange-700)"
      }
    },
    success: {
      solid: {
        bg: "var(--success)",
        fg: "#fff"
      },
      soft: {
        bg: "var(--success-soft)",
        fg: "var(--green-700)"
      }
    },
    warning: {
      solid: {
        bg: "var(--warning)",
        fg: "var(--navy-900)"
      },
      soft: {
        bg: "var(--warning-soft)",
        fg: "var(--amber-600)"
      }
    },
    neutral: {
      solid: {
        bg: "var(--navy-700)",
        fg: "#fff"
      },
      soft: {
        bg: "var(--surface-inset)",
        fg: "var(--text-body)"
      }
    }
  };
  const pick = tones[tone] || tones.brand;
  const c = subtle ? pick.soft : pick.solid;
  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "4px 11px",
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: "11px",
    letterSpacing: "0.02em",
    lineHeight: 1.4,
    borderRadius: "var(--radius-pill)",
    background: c.bg,
    color: c.fg,
    whiteSpace: "nowrap"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BORA Tag — a credential / metadata chip with a warm hairline.
 * Used for the matter-of-fact credentials (PMP · Scrum · Agile) and filters.
 */
function Tag({
  children,
  active = false,
  ...rest
}) {
  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "5px 13px",
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: 1.4,
    borderRadius: "var(--radius-pill)",
    background: active ? "var(--navy-700)" : "var(--surface-card)",
    color: active ? "var(--text-on-dark)" : "var(--text-body)",
    border: active ? "1px solid transparent" : "1px solid var(--border-subtle)",
    cursor: rest.onClick ? "pointer" : "default",
    whiteSpace: "nowrap"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/**
 * BORA Field — label + optional hint/error wrapper for form controls.
 */
function Field({
  label,
  hint,
  error,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: "block"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "13px",
      color: "var(--text-strong)",
      marginBottom: "7px"
    }
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "12px",
      color: error ? "var(--danger)" : "var(--text-muted)",
      marginTop: "6px"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BORA Input — text field with a warm hairline, 12px radius, soft-orange
 * focus ring. Works on light grounds.
 */
function Input({
  invalid = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const base = {
    width: "100%",
    padding: "12px 14px",
    fontFamily: "var(--font-body)",
    fontWeight: 400,
    fontSize: "15px",
    color: "var(--text-strong)",
    background: "var(--surface-card)",
    border: `1px solid ${invalid ? "var(--danger)" : focused ? "var(--brand)" : "var(--border-strong)"}`,
    borderRadius: "var(--radius-md)",
    outline: "none",
    boxShadow: focused ? "0 0 0 3px var(--focus-ring)" : "none",
    transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
    ...style
  };
  return /*#__PURE__*/React.createElement("input", _extends({
    style: base,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BORA Textarea — multiline field matching Input's styling.
 */
function Textarea({
  rows = 4,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const base = {
    width: "100%",
    padding: "12px 14px",
    fontFamily: "var(--font-body)",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: 1.6,
    color: "var(--text-strong)",
    background: "var(--surface-card)",
    border: `1px solid ${focused ? "var(--brand)" : "var(--border-strong)"}`,
    borderRadius: "var(--radius-md)",
    outline: "none",
    resize: "vertical",
    boxShadow: focused ? "0 0 0 3px var(--focus-ring)" : "none",
    transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
    ...style
  };
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    style: base,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Avatar.jsx
try { (() => {
/**
 * BORA Avatar — initials or image, in a circle. Brand-tinted by default.
 */
function Avatar({
  name = "",
  src,
  size = 40,
  tone = "brand"
}) {
  const tones = {
    brand: {
      bg: "var(--brand-soft)",
      fg: "var(--orange-700)"
    },
    navy: {
      bg: "var(--navy-700)",
      fg: "#fff"
    },
    cream: {
      bg: "var(--cream-deep)",
      fg: "var(--text-strong)"
    }
  };
  const t = tones[tone] || tones.brand;
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  const style = {
    width: size,
    height: size,
    borderRadius: "var(--radius-pill)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: size * 0.4,
    background: t.bg,
    color: t.fg,
    overflow: "hidden",
    flexShrink: 0
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style,
    title: name
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BORA Card — the workhorse container. White/cream ground, warm hairline,
 * soft navy-tinted shadow. Variants: default, feature (16px radius, raised),
 * dark (navy ground with grain), inset (cream, flat).
 */
function Card({
  children,
  variant = "default",
  grain = false,
  padding = "24px",
  style = {},
  ...rest
}) {
  const variants = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-sm)",
      color: "var(--text-body)"
    },
    feature: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      color: "var(--text-body)"
    },
    dark: {
      background: "var(--navy-700)",
      border: "1px solid var(--border-on-dark)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      color: "var(--text-on-dark)"
    },
    inset: {
      background: "var(--surface-cream)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      boxShadow: "none",
      color: "var(--text-body)"
    }
  };
  const base = {
    position: "relative",
    isolation: "isolate",
    padding,
    overflow: "hidden",
    ...variants[variant],
    ...style
  };
  const grainLayer = {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: "var(--grain-url)",
    backgroundSize: "160px 160px",
    opacity: "var(--grain-opacity)",
    mixBlendMode: "overlay",
    pointerEvents: "none",
    zIndex: 0
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base
  }, rest), grain && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: grainLayer
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Eyebrow.jsx
try { (() => {
/**
 * BORA Eyebrow — the uppercase, wide-tracked label that sits above headings.
 * Orange by default; pass tone="muted" or "onDark" to fit the ground.
 */
function Eyebrow({
  children,
  tone = "brand"
}) {
  const colors = {
    brand: "var(--text-brand)",
    muted: "var(--text-muted)",
    onDark: "var(--amber-500)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "11px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: colors[tone] || colors.brand
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Stat.jsx
try { (() => {
/**
 * BORA Stat — a big Syne metric with a label. Used in result strips
 * ("do caos à entrega"). Optional accent colours the number.
 */
function Stat({
  value,
  label,
  accent = "navy",
  align = "left"
}) {
  const accents = {
    navy: "var(--text-strong)",
    brand: "var(--brand)",
    success: "var(--success)",
    onDark: "var(--amber-500)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "44px",
      lineHeight: 1,
      letterSpacing: "0.01em",
      color: accents[accent] || accents.navy
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "13px",
      lineHeight: 1.4,
      color: accent === "onDark" ? "var(--text-on-dark-mut)" : "var(--text-muted)",
      marginTop: "8px",
      maxWidth: "200px",
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Stat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
// BORA marketing site — contact CTA + footer.
const {
  Eyebrow,
  Field,
  Input,
  Textarea,
  Button
} = window.BoraDesignSystem_24e027;
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: "88px 40px",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Bora conversar"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      color: "var(--text-strong)",
      letterSpacing: "0.01em",
      margin: "14px 0 18px"
    }
  }, "Onde est\xE1 o caos do seu time?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.7,
      color: "var(--text-body)",
      margin: 0,
      maxWidth: 380
    }
  }, "Conte rapidamente sobre o projeto. A gente responde em at\xE9 1 dia \xFAtil com um pr\xF3ximo passo concreto \u2014 sem proposta gen\xE9rica.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "30px 30px",
      boxShadow: "var(--shadow-md)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "30px 6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      color: "var(--brand)",
      marginBottom: 10
    }
  }, "Bora! \u2192"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      color: "var(--text-body)",
      margin: 0
    }
  }, "Recebemos sua mensagem. Em breve a gente se fala.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome",
    htmlFor: "cn"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cn",
    placeholder: "Como podemos te chamar?",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail",
    htmlFor: "ce"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ce",
    type: "email",
    placeholder: "voce@empresa.com.br",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Onde est\xE1 o caos?",
    htmlFor: "cm"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "cm",
    rows: 3,
    placeholder: "Conte rapidamente sobre o projeto\u2026"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    fullWidth: true,
    type: "submit"
  }, "Enviar mensagem"))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--navy-900)",
      color: "var(--navy-200)",
      padding: "44px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/bora-mark.png",
    alt: "Bora",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 18,
      letterSpacing: "0.04em",
      color: "#fff"
    }
  }, "BORA")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: 13
    }
  }, "Consultoria em Gest\xE3o de Projetos \xB7 S\xE3o Paulo, BR"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: 13
    }
  }, "\xA9 2026 Bora \xB7 oi@bora.com.br"))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// BORA marketing site — hero. Navy ground + grain + ghost watermark.
const {
  Button,
  Tag
} = window.BoraDesignSystem_24e027;
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "grain",
    style: {
      position: "relative",
      isolation: "isolate",
      overflow: "hidden",
      background: "var(--navy-700)",
      color: "var(--text-on-dark)",
      padding: "96px 40px 104px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "-3%",
      bottom: "-14%",
      zIndex: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 360,
      lineHeight: 0.8,
      color: "rgba(255,255,255,0.035)",
      letterSpacing: "0.02em",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, "BORA"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 920,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--amber-500)",
      marginBottom: 22
    }
  }, "Consultoria em Gest\xE3o de Projetos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      color: "#fff",
      fontSize: 64,
      lineHeight: 1.04,
      letterSpacing: "0.01em",
      margin: "0 0 22px"
    }
  }, "Gest\xE3o de projetos", /*#__PURE__*/React.createElement("br", null), "que funciona ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand)"
    }
  }, "de verdade"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1.7,
      color: "var(--navy-200)",
      maxWidth: 600,
      margin: "0 auto 34px"
    }
  }, "A Bora ajuda times a sair do caos e entregar com consist\xEAncia \u2014 clareza, estrutura e execu\xE7\xE3o real, sem jarg\xE3o corporativo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: () => onNav("contact")
  }, "Bora come\xE7ar"), /*#__PURE__*/React.createElement(Button, {
    variant: "dark-ghost",
    size: "lg",
    onClick: () => onNav("method")
  }, "Ver o m\xE9todo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "PMP"), /*#__PURE__*/React.createElement(Tag, null, "Scrum"), /*#__PURE__*/React.createElement(Tag, null, "Agile"), /*#__PURE__*/React.createElement(Tag, null, "OKRs"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Method.jsx
try { (() => {
// BORA marketing site — the method / process section (light ground).
const {
  Eyebrow
} = window.BoraDesignSystem_24e027;
function Method() {
  const steps = [["01", "Diagnóstico", "Mapeamos onde o projeto trava — pessoas, processo e prioridades. Sem achismo."], ["02", "Estrutura", "Desenhamos o ritual mínimo viável: cadência, papéis e um plano que cabe na realidade do time."], ["03", "Execução", "Acompanhamos de perto, ajustamos o que precisa. O time entrega — e aprende a manter o ritmo."], ["04", "Autonomia", "Saímos quando o time anda sozinho. O método fica; o resultado se repete."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "method",
    style: {
      padding: "88px 40px",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "O m\xE9todo Bora"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 42,
      color: "var(--text-strong)",
      letterSpacing: "0.01em",
      margin: "14px 0 0"
    }
  }, "Do caos \xE0 entrega, em quatro passos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, steps.map(([n, title, body]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "26px 24px",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 15,
      color: "var(--brand)",
      letterSpacing: "0.06em",
      marginBottom: 16
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      color: "var(--text-strong)",
      margin: "0 0 10px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: 0
    }
  }, body))))));
}
window.Method = Method;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Method.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// BORA marketing site — top navigation bar.
const {
  Button
} = window.BoraDesignSystem_24e027;
function Nav({
  onNav,
  active
}) {
  const links = [["method", "Método"], ["services", "O que fazemos"], ["results", "Resultados"], ["contact", "Contato"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 40px",
      background: "rgba(250,247,242,0.86)",
      backdropFilter: "saturate(180%) blur(10px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNav("top");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/bora-mark.png",
    alt: "Bora",
    style: {
      height: 30,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: "0.04em",
      color: "var(--brand)"
    }
  }, "BORA")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#" + id,
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: active === id ? 600 : 400,
      fontSize: 14,
      color: active === id ? "var(--text-brand)" : "var(--text-body)",
      textDecoration: "none",
      cursor: "pointer"
    }
  }, label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    arrow: true,
    onClick: () => onNav("contact")
  }, "Bora conversar")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
// BORA marketing site — services grid + results strip (navy band).
const {
  Eyebrow,
  Stat,
  Badge
} = window.BoraDesignSystem_24e027;
function Services() {
  const items = [["Diagnóstico de projetos", "Uma leitura honesta de onde o projeto está e por que trava.", "Em foco"], ["Implantação de cadência", "Rituais, papéis e ferramentas que o time realmente usa.", "Popular"], ["Gestão de portfólio", "Prioridade clara entre iniciativas — foco no que move o ponteiro.", null], ["Mentoria de líderes", "Capacitação prática para quem toca a operação no dia a dia.", null], ["PMO sob medida", "Estrutura de governança proporcional ao tamanho do time.", null], ["Recuperação de projetos", "Quando já está em risco: estancar, reorganizar e entregar.", "Resgate"]];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      padding: "88px 40px",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "O que fazemos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 42,
      color: "var(--text-strong)",
      letterSpacing: "0.01em",
      margin: "14px 0 0"
    }
  }, "Servi\xE7os que cabem na sua realidade")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, items.map(([title, body, tag]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      background: "var(--surface-page)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      padding: "26px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      color: "var(--amber-500)"
    }
  }, "\u2192"), tag && /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 19,
      color: "var(--text-strong)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: 0
    }
  }, body)))))), /*#__PURE__*/React.createElement("section", {
    id: "results",
    className: "grain",
    style: {
      position: "relative",
      isolation: "isolate",
      overflow: "hidden",
      background: "var(--navy-700)",
      padding: "72px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 1080,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark"
  }, "Resultados"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 36,
      color: "#fff",
      letterSpacing: "0.01em",
      margin: "14px 0 0"
    }
  }, "O que muda quando o caos vira ritmo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24,
      justifyItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "100%",
    label: "Entregas no prazo ap\xF3s implanta\xE7\xE3o",
    accent: "onDark",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "3x",
    label: "Mais previsibilidade nas entregas",
    accent: "onDark",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "-40%",
    label: "Retrabalho em projetos cr\xEDticos",
    accent: "onDark",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "+120",
    label: "Times destravados desde 2019",
    accent: "onDark",
    align: "center"
  })))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Stat = __ds_scope.Stat;

})();
