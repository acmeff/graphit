## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**GraphIndexContainer**
 - GraphIndex
 - Sidebar

**GraphContainer**
 - Graph

**CreateGraphContainer**
 -CreateGraph
  + Input
  + Preview

**UploadDataContainer**
 - UploadData

**ShareContainer**
 - Share
  + SearchUsers
  + SearchUsersResults

**DataTableIndexContainer**
 - DataTableIndex
 - Sidebar

**DataTableContainer**
 - DataTable

**Nav**
 - NewNotebook



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
