'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var snippetRsrc = require(__base + 'server/infrastructure/resources').snippet;

function getSnippet(id) {
    var result;
    console.log('get snippet by ' + id);
    try {
        if(id){
            result = await (snippetRsrc.getUser(id));
        } else {
            result = await (snippetRsrc.getUsers());
        }
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { user: result };
}

function updateSnippet(user) {
    var result;
    console.log('update snippet by ' + user._id);
    try {
        result = await (snippetRsrc.updateUser(user));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { user: result };
}

function deleteSnippet(id) {
    var result;
    console.log('delete snippet by ' + id);
    try {
        result = await (snippetRsrc.deleteUser(id));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { user: result };
}

function postSnippet(user) {
    var result;
    console.log('post snippet service',user);
    try {
        result = await (snippetRsrc.addUser(user));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { user: result };
}

module.exports.getSnippet = async(getSnippet);
module.exports.updateSnippet = async(updateSnippet);
module.exports.deleteSnippet = async(deleteSnippet);
module.exports.postSnippet = async(postSnippet);