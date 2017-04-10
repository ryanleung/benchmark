desc "Seed sample data -- last updated April 8, 2017"
task :seed_data => :environment do
  ActiveRecord::Base.transaction do
    tech_industry = Industry.create name: "Tech"
    user = User.create name: "Vincent Vo",
                       email: "vincent.vo@gmail.com",
                       password: "vincent"
    avg_salary_per_role = MetricName.create name: "Average salary per role"
    metric_type_org = MetricType.create name: "Org"
    function = Function.create name: "Engineering"


    # COMPANY 1: GOOGLE
    company = Company.create name: "Google",
                             industry_id: tech_industry.id,
                             url: "www.google.com",
                             city: "Mountain View",
                             state: "CA",
                             logo_img_url: "https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png"

    business_unit = BusinessUnit.create name: "Google Maps",
                                        company_id: company.id

    metric = Metric.create metric_name_id: avg_salary_per_role.id,
                           metric_type_id: metric_type_org.id,
                           function_id: function.id,
                           user_id: user.id,
                           company_id: company.id,
                           industry_id: tech_industry.id,
                           business_unit_id: business_unit.id,
                           value: 120000,
                           value_description: "dollars",
                           geo: "US",
                           relevant_date: Date.parse('19-03-2017')

    # COMPANY 2: DROPBOX
    company = Company.create name: "Dropbox",
                             industry_id: tech_industry.id,
                             url: "www.dropbox.com",
                             city: "San Francisco",
                             state: "CA",
                             logo_img_url: "https://media.glassdoor.com/sql/415350/dropbox-squarelogo-1400485499977.png"

    business_unit = BusinessUnit.create name: "Dropbox For Business",
                                        company_id: company.id

    metric = Metric.create metric_name_id: avg_salary_per_role.id,
                           metric_type_id: metric_type_org.id,
                           function_id: function.id,
                           user_id: user.id,
                           company_id: company.id,
                           industry_id: tech_industry.id,
                           business_unit_id: business_unit.id,
                           value: 120000,
                           value_description: "dollars",
                           geo: "US",
                           relevant_date: Date.parse('19-03-2017')

    # COMPANY 3: SQUARE
    company = Company.create name: "Square",
                             industry_id: tech_industry.id,
                             url: "www.squareup.com",
                             city: "San Francisco",
                             state: "CA",
                             logo_img_url: "https://media.glassdoor.com/sql/422050/square-squarelogo-1481161604552.png"

    business_unit = BusinessUnit.create name: "Square Capital",
                                        company_id: company.id

    metric = Metric.create metric_name_id: avg_salary_per_role.id,
                           metric_type_id: metric_type_org.id,
                           function_id: function.id,
                           user_id: user.id,
                           company_id: company.id,
                           industry_id: tech_industry.id,
                           business_unit_id: business_unit.id,
                           value: 120000,
                           value_description: "dollars",
                           geo: "US",
                           relevant_date: Date.parse('19-03-2017')

    # COMPANY 4: FACEBOOK
    company = Company.create name: "Facebook",
                         industry_id: tech_industry.id,
                         url: "www.facebook.com",
                         city: "Menlo Park",
                         state: "CA",
                         logo_img_url: "https://media.glassdoor.com/sql/40772/facebook-squarelogo-1381810479272.png"

    business_unit = BusinessUnit.create name: "Messenger",
                                        company_id: company.id

    metric = Metric.create metric_name_id: avg_salary_per_role.id,
                           metric_type_id: metric_type_org.id,
                           function_id: function.id,
                           user_id: user.id,
                           company_id: company.id,
                           industry_id: tech_industry.id,
                           business_unit_id: business_unit.id,
                           value: 120000,
                           value_description: "dollars",
                           geo: "US",
                           relevant_date: Date.parse('19-03-2017')

    # COMPANY 5: Lyft
    company = Company.create name: "Lyft",
                         industry_id: tech_industry.id,
                         url: "www.lyft.com",
                         city: "San Francisco",
                         state: "CA",
                         logo_img_url: "https://media.glassdoor.com/sql/700614/lyft-squarelogo-1470951814636.png"

    business_unit = BusinessUnit.create name: "Dispatch",
                                        company_id: company.id

    metric = Metric.create metric_name_id: avg_salary_per_role.id,
                           metric_type_id: metric_type_org.id,
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
