# Eat-Da-Burger

## Overview

A simple app using Node and Express with persistent data through MySQL. HTML is generated dynamically using Handlebars.

### What It Does

Users enter the name of a burger and click the 'submit' button. Once clicked, the value of their submission is entered into the MySQL database as a new burger. Through the use of API routes and manually created ORMs, the new burger is given HTML elements with Handlebars and generated onto the DOM. Among these HTML elements, is a 'DEVOUR' button, which, when clicked, will change the value of the corresponding data key and regenerate the burger onto the opposite side of the page.

### How It Is Useful

* It allows users to track the types of burgers they have devoured, or wish to devour.

* It serves as an excellent resource to those aspiring to create the next award-winning burger menu.

* It satisfies that urge some folks have to play a really terrible video game.

### Getting Started

1. Get hungry.

2. Click the link.

3. Tell a friend.

## File Structure

(Something like this)

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

- - -

### Who Created It?

This app was created by Jonathon Moore at the University of Minnesota in 2018. 