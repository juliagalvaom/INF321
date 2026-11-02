defmodule BirdCount do
  def today([]) do
    nil
  end

  def today([td | _res]) do
    td
  end

  def increment_day_count([]) do
    [1]
  end

  def increment_day_count([td | res]) do
    [td + 1 | res]
  end

  def has_day_without_birds?([]) do
    false
  end

  def has_day_without_birds?([0 | _res]) do
    true
  end

  def has_day_without_birds?([_ | res]) do
    has_day_without_birds?(res)
  end

  def total([]) do
    0
  end

  def total([td | res]) do
    td + total(res)
  end

  def busy_days([]) do
    0
  end

  def busy_days([td | res]) when td >= 5 do
    1 + busy_days(res)
  end

  def busy_days([_td | res]) do
    busy_days(res)
  end
end
