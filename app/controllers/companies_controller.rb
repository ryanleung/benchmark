class CompaniesController < ApplicationController

  # Using json style guide https://google.github.io/styleguide/jsoncstyleguide.xml
  def show
    company = Company.find_by_id(params[:id])
    if company.blank?
      render(
        json: {
          error: {
            code: 404,
            message: "Company not found",
            errors: {
              message: "Company not found"
            }
          }
        })
      return
    end

    render json: {
      data: company.as_json(include: :industry)
    }
  end
end