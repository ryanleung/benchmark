import Industry from './Industry'

class Company {
  constructor(id, name, industry, url, city, state, logo_img_url) {
    this.id = id;
    this.name = name;
    this.industry = industry;
    this.url = url;
    this.city = city;
    this.state = state;
    this.logo_img_url = logo_img_url;
  }

  static from_json(json) {
    var company = new Company()
    company.id = json.id
    company.name = json.name
    company.industry = Industry.from_json(json.industry)
    company.city = json.city
    company.state = json.state
    company.logo_img_url = json.logo_img_url
    return company
  }
}

export default Company;