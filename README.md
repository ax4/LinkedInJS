# Welcome
This is a quick demo of how nightmare.js framework is used to spidering _LinkedIn Jobs Description_ on **a single node** with **single user account** logged-in. 

**Warning:** Use this demo code at your own risk! 

# Prepare 
Prepare your PC environment to _Node.js Ready_! Check Nodejs [https://nodejs.org/en/](https://nodejs.org/en/) for installation on your own. 

When your PC is _Node.js Ready_, you have 2 important command in your lifetime Node.js journey: 

```bash
npm install XXXX  #THIS is used to install a package

node XXXX.js #THIS is used to run a Node.js script
nodejs XXXX.js #Or on SOME machine, the node command could be nodejs
```

We will practice these 2 command later. 

# npm install for LinkedInJS 
This demo pack rely on 2 node packages, run the following command to install them. 
```bash
cd LinkedInJS # start your bash under the path 
npm install nightmare # nightmare for spidering
npm install html-to-text # to stripe the text
```

# Run the demo
On your first run, you should login with your LinkedIn account, before you do everything else. 
```bash
node start.js # the start.js script will guide you to login
# after you logged-in, simply close the browser window
```
Then, you can run the demo. 
```bash
node demo.js # this demo script will search "Art Director"
# and choose one job, grab its description in detail
```
Watch the console info, and enjoy the demo! 