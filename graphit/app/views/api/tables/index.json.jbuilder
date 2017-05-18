@tables.each do |table|
  json.set! table.id do
    json.extract! table, :title, :id
    json.columns table.content["0"].keys
  end
end
