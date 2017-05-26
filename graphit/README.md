# Graphit

[Go to live site][heroku]

[heroku]:https://ancient-taiga-42028.herokuapp.com/#/

Graphit is a data visualization application inspired by [Chartio][chartio]. It allows users to upload data to be easily turned into visually-pleasing graphs and charts.

[chartio]:https://chartio.com/

## Main features

### Upload & save data sets
Graphit supports uploading csv files and saving the data for future use. As the files are uploaded, they are parsed into JSON to be stored in the database.


Any files that are added by a user can be accessed and viewed from that user's account. The JSON data is retrieved from the database and displayed in a table for the user to see.

![viewing data](https://github.com/acmeff/graphit/blob/master/graphit/docs/screenshots/table-index.png "All data for a user")


### Generate data visualizations
Saved data sets are used to create charts and graphs, which can then be saved and shared.
A graph can be created from any one of the user's uploaded data sets. Once they have selected a data set to work with, that table is retrieved from the database so that the JSON can be manipulated into the correct format to create the graph.

The graphs are generated based on the user's input. They can then select a format to start with, along with which slices of data they want to include in the graph they are creating.

![input data](https://github.com/acmeff/graphit/blob/master/graphit/docs/screenshots/graph-input.png "Select data for a graph")![graph](https://github.com/acmeff/graphit/blob/master/graphit/docs/screenshots/graph-preview.png "See current state of graph")

Once the initial graph has be generated, the user may toggle between formats and data sets and view their changes before saving the graph.

 Types of charts available:
 + Line graphs
 + Bar graphs
 + Area graphs
 + Spline graphs
 + Pie charts
 + Donut charts

 ![create graph](https://github.com/acmeff/graphit/blob/master/graphit/docs/screenshots/create-graph.png "Creating a new graph based on user's data set")

All saved graphs may be displayed from the user's account, and any graph may be shared with another user.

![bar graph](https://github.com/acmeff/graphit/blob/master/graphit/docs/screenshots/bar-detail.png "Bar graph")![pie chart](https://github.com/acmeff/graphit/blob/master/graphit/docs/screenshots/pie-detail.png "Pie chart")





## Technologies & Dependencies
  Graphit is a single page application built with a Ruby on Rails, React/Redux, and PostgreSQL database.


  + Data visualizations uses C3.js
  + CSV parsing uses PapaParse
  + uploading Things
  + tables
