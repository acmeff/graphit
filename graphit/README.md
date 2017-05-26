# Graphit

[Go to live site][heroku]

[heroku]:https://ancient-taiga-42028.herokuapp.com/#/

Graphit is a data visualization application inspired by [Chartio][chartio]. It allows users to generate many formats of charts and graphs based on data that they provide.

[chartio]:https://chartio.com/

## Main features

### Upload & save data
  Graphit supports uploading csv files and saving the data for future use. Any files that are added by a user can be accessed and viewed from that user's account.

  ![viewing data](https://github.com/acmeff/graphit/blob/master/graphit/docs/screenshots/table-index.png "All data for a user")

  ![viewing data set](https://github.com/acmeff/graphit/blob/master/graphit/docs/screenshots/table-detail.png "Viewing single data table")


### Dynamically generating visualizations based on the uploaded data

  Types of charts available:
    + Line graphs
    + Bar graphs
    + Area graphs
    + Spline graphs
    + Pie charts
    + Donut charts
    
  ![create graph](https://github.com/acmeff/graphit/blob/master/graphit/docs/screenshots/create-graph.png "Creating a new graph based on user's data set")

## Technologies & Dependencies
    Graphit is a single page application built with a Ruby on Rails backend (v5.0.3), a React.js (v15.5.4) front end, and a PostgreSQL database.


  + Data visualizations uses C3.js
  + CSV parsing uses PapaParse
  + uploading Things
  + tables
