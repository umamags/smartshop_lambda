console.log('Loading function');
exports.handler = function(event, context) {
	var date = new Date().toDateString();
	context.succeed("Hello " + event.username + "! Today's date is " + date);
};
