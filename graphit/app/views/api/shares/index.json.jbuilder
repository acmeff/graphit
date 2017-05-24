@user.shares.each do |share|
  json.set! share.graph.id do
    json.title share.graph.title
    json.id share.graph.id
    json.format share.graph.format == 'spline' ? 'line': share.graph.format
    json.tableId share.graph.table_id
    json.sharerName share.sharer.username
  end
end
