(() => {
  // เริ่มเขียนโค้ด

  // 1. Lexical scope & Dynamic scope
  // function printName() {
  //   console.log(this);
  // }

  // printName();
  
  // 2. How to know what is "this"?
  // function printName() {
  //   console.log(this);
  //   console.log(`My name is ${this.name}`)
  // }

  //// 2.1 Invoker object
  // const varayut = { name: 'Varayut', printName };
  // const jane = { name: 'Jane', printName };

  // varayut.printName();
  // jane.printName(); 

  //// 2.2 Global object (window, global)
  // name = 'Global';
  // printName();

  //// 2.3 Constructor function
  // function Person(name) {
  //   this.name = name;
  //   this.printName = printName;
  // }

  // const varayut = new Person('Varayut Perrr');
  // varayut.printName();

  // 3. call(), apply(), and bind()
  function printName(nationallity, city) {
    console.log(this);
    console.log(`My nam is ${this.name}, I'm ${nationallity} and am living in ${city}`);
  }

  function Person(name, nationallity, city) {
    this.name = name;
    this.nationallity = nationallity;
    this.city = city;

    printName(this.nationallity, this.city);
    printName.call(this, this.nationallity, this.city);
    printName.apply(this, [this.nationallity, this.city]);
    const printVarayut = printName.bind(this);
    printVarayut(this.nationallity, this.city);
  }

  const varayut = new Person('Varayuteee', 'Thai', 'Bangkok');
})();
