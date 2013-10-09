/*global module*/
(function(){

    'use strict';

    var config = module.exports;

    config['Browser modules'] = {

        environment : 'browser',

        sources : [
            'hello.js'
        ],

        tests : [
            'hello.tests.js'
        ]
    };
}());