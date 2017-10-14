/* # **Instructions**

* Using the previous example as a guide, create an app that has two web servers.
* One that listens on port 7000 and one that listens on port 7500.
* The one listening on port 7000 will always tell the user something good about themselves.
* The one listening on 7500 will always tell the user something bad about themselves.
* Make sure you create a Github repo and commit this code!

**Bonus**

* Look for other ways to expand what your server can do. As possibilities:
  * Generate the good/bad phrase randomly from a list of predefined phrases
  * Use the `twitter` package inside the response to also return a random tweet

*/

// Require/import the HTTP module
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You rock!  You are SUPER AWESOME!'); //write a response to the client
  res.end(); //end the response
}).listen(7000); //the server object listens on port 7000

http.createServer(function (req, res) {
  res.write('Meh.  You are kind of a dum dum'); //write a response to the client
  res.end(); //end the response
}).listen(7500); //the server object listens on port 7000