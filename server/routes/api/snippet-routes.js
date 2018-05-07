'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getSnippet(request, response) {
    console.log('GET Snippet');
    var result;
    try {
        result = await (service.snippetService.getSnippet(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteSnippet(request, response) {
    console.log('DELETE Snippet');
    var result;
    try {
        result = await (service.snippetService.deleteSnippet(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateSnippet(request, response) {
    console.log('UPDATE Snippet');
    var result;
    try {
        result = await (service.snippetService.updateSnippet(request.body));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postSnippet(request, response) {
    console.log('POST Snippet...',request.body);
    var result;
    try {
        result = await (service.snippetService.postSnippet(request.body));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        console.log("error...")
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getSnippet));
routes.get('/', async(getSnippet));
routes.delete('/:id', async(deleteSnippet));
routes.put('/:id', async(updateSnippet));
routes.post('/', async(postSnippet));

module.exports = routes;