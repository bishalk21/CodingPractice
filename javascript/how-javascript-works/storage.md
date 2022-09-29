# Storage engine and how to choose the right storage API

> For the original text, please refer to [here] (https://blog.sessionStack.com/how-javascript- work-style-" This article uses [Knowledge Sharing Copy 4.0 International License Agreement] (http://creativecommons.org/licenses/by/4.0/) sharing, by [trues://github.com/troland).

** This is the 16th chapter of JavaScript's working principle. **

## Overview

Whenever the web program is designed, it is particularly important to choose the appropriate storage mechanism for local equipment. A good storage engine can help developers store data effectively, reduce transmission bandwidth and increase the response speed of programs. The correct storage cache strategy is a core component of building a mobile offline web experience. More and more users think that they can use mobile web programs offline by default.

In this chapter, we will discuss various available storage APIs and services, and provide some suggestions for how to correctly choose the storage engine when building a web program.

## data model

The data storage model determines how it organizes the storage data. This will affect the design of the entire web program, and calculate the expenses required to get high -performance web pages and solve the problems they encountered. There is no so -called better technology and one -size -fits -cut solution, because all problems are engineering -related issues. So, let's take a look at the selected data model:

- Structural type: Data is stored in the table with predetermined fields. Because it is a typical SQL -based database management system, it can adapt to flexible and dynamic data query. IndexedDB is a prominent example of a browser -end structured database.
- Key/value type: key/value data storage and relational NOSQL database, allowing developers to store and obtain non -structural type data (that is, data of non -predetermined data type fields) through unique keys. The keys/value data storage is like a hash table storage, which means and its allowed to access the fuzzy data type data of the indexing index within a fixed time. A good example of the key/value data storage includes the Cache API and the server -side Apache Cassandra on the browser.
- Bytes: This simple model stores the data as a fixed -length, blurred byte variables of the string, allowing the application layer to control its internal data organization. This model is especially suitable for large data of file storage systems and other hierarchical organizations. Typical examples of byte storage include file systems and cloud storage services.

## 久#

The data storage method of the web program can be analyzed by the data storage duration:

- Specific durability: When the data is valid when a single web session or activity browser tab is valid, it will fail. The session persistence data stores an example that the [Session Storage API] (https://developer.mozilla.org/en-s/docs/web/api/window/sessionStorage).
- Equipment persistence: This type of data is valid for cross -meeting words and browser tabs/windows of special devices. An example of the device persistence storage mechanism is [cache api] (https://developer.mozilla.org/en-us/web/api/cachestorage).
- Global persistence: This type of data is across session and equipment storage. Therefore, it is the best data durability solution. It is not stored on the device, which means that data is required from the server storage. Because it only discusses data storage for devices here, it is just a little bit of server data storage.

## client data persistence

Nowadays, a lot of browser APIs are available for storage data. These methods will be discussed in detail here, and then compare it to allow developers to easily choose the correct data storage solution.

However, before choosing how to store data, developers need to consider a few things. Of course, the first thing is to think about how to use web programs and subsequent maintenance and performance optimization. Even if the chest has a bamboo, there may be only a few options. The following is the question that developers need to consider:

- Browser support-Priority to consider standardized and organized APIs, because these APIs will not easily change and have good compatibility. These APIs also have very rich documentation and active developer communities.
- Affairs-Sometimes, transactions are essential for the success or failure of related data storage operations. Traditional database uses transaction models to implement this function, and the relevant data updates are divided into any unit in the transaction model.
- Synchronous/asynchronous-Minority storage API is synchronized means storage or retrieval data request will block the current active thread until the data request ends. Use synchronous data to store API to block the main thread and let the program interface die. Try to use asynchronous storage API.

## Compared

Here, let's browse web developers currently available APIs and use the above dimensions to compare.

<iframe src = "https://airtable.com/embed/shribgjdumidvh9/tbl7z3cqbw4dd7dtn"> </iframe>

## File System API

! [0_9kpeHy4Mub8F- HSP] (https://user-images.githubusercontent.com/1475173/50570382-f0B9C100dc3-19 -b38ABC429c4e.png))

With the FileSystem API, the web program can be newly built, read, operate, and write files in the sandbox of the user's local file system.

The interface contains the following parts:

- Read and operate files: `File/Blob`,` Filelist`, `Filereader`
- New and writing files: `blob ()`, `filewriter`
- Visit directory and file system: `DirectoryReader`, Fileentry/DirectoryEntry`, LocalFilesystem`

File system API is not a standard API. Because its compatibility is not good, remember not to use it in the production environment. The implementation of various browser manufacturers will be very different and the API may be changed in the future.

File and directory entry API interface file system is used to represent a file system. You can obtain these objects from any file system entry (httpsysystem] (https://developer.mozilla.org/en-use/web/api/filesystems/filesystem) attributes. A few browsers provide additional APIs to create and operate file systems.

The interface does not allow developers to access the user's file system. Instead, developers will get a virtual disk in the browser sandbox. If you want to access the user's file system, you can adopt the method of installing the Chrome plug -in.

## Get the file system

The web program can call `Window.requestFilesystem ()` to access the sandbox file system. The

`` ` // Note: This file system uses Google Chrome 12 as the prefix The File System has prefixed as of Google Chrome 12: Window.requestFilesystem = Window.requestFilesystem || Window.webkitrequestFilesystem; Window.requestFileSystem (Type, SIZE, SuccessCallback, Opt_errorCallback) `` `

When the RequestFileSystem () method is called for the first time, a new local storage will be created. It should be noted that the file system is a sandbox type, which means that the web program cannot access the files of other programs.

After obtaining the permissions of the access file system, developers can operate most of the standard file systems on the files and directory.

Compared with other storage strategies, FileSystem is very different, and it aims to meet the database that cannot solve the client storage situation well. Generally speaking, programs are used to handle large binary BLOBS files or programs outside the browser context sharing data.

The following is a good example of using FileSystem:

- Break-point renewal tool-When selecting a file or file directory to upload it, the file will be copied into the local sandbox once.
- Video games, music or other programs containing a large number of media files
- Audio/picture editors that provide offline access or local cache functions for better performance-Data Blobs is generally very large and need to be readable
- Offline video player-it needs to download large files to watch after preparing or efficient rail search-stream transmission
- Offline web mail client-download attachments and local storage

The following is the support of the current browser of the API:

! [0_NDU4N8XQF6QEQMSY] (https://user-dithubusercontent.com/1475173/50570378- EF889400dc3-19-9959-c08431d.png)

## Local Storage

! [0_asohzlowolitnuel] (https://user-images.githubusercontent.com/1475173/50570381-f0212a80-0dc3-19-917F908AF1C.png)

LocalStorage API allows developers to visit [Document] (https://developer.mozilla.org/en-s/docs/web/api/document) US/DOCS/Web/API/Storage) objects. The stored data is still valid between multiple browser seasons. LocalStorage and [SessionStorage] (https://developer.mozilla.org/en-s/Docs/web/api/window.sessionStorage), but the data stored in LocalStorage did not expire, and stored in SessionStorage The data will be lost at the end of the page session-meaning is lost when the page is closed.

Whether it is LocalStorage or SessionStorage, its data is only stored in specific page sources. Page source includes protocols, host names and ports.

The following is the support of the current browser of the API:

! [0_hxc_nupNycubhj-l] (https://user-dithubusercontent.com/1475173/50570379-f0212A80-0dc3-19-9C7C-9316e5b0.png)

## session storage

! [0_-IMSNWS_L1G0SYLA] (https://user-dithubusercontent.com/1475173/50570384-f0B9C3-11E9-94F5-12C69719.png)

The sessionStorage attribute allows developers to access the current source session [storage] (https://developer.mozilla.org/en-s/docs/web/api/storage) object. As mentioned earlier, sessionStoORAGE is similar to [localStorage] (https://developer.mozilla.org/en-s/docs/web/api/window/localstorage). The only difference is that the data stored in the LocalStorage did not expire and the data in SessionStorage will be lost at the end of the page conversation. The timeliness of the page session is when the browser is opened and the page is loaded and recovered. Opening a new page or window in the new tab will cause a new session to re -initialize a new session, which is different from the working mechanism of the session cook.

Please note that the data is stored in SessionStorage or LocalStorage, both are only effective in the specified page source.

The following is the support of the current browser of the API:

! [0_hxc_nupNycubhj-l] (https://user-dithubusercontent.com/1475173/50570379-f0212A80-0dc3-19-9C7C-9316e5b0.png)

## Cookies

! [0_vkqiniyfu2o7D7BH] (https://user-images.githubusercontent.com/1475173/50570385-f1525780-0dc3-19-9021-a89939840dea.png)))))

The so -called cookie (web cookie, browser cookie) refers to a small paragraph data sent by the user's server to the client. The browser stores it down and send it to the same server at the next request. Generally speaking, it is used to inform the two requests from the same client-such as keeping the user login status. It is [no state] (https://developer.mozilla.org/en-s/docs/web/overView #Http_is_stateless_but_Not_SessionLess.

Cookies have the following three main purposes:

- Session management-login, shopping cart, game points, or other data that needs to be recorded on the server.
- Personalized-user parameters, skin and other settings
- Monitoring-Record and analysis of user behavior

Cookies used to be a universal client storage solution. When it is the only solution stored by the client, this is the best choice. It is now recommended to choose a modern storage API to store client data. Every time you send a request, you will bring cookies, so it will affect performance (especially when a mobile request data is requested).

There are two types of cookies:

- Session Cookie- When the user turns off the browser, it will fail. The web browser can use session recovery technology to curing most of the session cookies, as if they have not closed the browser.
- Permanent Cookie-closed with the client, and the expiration is opposite. Permanent Cookie expires after the specified expiration time or after a specified time period (Max-Age) expires.

Please be careful not to store credentials or sensitive information in cookies because of its inherent unsafe defect mechanism.

However, it is not said that cookies are the best compatibility solutions.

## Cache

! [0_xz2u-ztabjosky] (https://user-images.githubusercontent.com/1475173/50570386-f1525780-0dc3-19-9156-244f3.png)

The cache interface is a storage mechanism for cache request/response object. Please note that you can use the cache interface in the window as a Workers. Although Cache is defined in the service workline specification, this does not mean that it must be used with the service workline.

One source can have multiple cache objects. Developers only need to achieve how to deal with the update cache in the script (such as in [service work threads] (https://developer.mozilla.org/en/docs/web/api/serviceWorker). Unless an explicit request does not update the object in the cache, it can only be deleted by deleting the cache object, and it will not expire. Use [cacheStorage.open ()] (https://developer.mozilla.org/en-s/docs/web/api/cachestorage/open) to open the cache object with the specified name to maintain the cache method to maintain the cache cache method Essence

Developers need to clear the cache bar regularly. Each source has a limited cache data on the browser. Use [StorageEstimate] (https://developer.mozilla.org/en-s/docs/Web/api/storageStimate) to estimate the cache quota. The browser tries to manage the hard disk space, but it may delete the designated cache data. The browser may delete all the data or not. Remember to use the name to manage the script and only operate the script version that can operate safely. View [DELETING OLD Caches] (https://developer.mozilla.org/en-s/docs/web/api/ServiceWorker_API/USING_SERVICERS #Deleting_CACHES) to get more information.

** cacheStorage ** interface represents [cache] (https://developer.mozilla.org/en-s/docs/web/api/cache) object storage.

interface:

- Provide a one that can be [ServiceWorker] (https://developer.mozilla.org/en-s/docs/web/api/serviceWorker) or [Window] (https://developer.mozilla.org /EN-US/DOCS/Web/API/Window) The main directory of all naming cache (although in [service workline] (https://w3c.github.io/serviceworker/) The cache does not mean that it can only be used with the work thread)
- Maintain a string name and [cache] (https://developer.mozilla.org/en-s/docs/web/api/cache) object

Use [cacheStorage.open ()] (https://developer.mozilla.org/en-s/docs/web/api/cachestorage/open) to get [cache] (https://developer.mozilla.org/en -US/DOCS/Web/API/Cache) instance.

Use [cacheStorage.Match ()] (https://developer.mozilla.org/en-s/docs/web/api/cachestorage/match) /EN-US/DOCS/Web/API/Request) is the key of [Cache] (https://developer.mozilla.org/n-s/docs/web/api/cache) objects tracked by the Caches.

Use the global [caches] (https://developer.mozilla.org/en-s/docs/web/api/WorkerglobalScope/caches) attributes.

## Indexeddb

! [0_hp66xm7oe9u8ofk1] (https://user-images.githubusercontent.com/1475173/50570387-f1525780-0dc3-19-810e-9769fc85783.png))))

IndexedDB is a client persistence data storage solution. Because it allows developers to create web programs with rich query capabilities and do not need to care about the network situation, these web pages can run online or offline.

IndexedDB is suitable for a large amount of data storage (for example, a library DVD directory) and a web program program that does not need to keep network connectivity (for example, mail client, to do things and note).

Because everyone is more familiar with other storage APIs, this article will be more acknowledged for IndexedDB. In addition, as web programs are becoming more and more complicated, indexeddb is becoming more and more popular.

## IndexedDB principle

IndexedDB allows developers to use keys to store and obtain an object. All operations on databases occur in transactions. Like other web pages storage schemes, IndexedDB follows [homologous strategy] (http://www.w3.org/security/wiki/same_origin_policy). Therefore, data cannot be accessed across the world, and only storage data under the same domain name can be accessed.

You can use this asynchronous API on most of the context including [https://developer.mozilla.org/en/USING_WEB_WERERS). Indexeddb once also has [Synchronous] (https://developer.mozilla.org/en/indexedb#Synchronous_api) version, which is applied to web threads, but because the community does not catch a cold, it is deleted from the specification.

IndexedDB once also has a competitive specification called WebSQL database, but has been abandoned by W3C. Although indexeddb and websql are storage solutions, their functions are different. WebSQL database is a relational database access system, and IndexedDB is just an index table system.

Don't use other types of database as a blueprint, take it for granted using indexeddb. On the contrary, you need to read the document carefully. The following is the core concept that developers need to understand:

**\* IndexedDB database storage key-value pairs of **-value can be a complex structural object, and the key can be the attributes of these objects. Developers can use any attributes of objects to create indexes of fast search, such as enumeration sorting. The key can also be a binary object.
**\* IndexedDB is all operations in the transaction-based data model **-indexeddb. /Basic_concepts_behind_indexeddb#GLOSS_TRANSACTION). Therefore, developers cannot execute commands or open the cursor outside the transaction. Similarly, transactions can only be automatically submitted manually.
**\* Most IndexedDB is asynchronous **-API does not return data by returning value. Instead, you need to pass the callback function to process the return value. This means that the developer does not store the value into the database or directly get the value from the database. Instead, the request request to initiate a database operation. When the data processing is over, the developer will be notified, and the type of events monitored by developers will notify the data operation of the data. This is the same as the work principle of [xmlhttprequest] (https://developer.mozilla.org/en/dom/xmlhttprequest) (or so many other JavaScript) work principles are similar.
**\* IndexedDB uses a lot of requests **-The request is used to receive the success or failure of previously mentioned. They include onSuccess and onerror attributes, as ReadyState, Result, ErrorCode, etc. used to inform the request status attributes.
**\* IndexedDB is an object-oriented **-indexeddb is not a table-related database containing a collection of collection. This huge difference affects the design and web program of developers.
**\* IndexedDB does not use the structural type query language (SQL) ** -The it will create a cursor after using the query on the index, which can be used to traverse the results set. If you are not familiar with the NOSQL system, you can read [Wikipedia's article about NOSQL] (https://en.wikipedia.org/wiki/nosql).
**\* IndexedDB also applies homologous strategies **-A source that contains domain names, application layer protocols and URL port address documents, and the script is executed in the source. Each source has its associated database set. Each database has the only identification in the source.

## **Indexeddb ** limitations

IndexedDB is designed to meet most client storage. However, it has not been designed to deal with the following situations:

**\* international sort **-not all languages ​​arranged string in the same way, so international sorting is not supported. Although the database cannot store data in the designated international order, developers can read data in the database and arrange data by themselves.
**\* synchronization **-API is not used to synchronize with server data. Developers must write code by themselves to synchronize the client IndexedDB database and server database.

- Full text retrieval-there is no similar operator in the API as the Like in SQL.

In addition, it should be noted that the browser will clear the database in the following situation:

**The user initiated the request for removal operation **-Many browsers allow users to clear the data of the designated website, including cookies, bookmarks, storage passwords, and IndexedDB data.
**\* Browser in privacy mode **-Some browsers contain "Firefox" and "Chrome" (Chrome) mode. The database will be removed at the end of the session.
**\* beyond the disk capacity or disk limit. **
**\* Data damage. Essence Essence **

Although the reality and browser capacity are changing with each passing day, browser manufacturers work hard in the direction that may save data.

! [0_kgdqye70_Z58D7NA] (https://user-images.githubusercontent.com/1475173/50570765-b9064580-0dd2-19-92173c9f01.png)

## Select the right storage API

As mentioned earlier, it is best to use API with good compatibility and provide asynchronous call models to maximize the UI response speed to the maximum extent. These standards naturally produce the following technical choices:

- Use [cache api] (https://developeers.google.com/web/fundamentals/instant--offLine/web-storage/cache-api). The API is available in browsers that support [service workline] (https://jakearchibald.github.io/isserviceWorkerReady/) function. The Cache API is very suitable for arranging resources associated with known URLs.
- Use INDEXEDDB to store program status and content generated by users. Compared with the browser that only supports the Cache API, this allows users to use the program offline in more browsers.

## refer to

- <https://developeers.google.com/web/fundamentals/instant-nd- -5web-storage/>
- <https://developer.mozilla.org/en-s/docs/web/http/cookies>
- <https://developer.mozilla.org/en-s/docs/web/api/indexedb_api/basic_concepts_behind_indexeddb>
