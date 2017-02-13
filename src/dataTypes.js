'use strict'
module.exports =  {
dataTypes : function(arg) {
    if (typeof arg === null) {
      return 'no value'
    } else if (typeof arg === undefined ) {
      return 'no value'
    } else if (typeof boolean === true) {
      return true
    } else if (typeof boolean === false) {
      return false
    } else if (arg === typeof number && arg < 100) {
      return 'less than 100'
    } else if ( arg === typeof number && arg > 100) {
      return 'more than 100'
    } else if (arg === typeof '') {
      return 0
    } else if ( arg === typeof string) {
      return arg.length 
    } else if (arg === typeof array) {
      return array[2]
    } else if (arg === typeof array && arg < array[2]) {
      return undefined
    } else if (arg === typeof array && arg === []) {
      return undefined
    } else if (arg === typeof function() {}){
      return 'called callback'
    }
  }
}