# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## graphs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
owner_id    | integer   | not null, foreign key (references users), indexed
x_data      | json      | not null
y_data      | json      | not null
type        | string    | not null
table_id    | integer   | not null, foreign key, indexed

## tables
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
title       | string    | not null
content     | json      | not null


## graphings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed, unique
graph_id    | integer   | not null, foreign key, indexed
is_owner    | boolean   | not null 
