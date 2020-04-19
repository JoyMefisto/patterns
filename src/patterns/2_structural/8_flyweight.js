/*
* Flyweight - нужен для эффективной передачи и работы с данными через типы объектов
* (используется браузерами для предотвращения повторной загрузки элементов(картинок) которые уже были загружены) - кэшировани
* */

class Car {
  constructor (model, price) {
    this.model = model
    this.price = price
  }
}

class CarFactory {
  constructor () {
    this.cars = []
  }

  create (model, price) {
    const candidate = this.getCar(model)

    if (candidate) {
      return candidate
    }

    const newCar = new Car(model, price)
    this.cars.push(newCar)

    return newCar
  }

  getCar (model) {
    return this.cars.find(car => car.model === model)
  }
}

const factory = new CarFactory()

console.log(factory.create('audi', 12000)) // 'audi', 12000
console.log(factory.create('mercedes', 15000)) // 'mercedes', 15000
console.log(factory.create('audi', 13000)) // 'audi', 12000 <- так как сравнение по model, а она есть в "кэше"
