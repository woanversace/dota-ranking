var _ = require('underscore');

var arr = [ "one", "two", "three", "four", "five" ];

var obj = {
	firstname: "John",
	lastname: "Doe",
	age: 50
};

_.each(arr, function(value, key, list) {
	console.log(key, value);
});

_.each(obj, function(value, key, list) {
	console.log(key, ':', value);
});