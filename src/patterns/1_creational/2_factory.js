class SimpleMembership {
  constructor (name) {
    this.name = name
    this.cost = 50
  }
}
class StandardMembership {
  constructor (name) {
    this.name = name
    this.cost = 250
  }
}
class PremiumMembership {
  constructor (name) {
    this.name = name
    this.cost = 500
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership
  }

  create (name, type = 'simple') {
    const Membership = MemberFactory.list[type]
    const member = new Membership(name)

    member.type = type
    member.define = function () {
      console.log(`${this.name} - ${this.type} : ${this.cost}`)
    }

    return member
  }
}

const factory = new MemberFactory()
const member = [
  factory.create('John', 'premium'),
  factory.create('Ann', 'standard'),
  factory.create('Erica', 'simple')
]

member.forEach(m => m.define())
