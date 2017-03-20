import Industry from './Industry'

class Company {
  constructor(id, name, industry, founding_date) {
    this.id = id;
    this.name = name;
    this.industry = industry;
    this.founding_date = founding_date;
  }

  static from_json(json) {
    var company = new Company()
    company.id = json.id
    company.name = json.name
    company.industry = Industry.from_json(json.industry)
    company.founding_date = json.founding_date
    return company
  }
}

export default Company;