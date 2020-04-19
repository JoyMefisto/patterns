class MyIterator {
  constructor (data) {
    this.index = 0
    this.data = data
  }

  [Symbol.iterator] () {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false
          }
        } else {
          this.index = 0

          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  }
}

const iterator = new MyIterator(['This', 'is', 'iterator'])

for (const val of iterator) {
  console.log('Value: ', val)
}

/*
* Теперь напишем итератор с помощью генератора
* */

function * generator(collection) {
  let index = 0

  while (index < collection.length) {
    yield collection[index++]
  }
}
const gen = generator(['This', 'is', 'iterator'])

for (const val of gen) {
  console.log('Value gen: ', val)
}
/*
* OR с помощью next()
* */
const genCons = generator(['This', 'is', 'iterator'])

console.log(genCons.next().value)
console.log(genCons.next().value)
console.log(genCons.next().value)
console.log(genCons.next().value)
