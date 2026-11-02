defmodule FreelancerRates do
  def daily_rate(hourly_rate) do
    hourly_rate * 8.0
  end

  def apply_discount(before_discount, discount) do
    discount = (discount / 100) * before_discount
    before_discount - discount
  end

  def monthly_rate(hourly_rate, discount) do
    monthly_before_discount = daily_rate(hourly_rate) * 22
    monthly_discounted = apply_discount(monthly_before_discount, discount)
    trunc(Float.ceil(monthly_discounted))
  end

  def days_in_budget(budget, hourly_rate, discount) do
    daily_with_discount = apply_discount(daily_rate(hourly_rate), discount)
    Float.floor(budget / daily_with_discount, 1)
  end
end
