class CompaniesController < ApplicationController

  # TODO: Remove this if we get hella companies obv
  def index
    render json: {
      data: Company.all.map { |c| c.as_json(include: :industry) }
    }
  end

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