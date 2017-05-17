@tables.each do |table|
  json.set! table.id do
    json.extract! table, :title, :id
end
