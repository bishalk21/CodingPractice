#Web worker category and 5 usage scenarios

> For the original text, please refer to [here] (httts://blog.sessionStack.com/how-javascript- works-dhe-building-blocks-web-workers-when- said-source-whem- A547C0757F6A), slightly deleted, this article adopts [Knowledge Sharing Note 4.0 International License Agreement] (http://creativecommons.org/licenses/by/4.0/) Sharing, by [trues://github.com/ Troland).

** This is Chapter 7 of JavaScript's working principle. **

Now, we will analyze Web Workers: We will comprehensively compare different types of workers, how to combine their construction modules for development and their respective advantages and disadvantages in different scenarios. Finally, we will introduce 5 scenarios suitable for web workder.

In [the detailed article before] (https://github.com/troland/how-javascript-works/blob/OverView.md) You have clearly understood the fact that JavaScript is a single thread. However, JavaScript also allows developers to write asynchronous code.

## Limitation of asynchronous programming

Earlier we learned that [asynchronous programming] (https://github.com/troland/how-javascript- works/blob/master/event-md).

The asynchronous programming is delayed in the event cycle through the scheduling part of the code, which allows the priority to render the program interface to allow the program to run smoothly.

AJAX request is a good use of asynchronous programming. Because the request may take a long time, you can perform them asynchronously, and then run other code while waiting for the data to return.

`` ` // Assume that using jQuery jquery.ajax ({ url: 'https://api.example.com/endpoint', Success: Function (Response) { // The code when the data returns } }); `` `

However, a problem will be generated here -AJAX request is processed by the browser webpage API. Can you perform other code asynchronous? For example, assuming the code for successful callback is CPU dense type:

`` ` var result = PerformcpuintersiveCalCulation (); `` `

If the `PerformcpuintersiveCalCulation` is not an HTTP request but a code that can block the rendering of the interface (such as a large number of` for` cycle), then there is no way to release the event cycle and non -blocking browser UI -browser will be frozen and lost response to the response. Essence

This means that asynchronous functions only solve the single -threading restrictions of some JavaScript.

In some cases, you can solve the UI obstruction caused by long -term calculations by using the `settimeout`. For example, by calling a complex calculation into several independent `settimeout` calls, put them in different positions of the event cycle, and then the UI can render and respond.

Let's see a simple function that calculates the average value of the number array.

`` `
Function average (numbers) {
var len = numbers.Length,
SUM = 0,
i;

    if (len === 0) {
        Return 0;
    }

    for (i = 0; I <len; I ++) {
        sum += numbers [i];
    }

    Return Sum / Len;

}
`` `

You can rewrite the above code into analogy:

`` `
Function Averageasync (Numbers, Callback) {{
var len = numbers.Length,
sum = 0;

    if (len === 0) {
        Return 0;
    }

    Function Calculatersumasync (i) {
        if (i <len) {{
            // Call the next function in the event cycle
            settimeout (function () {
                sum += numbers [i];
                CALCULATESUMASYNC (I + 1);
            }, 0);
        } else {
             // Arrive at the end of the array, call back the callback
            callback (SUM / Len);
        }
    }

    CALCULATESUMASYNC (0);

}
`` `

The `settimeout` function is used here to add every calculation in the event cycle. Between each calculation, there will be sufficient time to perform other calculations and thaw browsers.

## Web Workders 来救场

[Html5] (https://www.w3schools.com/html/html5_intro.

- SSE (previous article] (https://github.com/troland/how-javascript-works/blob/master/http.md)
- Geolocation
- Application Cache
- Local Storage
- DRAG and DROP
  **\* web worker **

** Web workers ** is a built -in thread for browser so it can be used to perform the JavaScript code that can be used to perform the cycle of non -blocking events.

awesome. The entire JavaScript is based on a single -threaded environment and web workers (parts) can break through this limit.

Web workers allow developers to put long -term operation and dense computing tasks in the background execution without blocking the UI, which will make the application run smoother. In addition, there is no need to use the black technology of `settimeout` to prevent blocking incidents from circulating.

Here is a difference between displaying and unavailable web workers for array sorting.

## web worker overview

Web workers allow you to do the time -consuming script that runs the CPU computational dense task without blocking the UI. In fact, all these operations are performed parallel. Web workers are real multi -threaded.

You may have any questions- "Isn't JavaScript a single thread? "".

When you realize that JavaScript is a language without defining thread models, you may feel very surprised. Web workers are not part of JavaScript. They are one of the browser functions that can be operated by JavaScript. In the past, most browsers were single -threaded (of course, now it has changed), and most of the JavaScript functions are completed on the browser. Node.js does not implement Web Workers -it has the concepts of "cluster" and "child_process", which are somewhat different from Web workers.

It is worth noting that there are three types of web workers in the specification:

- [Dedicated workers] (https://developer.mozilla.org/en-s/docs/Web/Web_WORKERS_API/USING_WEB_WERERS)
- [Shared worker] (https://developer.mozilla.org/en-s/docs/web/api/sharedworker))
- [Service Workers] (https://developer.mozilla.org/en-s/docs/web/api/serviceWorker_api))

## Dedicated workers

Dedicated web workers are instantiated by the main process and can only communicate with it

! [] (https://user-images.githubusercontent.com/1475173/40270200-7324ac2e-5BBB-11E8-80D6E0B5DFB.png)

<CENTER> Dedicated Workers browser support situation </center>

## shared worker

Shared workers can be accessed by all processes in the same -origin (different browsing tabs, inner joint frameworks, and other shared workers).

! [] (https://user- Images.githubuserContent.com/1475173/40270199-72B94baa-5BBB-11E8-9755-541047F8E93A.png)

<Center> Shared worker browser support situation </center>
## Service worker

Service Worker is a worker driven by event, which is composed of source and path. It can control its associated web pages, intercept and modify navigation, resources requests, and a very fine -grained method to cache the resources to allow you to control the behavior of the program in some cases (such as the network is unavailable).

! [] (https://user-images.githubusercontent.com/1475173/40270197-7267d41e-5BBB-11E8-978CAB346084.png)

<Center> Service Workers Browser Support Situation </Center>

In this article, we will focus on Dedicated workers and call it "web workers" or "workers".

## web workers running principle

Web workers are implemented in a loading `.js` file. These files are not loaded asynchronous in the page. These requests will be completely hidden by the [web worker api] (https://developer.mozilla.org/en-s/docs/web/web_Workers_api).

Workers use message transmission of thread threads to achieve parallel communication. They are very suitable for providing users with the latest UI, high performance and smooth experience.

Web Workers runs in a isolation thread of the browser. Therefore, the code they execute must be included in a separate file. Remember this feature.

Let us see how to create a basic worker:

`` ` var worker = new worker ('task.js'); `` `

If the "task.js" file exists and accessible, the browser will generate a thread to download the file asynchronous. When the current download is completed, the file will be executed immediately and then worked. In case the file does not exist, the worker will fail without any prompts.

In order to start the created worker, you need to call the `postmessage` method:

`` ` worker.postmessage (); `` `

## web worker communication

In order to communicate between Web Worker and the pages of creating it, you have to use the `PostMessage` method or a [broadcast channel] (https://developer.mozilla.org/en/docs/web/api/broadCastChannel).

## postmessage method

The first parameter of the latest browser support method is a `json` object and old browser only supports string.

Let's understand how the worker created by the page of the `json` object parameters as a complex example is to communicate with it. The string is similar to it.

Let's see the following HTML pages (or more accurate is part of the HTML page)

`` `
<button Onclick = "startComputation ()"> Start Computation </Button>

<script>
  function startComputation () {
    worker.postmessage ({'cmd': 'average', 'data': [1, 2, 3, 4]});
  }
  var worker = new worker ('dowork.js');
  worker.addeventListener ('Message', Function (E) {
    console.log (E.Data);
  }, FALSE);
  
</script>

`` `

The script of worker is as follows:

`` ` Self.addeventListener ('Message', Function (E) { var data = e.data; switch (data.cmd) {{ Case 'Average': var result = callculatingAverage (data); // The function of calculating the average in a certain value array Self.postmessage (result); Break; DEFAULT: Self.postmessage ('unknown commit'); } }, FALSE); `` `

When the click button, you can call the `PostMessage` method on the homepage.

`worker.postmessage` Ring code will introduce the` JSON` objects containing the `cmd` and 'data`attributes and their respective attribute values. Worker handles the news that passed on by defining monitoring`Message` incident handles.

When receiving the message, Worker executes actual calculations without blocking the incident cycle. Worker will check the `E` event that passed in, and then run like a standard JavaScript function. When the operation is over, the result is passed back to the homepage.

In the context of worker, both `seld` and` this` point to the global scope of Worker.

> There are two ways to interrupt the execution of WOKER: Call on the homepage `worker.terminate ()` or call it inside the workder

## Broadcast channel

[Broadcast Channel] (https://developer.mozilla.org/en-s/docs/Web/api/broadCastChannel) is a more common communication interface. It allows us to send messages to all contexts that share the same source. All browser tabs under the same source, the inner joint framework or workers can send and receive messages:

`` `
// Connect to a radio channel
var bc = New BroadCastChannel ('Test_Channel');

// Send a simple information example
bc.postmessage ('this is a test message.');

// A simple event processing procedure for a simple event processing process on the console
// LOGS The Message to the Console
bc.onMessage = function (e) {{
console.log (E.Data);
}

// Close the channel
bc.close ()
`` `

Visually, you can understand it more deeply through the legend of the broadcast channel.

! [] (https://user-images.githubusercontent.com/1475173/40270201-736E77D2-5BBB-11E8-9aa8-c8706A15F0E6.png)

<Center> All browser contexts are homologous </center>

However, the radio channel browser compatibility is not very good:

! [] (https://user- Images.githubuserContent.com/1475173/40270202-73c75668-5BBB-11E8-8793-6F48BF059294.png)

## Message size

There are two ways to send messages to web workers:

- Copy message: The message is serialized, copied, and then sent out, and then serialized at the receiving end. The page and Worker do not share the same message instance, so the final result in each transmission process is copied. Most browsers realize this function by automatically perform JSON encoding/decoding message values ​​at any end. As expected, the operation of the data has significantly increased the performance overhead of message transmission. The greater the news, the longer the transmission time.
- Message transmission: This means that the initial message sender is no longer used (<!-and no matter the launch of the missile->). Data transmission is very fast. The only limit is that it can only transmit the [ARRAYBUFFER] (https://developer.mozilla.org/en-s/docs/web/javascript/reference/global_objects/arraybuffer).

## web worker's available function

Due to the multi -threaded characteristics of Web Workers, it can only use a part of the JavaScript function. The following is a list of functional functions:

- `navigator` object
- `Location` Object (read only)
- `Xmlhttprequest`
- `settimeout ()/Cleartimeout ()` and `setInterval ()/Clearinterval ()` ``
- [Application Cache] (https://www.html5rocks.com/tutorials/appcache/beginner/)
- Use the `ImportScripts` to reference the external script
- [Create other web workers] (https://www.html5rocks.com/en/tutorials/basics/#toc-enviornment-subworkers)

## web worker's limitations

Deficiency is that web workers cannot access some very critical JavaScript features:

- DOM (non -thread safe)
- `Window` object
- `document` object
- `Parent` object

This means that web worker cannot operate DOM (therefore cannot update UI). Sometimes this is tricky, but once you learn how to make Web Workers reasonably, you will use it as a separate "calculator" to use other pages to operate the UI. Workers will complete the heavy computing tasks for you, and then once the task is completed, the result will be passed to the page and the necessary updates will be updated.

## error treatment

Like any JavaScript code, you will want to deal with any errors in Web workers. When there are errors during the worker execution, the `Errorevent` event is triggered. This interface contains three useful attributes to point out the wrong place:

** filename ** -The Worker script name caused by the wrong
**\* lineno ** -number of code rows that cause errors
**\* Message ** -Wlying description

Example:

`` `
function onerror (e) {
console.log ('line:' + e.lineno);
console.log ('in:' + e.filename);
console.log ('Message:' + E.Message);
}

var worker = new worker ('workerwitherror.js');
worker.addeventListener ('error', onerror, false);
worker.postmessage (); // Start a worker without any message
`` `

`` ` Self.addeventListener ('Message', Function (E) { PostMessage (x * 2); // Intent errors. 'x' is not defined }; `` `

Here, you can see that we created a worker and then began to monitor the `Error` incident.

In worker (in the `workerwitherror`), we create an intentional error by using the `x` multiplied by 2 by the` x` that is not defined in the scope of action. The abnormalities will spread to the initial script (ie on the home page) and then call onerror and pass the information about the error.

## Best use scene of web workers

So far, we have listed the strengths and restrictions of Web Workers. Let's take a look at their best use scenarios:

**\* Right Tracking **: Ritting Tracking is a path that is tracked by tracking [light] (https://en.wikipedia.org/wiki/light) as pixels to generate picture rendering technology. Ray Tracing uses CPU -intensive mathematics calculations to imitate the path of light. The idea is to imitate some effects such as reflection, refraction, materials, etc. All these computing logic can be placed in a web worker to avoid blocking UI threads. Even a better way is -you can easily split the rendering of the picture in several workers (that is, calculate in your respective CPUs, which means that you can use multiple CPUs for calculation. You can refer to Nodejs’s’s from Nodejs. API). Here is a simple example of using web workers to track rays- <https://nerget.com/rayjs-mt/rayjs.html>.

- Encryption: The end -to -end encryption becomes more and more popular due to the increasingly strict laws of protecting individuals and sensitive data. The encryption is sometimes very time -consuming, especially if you need to encrypt a lot of data (for example, send the data to the server). This is an excellent scene using Web Worker, because it does not need to access DOM or uses other magic -it is just calculated purely using algorithms. Once calculated in Worker, it is seamless for users and will not affect the user experience.

- Pre -data: In order to optimize the website or network application and improve data loading time, you can use Workers to load some data in advance to prepare from time to time. Unlike other technologies, web workers are the best in this case, because it does not affect the use experience of the program.

- Grade network application: Even if the network is unstable, they must be loaded quickly. This means that data must be stored locally in the browser. At this time [indexdb] (https://developer.mozilla.org/en-s/docs/web/api/indexeddb_api) and other similar APIs came in handy. Generally speaking, a client storage is necessary. In order not to block the rendering of the UI thread, this work must be performed by Web Workers. Uh, when using IndexDB, you can use its asynchronous interface without using Workers, but it also contains synchronous interfaces before (may be introduced again). At this time, it must be used in workers.

  ** It should be noted here that the synchronous interface is no longer supported in the modern browser. For details, you can view [here] (https://developer.mozilla.org/zh-docs/web/api/indexeddb_api). **

- Patoun check: A basic spelling detector is working like this -the program reads a dictionary file containing the correct word list. The dictionary will be parsed as a search tree to accelerate the actual text search. When the inspector checks a word, the program will be retrieved in the pre -constructing search tree. If not retrieved in the tree, it will be available by replacing optional words and testing words-if it is a word required by the user, the user provides an alternative spelling. All the tasks during this retrieval can be completed by Web Worker, so that users only need to enter words and statements without blocking the UI. At the same time, Worker will process all search and supply suggestions.

In [sessionStack] (https://www.sessionStack.com/?utm_source=Medium_Medium=source&utm_Content=javaScript-web-workerrs-) The reason why such an important reason is that once the sessionStack is integrated into the network application, it will start collecting all information from DOM, user interaction to network requests, unprocessed abnormalities and debugging information. All the data is transmitted to our server in real time, so that you will allow you to replace all the problems in the network application and observe all the problems generated by the user. Everything will only bring a small delay to the program without any performance overhead.

That's why we use Web Workers to process the logic of monitoring libraries and players, because Web Workers will help us handle tasks such as using hash to verify data integrity and rendering CPU -intensive types.

In this era of network technology, we work harder to ensure that the sessionStack is lightweight and does not bring any performance effects on user programs.

## extension

The actual work process will encounter a case of obtaining the picture Base64 by analyzing remote pictures. Then at this time, if the picture is very large, it will cause Canvas's `Todataurl` to operate quite time, thereby blocking the rendering of the page.

So solve the idea that the operation of the processing picture here is handed over to the worker. The main code is posted below:

`` `
<! Doctype html>

<html lang = "zh-cn">
<head>
  <meta charset = "utf-8">
  <Title> Canvas to Base64 </Title>
</head>
<body>
  <script>
    Function loadimageasync (url) {
      if (typeof url! == 'strong') {{
        Return Promise.reject (New Typerror ('Must Specify A String'));
      }

      Return New Promise (Function (RESOLVE, Reject) {
        const Image = New Image ();
        // Allow Canvas cross -domain loading pictures
        Image. crossorigin = "anonymous";
        Image.Onload = Function () {
          const $ canvas = document.createElement ('canvas');
          const ctx = $ canvas.getContext ('2D');
          const width = this.Width;
          const height = this.Height;
          let ImageData;

          $ canvas.width = width;
          $ canvas.height = height;
          CTX.DRAWIMAGE (Image, 0, 0, Width, Height);
          Imagedata = ctx.getImageData (0, 0, $ canvas.width, $ canvas.head);
          Resolve ({Image, ImageData});
        };

        Image.onError = function () {
          Reject (new error ('Could Not Load Image at' + URL));
        };

        Image.src = url;
      });
    }

    Function blobtodataurl (blob) {
      Return New Promise (Fulfill, Reject) => {{
        let Reader = New Filereader ();
        Reader.onerror = Reject;
        reader.onload = (e) => Fulfill (reader.Result);
        Reader.readasdataUrl (blob);
      })
    }

    document.addeventListener ("DomContentLoaded", function () {
      LoadImageasync ('https://cdn-images 1.Medium.com/max/1600/1*4lhhyfehvb0lnq3hlhss8g.png')
        .then (fundction (image) {
          // jpeg-web- workr.js https://github.com/ketmw/jpeg-web- worker
          const workr = new worker ('jpeg-web-worker.js');
          worker.postmessage ({
            Image: Image.imagedata,
            quality: 50
          });
          worker.onMessage = Function (e) {
            // E.Data is the imagedata of the jpeg. {data: u8intarray, height: int, width: int}
            // you can still convert the jpeg imagedata into a blog like this:
            const blob = new blob ([e.data.data], {type: 'image/png'});
            blobtodataurl (blob) .then ((Imageurl) => {
              console.log ('Imageurl:', ImageURL);
            })
          }
        })
        .cATCH (fuins (ERR) {
          console.log ('error:', err.message);
        });
    });

  </script>
</body>
</html>
`` `

The above is to obtain picture data through Canvas. Is there any other way? There must be some, let's take your mind.
