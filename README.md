﻿# SERN_CRUD-App
 Goto client and server directory and hit npm install to install all the dependencies.
This is simple CRUD (create, read, update and delete) app.
You have to run both client(frontend) and server(backend).
npm start will run both in different terminals.
Server backend has only one file containing routes that are fetching data from database using mysql2.
Frontend Client has Home page that shows the all user details and has delete function there (axios.delete).
View Page is sending request to the backend for fetching data from db.
Add and Update page captured in one file. By identifing if the user wants to update or create new info.
If user is updating the data, then id comes with update request and we have else condition for handling this otherwise create info is case.
