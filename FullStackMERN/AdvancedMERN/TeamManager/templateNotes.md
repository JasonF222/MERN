# MERN FULLSTACK Template #

## Bootstrap with React ##
_( You can install right away )_

Install ReactStrap (Bootstrap library for React):

```
npm install reactstrap react react-dom
```

Then - inside your root directory install bootstrap:

```
npm install --save bootstrap
```

## Server STARTUP Commands (Open 2 Terminals [ One for Client // One for Server ] ) ##

Client Server Command:

```
npm start
```

Server Command:

```
nodemon server.js
```

## Setting up application folder ##
---------
**MAKE SURE TO COPY/PASTE SERVER FOLDER STRUCTURE BEFORE WE BEGIN!**

install package.json file :

```
npm init -y
```

Install client suite with create react app :

```
npx create-react-app client
```

Install **mongoose**, **express**, **axios**, **cors** :

```
npm install mongoose, express, axios, cors
```

Install **react-router-dom** INSIDE client AND root directory :

```
npm install react-router-dom
```

## Server.js File ##

Create a server.js file in the **_ROOT DIRECTORY_** ( NOT INSIDE THE SERVER FOLDER STRUCTURE! ) then copy the following snippet into your server.js file:

```
const express = require('express');
const cors = require('cors')
const app = express();
require('./server/config/mongoose.config');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./server/routes/**YOURPROJECTNAMEHERE**.routes')(app);

app.listen(8000, () => {console.log('Listening on Port: 8000')});
```
## Server Folder Snippets ##

- Config Folder --> ( mongoose.config.js ) :

```
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/YOUR_DB_NAME_HERE!!!!", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
```

- Models Folder --> ( EXAMPLE.model.js ) :

```
const mongoose = require('mongoose');

const EXAMPLESchema = mongoose.Schema({
    // build the object here to store in the DB
    name: {type: String}
    // type can be String, Number, Double, Boolean, Timestamp, Date, Regex(probably not gonna use), see docs for more
}, {timestamps: true});

module.exports.EXAMPLE = mongoose.model('EXAMPLE', EXAMPLESchema);
```

- Controllers Folder --> ( EXAMPLE.controller.js )

```
const { EXAMPLE } = require('../models/EXAMPLE.model');
const { response } = require('express');
const { useParams } = require('react-router-dom');

// here we do our exports for the different functions we want to access in the db
// create, update, ect.

module.exports.createEXAMPLE = (request, response) => {
    // name our function (above), then set keys for the parts of the form we will be recieving (below)
    const { name } = request.body;
    // in this case we are only accepting a name, however we could add more separated with a comma
    // example: {name, age, birthday} = request.body;
    // this will allow us to identify each when we create our object to send to the db
    EXAMPLE.create({
        // this will be the DB query we send to mongoDB.  see the mongoose section in learn to find proper syntax
        name
        // we are only sending 1 key through, extra keys would be separated with a comma and on a new line
    })
    .then(EXAMPLE => response.json(EXAMPLE))
    // here we are setting our response to be an object which we created above (this one only has name)
    .catch(err => response.json(err));
    // here we are setting any error to become a json object and return that object if there is a problem with the request.
};

module.exports.updateEXAMPLE = (request, response) => {
    EXAMPLE.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    // the above .findOne.. needs to match exactly as it is a mongoose query
    // we are grabbing the _id key from our params (web address), sending in the new info from the request body(what was in the form)
    // then we are saying if the information is new we need to update (new : true)
    .then(updateEXAMPLE => response.json(updateEXAMPLE))
    .catch(err => response.json(err));
};

module.exports.getAllEXAMPLES = (request, response) => {
    // below we pass an empty object because mongoose will return as many results as possible
    EXAMPLE.find({})
    // now we set the response to a json object with all our EXAMPLES in it
    .then(EXAMPLEs => response.json(EXAMPLES))
    .catch(err => response.json(err));
};

module.exports.getOneEXAMPLE = (request, response) => {
    // here we will only get 1 EXAMPLE, so we need the id!
    EXAMPLE.findOne({_id: request.params.id})
    // passing in the ID from params
    .then(oneEXAMPLE => response.json(oneEXAMPLE))
    // this sends the EXAMPLE back to the whereever it was requested from as an object
    .catch(err => response.json(err));
};

module.exports.deleteEXAMPLE = (request, response) => {
    EXAMPLE.findOneAndDelete({_id: request.params.id})
    // again we pass the id from params (the webaddress)
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err));
};

// this is the basic crud controller.  Be sure to reference where the data is coming from when you pass it into the query
// ie:(params, request.body, ect), this will prevent you from getting db errors
```

- Routes folder --> ( EXAMPLE.routes.js ) :

```
const EXAMPLEController = require('../controllers/EXAMPLE.controller');
const { EXAMPLE } = require('../models/EXAMPLE.model');

module.exports = function(app){
    // here we are going to add all the routes for our frontend to call for
    // all of these routes should start with api to signify that they're not going to render any data
    // instead these routes will be returning some type of object as a response(see controller file)
    // this response will be given to the react component that calls this url with axios.get

    app.post('/api/EXAMPLEs/create', EXAMPLEController.createEXAMPLE);
    // this needs to be a post so that we can send the data to be stored in the db

    app.get('/api/EXAMPLEs', EXAMPLEController.getAllEXAMPLEs);
    // this is a get route(remeber that now we have to use .put/.delete ect to specify!)

    app.get('/api/EXAMPLEs/:id', EXAMPLEController.getOneEXAMPLE);
    // the :id signifies we are passing a parameter to be used by the controller (params.req.id)

    app.put('/api/EXAMPLEs/edit/:id', EXAMPLEController.updateEXAMPLE);
    // again we pass the id, but we must make sure to use .put for updates (see Express(httpVerbs, httpMethods) on learn for more info)

    app.delete('/api/EXAMPLEs/delete/:id', EXAMPLEController.deleteEXAMPLE);
    // here we use .delete so that we can tell the db to delete this.  we are also passing in the id.  PLEASE KNOW THIS SHIT BY NOW
};

// this is all basic crud routes (create, read, update, delete).
// notice there are two read routes (get all, get one).  you will always need both if you're going to list all for something
```

# CLIENT SIDE CONTENT BELOW #

### Update your index.js file with BrowserRouter : ###

```
import { BrowserRouter } from 'react-router-dom';
```
```
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

_Within Client Directory_ :

Create 2 folders:
- components
- views

### Components Folder ###

_This is where we create the "rooms" for our house ( the individual components )_

- Example of a component for a list ( AuthorList.js ) :

```
// this is going to show all the authors in the database, by making this a functional component we can show the list in any view we want.

import React, { useEffect, useState } from 'react';
// we can also import useState, or any other basic react function on the above line
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default () => {
    // this exports it via the filename without adding an export default at the bottom.
    
    const navigate = useNavigate();
    // this is how we make navigate a method to use

    const [authorList, setAuthorList] = useState([]);
    // we are setting the author list to an array so we can map it later
    const [loaded, setLoaded] = useState("");
    // this will allow us to display a loading screen while we wait for the api call
    // remember an empty string is also a false for useState

    const removeFromDom = (id) =>{
        // this is passing the id through 
        setAuthorList(authorList.filter(author => author._id != id));
        // this will filter the list so it no longer includes our id we passed through
        // by doing this we change state and re render our list without the deleted id
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => {
            setAuthorList(res.data);
            // here we take .data(the object returned by axios) and set it to our list in state
            setLoaded(true);
        })
        .catch(err => console.log(err));
        // this allows us to console log any error returned from the api call
    }, []);
    // the empty array above means it will only run this call upon mount.
    // if we set any other variable in there it will re run the api call when we change that variable

    const handleEdit = (id) =>{
        navigate('/authors/edit/' +  id);
        // this will send the user to the edit page and pass the id through params(it was passed into the function during map)
    }

    const handleDelete = (id) =>{
        axios.delete('http://localhost:8000/api/authors/delete/' + id)
        // we make the api call to delete and pass through the id
        .then( removeFromDom(id) )
        // we are calling on the prop function to remove from dom here
        .catch(err => console.log(err));
    }


    return(
        <>
            {
                loaded ?
                // see ternery operators( ? is the if true) all ternery go in brackets!!
                <table>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>   
                        {/* here we need to map our array we recieved from state/api call */}
                        {authorList.map((author, i) =>
                        <tr key={i}>
                            <td>{author.name}</td>
                            {/* here we make a data cell with the name of the author */}
                            <td><button onClick={ handleEdit(author._id) }>Edit</button><button onClick={ handleDelete(author._id)}>Delete</button></td>
                            {/* here we are making the next cell in the row have 2 buttons.  one will edit and one will delete(we need to pass thru the id of the author) */}
                        </tr>
                        )}
                    </thead>
                </table> :
                // don't forget the : to define the else
                <h2>Please wait while we gather the author list</h2>
            }
        </>
    )

}
```
## Views Folder ##

_This is where the house lives ( where the components go )_

- Example of a Main view file ( Main.js ) :

```

```