(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('.product-details-custom{display:grid!important;grid-template:"product-title" "carousel"}.product-details-custom>div.full-height{height:100vh}.product-details-custom>*:not(.product-detail-carousel){padding:8px 25px 25px}.product-details-custom .product-detail-description{font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing)}.product-details-custom .product-detail-description h3{margin:0 0 16px}.product-details-custom .product-detail-description ul{margin:1.6rem 0;padding:0 0 0 38px}.product-details-custom .product-detail-description ul li{margin:0 0 16px}.product-details-custom .product-title h1{font:var(--type-headline-1-font);letter-spacing:var(--type-headline-1-letter-spacing);margin:0 0 16px}.product-details-custom .sidebar-section{border-bottom:1px solid #c2c2c2;padding:0 0 2rem;margin:0 0 2rem}.product-details-custom .sidebar-section:last-child{margin:0}.product-details-custom .sidebar-section .social-links{margin:2rem 0 0;display:grid;justify-content:center;text-align:center;gap:16px 0;grid-template:"favorites favorites" "email help" /1fr 1fr}.product-details-custom .sidebar-section .social-links .favorites{grid-area:favorites}.product-details-custom .sidebar-section .social-links .email{grid-area:email}.product-details-custom .sidebar-section .social-links .help{grid-area:help}.product-details-custom .product-title .price{display:flex;flex-direction:column}.product-details-custom .sidebar-section h4{margin:0}.product-details-custom .sidebar-section.quantity-select{display:flex;gap:25px;align-items:center}.product-details-custom .sidebar-section.cart button{max-width:100%}.product-details-custom .product-title .price .price-regular{font:var(--type-headline-2-default-font);letter-spacing:var(--type-headline-2-default-letter-spacing);color:var(--color-neutral-600);text-decoration:line-through;order:-1}.product-details-custom .product-title .price .price-range{display:flex;align-items:baseline;flex-wrap:wrap}.product-details-custom .product-title .price .price-range .price-regular{flex:0 1 100%;order:-1}.product-details-custom .product-title .price .price-range .price-from{font:var(--type-headline-2-strong-font);letter-spacing:var(--type-headline-2-strong-letter-spacing)}.product-details-custom .product-title .price .price-range .price-from:first-child:after{content:"-";padding:0 8px}.product-details-custom .product-title .price .price-final{font:var(--type-headline-2-strong-font);letter-spacing:var(--type-headline-2-strong-letter-spacing)}.product-details-custom .product-title .style-id{font:var(--type-headline-2-default-font);letter-spacing:var(--type-headline-2-default-letter-spacing);text-align:right}.product-details-custom .product-title.desktop-hidden{grid-area:product-title;display:grid;grid-template:"title title" "price style";align-items:flex-end}.product-details-custom .product-title.desktop-hidden h1{grid-area:title}.product-details-custom .product-title.desktop-hidden .price{grid-area:price}.product-details-custom .product-title.desktop-hidden .style-id{grid-area:style}.product-details-custom .mobile-hidden{display:none}.product-details-custom .swatches .swatch-spacer{width:64px}.product-details-custom .sidebar .sidebar-section.color-selector{padding-bottom:80px}.product-details-custom .sidebar .sidebar-section.color-selector button{font-size:0}.product-details-custom .selected-color{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:34rem}.product-details-custom .swatches{will-change:height;list-style:none;padding:0;display:flex;gap:8px;flex-wrap:wrap;margin:12px 0 0}.product-details-custom .swatches li{display:flex}.product-details-custom .swatch>button{width:36px;height:36px;background-size:initial;border-radius:var(--shape-border-radius-3);border:var(--shape-border-width-3) solid var(--color-neutral-50);display:inline;margin:0;padding:0;outline:var(--shape-border-width-1) solid var(--color-neutral-300)}.product-details-custom .swatch>button[aria-selected=true]{outline:var(--shape-border-width-2) solid var(--color-neutral-900)}.product-details-custom .swatch>button[disabled]{cursor:not-allowed;color:var(--color-neutral-500)}.product-details-custom .cart .secondary-action{margin:1.6rem auto;display:flex;align-items:center;gap:12px;justify-content:center}.product-details-custom .cart .secondary-action svg{width:22px;height:22px;fill:currentcolor;stroke:currentcolor}.product-details-custom .cart .cart-button{margin:1.6rem auto;display:block}.product-details-custom .product-detail-carousel{position:relative;overflow:hidden}.product-details-custom .product-detail-carousel .carousel-stage-wrapper{display:grid;overflow:hidden;min-width:100%}.product-details-custom picture.shimmer img{visibility:hidden}.product-details-custom picture.shimmer{display:block;max-width:700px;margin:auto}.product-details-custom .product-detail-carousel .carousel-stage-wrapper img{aspect-ratio:800 / 1014;width:100vw;height:auto;object-fit:contain;display:block;margin:auto}.product-details-custom .product-detail-carousel ul{list-style:none;padding:0;margin:0}.product-details-custom .sizes-selector h4{display:inline-block;margin:0}.product-details-custom .sizes-selector span{float:right;margin-top:1.4rem}.product-details-custom .sizes-selector ul{flex-wrap:wrap;display:flex;list-style:none;padding:0;gap:12px;margin:32px 0 16px}.product-details-custom .sizes-selector ul li button{background:none;margin:0;padding:10px;color:var(--color-brand-700);border-radius:4px;border:var(--shape-border-width-3) solid var(--color-neutral-500);display:flex;justify-content:center;align-items:center;cursor:pointer;width:auto;height:auto}.product-details-custom .sizes-selector ul li button[aria-selected=true],.product-details-custom .sizes-selector ul li button:hover,.product-details-custom .sizes-selector ul li button:focus{border-color:var(--color-brand-500);background-color:var(--color-neutral-50);text-decoration:none}.product-details-custom .sizes-selector ul li button[disabled]{cursor:not-allowed;color:var(--color-neutral-500)}.product-details-custom .product-detail-carousel .carousel-thumbnails-wrapper{display:none}.product-details-custom .product-detail-carousel .carousel-stage{grid-area:1 / 1 / 1 / 1;display:flex;transition:transform .2s;min-width:100%}.product-details-custom .product-detail-carousel .carousel-stage li{width:100%;flex-shrink:0}.product-details-custom .sidebar .variant-selection span:nth-child(2){text-transform:none}.product-details-custom .product-detail-carousel .main-controls{grid-area:1 / 1 / 1 / 1;z-index:2;position:absolute;right:40px;left:40px;top:0;bottom:0;display:flex;justify-content:space-between;align-items:center}.product-details-custom .product-detail-carousel .carousel-thumbnails>li{cursor:pointer}.product-details-custom .product-detail-carousel div:is(.main-controls,.thumbnail-controls) button{color:#000;padding:0;margin:0;background:#fff;width:30px;height:30px;border-radius:15px;display:flex;align-items:center;justify-content:center}.product-details-custom .title-shimmer .heading-shimmer{height:19.8px;width:100%;max-width:500px;margin-top:18px;margin-bottom:9px}.product-details-custom .title-shimmer .price-shimmer{height:72px;width:25%}.product-details-custom .title-shimmer{height:129px;width:calc(100% - 32px);box-sizing:border-box;display:block;margin:18px 16px}.product-details-custom .detail-shimmer{height:500px;width:60%;margin-top:28px}.product-details-custom .shimmer{background-color:#f8f8f8}.product-details-custom .sidebar.shimmer{min-height:800px;margin-top:34px;margin-left:32px;margin-right:32px}@keyframes loading{to{background-position-x:-20%}}@media (width >= 600px){.product-details-custom>*:not(.product-detail-carousel){padding:0 32px}.product-details-custom .product-detail-carousel .carousel-stage-wrapper img{aspect-ratio:700 / 888;width:auto}.product-details-custom .product-detail-carousel{margin:25px 0}}@media (width >= 1024px){.product-details-custom .product-title .style-id{text-align:right;position:absolute;right:25px;bottom:25px}.product-details-custom .sidebar.shimmer{margin:0;border:none}.product-details-custom{display:grid;grid-template-columns:auto 30%;grid-auto-flow:column}.product-details-custom>*:not(.product-detail-carousel){padding:0}.product-details-custom .product-detail-carousel .carousel-stage>li{display:flex;justify-content:center}.product-details-custom .product-detail-carousel .main-controls{left:80px;right:80px}.product-details-custom .mobile-hidden{display:block}.product-details-custom .product-title.desktop-hidden{display:none}.product-details-custom .sidebar{grid-column:2;grid-row:1 / 3;border:1px solid #c2c2c2;height:max-content}.product-details-custom .sidebar .sidebar-section{padding:25px;margin:0;position:relative}.product-details-custom .product-detail-description{grid-column:1;padding-left:10px}.product-details-custom .product-detail-carousel{display:flex;grid-column:1}.product-details-custom .sidebar h4{margin-bottom:0}.product-details-custom .sizes-selector span{margin:0}}@media (width >= 1280px){:root{--carousel-control-height: 30px;--pdp-max-width: 1400px}.product-details-custom-wrapper{max-width:var(--pdp-max-width)!important}.product-details-custom .product-detail-carousel{overflow:hidden;height:888px}.product-details-custom .product-detail-carousel .carousel-stage-wrapper{margin-left:27%;position:relative;height:888px;min-width:unset}.product-details-custom .product-detail-carousel .carousel-thumbnails{display:flex;flex-direction:column;transition:transform .2s;gap:20px}.product-details-custom .product-detail-carousel .thumbnail-controls{position:absolute;z-index:3;left:0;right:0;bottom:0;top:0;display:flex;justify-content:space-between;flex-direction:column;pointer-events:none}.product-details-custom .product-detail-carousel div.thumbnail-controls button{width:100%;border-radius:0;height:var(--carousel-control-height);pointer-events:all}.product-details-custom .product-detail-carousel .carousel-thumbnails-wrapper{display:initial;padding-top:var(--carousel-control-height);position:absolute;left:0;z-index:1;background:#fff;height:calc(100% - var(--carousel-control-height))}.product-details-custom .product-detail-carousel .carousel-thumbnails img{aspect-ratio:247/313;width:247px;height:313px}.product-details-custom .product-detail-carousel .carousel-thumbnails picture{display:block}}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var U = Object.defineProperty;
var H = (i, t, e) => t in i ? U(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var $ = (i, t, e) => (H(i, typeof t != "symbol" ? t + "" : t, e), e);
import { _ as b, b as v, k as m, B as D } from "../../preact.module-DQ8xhgSd.js";
import y from "../../scripts/htm.js";
import { renderPrice as N, getSkuFromUrl as O, getProduct as Q, performCatalogServiceQuery as F, refineProductQuery as _, setJsonLd as W } from "../../scripts/commerce.js";
const x = y.bind(b);
class g extends v {
  constructor(t) {
    super(), this.iconName = t.name;
  }
  async componentDidMount() {
    const t = await fetch(
      `${window.hlx.codeBasePath}/icons/${this.iconName}.svg`
    );
    if (t.ok) {
      const e = await t.text();
      this.setState({ iconHTML: e });
    }
  }
  render() {
    if (!this.state.iconHTML)
      return null;
    if (this.state.iconHTML.match(/<style/i)) {
      const t = `data:image/svg+xml,${encodeURIComponent(this.state.iconHTML)}`;
      return x`
				<span class=${`icon icon${this.iconName}`}><img src=${t} /></span>
			`;
    }
    return x`<${m}>
        <span class=${`icon icon${this.iconName}`} dangerouslySetInnerHTML=${{ __html: this.state.iconHTML }}>
        </span>
    </Fragment>
    `;
  }
}
const u = y.bind(b);
function A({ src: i, sizes: t, width: e, height: s, loading: n = "lazy" }) {
  const a = (o, l, c = !0) => {
    const r = new URL(o);
    return c ? (r.searchParams.set("format", "webply"), r.searchParams.set("optimize", "medium")) : r.searchParams.delete("format"), r.searchParams.set("width", l), r.searchParams.delete("quality"), r.searchParams.delete("dpr"), r.searchParams.delete("bg-color"), r.toString();
  }, d = (o, l, c = !0) => `${a(o, l, c)} 1x, ${a(o, l * 2, c)} 2x, ${a(o, l * 3, c)} 3x`;
  return u`<${m}>
		${t.map((o) => {
    const l = d(i, o.width || e, !0), c = d(i, o.width || e, !1), r = {};
    o.media && (r.media = `(max-width: ${o.media}px)`);
    const p = u`<source ...${r} srcset=${c} />`, f = u`<source ...${r} srcset=${l} />`;
    return u`${f} ${p}`;
  })}
		<img
			height=${s}
			width=${e}
			src=${a(i, e, !1)}
			loading=${n}
		/>
	<//>`;
}
class S extends v {
  constructor(t) {
    super(t), this.state = {
      slide: 0,
      thumbnailSlide: 0
    };
  }
  getImages() {
    var e;
    const t = (e = this.props.product) == null ? void 0 : e.images.map((s) => {
      const n = new URL(s.url);
      return n.protocol = window.location.protocol, n.toString();
    });
    t && (this.thumbnailImages = t.map(
      (s) => `${s}?quality=100&bg-color=255,255,255`
    ), this.images = t.map(
      (s) => `${s}?width=700&quality=100&bg-color=255,255,255`
    ));
  }
  static negativeModulo(t, e) {
    return (t % e + e) % e;
  }
  updateThumbnailSlide(t) {
    const e = t(this.state.thumbnailSlide), s = Math.min(
      Math.max(e, 0),
      this.thumbnailImages.length - 1
    );
    this.setState({ thumbnailSlide: s });
  }
  updateSlide(t) {
    const e = t(this.state.slide), s = S.negativeModulo(
      e,
      this.images.length
    );
    this.setState({
      slide: s,
      thumbnailSlide: s
    });
  }
  renderLabel() {
    var e;
    const t = (e = this.props.product) == null ? void 0 : e.amasty;
    return t ? u`<div class="amasty-wrapper">
			<div
				class=${t.position}
				style=${t.style}
				dangerouslySetInnerHTML=${{ __html: t.txt }}
			/>
		</div>` : null;
  }
  static getDerivedStateFromProps(t, e) {
    var s, n;
    return e.slide >= ((n = (s = t.product) == null ? void 0 : s.productImages) == null ? void 0 : n.length) ? {
      ...e,
      slide: 0,
      thumbnailSlide: 0
    } : null;
  }
  render() {
    return this.getImages(), u`
			<div class="product-detail-carousel">
				<div class="carousel-thumbnails-wrapper">
					<div class="thumbnail-controls">
						<button
							className="button"
							name="thumbnail-prev"
							disabled=${this.props.shimmer}
							onClick=${() => this.updateThumbnailSlide((t) => t - 1)}
						>
							<${g} name="caret-up-fill" />
						</button>
						<button
							className="button"
							name="thumbnail-next"
							disabled=${this.props.shimmer}
							onClick=${() => this.updateThumbnailSlide((t) => t + 1)}
						>
							<${g} name="caret-down-fill" />
						</button>
					</div>
					<ul
						class="carousel-thumbnails"
						style="transform: translateY(-${(this.state.thumbnailSlide === 0 ? 0 : 1) * -252.7 + this.state.thumbnailSlide * 322.6}px)"
					>
						${!this.props.loading && this.thumbnailImages.map(
      (t, e) => u` <li
									key=${t}
									onClick=${() => this.setState({ slide: e, thumbnailSlide: e })}
								>
									<picture>
										<${A}
											src=${t}
											height="313"
											width="247"
											loading=${"lazy"}
											sizes=${[]}
										/>
									</picture>
								</li>`
    )}
						${this.props.loading && [1, 2, 3].map(
      () => u`
								<li>
									<picture class="shimmer"
										><img height="313" width="247"
									/></picture>
								</li>
							`
    )}
					</ul>
				</div>
				<div class="carousel-stage-wrapper">
					${this.renderLabel()}
					${!this.props.loading && u`
						<div class="main-controls">
							<button
								className="button"
								name="stage-prev"
								onClick=${() => this.updateSlide((t) => t - 1)}
							>
								<${g} name="caret-left-fill" />
							</button>
							<button
								className="button"
								name="stage-next"
								onClick=${() => this.updateSlide((t) => t + 1)}
							>
								<${g} name="caret-right-fill" />
							</button>
						</div>
					`}
					<ul
						class="carousel-stage"
						style="transform: translateX(-${this.state.slide * 100}%)"
					>
						${!this.props.loading && this.images.map(
      (t, e) => u`
								<li
									key=${t}
									active=${e === this.state.slide ? "true" : "false"}
								>
									<picture>
										<${A}
											src=${t}
											width="700"
											height="888"
											loading=${e === 0 ? "eager" : "lazy"}
											sizes=${[{ media: 450, width: 450 }, { width: 700 }]}
										/>
									</picture>
								</li>
							`
    )}
						${this.props.loading && u`
							<li>
								<picture class="shimmer"
									><img width="700" height="888"
								/></picture>
							</li>
						`}
					</ul>
				</div>
			</div>
		`;
  }
}
const h = y.bind(b);
function j({ onChange: i }) {
  const t = Array.from({ length: 15 }, (e, s) => s + 1);
  return h`<div class="sidebar-section quantity-select">
		<h4 class="selection">Quantity</h4>
		<select
			onchange=${(e) => i == null ? void 0 : i(Number.parseInt(e.target.value, 10))}
		>
			${t.map(
    (e) => h`<option key=${e} value=${e}>${e}</option>`
  )}
		</select>
	</div>`;
}
function R() {
  return h`
		<div class="desktop-hidden title-shimmer">
			<div class="heading-shimmer shimmer"></div>
			<div class="price-shimmer shimmer"></div>
		</div>
	`;
}
function L({ shimmer: i, product: t }) {
  const { priceRange: e, price: s, name: n, sku: a } = t;
  if (i || !(e || s))
    return h`<${R} />`;
  const d = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }), o = N(t, d.format, h, m);
  return h`<${m}>
		<h1 dangerouslySetInnerHTML=${{ __html: n }}></h1>
		<div class="price">${o}</div>
		<div class="style-id">SKU: ${a}</div>
	<//>`;
}
function q({ product: i, updateSelection: t, selection: e }) {
  const s = i == null ? void 0 : i.options;
  if (!s)
    return null;
  const n = (a) => {
    var l;
    const { values: d } = a, o = (l = e == null ? void 0 : e[a.id]) == null ? void 0 : l.id;
    return d.map((c) => {
      const r = {};
      return c.type === "COLOR_HEX" && (r.style = {
        backgroundColor: c.value
      }), h`<li key=${c.id} class="swatch">
				<button
					...${r}
					class="button"
					aria-selected=${c.id === o}
					disabled=${!c.inStock}
					onClick=${() => t({ [a.id]: c })}
				>
					${c.title}
				</button>
			</li>`;
    });
  };
  return s.map((a) => {
    var o;
    const d = (o = e == null ? void 0 : e[a.id]) == null ? void 0 : o.title;
    return h`<div
			class=${`sidebar-section ${a.id === "color" ? "color-selector" : "sizes-selector"}`}
		>
			<h4>
				${d ? `${a.title}: ${d}` : a.title}
			</h4>
			<ul class="swatches swatches-regular">
				${n(a)}
			</ul>
		</div>`;
  });
}
function z({ onAddToCart: i, canAddToCart: t, onAddToWishlist: e }) {
  return h`<div class="sidebar-section cart">
		<button
			disabled=${!t()}
			onclick=${i}
			class="button primary cart-button"
		>
			Add to Bag
		</button>
		<button
			onclick=${e}
			class="button secondary secondary-action"
		>
			<${g} name="heart" />Add to Favorites
		</button>
	</div>`;
}
class P extends v {
  constructor(t) {
    super(t), this.updateSelection = this.updateSelection.bind(this), this.canAddToCart = this.canAddToCart.bind(this);
  }
  updateSelection(t) {
    var e, s;
    (s = (e = this.props).onSelectionChanged) == null || s.call(e, t);
  }
  canAddToCart() {
    var t;
    return Object.keys(this.props.selection).length === (((t = this.props.product.options) == null ? void 0 : t.length) || 0);
  }
  render() {
    const { product: t, loading: e, selection: s } = this.props;
    return e ? h`<div class="sidebar shimmer"></div>` : h`<${m}>
			<div class="product-title desktop-hidden">
				<${L} shimmer=${this.props.shimmer} product=${t} />
			</div>
			<div class=${`sidebar ${this.props.shimmer ? "shimmer" : ""}`}>
				${this.props.shimmer || h`
					<div class="product-title sidebar-section mobile-hidden">
						<${L} product=${t} />
					</div>
					<${q}
						product=${t}
						updateSelection=${this.updateSelection}
						selection=${s}
					/>
					<${j} onChange=${this.props.onQuantityChanged} />
					<${z}
						onAddToWishlist=${this.props.onAddToWishlist}
						onAddToCart=${this.props.onAddToCart}
						canAddToCart=${this.canAddToCart}
					/>
				`}
			</div>
		<//>`;
  }
}
const B = y.bind(b);
function E() {
  return B`<${m}>
		<div class="title-shimmer shimmer desktop-hidden"></div>
		<${S} loading />
		<${P} loading />
		<div class="detail-shimmer shimmer mobile-hidden"></div>
	<//>`;
}
const w = y.bind(b);
function I(i = 404) {
  fetch(`/${i}.html`).then((t) => {
    if (t.ok)
      return t.text();
    throw new Error(`Error getting ${i} page`);
  }).then((t) => {
    const s = new DOMParser().parseFromString(t, "text/html");
    document.body.innerHTML = s.body.innerHTML, document.head.innerHTML = s.head.innerHTML;
  }), document.body.innerHTML = "";
}
async function J(i, t) {
  var s, n;
  const e = await F(_, {
    sku: t.toUpperCase(),
    variantIds: i
  });
  return {
    images: (s = e.refineProduct) == null ? void 0 : s.images,
    price: (n = e.refineProduct) == null ? void 0 : n.price
  };
}
async function K(i) {
  var f, T, C, k;
  const {
    name: t,
    inStock: e,
    description: s,
    sku: n,
    urlKey: a,
    price: d,
    priceRange: o,
    images: l,
    attributes: c
  } = i, r = ((T = (f = o == null ? void 0 : o.minimum) == null ? void 0 : f.final) == null ? void 0 : T.amount) || ((C = d == null ? void 0 : d.final) == null ? void 0 : C.amount), p = c.find((M) => M.name === "brand");
  W(
    {
      "@context": "http://schema.org",
      "@type": "Product",
      name: t,
      description: s,
      image: (k = l[0]) == null ? void 0 : k.url,
      offers: [
        {
          "@type": "http://schema.org/Offer",
          price: r == null ? void 0 : r.value,
          priceCurrency: r == null ? void 0 : r.currency,
          availability: e ? "http://schema.org/InStock" : "http://schema.org/OutOfStock"
        }
      ],
      productID: n,
      brand: {
        "@type": "Brand",
        name: p == null ? void 0 : p.value
      },
      url: new URL(`/products/${a}/${n.toLowerCase()}`, window.location),
      sku: n,
      "@id": new URL(
        `/products/${a}/${n.toLowerCase()}`,
        window.location
      )
    },
    "product"
  );
}
class V extends v {
  constructor(e) {
    super(e);
    $(this, "onAddToCart", async () => {
      var e;
      if (Object.keys(this.state.selection).length === (((e = this.state.product.options) == null ? void 0 : e.length) || 0)) {
        const n = [
          {
            optionsUIDs: Object.values(this.state.selection).map(
              (d) => d.id
            ),
            quantity: this.state.selectedQuantity ?? 1,
            sku: this.state.product.sku
          }
        ], { addProductsToCart: a } = await import("../../api-Dikv6K-n.js");
        console.debug("onAddToCart", n, a), a(n);
      }
    });
    $(this, "onAddToWishlist", async () => {
      console.debug("onAddToWishlist", this.state.product.sku);
    });
    $(this, "onQuantityChanged", (e) => {
      this.setState({ selectedQuantity: e });
    });
    $(this, "onSelectionChanged", (e) => {
      this.setState((n) => ({
        selection: {
          ...n.selection,
          ...e
        }
      }));
      const s = Object.values({
        ...this.state.selection,
        ...e
      }).map((n) => n.id);
      J(s, this.state.product.sku).then(
        ({ images: n, price: a }) => {
          this.setState((d) => ({
            product: {
              ...d.product,
              images: n,
              price: a
            }
          }));
        }
      );
    });
    this.state = {
      loading: !0
    }, this.onSelectionChanged = this.onSelectionChanged.bind(this), this.onAddToCart = this.onAddToCart.bind(this), this.onQuantityChanged = this.onQuantityChanged.bind(this), this.onAddToWishlist = this.onAddToWishlist.bind(this);
  }
  async componentDidMount() {
    const e = await Q(this.props.sku);
    e || I(), this.setState({
      product: e,
      loading: !1,
      selection: {}
    });
  }
  async componentDidUpdate() {
    const { loading: e, product: s } = this.state;
    !e && s && (K(s), window.adobeDataLayer.push(
      { productContext: { productId: 0, ...s } },
      { event: "product-page-view" }
    ));
  }
  render() {
    return this.state.loading ? w`<${E} />` : w`
			<${m}>
				<${S} product=${this.state.product} />
				<${P}
					product=${this.state.product}
					selection=${this.state.selection}
					onSelectionChanged=${this.onSelectionChanged}
					onAddToCart=${this.onAddToCart}
					onAddToWishlist=${this.onAddToWishlist}
					onQuantityChanged=${this.onQuantityChanged}
				/>
				<div class="product-detail-description">
					<h3>Product Details</h3>
					<div
						dangerouslySetInnerHTML=${{
      __html: this.state.product.description
    }}
					></div>
				</div>
			<//>
		`;
  }
}
async function tt(i) {
  i.innerHTML = '<div class="full-height"></div>';
  const t = O();
  t || I();
  const e = w`<${V} sku=${t} />`;
  D(e, i);
}
export {
  tt as default,
  I as errorGettingProduct
};
