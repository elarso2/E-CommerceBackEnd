# E-CommerceBackEnd

[![MIT Badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/)

## Description

The goal of this assignment was to complete the backend files for an E-Commerce online shopping application. This backend application utilizes serveral models and their respective api routes to allow the user to add, update, delete, and get clothing categories, products, and item tags. In order to complete this application, it was necessary to create the models and their associations with each other. This is also the first application in which we have utilized the Dotenv package for increased security, as well as Sequelize package.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Routes

Several REST API route endpoints were created for this application. These include

```md
GET localhost:3001/api/model/
GET localhost:3001/api/model/:id
POST localhost:3001/api/model/
PUT localhost:3001/api/model/:id
DELETE localhost:3001/api/model/:id
```

The two GET routes allow the user to get either the full collection of Categories, Tags, or Products, or select one by id.
The POST route allows the user to create a new data entry for a model of their choosing, and requires a JSON request body entry.
The PUT route allows the user to update an entry based on an id, and requires a JSON request body entry.
The DELETE route allows the user to delete an entry based on its id.

## Demonstration

Gifs provided by my instructor can be viewed below, which give a depiction of the expected functionality of our completed programs.

![Gif1](./Assets/13-orm-homework-demo-01.gif)

![Gif2](./Assets/13-orm-homework-demo-02.gif)

![Gif3](./Assets/13-orm-homework-demo-03.gif)

A video demonstration of all my completed routes can be viewed [here](https://drive.google.com/file/d/1-ZGft5yOfgP3JPVx74e77rpijLf5KH1x/view).

The video can also be [downloaded](./Assets/E-Commerce%20Video%20Demonstration.webm).

## Dependencies

For this program, it is necessary to download the Express, MySQL2, Sequelize, and Dotenv packages.

## License

MIT License

Copyright (c) 2022 Elizabeth Larson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
