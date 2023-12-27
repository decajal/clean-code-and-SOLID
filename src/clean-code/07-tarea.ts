(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  interface HtmlElementProps {
    id: string;
    type: HtmlType;
  }

  class HtmlElement {
    public id: string;
    public type: HtmlType;
    constructor({ id, type }: HtmlElementProps) {
      this.id = id;
      this.type = type;
    }
  }

  // ORIGINAL
  // class InputAttributes extends HtmlElement {
  //   constructor(public value: string, public placeholder: string, id: string) {
  //     super(id, 'input');
  //   }
  // }

  interface InputAttributesProps {
    value: string;
    placeholder: string;
  }

  class InputAttributes {
    public value: string;
    public placeholder: string;
    constructor({ value, placeholder }: InputAttributesProps) {
      this.value = value;
      this.placeholder = placeholder;
    }
  }

  // ORIGINAL
  // class InputEvents extends InputAttributes {
  //   constructor(value: string, placeholder: string, id: string) {
  //     super(value, placeholder, id);
  //   }

  //   setFocus() {}
  //   getValue() {}
  //   isActive() {}
  //   removeValue() {}
  // }

  class InputEvents {
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement

  class InputElement {
    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;
    public inputEvents: InputEvents;
    constructor(value: string, placeholder: string, id: string) {
      this.htmlElement = new HtmlElement({ id, type: 'input' });
      this.inputAttributes = new InputAttributes({ value, placeholder });
      this.inputEvents = new InputEvents();
    }
  }

  const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');
  console.log({ nameField });
})();
