# How to improve its performance and security

> For the original text, please refer to [here] (https://blog.sessionStack.com/how-javascript-works-nSide-the-Networking-how-OPTIMIZE-ITS-SECURITY-F71B7414D34C), There are changes, and this article uses [Knowledge Sharing Copy 4.0 International License Agreement] (http://creativecommons.org/licenses/by/4.0/) sharing, by [trues://github.com/troland).

** This is Chapter 12 of JavaScript's working principle. **

As in the previous article about [Rendering Engine] (https://github.com/troland/how-javascript-works/blob/master/rendering.md), we believe in good and great JavaScript development development. The difference between people is that the latter not only understands the specific details of the language, but also understands its internal structure and operating environment.

#####

49 years ago, Arpnet was born. It was an early [packet group exchange network] (https://en.wikipedia.org/wiki/packet_switching) and the first implementation The network of /internet_protocol_suite). The network connects the University of California and the Stanford Institute. Twenty years later, Tim Berners-Lee proposed a draft of the "Mesh" draft that was later known. In 49 years, the Internet has gone through a long journey. From just the two computers exchange data messages to at least 75 million servers, 3.8 billion people use the Internet and 1.3 billion websites.

! [] (https://user-images.githubusercontent.com/1475173/41820447-A58217AA-7804-11E8-9FEC-AA47A938EC42.jpeg)

This article will try to analyze which technologies of modern browsers come to improve their application performance (some you don't even understand), and then focus on the browser network layer. Finally, it provides some techniques for browsers to improve network application performance.

## Overview

Modern browsers have long been designed and developed for fast, efficient and secure data transmission. Has hundreds of components running at different levels, from process management and security sandboxes to GPU pipelines, audio and video and other more. The network browser is similar to a operating system, not just a software, not just a software Essence

The overall performance of the browser is determined by some large components. These components include: analysis, layout, style calculation, JavaScript and Webassembly, rendering, of course, there are network stacks.

Under normal circumstances, engineers will regard the network stack as a performance bottleneck. Such a situation often occurs because all resources from the network will block the rest of the steps. For more efficient network layers, it needs not only to play the role of a simple socket administrator. In our opinion, obtaining resources is a very simple mechanism, but in fact it is the entire platform that integrates its own optimization criteria, interfaces and services.

! [] (https://user- Images.githubuserContent.com/1475173/41820448-A5CE4454-7804-18-816F-790d4776866a.jpeg)

Web developers do not need to worry about separate TCP or UDP packets, request formatting, cache, and everything else that is happening. The browser will handle these complex things so that you can focus on developing your own procedures. However, knowing that its internal principles can help developers develop more efficient and secure procedures.

In essence, when the user starts to interact with the browser as follows:

- The user enters the URL address in the browser address bar.
- Given the URL resources on the network, the browser starts to check the local and application cache and try to use the local copy to meet the resource request.
- When the cache is unavailable, the browser uses the domain name in the URL and then obtains the IP address from [DNS] (https://en.wikipedia.org/wiki/domain_Name_system). If the domain name has a cache, there is no need to perform a DNS query.
- Create a HTTP packet for the browser shows that it requests a web page of the remote server.
- The packet is transmitted to the TCP layer, and the layer will add its own information to the head of the HTTP packet. This information is a necessary information for maintaining the session created.
- Then handle the message in the IP layer, and the main responsibility of this layer will find the path from the user to send a message to the remote server. Add this path information to the head of the HTTP message.
- Transmission message to the remote server.
- Once you receive the message, return the response data in a similar way.

W3C [Navigation Timing Specification] (http://www.w3.org/tr/navigation-timing/) provides the visual timing and performance data behind the browser interface and each request life cycle in the browser. Let's browse these components because each component plays an important role in achieving the best user experience.

! [] (https://user- Images.githubusercontent.com/1475173/41820446-A53255DA-7804-18-9C28-2BD1A5C2CCB8.png)

The entire network request process is quite complicated and has many hierarchical structures, and each layer may become a performance bottleneck. This is why the browser uses various technologies to work hard to improve its performance in order to minimize the performance loss of the entire network communication.

## Putting word management

Look at some new technologies:

**\* Source ** -In three parts of the application protocol, domain name and port number (such as https, www.example.com, 443)
**\* Package Pond ** -A set of collie -type characters belonging to homologous (all mainstream browsers limited the socket pool at most 6 sets of connectors)

JavaScript and WebAssembly prohibit developers from operating the life cycle of separate network sockets, which is quite wise. This not only allows your hair to drop less, but also allows the browser to automatically optimize a large amount of performance. These properties include the reuse of the socket, the request optimization and delayed binding, the agreement negotiation, the enforcement of connection restrictions and other optimization measures.

In fact, modern browsers have stepped out of the request management cycle from the scales management. Use the jet pool to organize the socket and group the source, and each set of word ponds for compulsory restrictions on the number of connections and security constraints. The complete requests are included, set priority, etc., and then bind it with a single set in the socket pool. If the server is not actively closed these connections, multiple requests can automatically reuse the same socket.

! [] (https://user- Images.githubuserContent.com/1475173/41820445-A4E4D9B8-7804-18-9FF7-488B4D2278F2.png)

Since creating a new TCP connection will bring additional performance overhead, reusable connections will bring great performance improvement to it. By default, when the request was initiated, the browser used the so -called "Keepalive" mechanism to save the time spent to create new connections to the server. The average time to create a new TCP connection is:

- Local request -23 milliseconds
- Transcontinental request -120 milliseconds
- Intercontrestal request -225 milliseconds

Such a structure has led to some other optimization methods. The request can be executed in different order according to the priority. The browser can optimize the bandwidth distribution between all sockets or it can create a socket to wait for the expected request.

As mentioned above, these are controlled by the browser without developers. But this does not mean that we have nothing to do. Choosing the correct network communication mode, type and frequency, correct protocol type, and server stack tunnel/optimization are essential for improving the performance of the entire program.

Some browsers are even further. For example, when you use Chrome, when the user uses it, it will learn from self -learning to become faster. It is based on the webpage and typical browser mode that has been visited, so that it can be expected to operate possible user behavior and operate before the user performs arbitrarily. The simplest example is to pre -rendered the page when the user hovers on a link. If you want to learn more about Chrome optimization technology, you can view [High-Performance Browser Networking] (https://hpbn.co/) <https://www.igvita.com/posa/high -Performance-networking-in-google-chrome/> chapter.

## network security and sandbox

Another very important purpose allows browsers to operate separately to operate separately: browsers can forcibly implement a set of consistent security and policy constraints for procedural resources that are not trusted. For example, the browser prohibits directly accessing the original network socket through the API, because this will cause any suspicious program to connect any console at will. The browser also enforces the number of connections to protect the server and the client from being troubled by the depletion of resources.

The browser formats all the requests flowing out to protect the server with the protocol semantics that meet the rules. Similarly, the browser will automatically decoding the content to protect the user from the attack on the suspicious server.

## tsl negotiation

[Transport Layer Security (TLS)] (https://en.wikipedia.org/wiki/transport_layer_security) is an encryption protocol providing communication security for computer networks. It is widely used in a large number of applications, and one of them is to browse the web. The website can use TLS to ensure all communication security between the server and the web browser.

The entire TLS handshake process contains the following steps:

1. The client sends the "Client Hello" information to the server, which comes with the client random value and supported password combination.
2. The server returns the client "Server Hello" information, with a random value of the server.
3. The server returns the client certification certificate and may require the client to return a similar certificate. The server returns "Server Hello Done" information.
4. If the server requires the client to send a certificate, the client is sent.
5. Create a random Pre-Master key on the client and then use the public key in the server certificate to encrypted, send an encrypted Pre-Master key to the server.
6. The server receives the Pre-Master key. The server and client each generates the main key and session key based on the Pre-Master key.
7. The client sends a notification of "Change Cipher SPEC" to the server, indicating that the client will start using new session keys to come to hash and encrypted messages. The client also sends a message "Client Finished".
8. The server receives a notification of "Change Cipher SPEC" and then uses the session key to switch its record layer's security state to the symmetrical encryption state. The server returns a "Server Finished" message.
9. Clients and servers can now exchange program data through the security channels that are established. The information sent between all clients and servers is encrypted with a session key.

Whenever any verification fails, the user will receive a warning. For example, the server uses its own signature certificate.

## strategy

When the protocols of the two pages, ports (if there are specified) and the host name are the same as the same source.

Here are some examples of resources that may include cross -domain:

- `<script src =" ... "> </script>` JavaScript code inside. The error information of grammar errors is only suitable for homologous scripts.
- `<link rel =" styleSheet "href =" ... ">` css. Due to CSS's loose grammar rules, cross-domain CSS requires the correct Content-Type head. The restrictions of each browser are different.
- `<IMG>` Picture
- `<video>` and `<umdio>` media files
- `<object>`, `<embed>` and `<Applet>` plug -in
- @font-face font. Some browsers allow cross -domain fonts, and others require homologous fonts.
- <Frame> and <Trame> related content. The website can use the X-Frame-options head to prevent this cross-domain interaction.

The above list is not enough; the list aims to emphasize the "minimum privilege" principle in the work. The browser only exposes its necessary interfaces and resources for the application code: the application provides data and URL addresses, and then the browser formats the entire life cycle of each connection.

It should be noted that there is no simple concept of "same source strategy".

On the contrary, there is a series of related mechanisms to enforce the DOM access of browser, cookie and session state management, network connection and other components.

## Resource and client status cache

The best and fastest requests do not create requests. Before assigning a request, the browser automatically check its resource cache, perform the necessary verification inspection and then return a local resource copy when the specified conditions are matched. If there is no available local resources in the cache, initiate a network request and then automatically place the response content in the cache to prepare for access (if this is allowed).

- The browser automatically find the cache instruction for each resource.
- When conditions permit, the browser will automatically restore expired resources
- Browser automatic processing cache size and resource recycling

It is very difficult to manage a efficient and optimized resource cache. Thanks, the browser handles the entire complex gadget for us, and what we need to do is to ensure that the server returns the appropriate cache instruction; if you want to know more, you can see more [client resource cache] (https://hpbn.co/optimizing -Application-Delivery/#Cache-Resources-on-the-Client) article. You add Cache-Control, ETAG, and Last-Modify's response header to all resources on the webpage.

Finally, a browser function that is often ignored but vital, that is, it provides verification, session and cookie management. The browser maintains a separate "Cookie Jars" for each source. It reads and write new cookie, session and certification data, and automatic mounting and processing appropriate HTTP heads to automatically process the entire processing of the entire processing through the necessary programs and server interfaces. process.

### example:

A simple but explaining convenience example of the delayed session management of browsers is: multiple tabs or browser windows can share a certification session, vice versa; Other sessions that opened the window were invalidated.

## Application interface and protocol

After understanding the network service, the application interface and protocol are finally talked about. As we all know, the more underlying structure provides a set of important services: sockets and connection management, requests and response processing, various security strategies for compulsory measures, caching and more other measures. Whenever a HTTP request or XMLHTTPREQUEST, a long -lasting service push event or a websock session or opening a WebRTC connection, we are interacting with some or all these underlying services.

There is no single best agreement or interface. Each complex program will use different transmission protocols based on different requirements: interaction with the browser cache, protocol overhead, message delay, reliability, data transmission type, and others. Some protocols have the characteristics of low data transmission delay (such as server push events, WebSocket), but may not meet other important occasions, such as using the browser cache or supporting binary data transmission in any case.

## Some tips that can be used to improve program performance and security

- I have been using the "Connection: Keep-Alive" header information in the request. The browser adds "Connection: Keep-Alive" to the request head by default. Ensure that the server also uses the same mechanism.
- Use the appropriate cache-control, ETAG and Last-Modify header information to save the download time of the browser.
- Spend some time to adjust and optimize the server. This is the mystery! Pay attention to whether this process is aimed at each program and data transmitted.
- Always use TLS! Especially if the program contains any type of certification.
- Study the security strategy provided by the browser and enforce in the program.

## extension

You can view the cross -domain problems of font files [here] (https://github.com/sunmaobin/sunmaobin.github.io/isSues/32) and [here] (here] (https://stackoverflow.com/8245464/8245464/8245464/8245464/8245464/ Cross-Domain-FONT-FACE-ISSUES).
