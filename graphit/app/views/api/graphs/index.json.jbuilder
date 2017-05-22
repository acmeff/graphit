@graphs.each do |graph|
  json.set! graph.id do
    json.title graph.title
    json.id graph.id
  end
end
