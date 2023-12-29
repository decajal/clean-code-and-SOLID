(() => {
  interface Product {
    id: number;
    name: string;
  }

  // Clase nueva, encargada de todo lo que tiene que ver el producto
  class ProductService {
    // Podría tener métodos y propiedades privadas para:
    // - treaerlo de la BD
    // - salvarlo en la BD
    // - etc.
    getProduct(id: number) {
      console.log('Producto: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
      console.log('Guardando en base de datos', product);
    }
  }

  // Clase nueva, encargada de todo lo que tiene que ver con los correos
  class Mailer {
    // puede tener métodos y propiedades privadas para
    //   -> mandar correos
    private masterEmail: string = 'aSj7D@example.com'; // podría ser la cuenta desde para mandar los correos

    sendEmail(emails: string[], template: 'to-clients' | 'to-admins') {
      console.log('Enviando correos...', template);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    // nuevas propiedades privadas para inyectar las clases
    private productService: ProductService;
    private mailer: Mailer;

    // constructor necesario para la inyección
    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      // // Realiza un proceso para obtener el producto y retornarlo
      // console.log('Producto: ', { id, name: 'OLED Tv' });
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      // // Realiza una petición para salvar en base de datos
      // console.log('Guardando en base de datos', product);
      this.productService.saveProduct(product);
    }

    notifyClients() {
      // console.log('Enviando correo a los clientes');
      this.mailer.sendEmail(
        ['cliente-1@example.com', 'cliente-2@example.com', 'cliente-3@example.com'],
        'to-clients'
      );
    }

    // onAddToCart(productId: number) {
    //   // Agregar al carrito de compras
    //   console.log('Agregando al carrito ', productId);
    // }
  }

  // Esta clase tiene más sentido para lo que es el carrito
  class CartBloc {
    addToCart(productId: number) {
      console.log('Agregando al carrito ', productId);
    }
  }

  // nuevas clases con responsabilidades BIEN DEFINIDAS
  const productService = new ProductService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  // la clase general sigue trabajando de la misma forma, lo que cambió es la implementación,
  // es decir, lo hace un poco diferente
  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
