'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var snippetRsrc = require(__base + 'server/infrastructure/resources').snippet;

function getSnippet(id) {
    var result;
    console.log('get snippet by ' + id);
    try {
        if(id){
            result = await (snippetRsrc.getSnippet(id));
        } else {
            result = await (snippetRsrc.getSnippets());
        }
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { snippet: result };
}

function updateSnippet(user) {
    var result;
    console.log('update snippet by ' + user._id);
    try {
        result = await (snippetRsrc.updateSnippet(user));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { snippet: result };
}

function deleteSnippet(id) {
    var result;
    console.log('delete snippet by ' + id);
    try {
        result = await (snippetRsrc.deleteSnippet(id));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { snippet: result };
}

function postSnippet(user) {
    var result;
    console.log('post snippet service',user);
    try {
        result = await (snippetRsrc.addSnippet(user));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { snippet: result };
}

module.exports.getSnippet = async(getSnippet);
module.exports.updateSnippet = async(updateSnippet);
module.exports.deleteSnippet = async(deleteSnippet);
module.exports.postSnippet = async(postSnippet);