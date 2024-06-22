//___________search -> Mongoosejs.com______________________ leaning from mongoose
const mongoose = require('mongoose'); //require MongoDB

//we create Asynchoronous fun which name is "main" In main function try to connect mongodb using Mongoose,
//Asynch. fun wait for Promise. It used two methods i) .then is like that callback and
// this callback when execute when callback is successfully resolved...otherwise catch method used... 

//_______ Establish connection with the help of Mongoose.....
main()
  .then(() => {
    console.log("SuccessFul result");
  })
  .catch((err) => {
    console.log(err)
  });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


//__________ Create First Schema...
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});


//__________ In Database Test > create new collection "User"...........
//__________ Schema actually convert into collection.
const User = mongoose.model("User", userSchema);
//__________ Terminal -> show dbs
//__________ Terminal -> show collections


//___________A.___Insert Data into MOdel. Its like a instance of Model. Which is called Document..
const user1 = new User({
  name: "Adam",
  email:"yahoo@gmail.com",
  age: 20,
});
user1.save();
//__________ Terminal -> db.users.find()
//__________ VS terminal->  node> .load index.js


//__________ create 2nd..
//___________A___Insert Data into MOdel. Its like a instance of Model. Which is called Document..
const user2 = new User({
    name: "Eve",
    email:"yahoo@gmail.com",
    age: 20,
  });
user2.save()
    .then((res)=>{ console.log(res);
  }).catch(err =>{ console.log(err);
});
//__________ Terminal -> db.users.find()
//__________ VS terminal->  node> .load index.js


//__________ A__Insert Many data
User.insertMany([
    {name: "Tony", email: "tony@gmail.com", age: 20},
    {name: "Peter", enail: "peter@gmail.com", age: 22},
    {name: "Bob", enail: "bob@gmail.com", age: 23},
    {name: "Jack", enail: "jack@gmail.com", age: 24},
    {name: "Mack", enail: "mack@gmail.com", age: 25},
    {name: "Nano", enail: "nano@gmail.com", age: 26},
]).then((res) => { 
    console.log( res);
});
//_________ Terminal -> db.users.find()
//__________ VS terminal->  node> .load index.js



//___________B__Read all the stored data.. 
User.find({})
    .then((res)=>{console.log(res);
  }).catch(err =>{console.log(err);  
  });


//__________B__Read data with some conditions using FindMany fun...
User.find({ age: { $gt: 24 } })
    .then((res) => {  console.log(res);
  }).catch(err =>{  console.log(err);
  });
//__________ VS terminal->  node> .load index.js


//___________B_Read data with some conditions using FindOne fun...
User.findOne ({ age: { $gt: 24 } })
    .then((res) => {  console.log(res);
  }).catch(err =>{  console.log(err);
  });
//__________ VS terminal->  node> .load index.js  


//_________B__Read data with some conditions using ID...
User.findOne ({_id: "6677039351d4ecd723bde5f4"})
    .then((res) => {  console.log(res);
  }).catch(err =>{  console.log(err);
  });
//__________ VS terminal->  node> .load index.js


//__________B__Read data with some conditions using FindById..
User.findById("6677039351d4ecd723bde5f4")
  .then((res) => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  });
//__________ VS terminal->  node> .load index.js


//__________C_Update data using UpdateOne fun..// BOB name ka user h uske age 27 kr do  23 se..
User.updateOne({ name: "Bob" }, { age: 27 })
.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
//__________ VS terminal->  node> .load index.js
//_________ Terminal -> db.users.find()


//__________C_Update data using UpdateMany fun..subki age 19 se bde to h hi unki 20 kr do..
User.updateMany({ age: { $gt: 19 } }, { age: 20 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
//__________ VS terminal->  node> .load index.js
//_________  Terminal -> db.users.find()


//__________ C_Update data using FindOneAndUpdate fun.
//__________ find onr userName data and Update age. Nano name ka user h uske age 27 se 23....
User.findOneAndUpdate({ name: "Nano" }, { age: 23 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
//_________  VS terminal->  node> .load index.js
//_________  Terminal -> db.users.find()


//________ C_Update data using FindOneAndUpdate fun. 
//________ But VS terminal not Show Updated data then used Options > new (new value by default "False")
//________ False value indicate that no updated data show, but we set to true....
User.findOneAndUpdate({ name: "Mack" }, { age: 25 },{ new: true})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//__________ VS terminal->  node> .load index.js
//_________ Terminal -> db.users.find()


//__________D_Delete data using DeleteOne fun.
User.deleteOne({ name: "Mack" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
//__________ VS terminal->  node> .load index.js
//_________ Terminal -> db.users.find()


//__________D_Delete data using DeleteOne fun.Delete all data whose age is 24.
User.deleteMany({ age: 24 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//__________ VS terminal->  node> .load index.js
//_________ Terminal -> db.users.find()


//__________D_Delete data using findByIdAndDelete fun. for show updated data.
User.findByIdAndDelete("6677136eeaa464237e73bfb0")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//__________ VS terminal->  node> .load index.js
//_________ Terminal -> db.users.find()