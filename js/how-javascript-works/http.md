#Early understanding Websockets and HTTP/2 with a SSE mechanism, and the correct posture

> For the original text, please refer to [here] (httts://blog.sessionStack.com/how-javascript-works-deep-nto-websockets-ndtp-with--how-to-pick-the- Right-Path-584E6B8E3BF7), slightly changes, this article uses [Knowledge Sharing Copy 4.0 International License Agreement] (http://creativecommons.org/licenses/by/4.0/) Sharing, by [Troland] (https: // githubbubb .com/true).

** This is the fifth chapter of JavaScript's working principle. **

Now, we will go deep into the world of communication protocols to draw and discuss their characteristics and internal structures. We will give a fast comparison of WebSockets and HTTP/2. At the end of the article, we will share some insights of how to correctly choose the network protocol.

## profile

At present, complex web pages have rich functions, and dynamic interaction ability is considered a matter of course. And this is not surprising -because it has gone through a long time since the birth of the Internet.

At first, the Internet was not used to support such dynamic and complex web programs. It was originally conceived consisting of a large number of HTML pages, and each page link to other pages, which forms the concept of web pages containing information. Everything is established by the so -called HTTP request/response mode. The client loads a web page until the user clicks the page and navigate to the next webpage.

Around 2005, AJAX was introduced, and then many people began to explore the possibility of two -way communication between clients and server. What is unchanged is that all HTTP links are controlled by the client, which means that user interaction or regularly inquiry to load data from the server.

## Let HTTP support two -way communication

The technology that supports the server has taken the initiative to push data to the client for a while. For example, "[push] (https://en.wikipedia.org/wiki/push_technology)" and "[Comet] (http://en.wikipedia.org/wiki/comet_%28programming29)") technology.

Long -roll -ups are one of the most common hacks for the server to send data to the client to create this illusion. Through long -term inquiries, the client opened an HTTP connection to the server, and the server kept the connection until the response data was returned. When the server has new data to be sent, it sends new data as a response to the client.

Let's take a look at the simple long -wheeled inquiry code fragment:

`` `
(Function Poll () {) {
settimeout (function () {
$ .ajax ({{{
url: 'https://api.example.com/endpoint',
Success: Function (data) {
// Treatment `data`
// ...

          // Recursively call the next rotation
          poll ();
        },
        datatype: 'json'
      });

}, 10000);
}) ().
`` `

This is a basic self -execution function that will run automatically for the first time. It requests the server every 10 seconds and when the asynchronous request for the server is initiated, the `Ajax` function is called in the callback function.

Other technologies involve [Flash] (http://help.adobe.com/en_us/flashplatform/reference/actionScript/3/flash/net/socket.html) and XHR requests, and the so -called [HTMLFiles] (http:/ /CometDaily.com/2007/12/27/a-standards-based-APPROACH-COMET-COMMUNICATION-WITH-REST/).

All these schemes have a common problem: they have HTTP overhead, so that they are not applicable to low delay procedures. Imagine the first -person shooting game in the browser or other online games that require real -time components.

## websockets emergence

[Websocket] (https://developer.mozilla.org/en-s/docs/web/api/websockets_api) specifies that an API is used to build a set of word connecting on the web browser and server. Popularly speaking: there is a permanent connection on the client and server, and data can be sent on both sides at any time.

! [] (https://user- Images.githubuserContent.com/1475173/39884220-A86A093A-54BB-11E8-FAC1E27F4813.png)

The client creates a WebSocket connection through the process of shaking hands of Websocket. In this process, first of all, the client initiated a regular HTTP request to the server. The request will contain a request header of `Upgrade`, notifying the server client to build a WebSocket connection.

Let's see how to create a WebSocket connection on the client:

`` ` // Create a new encrypted webpage socket connection varmed = new websocket ('ws://websocket.example.com'); `` `

> The webpage socket address uses the `ws` protocol. `WSS` is a secure webpack word connection equivalent to` https`.

The protocol starts the process of opening the websocket connection that is opened to websocket.example.com.

The following is a simplified example of the initialization request header.

`` ` Get ws: //websocket.example.com/ http/1.1 Origin: http://example.com Connection: upgrade Host: websocket.example.com Upgrade: websocket `` `

If the server supports the webpage socket protocol, it will agree to upgrade the request, and then communicate by returning the `Upgrade` head to the response.

Let's see the implementation of node.js:

`` `
// We will use https://github.com/theturtle32/websocket-node
var websocketserver = reques ('websocket'). Server;
var http = request ('http');

var server = http.createserver (function, response) {
// Handle http request
});
Server.Listen (1337, Function () {});

// Create a server
wsserver = new websocketserver ({
httpserver: server
});

// WebsoCket server
wsserver.on ('request', function (request) {
var connection = request.Accept (null, request.origin);

// This is the most important callback, where to process the information returned by all users here
connection.on ('message', function (message) {
// Process websocket information
});

connection.on ('close', function (connection) {
// Turn off the connection
});
});
`` `

After the connection is established, the server use upgrade as a reply:

`` ` HTTP/1.1 101 Switching Protocols Date: WED, 25 Oct 2017 10:07:34 GMT Connection: upgrade Upgrade: websocket `` `

Once the connection is established, the `Open` event of the client we webpage socket instance will be triggered.

`` `
varmed = new websocket ('ws://websocket.example.com');

// When the websocket is connected, the information that websocket is connected is printed
socket.onopen = function (event) {
console.log ('websocket is connected.');
};
`` `

Now, the handshake is over, and the initial HTTP connection is replaced with a webSocket connection. The bottom layer uses the same TCP/IP connection. Data can be sent on both sides now.

Through WebSocket, you can send data freely without worrying about the relevant expenses brought by the traditional HTTP request. The data is transmitted by WebSocket in the form of messages. Each information is composed of one or more frames. The frame contains the data you transmitted (valid load). In order to ensure that when the message arrives at the client, it is re-assembled correctly, and each frame will be prefixed with 4-12 bytes of 4-12 bytes of valid load. Using this frame -based information system can help reduce the transmission of non -effective load data, thereby significantly reduced delay.

** Note: ** It should be noted here that only when all the message frames are received and the original information effective load is re -assembled, the client will receive a new message notification.

## WebsoCket Address

Earlier we briefly talked about WebSockets introduced a new address protocol. In fact, websocket introduced two new protocols: `ws: //` and `wss: //`.

The URL address contains the syntax specified by the protocol. The WebSocket address is special in that it does not support the anchor (`sample_anchor`).

WebSocket and HTTP -style addresses use the same address rules. `WS` is unblocked and defaults to port 80, while` WSS` requires TSL encryption and defaults to port 443.

## frame protocol

Let us understand the next frame protocol. This is [RFC] (https://tools.ietf.org/html/rfc6455 #page-27):

```
0                   1                   2                   3
      0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
     +-+-+-+-+-------+-+-------------+-------------------------------+
     |F|R|R|R| opcode|M| Payload len |    Extended payload length    |
     |I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
     |N|V|V|V|       |S|             |   (if payload len==126/127)   |
     | |1|2|3|       |K|             |                               |
     +-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
     |     Extended payload length continued, if payload len == 127  |
     + - - - - - - - - - - - - - - - +-------------------------------+
     |                               |Masking-key, if MASK set to 1  |
     +-------------------------------+-------------------------------+
     | Masking-key (continued)       |          Payload Data         |
     +-------------------------------- - - - - - - - - - - - - - - - +
     :                     Payload Data continued ...                :
     + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
     |                     Payload Data continued ...                |
     +---------------------------------------------------------------+
```

Since the WebSocket version is specified by RFC, there is only one head information in front of each package. However, this head information is quite complicated. This is the instructions for its composition module:

- `fin` (1 digit): indicate whether it is the last frame of the information. Most of the time, the information is exactly one frame, so the bit is usually worth it. The test shows that the second frame of Firefox is after 32K.

- `rsv1`,` rsv2`, `rsv3` (each one): must be 0 unless the negotiation expansion is used to define the meaning of non -0 values. If a non -zero -value meaning is received by a non -zero -value expansion, the receiving terminal will interrupt the connection.

- `OPCode` (4 bits): Data representing the frame. The current value is available:

  `0x00`: This frame continues the valid load of the previous frame.

  `0x01`: This frame contains text data.

  `0x02`: This frame contains binary data.

  `0x08`: This frame interrupt connection.

  `0x09`: This frame is a ping.

  `0x0a`: This frame is a PONG.

  (As you can see, a considerable part of the value is not used; they are kept in future use).

- `mask` (1 bit): indicate whether the connection is masked. The significance that it is expressed must be masked each of the information sent to the server from the client, and then if the information is not covered, the connection will be interrupted according to the specification.

- `Payload_Len` (7 bits): The length of the valid load. Websocket frames have the following length classification:

  0-125 indicates the length of the valid load. 126 means that the next two bytes indicate the length of the valid load. 127 means that the next 8 bytes indicate the effective load length. Therefore, the length of the valid load is about 7 bits, 16 and 64 -bit.

- `masking-key` (32-bit): All frames sent from clients to the server are masked by a 32-bit value in the frame.

- `Payload`: The actual data of the mask is generally under normal circumstances. Its length depends on the length of `Payload_len`.

Why is WebSocket based on frames rather than flow? I do n’t understand as you do, and I want to learn more. If you have any ideas, please add comments and resources to the comment area below. In addition, [hackernews] (https://news.ycombinator.com/item?id=3377406) has discussions on this aspect.

## frame data

As mentioned earlier, data can be split into multiple frames. The data transmitted in the first frame contains a data type transmitted by an operating code. This is necessary, because when the standard is drafted, JavaScript cannot support binary data well. `0x01` represents the text data of UTF-8 coding,` 0x02` indicates binary data. Most people choose the text operation code when transmitting JSON data. When you transmit binary data, it will be represented by the [blob] (https://developer.mozilla.org/en-s/docs/web/api/blob) specified by the browser.

It is very simple to transmit the data through WebSocket:

`` ` varmed = new websocket ('ws://websocket.example.com'); socket.onopen = function (event) { socket.send ('Some Message'); // Send data to the server }; `` `

When the WebSocket is receiving data (client), it will trigger the `Message` event. The incident will have a `Data` attribute, which contains the content of the message.

`` ` // Symptoms returned by the server socket.onMessage = Function (Event) { var message = event.data; console.log (message); }; `` `

You can easily use the network tab of the Chrome Developer tool to check each frame of each frame in the WebSocket connection.

! [] (https://user- Images.githubuserContent.com/1475173/39884275-E9287a6a-54bb-11E8-9386-B8EC0C58C58C.png)

## data shard

Effective load data can be divided into multiple independent frames. The receiving end buffer these frames until the `Fin` bit is worth it. So you can split the string "Hello World" to 11 packets, each package consists of 6 (header) + 1 byte. Data shards cannot be used to control packets. However, the specifications want you to deal with [stuff] (https://en.wikipedia.org/wiki/interleaving_%28data%29) control frame. This is to prevent the TCP package disorderly reaching the client.

The approximate logic of the connection frame is as follows:

- Receive the first frame
- Remember the operating code
- The valid load of the connection frame is valuable until the `Fin` bit is valuable
- Ecclail the operating code of each package is 0

The main purpose of data shard is to allow information that is unknown at the beginning of the beginning. Through data shards, the server may need to set up a reasonable buffer size, and then be full as the buffer, and send a data shard through the network. The second purpose of the data shard is multi -way reuse. The large amount of data on the logical channel occupies the entire output channel. Ground sharing output channel.

## heartbeat bag

At any moment after shaking hands, clients and servers can ping each other at will. When receiving ping, the receiver must reply to a Pong as soon as possible. This is the heartbeat. You can use it to ensure whether the client is still connected.

Although ping or pong is just an ordinary frame, it is a controlled frame. Ping contains the `0x9` operating code, and Pong contains the` 0xa` operating code. When you receive the ping, return a PONG (Ping and PONG maximum valid load length 125) with the same valid load data. You may receive a Pong without sending a ping. Ignore it if it happens.

Heartbeat bags are very useful. Use service (such as load balangers) to interrupt the idle connection. In addition, the receiving end cannot know if the server has been interrupted. Only when you send the next frame can you realize a mistake.

## error treatment

You can deal with errors by listening to the `error` incident.

like this:

`` `
varmed = new websocket ('ws://websocket.example.com');

// Process errors
socket.onerror = function (error) {
console.log ('websocket error:' + error);
};
`` `

## Turn off the connection

The client or server can send a data control frame containing the `0x8` operating code to turn off the connection. When the controlled frame is received, another node returns a closed frame. After that, the first node will turn off the connection. After the connection is turned off, any data received later will be abandoned.

This is the code that initializes the websocket connection of the client::

`` ` // If the connection is opened, turn it off if (socket.readyState === websocket.open) { socket.close (); } `` `

Similarly, in order to turn off the connection to run arbitrarily, you can add an event monitoring function to the `close` event:

`` ` // Operate the necessary cleaning work socket.onClose = Function (Event) { console.log ('Disconnect from WebSocket.'); }; `` `

The server has to monitor the `CLOSE` incident to deal with it when needed:

`` ` Connection.on ('Close', Function (ReasonCode, Description) { // Turn off the connection }); `` `

## WebsoCkets and HTTP/2 comparison

Although HTTP/2 provides a lot of functions, it cannot completely replace the current Push/Streaming technology.

The most important thing about HTTP/2 needs to pay attention to it is that it cannot completely replace HTTP. A verb, status code, and most head information will remain the same as they are now. HTTP/2 just improves the data transmission efficiency on the line.

Now, if we compare Websocket and HTTP/2, we will find a lot of similar places:

! [] (https://user- Images.githubuserContent.com/1475173/39884335-22403EB4-54BC-11E8-9EC2-3e89827B8C.png)

As shown above, http/2 introduced [Server Push] (https://en.wikipedia.org/wiki/push_technology?oldformat=true) technology is used to allow the server to actively send data to the client. However, it does not allow data to send data directly to the client program itself. The server push can only be processed by the browser without processing in the program code, which means that the program code does not have APIs to obtain notifications of these events.

At this time, the server pushing event (SSE) came in handy. SSE is such a mechanism Once the client -server connection is established, it allows the server to push data asynchronously to the client. After that, whenever the server generates a new data piece, push the data to the client. This can be regarded as one -way release -subscription model. It also provides a standard JavaScript client API called the standard JavaScript client API, which is called EventSource, which is part of the HTML5 standard released by the organization Implementing modern browsers. Note that the browser that does not support the native [EventSource API] (http://caniuse.com/#feat=eventsource) can be achieved through compatible plug -ins.

Since SSE is based on HTTP, it is naturally compatible with HTTP/2 and can be combined to use their respective advantages: HTTP/2 processing a high -efficiency transmission layer based on multi -way replication flow and SSE provides the program with API for support for support to support the program for support The server push.

In order to fully understand the flow and multi -way reuse technology, let's take a look at the definition of IETF: "Stream" is an independent two -way frame that exchanges transmission between the client and the server in a HTTP/2 connection. sequence. One of its main features is a single _ HTTP/2 _ connection that can contain multiple concurrent flowing streams and transmits frames from multiple streams at each terminal.

! [] (https://user- Images.githubusercontent.com/1475173/39884369-3749D112-54BC-11E8-8DC0-E07733B74E56.png)

It must be remembered that SSE is based on HTTP. This means that by using HTTP/2, not only can multiple SSE streams be merged into a single TCP connection, but also multiple SSE streams (pushing the server to the client) and multiple client requests (client terminals To the server) merge into a single TCP connection. Thanks to HTTP/2 and SSE, now we have a pure HTTP two -way connection, which has a simple API allowed program code to register the data push on the service side. Lack of two -way communication capabilities has always been considered the main disadvantage of SSE compared to WebSocket. Thanks to HTTP/2, this is no longer a disadvantage. This gives you the opportunity to insist on using HTTP -based communication systems instead of WebSockets.

The use scenarios of ## WebSocket and HTTP/2

WebSockets can still exist under the rule of HTTP/2 + SSE, mainly because it was once widely used technology. In special circumstances, compared with HTTP/2, it has one advantage that it has less expenses (such as such as less (for example , Tale information) two -way communication capabilities.

Suppose you want to build a large multi -player online game, and a large amount of information is generated in each connection terminal. Under such circumstances, Websockets will be more perfect.

In short, when you need to build a real low delay on the client and server, use WebSockets when you are close to real -time connection. Remembering this may require you to re -consider how to build a server -side program, and you also need to pay attention to the technology of the event queue.

If your usage scenario requires real -time market news, market data, chat programs, etc., HTTP/2 + SSE will provide you with a high -efficiency two -way communication channel while getting all the benefits of HTTP:

- When considering the compatibility of the existing architecture, WebSockets is often a pain point because upgrading HTTP is connected to a completely unrelated protocol.
- Scalability and security: The establishment of network components (firewalls, invasion detection, load balangers), maintenance and configuration are designed for HTTP. Large / important programs will prefer to have elastic, safe, and scalable. surroundings.

Similarly, you have to consider browser compatibility. Check the compatibility of WebSocket:

! [] (https://user- Images.githubuserContent.com/1475173/39884410-54D4A8B0-54BC-11E8-8363917C8FA1.png)

Compatibility is not bad.

However, the situation of http/2 is not wonderful:

! [] (https://user- Images.githubuserContent.com/1475173/3988447-753df098-54BC-11E8-9964- EC78572DA12E.PNG)

- Only support TLS (not bad)
- It is limited to the support of the IE 11 of Windows 10
- Only support OSX 10.11+ Safari browser
- Only when you can use HTTP/2 through ALPN (the server needs to be clearly supported), it will support HTTP/2

SSE's support is better:

! [] (https://user- Images.githubuserContent.com/1475173/39884473-8A06D404-54BC-11E8-835-16Be31DB5.PNG))

IE/Edge is not supported. (Well, Opera MINI does not support SSE nor WebSockets, so we line up completely). There are some elegant pads to let IE/Edge support SSE.

## SessionStack How to choose from?

[SessionStack] (https://www.sessionStack.com/?utm_source=Medium_Medium=blog&utm_Content=post-ebsockets- means, which depends on the use scenario.

Once the SESSIONSTACK enters the web program, it will start recording DOM changes, user interaction, JavaScript abnormal, stack tracking, failed network requests, and debugging information, allowing you to use video back to the problems in the web program and everything that happens to the user. All occur in real time and requires no performance effects on the web program.

This means that you can join the user session in real time, and the user is still in the browser. In this case, we will choose to use HTTP because this does not require two -way communication (the server transmits the data to the browser side). Under current cases, using Websocket is over -use, which is difficult to maintain and expand.

However, the sessionStack library that integrates the web program should use WebSocket (preferred, otherwise rolling back to HTTP). It will process and send data to our server in batches, which is one -way communication. In this case, the reason why we choose WebSocket is because some of the planned product functions may require two -way communication.
