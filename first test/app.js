function myFunction() {
	console.log("Rodolfo");
}

/*var worker = new Worker('doWork.js');

worker.addEventListener('message', function(e) {
  console.log('Worker said: ', e.data);
}, false);

/*
When postMessage() is called from the main page, our worker handles 
that message by defining an onmessage handler for the message event. 
The message payload (in this case 'Hello World') is accessible in 
Event.data. Although this particular example isn't very exciting, it 
demonstrates that postMessage() is also your means for passing data back 
to the main thread. Convenient!

worker.postMessage('Hello World'); // Send data to our worker.*/