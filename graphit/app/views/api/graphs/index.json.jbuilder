@graphs.each do |graph|
  json.set! graph.id do
    json.title graph.title
    json.id graph.id
    json.format graph.format == 'spline' ? 'line': graph.format
    json.tableId graph.table_id
  end
end
