# eco-site_website_template

<strong>ECOLETA:</strong>it's an open template for a recycling collection area company based on JAVASCRIPT, HTML and CSS.</br>
<p>This project was made for studies purposes only, to understand the integration between a markup language such as HTML, with
and a dinamic one as JAVASCRIPT</p>

<h1>FEATURES</h1>
<p>The MVP of this project is a website composed by --- pages, which allows the user to:</p></br>
<li>Register a new collection site;</li>
<li>Search for collection sites by states/cities.</li></br>

<p>In order to check a simplified version of this project it's important do install a VSCode plugin called "Live Server", however as it follows you will
how to install node.js and which port access to run it.</p></br>

<h1>Installing NODE.JS v.12 via terminal on UBUNTU 18</h1>

<p>When using the BASH terminal the steps you need to follow are:</p>

<p>1- Into you home use the command bellow to update the dependencies;</p>
  <strong>$ sudo apt update</strong>
  
<p>2- Installing NODE.JS;</p>
  <strong>$ sudo apt install nodejs</strong>
  
<p>However is important to know that probably the version you will have installed is not the v.12, to updtate it you will have to use PPA (Personal Packages
 Archive) in order to update your package to its right version. To do it is simple.</p>

<strong>$ cd ~</strong>
<strong>$ curl -sL https://deb.nodesource.com/setup_<<desired version>> -o nodesource_setup.sh</strong>

<strong>$ sudo bash nodesource_setup.sh</strong>

<p>Repeat the instalation command:</p>
<strong>$ sudo apt install nodejs</strong>

<p>Then verify the version through:</p>
<strong>$ nodejs -v</strong>

<p>The next step is to install the NPM (Node Packages Manager)</p>

<strong>$ sudo apt install npm</strong>

<It's important to remember that some NPM packages need the 'build-essential' to work properly, to install it type in the following command:

<strong>$ sudo apt install build-essential</strong>

<p>It is important to install NPM Nodemon, in order to monitor the port, while developing that's why we use '-D'</p>

<strong>$ npm install nodemon -D</strong>

<p>You can check out those instructions accessing 'http://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04-pt'</p>

<h1>Installing the template engine NUNJUCKS</h1>
