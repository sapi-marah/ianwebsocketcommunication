# Ian's WebSocket Communication 1.0
Ian's WebSocket Communication 1.0 is a open-source project that allows people to chat in real time. Ian's WebSocket Communication uses the Node.js libary `ws` so you can communicate in real time.
## Hosting the project
### Installing Node.js
This project runs on Node.js so it can host the WebSocket server easily. First go to Node.js's [offical site](https://nodejs.org/en/download). Once you opened it, select your operating system then copy the installation code it provides you then paste it into your terminal.
### Downloading the project and libaries
On our Github, you should see a button that says Code. Click that, then select Download ZIP. Afterwards, extract the file and navigate to the extracted folder.
```
cd /path/to/the/folder/
```
Since, our project runs on the `ws` libary, you'd just need to install it. It's pretty simple. Type in:
```
npm install
```
Keep the terminal open for later.
It should install the needed libary to run this project.
### Changing the HTML's WebSocket source
If you know JavaScript or not dumb, you'd realize `./frontend.html` is trying to connect to `ws://<your_ip>:3000` which is invalid. But if you're actually smart that was a example. Open `./frontend.html`, and look for the line then replace:
```
new WebSocketServer('ws://<your_ip>:3000');
```
to your actual local IP address.
### Starting the project
Open the terminal, and if you did close the terminal when I told you not to then I don't care. Reread it. Anyways, type in:
```
npm start
```
That should start the project. Then send `./frontend.html` to anyone on the network and open it yourself.
## Notes
Just so you know, there will be some more cool updates. Stay open-minded!
