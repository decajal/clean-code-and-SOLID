(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = 'M' | 'F';

  // Alto Acoplamiento
  // Requerimiento: vamos a separar el "name" de la persona y manejar en "firstName" y "lastName"

  // Acá pocos problemas, esta clase tiene un BAJO ACOPLAMIENTO, pero a medida que vamos avanzando
  // los problemas irán creciendo ya que el acoplamiento va creciendo.
  class Person {
    constructor(
      public firstName: string,
      public lastName: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      firstName: string, // modificada
      lastName: string, // agregada
      gender: Gender,
      birthdate: Date
    ) {
      // super(name, gender, birthdate); // Original, tuvimos que cambiar el constructor
      super(firstName, lastName, gender, birthdate); // Ojo que acá ahora tenemos 4 argumentos, y si se cambia el orden sin querer ????
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string,
      email: string,
      role: string,
      firstName: string, // modificada
      lastName: string, // agregada
      gender: Gender,
      birthdate: Date
    ) {
      // super(email, role, new Date(), name, gender, birthdate); // Original, tuvimos que cambiar el constructor
      super(email, role, new Date(), firstName, lastName, gender, birthdate);
    }
  }

  // Original: ya no sirve el constructor y hay que agregar el lastName
  // const userSettings = new UserSettings(
  //   '/urs/home',
  //   '/development',
  //   'fernando@google.com',
  //   'F',
  //   'Fernando',
  //   'M',
  //   new Date('1985-10-21')
  // );

  const userSettings = new UserSettings(
    '/urs/home',
    '/development',
    'fernando@google.com',
    'F',
    'Fernando',
    'Herrera',
    'M',
    new Date('1985-10-21')
  );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
