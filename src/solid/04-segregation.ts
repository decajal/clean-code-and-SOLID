// * Este es el código original
// interface Bird {
//   fly(): void;
//   eat(): void;
//   run(): void;
//   swim(): void;
// }

// class Tucan implements Bird {
//   public fly() {
//     console.log('Estoy volando');
//   }
//   public eat() {
//     console.log('Estoy comiendo');
//   }
//   public run() {
//     console.log('Estoy corriendo');
//   }
//   public swim() {
//     throw new Error('No se puede nadar');
//   }
// }

// class Humminbird implements Bird {
//   public fly() {
//     console.log('Estoy volando');
//   }
//   public eat() {
//     console.log('Estoy comiendo');
//   }
//   public run() {
//     console.log('Estoy corriendo');
//   }
//   public swim() {
//     throw new Error('No se puede nadar');
//   }
// }

// class Ostrich implements Bird {
//   public fly() {
//     throw new Error('No se puede volar');
//   }
//   public eat() {
//     console.log('Estoy comiendo');
//   }
//   public run() {
//     console.log('Estoy corriendo');
//   }
//   public swim() {
//     throw new Error('No se puede nadar');
//   }
// }

// class Penguin implements Bird {
//   public fly() {
//     throw new Error('No se puede volar');
//   }
//   public eat() {
//     console.log('Estoy comiendo');
//   }
//   public run() {
//     console.log('Estoy corriendo');
//   }

//   public swim() {
//     console.log('Estoy nadando');
//   }
// }
// * Fin del código original

interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): number;
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly() {
    console.log('Estoy volando');
    return 100;
  }
  public eat() {
    console.log('Estoy comiendo');
  }
}

class Humminbird implements Bird, FlyingBird {
  public fly() {
    console.log('Estoy volando');
    return 200;
  }
  public eat() {
    console.log('Estoy comiendo');
  }
}

class Ostrich implements Bird, RunningBird {
  public eat() {
    console.log('Estoy comiendo');
  }
  public run() {
    console.log('Estoy corriendo');
  }
}

class Penguin implements Bird, SwimmerBird {
  public eat() {
    console.log('Estoy comiendo');
  }
  public swim() {
    console.log('Estoy nadando');
  }
}
