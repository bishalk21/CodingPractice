# Service worker, life cycle and its usage scenarios

> For the original text, please refer to [here] (https://blog.sessionStack.com/how-javascript- work-servicers-their-life-and-users-52b19ad98b58). This article is used in this article. [Knowledge Sharing Signature 4.0 International License Agreement] (http://creatingcommons.org/licenses/by/4.0/) Sharing, by [trues://github.com/troland).

** This is the eighth chapter of JavaScript's working principle. **

! [] (https://user-images.githubusercontent.com/1475173/40543994-3BFFF8-6059-11E8-8179-9c5ad4AB38C9.jpeg)

Perhaps you have learned that [progressive network application] (https://developeers.google.com/web/progressive-web- apps/) will only become more and more popular because it aims to create a more smooth user experience with a smoother user experience The application experience of network applications and creation of native apps instead of the appearance and experience of the browser side.

One of the main requirements for building a gradual network application is still available under the conditions of various networks and data loading -it can be used in the case of unstable network or no network.

In this article, we will learn more about the Service Workers: how they work and should pay attention to. In the end, we will list some of the team practical experience in [sessionStack] (https://www.sessionStack.com/).

## Overview

If you want to understand everything related to service workers, you should first read articles about [web workers] (https://github.com/troland/how-javascript-works/blob/master/Worker.md).

Generally speaking, the Service Worker is a web worker, which is more accurate, it is more like a [shared worker] (https://developer.mozilla.org/en/docs/web/api/sharedWorker).

-Arvice worker runs in its global script context
-Doly associated with a specific webpage
-It cannot access DOM

One of the reasons why the Service Worker interface is exciting is that it supports online application offline operation, which enables developers to fully control the behavior of network applications.

## The life cycle

The life cycle of Service Worker is completely unrelated to the webpage. It consists of the following steps:

- download
- Install
  -Activation

## download

This occurs in the `.js` file containing the Service Worker code in the browser.

## Install

In order to use the Service Worker in network applications, you must first register it in the JavaScript code. When the Service Worker register, it will let the browser start installing the service worker steps in the background.

By registering the Service Worker, the browser knows that the JavaScript file containing the Service Worker -related code. Look at the following code:

`` ` if ('serviceworker' in navigator) { Window.addeventListener ('Load', Function () { navigator.serviceworker.register ('/SW.JS'). Then (function (registry) { // registration success console.log ('ServiceWorker Registration Successful'); }, Function (ERR) { // registration failed console.log ('ServiceWorker Registration failed:', err); }); }); } `` `

The above code first checks whether the current execution environment supports the Service Worker API. If so, register `/sw.js` service worker.

When loading each page, you can call the `register ()` -browser to detect whether the `Service Worker` has been registered to deal with it appropriately.

`register ()` Methods that need special attention is the service worker file address. The current example is in the server root directory. It means that the service worker will act on the entire source address. In other words, the service worker will receive the `fetch` event of all pages under the domain name. If the file path of the registered service worker is `/example/sw.js`, then the Service Worker will receive the` fetch` event (such as ` /example/page1/page/page1/page/page1/page, ``  `/example/page2/`).

In the installation stage, it is best to load and cache some static resources. Once the static resource cache is successful, the installation of the Service Worker is completed. If the loading failure -Service Worker will try it out. Once the installation is successful, the static resources cache successfully.

This also answered why the service worker should be registered after the load event. This is not necessary, but it is highly recommended.

Why do you do this? Suppose the user visits the network application for the first time. There is no registered service worker, and the browser cannot know if it will be installed in advance. If installation is performed, the browser will need to open up additional CPUs and memory for the increased thread, otherwise the browser will render web pages.

** For reference [here] (https://javascript.info/onload-nedomcontentloaded), `Load` incidents will load all resources such as pictures, which will be triggered after the style. **

The end result is that if the service worker is installed in the page, it may cause page delay loading and rendering -not allow users to access the webpage as soon as possible.

It should be noted that this will only happen when the first visit page. The subsequent page access will not be affected by the installation of the Service Worker. Once the Service Worker is activated at the first visit to the page, it can handle the follow -up page to load/cache event triggered by the subsequent page access. This is correct, the Service Worker needs to prepare to handle limited network connection activities.

## activation

The next step is activated after installation. This step is an excellent timing of cache resources before operation.

Once activated, the Service Worker can start controlling all pages in its scope. An interesting fact is that the page of the Service Worker page is not controlled by the Service Worker until it is loaded again. When the service worker starts to control, it has the following state:

-The FETCH and Message events triggered by the network or message request from the page
-S stop to save memory

The following is its life cycle:

! [] (https://user- Images.githubuserContent.com/1475173/40543992-3B818826-6059-11E8-991Ab801E8B9.png)

## Processing the installation process inside the service worker

In the process of running the Service Worker on the page, let's take a look at what happened in the Service Worker script. It handles the `Install` event of the Service Worker instance to add event handles to the Service Workder instance.

The following is the steps required to deal with the `Install` event:

-Open the cache
-Atnesion file
-Coust whether all the static resources have cached

The following is a simple installation code within a service worker:

`` `
var Cache_name = 'My-Web-APP-Cache';
var urlstocache = [
'/',
'/styles/main.css',
'/Scripts/app.js',
'/Scripts/lib.js'
];

Self.addeventListener ('Install', Function (Event) {
// event.waituntil uses promise to obtain the installation duration and whether the installation fails
Event.waituntil (
caches.open (cache_name)
.then (function (cache) {
console.log ('Opened cache');
Return cache.addall (urlstocache);
})
);
});
`` `

If the files are successfully cached, the service worker is installed successfully. If the download of any file failed, the service worker will fail. Therefore, please pay attention to the file that needs to be cached.

The treatment of the `Install` event is completely optional. When it is not processed, skip the above steps.

## Cache Running Request

This part is dry goods. Here you can see how to intercept requests and return the created cache (and create a new cache).

When the service worker is installed, the user will navigate to another page or refresh the current page, and the Service Worker will receive the FETCH event. Here is an example of how to return the cache's static resource or perform a new request and the process of cache returning results:

`` `
Self.addeventListener ('Fitch', Function (Event) {
Event.Respondwith (
// This method query request and return any cache data created by the Service Worker.
caches.match (event.request)
.then (functionse (response) {
// If there is a cache, return
if (response) {
Return response;
}

        // Copy the request. The request is a stream and can only be used once. Because it has been used once through the cache, in order to use FETCH in the browser, the request needs to be copied.
        var fetchrequest = event.request.clone ();

        // No cache was found. So we need to execute FETCH to initiate a request and return the request data.
        Return fetch (ftchrequest) .then (
          Function (response) {
            // Detect whether the return data is valid
            if (! Response || Response.status! == 200 || Response.type! == 'Basic') {
              Return response;
            }

            // Copy the return data because it is also flowing. Because we want the browser to use the back data like the cache, we must copy it. There are two streams
            var responsetocache = response.clone ();

            caches.open (cache_name)
              .then (function (cache) {
                // Add the request to the cache for the query after preparing
                cache.put (event.request, responsetocache);
              });

            Return response;
          }
        );
      })
    );

});
`` `

The general process is as follows:

-`event.Respondwith ()` will determine how to respond to the `fetch` event. `Caches.match ()` Query the request and find whether there is any cache result in the cache created before and return to Promise.
-If there is, return the cache data.
-Otherwise, execute `fetch`.
-Check whether the status code returned is `200`. At the same time, check whether the response type is ** Basic **, that is, check whether the request is the same domain. The current scene does not cache the request of third -party resources.
-Cap the return data to the cache.

Because the request and response are flowing and flow data can only be used once, it must be replicated. And because they need to use them and their browsers, they must be replicated.

## update service worker

When a user access to the network application, the browser will try to download the `.js` file containing the service worker code in the background.

If the downloaded file is different from the current Service Worker code file, the browser will think that the file will change and create a new service worker.

The process of creating a new service worker will start, and then trigger the `Install` event. However, at this time, the old service worker still controls the pages of network applications that the new service worker will be in the `Waiting`.

Once the currently opened page is turned off, the old service worker will be killed by the browser and the newly installed service worker. At this time, the `activate` event will be triggered.

Why is it all necessary? This is to avoid the problems caused by the network applications of different versions of different versions in different tabs -some problems that exist in the webpage and may generate new bugs (for example, when the data is stored locally in the browser, It has different database structures).

## Delete data from the cache

The most common steps in Activate` are cache management. Because if you want to delete the old cache in the installation step, this will cause the old service worker to not obtain the file data in the cache, so you need to perform cache management at this time.

Here is a sample demonstration of how to delete the cache that is not in the whitelist (in this case, name it with `Page-1 or` Page-2`):

`` `
Self.addeventListener ('Activate', Function (Event) {

var Cachewhitelist = ['Page-1', 'Page-2'];

Event.waituntil (
// Get all the keys in the cache
caches.keys (). The then (function (cachenames) {{
Return Promise.all (
// Traversing all cache files
cachenames.map (function (cachename) {
// If the cache file is not on the white list, delete it
if (cachewhitelist.indexof (cachename) === -1) {
Return caches.delete (cachename);
}
})
);
})
);
});
`` `## https requirements

When you are in the development stage, you can use the service worker through LocalHost, but when you are in the publishing environment, you must deploy HTTPS (this is the last reason to use HTTPS).

You can use the Service Worker to hijack and forge the response data. If you do not use https, network applications will easily suffer [Intermediate] (https://en.wikipedia.org/wiki/man-in-dhe-middle_attack) attack.

In order to ensure security, the Service Workers must be registered on the page of HTTPS, so that the Service Worker received by the browser can not be tampered with during the transmission process.

## browser support

Service workers have good browser compatibility.

! [] (https://user-images.githubusercontent.com/1475173/40270197-7267d41e-5BBB-11E8-978CAB346084.png)

You can track the support process of all browsers:

<https://jakearchibald.github.io/isserviceWorkerReady/>

## Service Workers provides more features

Service worker's unique features:

-Phole notification -Allows users to choose to receive push updates in time
-The background synchronization -Allow delay operation until the network connection is stable. This can ensure that users send data.
-Shamction regularly (support in the future) -This provides the function of managing regular background data synchronization functions

- ** GeofenCing ** (support in the future) -This can customize parameters, that is, ** Geofnces **, which contains the areas that users are interested in. When the device passes through a geographical fence, it will be notified, which will allow you to provide a useful user experience based on the geographical location of the user.

Each function mentioned here will be explained in detail in the article after the series.

We continue to work to make the interactive experience of SessionStack as smooth as possible, optimize the page load time and response time.

When a user session or real -time stream playback on [sessionStack] (https://www.sessionStack.com/), the SessionStack interface will continue to capture data from the server to create a class buffer experience for users (similar to video buffer experience That kind). Then learn more about some principles, that is, once the sessionStack library is integrated in network applications, it will continue to collect data such as DOM changes, user interaction, network requests, unprocessed abnormalities, and debugging information.

When replacing or watching a session in real time, SessionStack will return all data to facilitate observation of all events that occur in the user browser. (Visually and technical). All of this happened immediately because we don't want to wait for users.

Because the data is captured by the front end, at this time, the service worker can be used to process the situation of the same data like a player and the transmission of all data again. It is also important to deal with slow network connections.

** See [Definition] (https://zh.wikipedia.org/wiki/%E5%E5%8D%E6%99%8%B8%B8%B2%E6%B5%81%E5 %8d%94%E5%AE%9A) can better understand the concept of stream here. **
