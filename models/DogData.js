'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var dogDataSchema = Schema( {
  //ownerId: ObjectId,
  name: String,
  age: Number,
  createdAt: Date,
} );

module.exports = mongoose.model( 'DogData', dogDataSchema );
