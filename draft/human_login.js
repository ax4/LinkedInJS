//ref: https://gist.github.com/emenoh/65708b03f1a99d92f14db9b0d60d8fd0
"use strict";
//var query_type = 'a'; 
//var query_kw = 'hao';

const Nightmare = require('nightmare');
const url = "https://www.linkedin.com/";
//just an example
//const path = "./testfile.png";
//we'll save the screenshot in the same directory
const userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10A5376e";
//make sure we load the mobile version
//const htmlToText = require('html-to-text');
//this is where the magic happens!
//create a custom action for Electron via NightmareJS API

Nightmare.action('emulateDevice',
  //define the action to run inside Electron
  function(name, options, parent, win, renderer, done) {
    // This task runs in the remote process
    parent.respondTo('emulateDevice', function(settings, done) {// <---- See settings
		win.webContents.on('did-finish-load', function(){
		  win.webContents.enableDeviceEmulation(settings);// Set settings here...
		});
		done();//call done
	});
    //call the action creation `done`
    done();//call done
  },
  // use the IPC child's `call` to call the action added to the Electron instance
  function(settings, done) {
  	console.log('emulateDevice', settings);
    this.child.call('emulateDevice', settings, done);
  });

  //here is our emulated device settings, basic iPhone 6 size here
  const mobilesettings = 	{
    screenPosition: 'mobile',
    screenSize: { width: 375, height: 667 },
    deviceScaleFactor: 0,
    viewPosition: { x: 0, y: 0 },
    viewSize: { width: 375, height: 667 },
    fitToView: false,
    offset: { x: 0, y: 0 }
  }
function login(user,pwd){
  //create a new instance of nightmare to use
  var nightmare = Nightmare({ show: true, webPreferences: {webSecurity:false,partition:"no"} });

	nightmare
	.then(function(){
		return nightmare
		.emulateDevice(mobilesettings)//here's our action called
	})
	.then(function(){
		return nightmare
		.useragent(userAgent)//load our ua string
		.goto(url)//load our url
    //.wait(".view-more-icon")
        .click(".link-login")
        //.wait(500)
        //.type("#login-email", user)
        //.wait(500)
        //.type("#login-password", pwd)
        //.wait(500)
        //.click("#login-submit")
        //.wait("#p")
    })
	.then(function() {
    	//nightmare.end(function() {
      	//console.log('\n\nDone with url:\n\n', url);
        //console.log('\n\n')
    	//})
    });
};

//visit("https://www.linkedin.com/jobs/view/312374265/")
//visit("https://www.linkedin.com/jobs/view/312374266/")
//visit("https://www.linkedin.com/jobs/view/312374267/")
//visit("https://www.linkedin.com/jobs/view/333013540")
//exports.visit = visit;
login("123","456")