// * Este es el código original
// export class Tesla {
//   constructor(private numberOfSeats: number) {}

//   getNumberOfTeslaSeats() {
//     return this.numberOfSeats;
//   }
// }

// export class Audi {
//   constructor(private numberOfSeats: number) {}

//   getNumberOfAudiSeats() {
//     return this.numberOfSeats;
//   }
// }

// export class Toyota {
//   constructor(private numberOfSeats: number) {}

//   getNumberOfToyotaSeats() {
//     return this.numberOfSeats;
//   }
// }

// export class Honda {
//   constructor(private numberOfSeats: number) {}

//   getNumberOfHondaSeats() {
//     return this.numberOfSeats;
//   }
// }
// * Fin del código original

// para esto implementamos una clase del tipo abstracta
export abstract class Car {
  abstract getNumberOfSeats(): number;
}

export class Tesla extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Audi extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Toyota extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Honda extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

// gracias a la aplicación de este principio, es m uy fácil agregar una nueva clase
export class Volvo extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}
