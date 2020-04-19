/*
* Фасад - призван создавать более простой интерфейс для взаимодействия с другими классами (пример: jQuery)
* */

class Complaints {
  constructor () {
    this.complaints = []
  }

  replay (complaint) {}

  get getComplaints () {
    return this.complaints
  }

  add (complaint) {
    this.complaints.push(complaint)

    return this.replay(complaint)
  }
}

class ProductComplaints extends Complaints {
  replay ({ id, customer, detail }) {
    return `Product: ${id}: ${customer} (${detail})`
  }
}

class ServiceComplaints extends Complaints {
  replay ({ id, customer, detail }) {
    return `Service: ${id}: ${customer} (${detail})`
  }
}

class ComplaintRegistryFacade {
  register (customer, type, detail) {
    const id = Date.now()
    let complaint

    if (type === 'service') {
      complaint = new ServiceComplaints()
    } else if (type === 'product') {
      complaint = new ProductComplaints()
    }

    return complaint.add({ id, customer, detail })
  }
}

const registry = new ComplaintRegistryFacade()

console.log(registry.register('Artem', 'service', 'Медленный заказ'))
console.log(registry.register('Mary', 'product', 'Остывшая пицца'))
