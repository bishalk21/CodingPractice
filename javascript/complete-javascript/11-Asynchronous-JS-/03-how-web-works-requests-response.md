# How the Web works: Requests and Responses

### Scenario

client(browser) --------request(data--GET/POST)--------> server (web APIs) ----response(data)----> client(browser)

- client(browser) is the user
- server is the web server

### How the Web works?

- When we type a URL in the browser, the browser makes a request to the server and the server responds with the data (HTML, CSS, JS, images, etc.)

## Request-Response Model or Request-Response Cycle

The process of sending a request and receiving a response is called the request-response cycle.

- Every URL gets a protocol called HTTP (Hyper Text Transfer Protocol) or HTTPS (Hyper Text Transfer Protocol Secure), a domain name, and a path or resource.
- Domain name is not the real name of the website. It is just a name that is used to identify the website.
- First the browser makes a request to the DNS (Domain Name System) server to get the IP address of the server with the help of Internet Service Provider (ISP).
- The real address of the website contains protocol, ip address, and port number.
- Once browser gets the IP address of the server, the tcp/ip socket connection is established between the client and the server.
- then the browser makes a http request to the server with the help of the socket connection.

  ```js
  GET /rest/api/2/issue/10000 HTTP/1.1      ----------------------> START LINE: HTTP method (GET/POST/PUT/DELETE), path, protocol + request target + HTTP version

  Host: jira.atlassian.com                  ----------------------> HEADER: key-value pair
  User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0   ----------------------> HEADER: key-value pair
  Accept: application/json                 ----------------------> HEADER: key-value pair
  Authorization: Basic YWRtaW46YWRtaW4=  ----------------------> HEADER: key-value pair
    Accept-Language: en-US,en;q=0.5      ----------------------> HEADER: key-value pair

    <BODY>                              ----------------------> BODY: data(only when sending data to the server e.g. POST/PUT)
  ```

- Once request is formed, it hits the server which will be then working on it until the data or web page is ready to be sent back to the client.
- Once the server is ready to send the response, it sends the response back to the client using the same socket connection.

  ```js
  HTTP/1.1 200 OK                        ----------------------> START LINE: HTTP version + status code + status message

  Date: Wed, 22 Jul 2020 12:00:00 GMT   ----------------------> HEADER: key-value pair
  Server: Apache/2.4.18 (Ubuntu)         ----------------------> HEADER: key-value pair
  Content-Type: application/json         ----------------------> HEADER: key-value pair
  Transfer-Encoding: chunked             ----------------------> HEADER: key-value pair

  <BODY>                                ----------------------> BODY: data
  ```

- Once the response is received by the client, the socket connection is closed.
- The browser then parses the response and displays the web page.
- first index.html is to be loaded and then the other resources like css, js, images, etc. are loaded and the process is repeated until all the resources are loaded.

### TCP/IP Socket Connection

TCP - Transmission Control Protocol

IP - Internet Protocol

- TCP/IP is a set of rules that defines how data should be sent and received over the internet or web.
- internet's fundamental protocol suite is TCP/IP.

How TCP/IP works?

- First, the jop of TCP/IP is to break the request and response into small packets or chunks.
- Then it sends the packets to the server.
- Once the server receives the packets, it reassembles the packets and sends the response back to the client.
- The job of IP protocol is to send and route the packets to the right destination through the internet using the IP address in each packet.

### Request

- A request is a message sent by a client to a server requesting some kind of service.

### Response

- A response is a message sent by a server to a client in response to a request.

### HTTP vs HTTPS

| HTTP                                                           | HTTPS                                                                    |
| -------------------------------------------------------------- | ------------------------------------------------------------------------ |
| HTTP stands for Hyper Text Transfer Protocol.                  | HTTPS stands for Hyper Text Transfer Protocol Secure.                    |
| HTTP is a protocol that is used to transfer data over the web. | HTTPS is a protocol that is used to transfer data over the web securely. |
| less secure                                                    | more secure using SSL/TLS                                                |
| HTTP uses port 80                                              | HTTPS uses port 443                                                      |
| HTTP is unencrypted                                            | HTTPS is encrypted                                                       |
| HTTP is faster                                                 | HTTPS is slower                                                          |

### SSL/TLS

SSL - Secure Sockets Layer

TLS - Transport Layer Security

- SSL/TLS is a protocol that is used to encrypt data over the web.
