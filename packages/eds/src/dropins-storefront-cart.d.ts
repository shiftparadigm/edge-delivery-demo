/** Not a real value; this cannot be called. */
const Handler: unique symbol;
/** This is the type of the "component" returned from the "containers" that
 * allows for the various options to be defined. This uses symbols to prevent
 * creating your own component since we don't really know what the structure is.
 * */
type StorefrontComponent<TProps> = {
	[Handler](props: TProps): unknown;
};

declare module '@dropins/storefront-cart' {
	export type ProductInfo = {
		url: { urlKey: string };
		sku: string;
	};
}

declare module '@dropins/storefront-cart/render.js' {
	export const render: {
		render<TProps>(
			component: StorefrontComponent<TProps>,
			options: TProps,
		): (container: Element) => Promise<void>;
		unmount(container: Element): void;
	};
}

declare module '@dropins/storefront-cart/containers/MiniCart.js' {
	import { type ProductInfo } from '@dropins/storefront-cart';

	const MiniCartComponent: StorefrontComponent<{
		routeEmptyCartCTA: () => string;
		routeProduct: (product: ProductInfo) => string;
		routeCart: () => string;
		routeCheckout: () => string;
	}>;

	export default MiniCartComponent;
}

declare module '@dropins/tools/event-bus.js' {
	export interface EventBusEvents {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		'cart/data': null | undefined | { totalQuantity: unknown };
	}
}
