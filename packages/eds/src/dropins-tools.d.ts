declare module '@dropins/tools/event-bus.js' {
	export interface EventBusEvents {}

	export type EventBusOnEventOptions = { eager?: boolean };

	export const events: {
		on<TEventName extends keyof EventBusEvents>(
			eventName: TEventName,
			callback: (data: EventBusEvents[TEventName]) => void,
			options: EventBusOnEventOptions,
		): void;
		on(
			eventName: string,
			callback: (data: unknown) => void,
			options: EventBusOnEventOptions,
		): void;
	};
}
