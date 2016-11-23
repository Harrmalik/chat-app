var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var findOrCreate = require('mongoose-findorcreate');

var userSchema = new Schema({
    displayName: String,
    loginMethods: [{
      provider: {type: String, default: "Local"},
      id: String
    }],
    password: String, //hash created from password
    createdAt: {type: Date, default: Date.now},
    lastLogged: {type: Date, default: Date.now},
    avatar: String,
    followers: [String],
    follows: [String],
    posts: [{
        id: {type: Schema.Types.ObjectId, unique: true},
        createdAt: {type: Date, default: Date.now},
        text: String,
        likes: Number
    }]
});

//declare a model called user for the user collection
userSchema.plugin(findOrCreate);
mongoose.model('User', userSchema);
