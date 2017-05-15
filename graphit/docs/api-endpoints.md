# API Endpoints

## HTML API

### Root

- `GET /`

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Graphs

- `POST /api/graphs`
- `GET /api/graphs`
- `GET /api/graphs/:id`
- `DELETE /api/graphs/:id`

### Tables

- `POST /api/tables`
- `GET /api/tables`
- `GET /api/tables/:id`
- `DELETE /api/tables/:id`

### user_graphs
- *includes param indicating if the user is the creator/owner of the graph*
- `POST /api/user_graphs`
