

// Database:-

// - To list all databases 
// > show dbs; 

// - to select/create a database 
// > use databasename
// > use morningdb

// - to view current selected database 
// > db 

// - to delete the database 
// > db.dropDatabase()




// Collection :- 


// - to list all collections of a database 
// > show collections; 

// - to create a collection 
// There are two ways to create collections 

// 1. using createCollection()

// > db.createCollection("users")


// 2. by inserting a document 
// > db.employees.insert({name:"Topper Skills",mobile:"7875580668",city:"Pune"})

// - to remove the collection 
// > db.collectionname.drop()
// >db.users.drop()




// Documents:- 

// There are three methods to insert the document in the collection 
// 1. insertOne()
//   insert only one document

//   > db.employees.insertOne(
//     {name:"aaaa",mobile:"1111111111","city":"Pune", salary:1000,age:10}
//     )



// 2. insertMany() 

// > db.employees.insertMany([
//   {name:"bbbb",mobile:"2222222222","city":"Pune", salary:1000,age:10},
//   {name:"cccc",mobile:"3333333333","city":"mumbai", salary:2000,age:20},
//   {name:"dddd",mobile:"4444444444","city":"Pune", salary:3000,age:30},
// ])


// 3. insert()

// > db.employees.insert( {name:"eeeeee",mobile:"5555555555","city":"nashik", salary:4000,age:40})

// > db.employees.insert([
//    {name:"fffff",mobile:"666666666","city":"nashik", salary:5000,age:40},
//    {name:"ggggg",mobile:"7777777777","city":"mumbai", salary:6000,age:50},
//    {name:"hhhhhh",mobile:"888888888","city":"pune", salary:7000,age:60},
// ])




// Remove the documents :-

// to remove a document having name 'aaaa'
// > db.collectionname.remove(filter)
// > db.employees.remove({name:"aaaa"})

// - to delete all 
// > db.employees.remove({})


// Updating the documents:- 

// update(filter, doc, options)

// - add a field 'country' to the employee having name 'bbbb'
// > db.employees.update({name:"bbbb"},{country:"India"})
// > db.employees.update({name:"cccc"},{$set:{country:"India"}})

// - remove a field from the document 
// > db.employees.update({name:"cccc"},{$unset:{country:"India"}})

// - add country field in all the documents 
// > db.employees.update({},{$set:{country:"India"}})
// > db.employees.update({},{$set:{country:"India"}},{multi:true})

// - rename the mobile field to phone
// > db.employees.update({},{$rename:{"mobile":"phone"}},{multi:true})


// Update  or Insert  = upsert
// > db.employees.update({name:"iiii"},{$set:{country:"India"}},{upsert:true})




// Fetching the documents:-
// -> db.collectionname.find(filter)

// - fetch all the documents 
// > db.employees.find()

// - fetch all employees from pune 
// > db.employees.find({city:/Pune/i})

// - find total number of documents 
// count()
// > db.employees.find().count()

// - find total number of employees from mumbai city 
// > db.employees.find({city:/mumbai/i}).count()

// $gt - Greater than 
// $gte - Greater than and equals to 
// $lt - less than
// $lte - less than or equals to 
// $ne - not equals to 

// - find all the employees having salary less than 4000
// > db.employees.find({salary:{$lt:4000}})

// - find all the employees having salary between 2000 and 4000
// > db.employees.find({salary:{$gt:2000,$lt:4000}})

// - find all the employees from pune or nashik cities 
// > db.employees.find({$or:[{city:/pune/i},{city:/nashik/i}]})

// > db.employees.find({city:{$in:["pune","nashik"]}})

// Sorting the documents result:-
// > db.employees.find().sort({name:1})

// limit(number)
// skip(number)

// - fetch only 2 employees 
// > db.employees.find().limit(2)

// - find higest paid employee
// > db.employees.find().sort({salary:-1}).limit(1)

// - find second higest paid employee
// > db.employees.find().sort({salary:-1}).skip(1).limit(1)


// Projections:-

// > db.employees.find({},{_id:1,name:1})

