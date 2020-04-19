/*
* Chain of responsibility - chaining контекста
* */

class MySum {
  constructor (initialValue = 10) {
    this.sum = initialValue
  }

  add (value) {
    this.sum += value

    return this
  }
}

const sum = new MySum(5)

console.log(sum.add(5).add(3).add(6).add(17).sum)
