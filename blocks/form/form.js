// eslint-disable-next-line
import '//go.shiftparadigm.com/js/forms2/js/forms2.min.js';

// const loadScript = (url, callback, type) => {
//   const head = document.querySelector('head');
//   const script = document.createElement('script');
//   script.src = url;
//   if (type) {
//     script.setAttribute('type', type);
//   }
//   if (callback) script.onload = callback;
//   head.append(script);
//   console.log(head);
//   return script;
// };

// const formAction = '';
// const formMarkup = `
//     <form action=${formAction}>
//         <label>
//             First Name
//             <input type="text" name="firstName" />
//         </label>
//         <label>
//             Last Name
//             <input type="text" name="lastName" />
//         </label>
//         <label>
//             Company
//             <input type="text" name="company" />
//         </label>
//         <label>
//             Title
//             <input type="text" name="title" />
//         </label>
//         <label>
//             Company Email
//             <input type="email" name="email" />
//         </label>
//         <button type="submit" class="button">Contact Us</button>
//     </form>
// `;

export default function decorate(block) {
  //   const formTarget = block.querySelector('.form div > div:last-of-type');
  //   formTarget.classList.add('form-target');
  //   formTarget.innerHTML = formMarkup;

  const form = '<form id="mktoForm_2894"></form>';
  block.innerHTML += form;

  //   loadScript('//go.shiftparadigm.com/js/forms2/js/forms2.min.js');

  // eslint-disable-next-line no-undef
  MktoForms2.loadForm('//go.shiftparadigm.com', '230-YBS-585', 2894);
}
