## Component Hierarchy

**AuthFormContainer**
 - AuthForm
  - *props: session*

**GraphIndexContainer**
 - GraphIndex
 - Sidebar
 - *props: graphs, getGraphs*

**GraphContainer**
 - Graph
 - *props: graphDetail, getGraph*

**CreateGraphContainer**
 - CreateGraph
  - Input
  - Preview
  - *props: tables, createGraph*

**UploadDataContainer**
 - UploadData
 - *props: createDataTable*

**ShareContainer**
 - Share
  - SearchUsers
  - SearchUsersResults
  - *props: getUsers, addUserGraph*

**DataTableIndexContainer**
 - DataTableIndex
 - Sidebar
 - *props: tables, getTables*

**DataTableContainer**
 - DataTable
 - *props: tableDetail, getTable*

**NavContainer**
 - Nav
 - *props: session*



## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthFormContainer" |
| "/signin" | "AuthFormContainer" |
| "/graphs" | "GraphIndexContainer" |
| "/graphs/:graphId" | "GraphContainer" |
| "/tables" | "DataTableIndexContainer" |
| "/tables/:tableId" | "DataTableContainer"
| "/new-graph" | "CreateGraphContainer" |
| "/new-data" | "UploadDataContainer" |
| "/graphs/:graphId/share" | "ShareContainer" |
