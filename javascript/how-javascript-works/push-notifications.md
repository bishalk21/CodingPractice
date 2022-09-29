# Webpage message push notification mechanism

> For the original text, please refer to [here] (https://blog.sessionStack.com/how-javascript-works-Mechaanics-web-push-notifications-290176c5C55D). 4.0 International License Agreement] (http://creativecommons.org/licenses/by/4.0/) Sharing, by [true] (https://github.com/troland).

** This is the ninth chapter of JavaScript's working principle. **

Now let's transfer attention to the web page push notification: we will check its construction component, explore the process behind the sending/receiving notification, and finally share it. = Medium & UTM_MEDIUM = Blog & UTM_CONTENT = Javascript-Series-Push-Notifications-2nd) How to use these functions to create new product functions.

Push notification this feature is very common on the mobile terminal. For some reason, the push notification on the web page is began with the call, even though most developers strongly demand this function.

## Overview

Web push notification allows users to choose to get message updates from network applications in time. It aims to re -attract users through the possible, important and suitable content of the user.

The push service is the previous [article] (https://github.com/troland/how-javascript-works/blob/master/service-worker.md).

In this case, the reason why the Service Worker is running in the background, which will not block the rendering of the interface. This is very important for push notifications, because this means that only when the user and the push notification itself perform interactive operations, the relevant code of the push notification will be performed.

## Message push and notification

Message push and notifications are two different interfaces.

- [Message Push] (https://developer.mozilla.org/en-s/docs/web/api/push_api)-When the message push server is called when pushing the message to the service worker.
- [Message Notification] (https://developer.mozilla.org/en-s/docs/web/api/notifications_api) to display message notifications to users in the service worker or script in the network application.

## Message push

There are about three steps to implement message push:

- Interface -Add client logic to allow users to subscribe to push services. Write the JavaScript code logic in the network application interface to let the user registration message push service.
- Send message -Implement interface calls on the server side to trigger a message to the user device.
- Receive message -Once you receive the push message at the browser.

Now, let's explain the whole process in detail.

## Compatibility detection

First, you need to detect whether the current browser supports message push services. You can use the following two simple inspections:

- Detect the `ServiceWorker` attribute on the` navigator` object
- Detect the `pushmanager` attribute on the` Window` object

The test code is as follows:

`` `
if (! ('ServiceWorker' in Navigator) {{
// The current browser does not support server work threads, disable or hidden interface
Return;
}

if (! ('Pushmanager' in Window)) {
// The current browser does not support push services, disable or hidden interface
Return;
}
`` `

## Register Service Worker

Now, the news push function is supported. The next step is to register the Service Worker.

From the previous [articles] (https://github.com/troland/how-javascript- works/blob/master/service-md) You should be familiar with how to register the service worker.

## request authorization

After registering the Service Worker, the relevant operation of user subscriptions will be performed. This requires the authorization of users to push the message to it.

The authorized interface is quite simple, but there is a disadvantage that is the interface [The acceptance parameter used to use a callback function. Notification/RequestPerMission). Because the interface version supported by the current browser cannot be known, compatibility is needed.

Similar to this:

`` `
function requestPermission () {{)
Return New Promise (Function (RESOLVE, Reject) {
constabilityResult = notification.requestPermission (function (result) {
// Use the callback to handle the abandoned interface version
Resolve (result);
});

    if (PermissionResult) {
      PermissionResult.then (Resolve, Reject);
    }

})
.then (function (permittingResult) {
If (PermissionResult! == 'Grangton') {{
Throw New Error ('Permission Not Granted.');
}
});
}
`` `

Calling `notification.requestPermission ()` will pop up the following prompt box to users:

! [] (https://user- Images.githubuserContent.com/1475173/40720629-f3D8C418-6449-18C-A9E9B866ece8.png)

When obtaining, closing, and prohibiting permissions, you can get the result string of `Granted`,` default` or `Denied`.

It should be noted that when the user clicks the `prohibited` button, the network application will not ask the user again until the user is manually unlock the program by changing the authorization state. This option is hidden in the setting panel.
**Click the information button on the far left of the address bar to pop up the authorized pop -up window. **

## Subscriber through pushmanager

Once the Service Worker is registered successfully and authorized, you can subscribe to users by calling the server thread by calling the `registration.pushmanager.subscribe ()` `).

The entire code chip is as follows (including registering Service Worker):

`` `
Function subcribeusertopush () {) {)
Return navigator.serviceWorker.register ('Service-workr.js')
.then (regship (registry) {
var subscribeOptions = {
uservisibleonly: true,
ApplicationServerkey: BTOA (
'Bel62iuyguivxikv69yviebiebia-IB9-SKVMeata3LFGDZKRXZJBJBJBKR3QBUHBQFLXYP5NKSH8U'
Cure
};

    Return registration.pushmanager.Subscribe (subcribeoptions);

})
.then (functions (pushsubscripting) {{
console.log ('pushsubscripting:', json.stringify (pushsubscripting));
Return pushsubscripting;
});
}
`` `

`registration.pushmanager.subscribe (options)` There is a _ options _ object parameter, which contains necessary or optional parameters:

**\* UservisibleOnly **: Boolean value indicates whether the returned push subscription is only used for the news that users can see. It must be set to `true` otherwise (which is caused by historical reasons).
** ApplicationServerkey **: A `Domstring` string or` ArrayBuffer` containing the base64 encoded of the public key, the message push server is used to verify the application server.

The message push server needs to generate a pair of application server key pairs -that is, the VAPID key pair, which is unique for the message push server. They are composed of a pair of public keys and private keys. The private key secrets are stored in your push server, and the public key is used to exchange communication with the client. These keys allow the application server of the subscriber to the push service and ensure that the subscription and trigger push message to the specified user is the same application server.

You only need to generate a private/public key pair at one time. You can access <https://web-push-codlab.glitch.me/> Give the key pair.

When subscribers, the browser is introduced to the push service to the `ApplicationServerkey` (public key), which means that the push service binds the application server public key and the user's` pushsubscripting`.

The process is as follows:

- The network application is loaded, and then call the `Subscripe` to pass the server's public key.
- The browser initiates a request to generate an endpoint information to the message push service, and the key information is associated with the endpoint and returned to the endpoint to the browser.
- Browser information adds end information to the `pushsubscripting" object returned by the `Subscribe ()` promise.

After that, whenever you need to push the information, you must send a authentication header that contains the information of the application server private key signature.

Whenever the push service receives a request for push messages, it will verify the authorized head by looking for the public key bound to the specified end (second step).

## pushsubscripting object

`Pushsubscripting` contains all information necessary for pushing information to user devices. The following information is included:

`` ` {{ "Endpoint": "https://domain.pushservice.com/some-s", " "keys": { "p256dh": "Bipul12dlfytvtajnryr3pjdagxs3hgmllqndgCJGCJGCJYHHEJYLNGCEXL1DN18GSJ1WARAPIXR4GK0_dqds4yii =",,,,,,,,,,,,,,, to ",,,,, to",,,,, to ",,,,, to",,,,, to ",,,, to",,,,, to ",,,,, to",,,, to ",,,, to",,,,, to ",,,, to",,,,, to ",,,,, to",,,, to ",,,,, to",,,,, to ",,,,, to",,,,, to ",,,, "Auth": "FPSSMOQPMLMXWMDSDDBKVW ==" } } `` `

`Endpoint` is the push service address. When you need to push the message, initiate the POST request to the address.

The `Keys` object contains the value of the information data sent by encryption with the push message.

When the user subscribes and returns the `Pushsubscripting" object, you need to save it on the push server. In this way, you can save the relevant data of the subscription in the database and then from now on, you can send messages to the specified user based on the storage value in the database.

! [] (https://user- Images.githubuserContent.com/1475173/40720627-F2DAD902-6449-18-8988-9eaeae09b7.png)

## Message push

When you need to send a message to the user, you first need a message push service. You notify the push service (through interface calls) to push data, the target users of the message push, and any standard of how to send messages. Under normal circumstances, these interface calls are completed by message push server.

## Message push service

The message push service is used to receive requests, verify requests, and push messages to the specified user browser side.

Please note that the news push service here is not controlled by you -it is a third -party service. The server just communicates with the message push service through the interface. [Google ’s FCM] (https://firebase.google.com/docs/Cloud-messaging/) is one of the message push services.

Message push service will handle the core affairs. For example, when the browser is offline, the push service will line up before sending their respective news and wait until the browser is connected to the network.

Each browser can use arbitrary push services they want to use, and developers cannot control it.

However, all message push services have the same interface, so that the difficulty of the message push implementation will not be increased due to different interfaces.

You can obtain the URL address of the request request from the attribute value of the `endpoint` attribute value of the` pushsubscripting` object.

## Message push service interface

The message push service interface provides a way to send messages to users. This interface is an IETF standard protocol called [web public protocol] (https://tools.ies.ies.itef.org/html/draft-dedf-webpush-ProTocol-12), which defines how to call message push services.

Push messages must be encrypted. This can prevent the message push service from peeping at the data sent. This is crucial because the browser side can decide which message push service using (may use some non -trusted and unsafe news push services).

Message push parameter:

**\* ttl ** -Define the saving time in the queue before being deleted and not being able to transmit.
**\* Priority ** -defines the priority of each message, so that when the user needs to save power, the message push service can push only the high priority message.
**\* Topic ** -Set the theme name for the push message. This can be replaced by the same theme name to replace the hanging message, so once the device activates, the user will not receive the expired message.

! [] (https://user- Images.githubuserContent.com/1475173/40720628-f3673e1a-6449-18-8194-93452bd76a.png)

## Browser Message Push Event

Whenever a push service is sent to the above, the message will be in the state to be sent until the following situations occur:

- Device connecting network.
- The message in the queue stays more than the settings of the settings.

When the message push service transmits the message to the browser, the browser will receive, decrypt, and then distribute the `push` event in the service worker.

The key point is that even if the webpage is not opened, the browser can still execute the Service Worker. The following incidents will occur:

- Browsers decrypt the receiving push message.
- Browser wakes up Service Worker.
- Service Worker received the `push` event.

The monitoring event is very similar to other events written in JavaScript.

`` ` Self.addeventListener ('Push', Function (Event) { if (event.data) { console.log ('this push event has data:', event.data.text ()); } else { console.log ('this push event has no data.'); } }); `` `

It is necessary to understand the point of the service worker, that is, it is incompetent to run. Only browsers can wake up and end it.

In the Service Worker, `Event.waituntil (Promise)` told the browser service worker that it is processing the message until Promise analysis is completed. If you want to complete the message processing, then the browser should not stop the Service Worker.

The following is a sample of handling the `push` event:

`` `
Self.addeventListener ('Push', Function (Event) {
var promise = self.regization.shownotification ('push notification!');

event.waituntil (promise);
});
`` `

Call the `Self.regization.shownotification ()` to pop up a notification to the user and return a promise. Once the notification display is complete, the parsing is completed.

You can intuitively adjust the method of `shownotification (title, options). The `title` parameter is a string and Options is a similar object:

`` `
{{
"//": "Visual Options",
"Body": "<string>",,
"icon": "<url String>",
"Image": "<url String>",
"Badge": "<URL String>",
"Vibrate": "<array of intends>", "
"Sound": "<url String>",
"Dir": "<string of 'auto' | 'ltr' | 'rtl'>",

"//": "Behavior Options",
"tag": "<string>",,
"Data": "<Anything>",
"RequireInteraction": "<boolean>",
"renotify": "<boolean>",
"Silent": "<boolean>",,

"//": "Visual and Behavior Options",
"Action": "<Array of Strings>", "

"//": "Information option. No visual effect",
"TimesStamp": "<LONG>"
}
`` `

You can view the more detailed contents of each option for each option.

Whenever you want to share urgent, important and urgent information with users, message push services are an excellent way to inform users.

## Reference resources

- <https://developeers.google.com/web/fundamentals/push-notifications/>
- <https://developeers.google.com/web/fundamentals/push-notifications/how-push-works>
- <https://developers.google.com/web/fundamentals/push-notifications/subscribing-a- user>
- <https://developeers.google.com/web/fundamentals/push-notifications/handling-messages>

** Below is the content of your own extension. **

## Notification processing

Service worker can use similar code to process:

`` `
Self.adDeventListener ('NotificationClick', Function (EVENT) {
console.log ('[service worker] notification click receiver.');

event.notification.close ();

event.waituntil (clients.openwindow ('https://developers.google.com/web/'));););););););););););););)
});
`` `

## Summarize

Nodejs can use [here] (https://github.com/web-push-libs/web-push) to build a push server.

To make a webpage message push, the conditions required for push are:

- Message push server (call message push service and generate VAPID public key and private key pair).
- Check the browser side, to obtain authorization, use the message to push the public key generated by the server and generate subscribing objects, save the subscription object to the push server.
- Message push service (third -party service).

Let's represent a flow chart:

! [] (https://user- Images.githubuserContent.com/1475173/40726275-F9E70A-6457-18-9F32-19CF0930ABA8.png)
