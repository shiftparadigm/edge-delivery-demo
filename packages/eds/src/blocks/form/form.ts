import './form.css';

type MarketoFormApi = {
	loadForm: (
		url: string,
		key: string,
		code: number,
		callback: (mktoForm: MarketoForm, successMessage: string) => void,
	) => void;
};

type MarketoForm = {
	onSubmit: (callback: () => void) => {
		onSuccess: (callback: () => void) => void;
	};
	getFormElem: () => {
		hide: () => void;
		parent: () => {
			html: (source: string) => void;
		};
	};
};

const loadScript = (url: string, callback: () => void, type?: string) => {
	const head = document.querySelector('head');
	const script = document.createElement('script');
	script.src = url;
	if (type) {
		script.setAttribute('type', type);
	}
	if (callback) script.onload = callback;
	head?.append(script);
	return script;
};

const handleSubmission = (mktoForm: MarketoForm, successMessage: string) => {
	function handleSubmit() {
		console.log('Submitting...', mktoForm);
	}

	function handleSuccess() {
		console.log('Submitted');
		mktoForm.getFormElem().hide();

		mktoForm
			.getFormElem()
			.parent()
			.html(
				`<div class="by-marketo-form-confirmation">${successMessage}</div>`,
			);
		return false;
	}

	mktoForm?.onSubmit(handleSubmit).onSuccess(handleSuccess);
};

const handleScriptLoaded = (
	formTarget: Element | null,
	successMessage: string,
) => {
	/* @ts-expect-error no-undef */
	(MktoForms2 as MarketoFormApi).loadForm(
		'//go.shiftparadigm.com',
		'230-YBS-585',
		2894,
		(mktoForm) => handleSubmission(mktoForm, successMessage),
	);

	// manipulate DOM after script has injected form
	const observer = new MutationObserver((mutationList) => {
		const firstMutationTarget: Node = mutationList[0].target;
		const labels = (firstMutationTarget as HTMLElement).querySelectorAll(
			'.mktoForm label.mktoLabel',
		);

		// Display labels to match design and fix missing accessible names
		labels.forEach((label) => {
			label.classList.add('shift-label');
			const input = label?.parentNode?.querySelector(
				'input[type="text"], input[type="email"], textarea',
			);

			if (input) {
				input.classList.add('shift-input');
				const labelText = input.getAttribute('placeholder');
				label.textContent = labelText;
			}
		});
	});

	observer.observe(formTarget as Node, { childList: true, subtree: true });
};

export default function decorate(block: HTMLElement) {
	const formTarget = block.querySelector('.form div > div:last-of-type');
	formTarget?.classList.add('form-target');

	let formSuccessMessage = '';
	const formSuccessContent = formTarget?.querySelectorAll('p');

	formSuccessContent &&
		Array.from(formSuccessContent).forEach((paragraph) => {
			formSuccessMessage += paragraph?.toString();
			paragraph.remove();
		});

	const form = '<form id="mktoForm_2894"></form>';
	formTarget && (formTarget.innerHTML += form);

	loadScript('//go.shiftparadigm.com/js/forms2/js/forms2.min.js', () =>
		handleScriptLoaded(
			formTarget,
			formSuccessMessage?.trim().toString() ||
				'<p>We have your submission!</p>',
		),
	);
}
