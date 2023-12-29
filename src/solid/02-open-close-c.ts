// acá si tendremos la dependencia de axios
// import axios from 'axios'; // luego la quitamos completamente

// * Esto es un patrón ADAPTADOR
// Si cambia la librería a utilizar, de fetch a axios o viceversa, SOLO el patrón cambia.
export class httpClient {
  // async get(url: string) {
  //   const { data, status } = await axios.get(url);
  //   return { data, status };
  // }

  async get(url: string) {
    const resp = await fetch(url);
    const data = await resp.json();

    return { data, status: resp.status };
  }
}

//? Esto nos ayuda a reducir as depencias con librerías de TERCEROS
