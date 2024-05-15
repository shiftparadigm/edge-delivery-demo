const formAction = '';
const formMarkup = `
    <form action=${formAction}>
        <label>
            First Name
            <input type="text" name="firstName" />
        </label>
        <label>
            Last Name
            <input type="text" name="lastName" />
        </label>
        <label>
            Company
            <input type="text" name="company" />
        </label>
        <label>
            Title
            <input type="text" name="title" />
        </label>
        <label>
            Company Email
            <input type="email" name="email" />
        </label>
        <button type="submit" class="button">Contact Us</button>
    </form>
`;

export default function decorate(block) {
  const formTarget = block.querySelector('.form div > div:last-of-type');
  formTarget.classList.add('form-target');
  formTarget.innerHTML = formMarkup;
}
