/*
* Структурные паттерны позволяют внедрять новый функционал, пир этом не ломая прошлый
* */
/*
* Адаптер - позволяет интегрировать старый интерфейс какого то класса в новый интерфейс, позволяет им работать совместно, при этом не ломаю приложение
* */

class OldCalc {
  operation (t1, t2, operation) {
    switch (operation) {
      case 'add': return t1 + t2
      case 'sub': return t1 - t2
      default: return NaN
    }
  }
}

class NewCalc {
  add (t1, t2) {
    return t1 + t2
  }

  sub (t1, t2) {
    return t1 - t2
  }
}

class AdapterCalc {
  constructor () {
    this.calc = new NewCalc()
  }

  operation (t1, t2, operation) {
    switch (operation) {
      case 'add': return this.calc.add(t1, t2)
      case 'sub': return this.calc.sub(t1, t2)
      default: return NaN
    }
  }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operation(10, 15, 'add'))

const newCalc = new NewCalc()
console.log(newCalc.add(10, 15))

const adapterCalc = new AdapterCalc()
console.log(adapterCalc.operation(10, 15, 'add'))
