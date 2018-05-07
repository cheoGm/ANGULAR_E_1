var async = require('asyncawait/async');
var await = require('asyncawait/await');
var snippetModel = require(__base + 'server/model/snippet');

function getSnippets() {
    var users = await(snippetModel.find({}));
    return users;
}

function getSnippet(id) {
    var user = await(snippetModel.findOne({_id:id}));
    return user;
}

function deleteSnippet(id) {
    var user = await(snippetModel.remove({_id:id}));
    return user;
}

function updateSnippet(snippetParam) {
    var user = await(snippetModel.update({_id:snippetParam._id},snippetParam));
    return user;
}

function addSnippet(snippetParam) {
    var user = await(snippetModel.create(snippetParam));
    return user;
}

module.exports = {
    getUsers: async(getSnippets),
    getUser: async(getSnippet),
    deleteUser: async(deleteSnippet),
    updateUser: async(updateSnippet),
    addUser: async(addSnippet)
};