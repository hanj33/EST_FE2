class TextManager {
  constructor() {
    this.value = {
      data: "hello",
    };
  }

  getValue() {
    return this.value.data;
  }
  setValue(newValue) {
    this.value = newValue;
  }
}
