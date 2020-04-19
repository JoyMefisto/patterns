class Server {
  constructor (name, ip) {
    this.name = name
    this.ip = ip
  }

  getUrl () {
    return `http://${this.ip}:80`
  }
}

const aws = new Server('AWS German', '82.91.34.50')

console.log(aws.getUrl())
