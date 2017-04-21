class HelloWorld {
  hello(name) {
    if(name === undefined)
      return "Hello, World!";

    return "Hello, " + name + "!";
  }
}

export default HelloWorld;