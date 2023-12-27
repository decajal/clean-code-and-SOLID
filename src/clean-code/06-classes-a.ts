(() => {
  // Acá no estamos aplicando el principio de Responsabilidad única

  type Gender = 'F' | 'M';

  // esta es la forma general de creación de clases
  // class Person {
  //   public name: string;
  //   public gender: Gender;
  //   public birthdate: Date;
  //   constructor(name: string, gender: Gender, birthdate: Date) {
  //     this.name = name;
  //     this.gender = gender;
  //     this.birthdate = birthdate;
  //   }
  // }

  // Esta es la forma corta de typescript
  // El resultado es el mismo
  class Person {
    constructor(public name: string, public gender: Gender, public birthdate: Date) {}
  }

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
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
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    'usr/home',
    '/development',
    'fernando@example.com',
    'Admin',
    'Fernando',
    'M',
    new Date('1985-10-21')
  );
  console.log({ userSettings });
})();
