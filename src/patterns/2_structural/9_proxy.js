/*
* proxy - позволяет ставить ловушки на поля объектов, на вызов функции, что позволяет гибко определять работу приложения (избавление от лишних запросов на сервер)
* */

function networkFetch (url) {
  return `${url} - ответ от сервера`
}

const cache = new Set()
const proxiedFetch = new Proxy(networkFetch, {
  apply (target, thisArg, args) {
    const url = args[0]

    if (cache.has(url)) {
      return `${url} - ответ из кэша`
    }

    cache.add(url)
    return Reflect.apply(target, thisArg, args)
  }
})

console.log(proxiedFetch('vue.io'))
console.log(proxiedFetch('react.io'))
console.log(proxiedFetch('vue.io'))
