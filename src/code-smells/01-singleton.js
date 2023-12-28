const Singleton = (function () {
  let instance;

  function createInstance() {
    return new Object('I am the instance');
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function main() {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log('Misma instancia? ', instance1 === instance2);
}

main();

/*
  ? PROS:
    * Singleton garantiza que a lo largo de nuestra aplicación vamos a tener una única instancia.
      Esto puede ser conveniente para el manejo de estado de nuestra aplicación.
  ? CONTRAS:
    * Vive en el contexto global
    * Puede ser modificado por cualquiera y en cualquier momento. Lo cual hace que:
    * NO SEA RASTREABLE.
    * Es díficil de testear debido a su ubicación: es muy díficil de probar.
*/
