export default function createLi(email, password) {
  const markup = `
  <li>Email: ${email} , password: ${password}
  </li>
  `;

  return markup;
}
