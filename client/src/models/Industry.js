class Industry {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static from_json(json) {
    var industry = new Industry()
    industry.id = json.id
    industry.name = json.name
    return industry
  }
}

export default Industry;