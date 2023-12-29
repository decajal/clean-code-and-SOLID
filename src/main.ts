import './style.css';
// import './clean-code/07-tarea';
// import './code-smells/02-low-coupling-exercise';
// import './solid/01-srp';
// import './solid/03-liskov-a';
import './solid/05-dependency-a';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`;
