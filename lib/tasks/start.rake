task :start do
      exec 'foreman start -p 3000'
end

desc "Seed sample data -- created March 19, 2017"
task :seed_data => :environment do
  ActiveRecord::Base.transaction do
    tech_industry = Industry.create name: "Tech"

    company = Company.create name: "Google",
                             industry_id: tech_industry.id,
                             founding_date: Date.parse('04-09-1998')

    business_unit = BusinessUnit.create name: "Google Maps",
                                        company_id: company.id

    user = User.create name: "Vincent Vo",
                       email: "vincent.vo@gmail.com",
                       password: "vincent"

    metric_name = MetricName.create name: "Avg salary per role"

    metric_type = MetricType.create name: "Org"

    function = Function.create name: "Engineering"

    metric = Metric.create metric_name_id: metric_name.id,
                           metric_type_id: metric_type.id,
                           function_id: function.id,
                           user_id: user.id,
                           company_id: company.id,
                           industry_id: tech_industry.id,
                           business_unit_id: business_unit.id,
                           value: 120000,
                           value_description: "dollars",
                           geo: "US",
                           relevant_date: Date.parse('19-03-2017')
  end
end
