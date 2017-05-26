# Graphit

[Go to live site][heroku]

[heroku]:https://ancient-taiga-42028.herokuapp.com/#/

Graphit is a data visualization application inspired by [Chartio][chartio]. It allows users to generate many formats of charts and graphs based on data that they provide.

[chartio]:https://chartio.com/

## Main features

### Upload & save data
Graphit supports uploading csv files and saving the data for future use. Any files that are added by a user can be accessed and viewed from that user's account.

![viewing data](https://github.com/acmeff/graphit/blob/master/graphit/docs/screenshots/table-index.png "All data for a user")


### Generate visualizations based on the uploaded data
Users can use their saved data to create and save charts and graphs, which they can then share with other users.

The graphs are generated based on the user's input. A graph can be created from any one of the user's uploaded data sets. They can then select a format to start with, along with which slices of data they want to include in the graph they are creating. Once the initial graph has be generated, the user may toggle between formats and data sets and view their changes before saving the graph.

![create graph](https://github.com/acmeff/graphit/blob/master/graphit/docs/screenshots/create-graph.png "Creating a new graph based on user's data set")

All saved graphs may be displayed from the user's account, and any graph may be shared with another user.

![bar graph](https://github.com/acmeff/graphit/blob/master/graphit/docs/screenshots/bar-detail.png "Bar graph")![pie chart](https://github.com/acmeff/graphit/blob/master/graphit/docs/screenshots/pie-detail.png "Pie chart")



  Types of charts available:
  + Line graphs
  + Bar graphs
  + Area graphs
  + Spline graphs
  + Pie charts
  + Donut charts


## Technologies & Dependencies
  Graphit is a single page application built with a Ruby on Rails, React/Redux, and PostgreSQL database.


  + Data visualizations uses C3.js
  + CSV parsing uses PapaParse
  + uploading Things
  + tables
