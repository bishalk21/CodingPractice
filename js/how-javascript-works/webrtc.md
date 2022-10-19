# Webrtc and point -to -point network communication mechanism

> For the original text, please refer to [here] (https://blog.sessionStack.com/how-javascript-weBEBRTC-and-the-MEChanics-OF-Peer-Connectivity-87C56C1D0AB), slightly deleted, deleted, deleted, deleted, deleted, deleted, deleted, deleted, and deleted, deleted, deleted. This article uses [Knowledge Sharing Copy 4.0 International License Agreement] (http://creativecommons.org/licenses/by/4.0/) sharing, by [trues://github.com/troland).

** This is the 18th chapter of JavaScript working principle. **

## Overview

What is webrtc? First of all, a large amount of information about this technology has been given literally. RTC is real -time communication technology.

WebRTC fills an important gap in the web development platform. In the past, P2P technologies such as desktop chat programs can achieve real -time communication and web pages. But the appearance of WebRTC changed this situation.

WebRTC mainly allows webpage programs to create point -to -point communication, and we will introduce it in subsequent chapters. We will discuss the following themes in order to fully introduce the internal structure of WebRTC to developers:

- Point -to -point communication
- Firewall and NAT penetration
- Signal, session and protocol
- Webrtc interface

##

The web browser of each user must follow the following steps to realize the point -to -point communication through the web browser:

- Agree to start communication
- Know how to position another point
- Bypassing safety and firewall restrictions
- Transfer all multimedia communication information in real time

As we all know, one of the biggest challenges of browser -based point -to -point communication is how to locate and establish a network socket with another web browser for two -way data transmission. We will overcome difficulties related to building a network connection.

Whenever the web program needs data or static resources, it will be obtained directly from the corresponding server. That's all. However, if you want to build a point -to -point video chat through the browser that directly connects the user, because other browsers are not a known web server, the user does not know that the IP address that needs to create a video chat. Therefore, more technology is needed to establish a P2P connection.

## firewall and NAT penetration

Generally, the computer will not be assigned a static public IP address. The reason is that the computer is located behind the firewall and network access device (NAT).

A NAT device converts the private IP address in the firewall into a public IP address. For security and limited public IP addresses, NAT devices are necessary. This is why the developer's web program cannot treat the current device as a static public IP address.

Let's understand the working principle of NAT devices. When the developer is in a corporate network and then adds WiFi, the computer will be assigned an IP address that only exists behind NAT. Suppose it is 172.0.23.4. However, for external, the user's IP address will be like 164.53.27.98. Then, the external request will regard all requests as a computer with a response data from 164.53.27.98 and NAT device that guarantees the request from the target user computer to return to the corresponding internal 172.0.23.4 IP address. This is due to the mapping table. Note that in addition to IP addresses, network communication also requires communication ports.

With the participation of NAT devices, the browser needs to know the machine IP address corresponding to the target browser for communication.

This requires the NAT session penetration program (STUN) and NAT transparent relay forwarding servers. In order to use WebRTC technology, developers need to request the Stun server to obtain its public IP address. This is like your computer requests a remote server to ask the client IP address of the remote server initiated inquiries. The remote server returns the corresponding client IP address.

Assuming that the process is progressing smoothly, the developer will get a public IP address and port so that other points can be told how to communicate directly with you. In the same way, these points can also request the Stun or Turn server to obtain the public IP address and inform them of the mailing address.

## signal, session and protocol

The aforementioned network information retrieval process is only part of the larger signal topic. In WebRTC, it is based on the JavaScript session constructing protocol (JSEP) standard. Signals involve network retrieval and NAT penetration, session creation and management, communication security, media function metadata and modulation and error processing.

In order to make communication smoothly, the node must determine the local media environment (such as resolution and coding ability, etc.) and the accessible program host network address. The WebRTC interface does not integrate the signal mechanism of this important information.

The WebRTC standard does not specify signals and does not implement it in the interface to be able to use other technologies and protocols more flexibly. The server of the signal and processing signal is controlled by WebRTC program developers.

Suppose developers use the browser -based WebRTC program to obtain the public IP address that the Stun server mentioned earlier, then the next step is to negotiate and establish a network conversation connection with other points.

Use any signal/communication protocol for multimedia communication to initialize session negotiation and communication connection. The agreement is responsible for the rules of management and interruption.

The initial agreement (SIP) is one of the protocols. Thanks to the flexibility of the WebRTC signal, SIP is not the only signal protocol for use. The selected communication protocol must be compatible with the application layer protocol of the session description protocol (SDP), and SDP is applied to WebRTC. All multimedia designated metadata is transmitted through the SDP protocol.

Any point (such as WebRTC programs) at any attempt to communicate with other points will generate transaction interconnection connection establishment protocol (ICE) candidate set. The candidate set indicates a collection of IP addresses, ports and transmission protocols that can be used. Note that a computer can have multiple network interfaces (wired and wireless, etc.), so you can have multiple IP addresses, and each interface allocates one IP address.

The following is a icon that depicts this communication exchange on MDN:

! [] (https://user- Images.githubuserContent.com/1475173/53612111-FE48C700-3C0B-11E9-95D0-53efb4a1480b.png)

## establish connection

Each node first obtains the public IP address mentioned before. After that, the "channel" signal data is dynamically created to retrieve other nodes and support point -to -point negotiation and creation.

These "channels" cannot be accessible by external retrieval and access and can only be accessed through unique identifiers.

It should be noted that because the flexibility of WebRTC and in fact, the signal creation program is not specified in the standard. The technology used is different. The concept and use of the "channel" will be somewhat different. In fact, some agreements do not require the "channel" mechanism to communicate.

This article will assume that there is a "channel".

Once two or more points are connected to the same "channel", the nodes can communicate and negotiate session information. This process is similar to [release/subscription mode] (https://en.wikipedia.org/wiki/publish%E2%80%93Subscrip_pattern). Generally speaking, the initial point uses signal protocols such as the initial protocol (SIP) and SDP to issue a "offer" package. The sponsor is waiting to be connected to the "ANSWER" response to the receiver of the specified "channel".

Once you receive the response, you will start and negotiate the best interactive connection to establish a coordinated candidate (ICE) set generated by each node. Once the optimal ICE candidate set is selected, especially the metadata required by all node communication, network routing (IP address and port) and media information. This will completely establish and activate the network socket between nodes. Immediately after, each node creates local data streams and data channel endpoints, and then use any two -way communication technology to transmit multimedia data.

If the process of confirming the optimal ICE candidate fails, this situation often occurs in the firewall and NAT technology used, and the reserve uses the TURN server as a relay forwarding server. This process mainly uses a server as the intermediate medium, and then forward transmission data between nodes. Please note that this is not a real point -to -point communication, because the real point -to -point communication is directly transmitted between the nodes.

Whenever Turn is used as a reserve communication, each node does not need to know how to connect and transmit data to the other node. On the contrary, nodes only need to know the public Turn server that sends and receive multimedia data in real time during session communication.

What needs to be understood is just a failed protection and last means. The Turn server needs to be quite strong, with expensive bandwidth and strong processing capabilities and processing potential large amounts of data. Therefore, using the Turn server will significantly increase additional overhead and complexity.
##Webrtc interface

Webrtc contains three main interfaces:

**\* Media Capture and Stream - ** Allow developers to access input devices such as microphone and network cameras. The interface allows developers to obtain microphone or network camera media flow.
** RTCPEERCONNECTION - ** Video and audio flowed by developers in real time to another WebRTC endpoint. Developers use these interfaces to connect local machines and remote nodes. The interface provides a method of creating connection to remote nodes, maintaining and monitoring connections and closing.
** RTCDataChannel - ** This interface allows developers to transmit any data. Each data channel is related to RTCPeerConnection.

We will introduce these three types of interfaces respectively.

## media capture and stream

** Media capture and streaming ** interfaces are often called media flow interfaces or flow interfaces. This interface supports audio or video data stream data, processing audio and video streaming methods, constraints related to data types, and success in data types. And error callback and events triggered during the API call.

[Mediadevices] (https://developer.mozilla.org/en-s/docs/web/api/mediadevices)) The orbit of [Media Stream] The media flow may include hardware or virtual video sources such as video camera, video recording device, screen sharing services such as camera, video recording device, screen sharing services), audio tracks Or it is created by virtual audio sources) and may be other types of orbit.

该方法返回一个[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 并解析为[MediaStream](https://developer.mozilla.org /EN-US/DOCS/Web/API/MediaStream) object. When a user refuses to authorize or does not match the matchmaking media resources, Promise will return PermissionDeniederror or NotFounderror respectively.

You can access the Mediadevice single example through the `navigator` object:

`` ` navigator.mediadevices.getUserMedia (Constraints) .then (function (stream) { / * Use stream */ }) .cATCH (fuins (ERR) { / * Treatment error */ }); `` `

Note that you need to pass here to the `Constraints` object to specify the type of media flow. Developers can perform various configurations, including the camera (front or rear) used, frame frequency, resolution, etc.

From the 25th version, the Chromium -based browser has allowed the audio data to be assigned to audio or video elements by the audio data obtained through the `GetUserMedia ()` (but you need to note that the default media element will be mute).

You can use the `GetUserMedia` as [input node of the web audio interface] (http://updates.html5rocks.com/2012/09/live-web-Audio-input-enabled):

`` `
Function Gotstream (stream) {
Window.audiocontext = Window.Audiocontext || Window.webkitaudiocontext;
var audiocontext = new audiocontext ();
// Create audio nodes from flowing
varmediaStreamSource = AudioContext.createMedreamsource (stream);
// Connect it with the target node to listen to or process it by other nodes
MediaStreamSource.connect (Audiocontext.Destination);
}

navigator.getUserMedia ({Audio: True}, Gotstream);
`` `

## Privacy limit

Because the interface may lead to obvious privacy issues, the specifications have very clear regulations on the method of notifying users and permissions in the management of users and permissions. When opening a media input device such as a user web camera or a microphone, `getusermedia ()` must always obtain user authorization.

The browser may provide permissions for each domain name authorization, but at least the first time the author is authorized, and then the user must be specially authorized if the user is selected.

The rules in the notice are equally important. The browser must display a window to display the camera or microphone in use, which may exist in other hardware indicators. Even if the device was not recorded at the time, the browser must display a prompt window to prompt which device to be authorized as an input device.

## rtcpeerConnection

** RTCPEERCONNECTION ** indicates a WebRTC connection between a local computer and a remote node. It provides a method of connecting remote nodes, maintaining and monitoring connections and closure of no longer active connection.

The following shows the role of RTCPeerConnection for a webrtc chart:

! [] (https://user-images.githubusercontent.com/1475173/53612109-FE48C700-3C0B-11E9-8066-92A0208CFC48.png)

From the perspective of JavaScript, the main aspects that need to be understood in the figure are `RTCPEERCONNECTION` abstract the complexity of the complex underlying internal structure into an interface to developers. The coding and protocol used by WebRTC do a lot of work to create a communication as much as possible even in an unstable network environment.

- The bag is lost and hidden
- Echo elimination
- Bandwidth adaptation
- Video jitter rejection
- Automatic gain control
- Noise reduction and noise reduction
- Image "Clean"

## rtcdatachannel

Not only audio and video, WebRTC also supports real -time transmission of other types of data.

`RTCDataChannel` interface allows point -to -point to exchange any data.

There are many uses of this interface, including:

- game
- Real -time text chat
- file transfer
- Decentralized network

There are several functions of this interface, which makes full use of the `RTCPEERCONNECTION` and create a strong and flexible point -to -point communication:

- Use `RTCPEERCONNECTION`
- Multiple concurrent channels containing priority
- Reliable and unreliable messages convey semantics
- Built -in security (DTLS) and message blocking control

Grammar is similar to the existing WebSocket, including `Send ()` method and `Message` event:

`` `
var peopleConnection = New WebkitrtcpeerConnection (servers,
{optional: [{rtpdatachannels: true}]}
);

PeerConnection.ondataChannel = Function (Event) {
ReceiveChannel = Event.Channel;
ReceiveChannel.onMessage = Function (Event) {
document.queryselector ("#Receiver"). InnerHtml = Event.data;
};
};

SendChannel = PeerConnection.createdatachannel ("Senddatachannel", {RELIABLE: FALSE});

document.queryselector ("Button#Send"). Onclight = function () {
var data = document.queryselector ("textarea#send"). Value;
SendChannel.send (data);
};
`` `

Because communication is directly between the browsers, even if the relay forwarding server (Turn) is used, RTCDataChannel will be faster than WebSocket.

## webrtc practical application

In practical applications, webrtc needs a server, but this is very simple, so the following steps will happen:

- The user searches nodes and then exchanges details such as names.
- WebRTC client program (point) exchange network information.
- Switch to media information such as video format and resolution.
- WebRTC client program penetrates [NAT Gatement] (http://en.wikipedia.org/wiki/nat_traversal) and firewalls.

In other words, webrtc requires four types of server functions:

- User retrieval and communication
- Send signal
- NAT/Firewall penetrate
- Relay forwarded server to prevent point -to -point communication failure

[Ice] (http://en.wikipedia.org/wiki/interactive_connectivity_establishment) uses [stun] (http://en.wikipedia.org/wiki/stun) protocol [TRN] (http:// En .wikipedia.org/wiki/traversal_usion_relay_nat) protocol to create RTCPEERCONNECTION connections to deal with NAT penetration and other network changes.

As mentioned earlier, ICE is a node protocol for connecting two video chat customers. At the beginning, ICE will try to use UDP to directly connect the node with the lowest possible network delay. In this process, the Stun server has only one task: allowing nodes after NAT to find their public addresses and ports. Developers can check the available [STUN Server] (https://gist.github.com/zziuni/3741933) (Google also has a bunch of) list.

! [] (https://user-images.githubusercontent.com/1475173/53612107-FDB03080-3C0B-11E9-823A- E63127cee.png)

## Search candidate connection

If UDP fails, ICE tries TCP, first http and https. If the directly connected failed-in special cases, due to the company's NAT penetration and firewall-ICE uses the intermediary (relay) Turn server. In other words, ICE first uses the STUN server to directly connect the node through the UDP. If it fails, use the TURN relay forwarding the server. "Searching for candidates" refers to the process of searching the network interface and port.

! [] (https://user- Images.githubuserContent.com/1475173/53612108-FE48C700-3C0B-11E9-96d0-91317FBF2D68.png)

## safety

Real -time communication programs or plugins may cause several security problems. E.g:

- Uncaying media or data may be stolen between browsers or browsers and servers.
- The program may record and score the video without user authorization.
- Suspicious software or viruses may be installed with the harmless plug -in or programs on the surface.

There are several methods for webrtc to solve the above problems:

- WebRTC Implement the use of such as [DTLS](http://en.wikipedia.org/wiki/Datagram_Transport_Layer_Security) 和 [SRTP](http://en.wikipedia.org/wiki/Secure_Real-time_Transport_Protocol) 的安全协议。
- All WebRTC components, including the signal mechanism, are mandatory encryption.
- Webrtc is not a plug -in: its components run in the browser sandbox and not in a separate process. There is no need to install components separately and update with the browser upgrade.
- Camera and microphone must be explicitly authorized and when the camera or microphone runs, it must be clearly displayed in the user window.

For products that need to realize real -time communication flow functions between browsers, WebRTC is an incredible and powerful technology.

Reference materials:

- not
  -<https://www.innoarchitech.com/what-s-webrtc-how-does- IT-work/>
