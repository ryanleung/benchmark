class MetricsController < ApplicationController

  # Fetch all metrics for a given company
  def index
    metrics = Metric.where(company_id: params[:company_id])
    if metrics.blank?
      render(
        json: {
          error: {
            code: 404,
            message: "No metrics found for company",
            errors: {
              message: "No metrics found for company"
            }
          }
        })
      return
    end

    render json: {
      data: {
        kind: Metric.name,
        items: metrics.map { |m| m.as_json(include: [:metric_name, :metric_type, :function]) }
      }
    }
  end
end