const loadScript = (url, callback, type) => {
  const head = document.querySelector('head');
  const script = document.createElement('script');
  script.src = url;
  if (type) {
    script.setAttribute('type', type);
  }
  if (callback) script.onload = callback;
  head.append(script);
  return script;
};

const handleSubmission = (form) => {
  function handleSubmit() {
    console.log('Submitting...', form);
  }

  function handleSuccess() {
    console.log('Submitted');
    form.getFormElem().hide();
    form.getFormElem().parent().html('<div class="by-marketo-form-confirmation"><p>Thank you for getting in touch! We appreciate you contacting us and we will respond within two business days with more information.</p></div>');
    return false;
  }

  form.onSubmit(handleSubmit).onSuccess(handleSuccess);
};

const handleScriptLoaded = (formTarget) => {
  // eslint-disable-next-line no-undef
  MktoForms2.loadForm('//go.shiftparadigm.com', '230-YBS-585', 2894, handleSubmission);

  // manipulate DOM after script has injected form
  const observer = new MutationObserver((mutationList) => {
    const labels = mutationList[0].target.querySelectorAll('.mktoForm label.mktoLabel');

    // Display labels to match design and fix missing accessible names
    labels.forEach((label) => {
      label.classList.add('shift-label');
      const input = label.parentNode.querySelector('input[type="text"], input[type="email"], textarea');

      if (input) {
        input.classList.add('shift-input');
        const labelText = input.getAttribute('placeholder');
        label.textContent = labelText;
      }
    });
  });

  observer.observe(formTarget, { childList: true, subtree: true });
};

export default function decorate(block) {
  const formTarget = block.querySelector('.form div > div:last-of-type');
  formTarget.classList.add('form-target');

  const form = '<form id="mktoForm_2894"></form>';
  formTarget.innerHTML += form;

  loadScript('//go.shiftparadigm.com/js/forms2/js/forms2.min.js', () => handleScriptLoaded(formTarget));
}
