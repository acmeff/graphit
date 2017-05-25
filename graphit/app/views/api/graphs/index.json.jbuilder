@graphs.each do |graph|
  if graph.format == 'spline'
    form = 'line'
  elsif graph.format == 'donut'
    form = 'donut'
  else
    form = graph.format
  end
  json.set! graph.id do
    json.title graph.title
    json.id graph.id
    json.format
    json.tableId graph.table_id
    json.format form
  end
end
