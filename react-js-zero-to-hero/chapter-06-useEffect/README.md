# Assignment - Exploring the World

## What is Microservices?

A microservice is a architectural pattern which has emerged from the world of domain-driven design, continuous delivery, platform and infracturcture automation, scalable sysytems, polyglot programming and persistance.

A microservice architecture (newer model for application development) where we group up the main functionalities into services instead of maintaining them under one application. these loosly coupled services which can be deployed, and maintained independently. each of these service is responsible for discrete task and can communicate with other service through simple APIs to solve a larger complex problem.

#### Key Benifits:

1. As the constituent (part of the whole application) services are small, they can be built by one or more small teams from scratch seperated by service boundaries which makes it easier to scale-up.

2. Once developed, these services can be deployed independantly of each other and we can easy to identify the hot services and scale them independantly of whole application.

   - fault isolation is easier and whole application won't stop working if one service has error. we can fix it the error and redeploy that service instead of the whole application.

3. Another advantage is we can use multiple technologies to develop the service, there is no need of limiting to one technology. we can use the best technology for that service to acheive specific functionality.

#### [Reference:](https://medium.com/hashmapinc/the-what-why-and-how-of-a-microservices-architecture-4179579423a9)

## What is Monolith architecture?

Monolithic architecture is the traditional structure for software application.

Monolithic is an all-in-one architecture, where in all aspects of the software operate as a single unit.

Monolithic architecture is a unified development model for software application. It has 3 components:

1.  Client-side user interface
2.  Server-side application
3.  Data interface

All there parts interact with a single database.Software built on this model operates with one base of code.

Pros:

1. It's easier to take care of issues that affect the whole application.(caching, logging, performance monitoring, and handling. basically easier to manage).
2. It's easier to test and debug. (as everything is at one place end-to-end testing is easier).
3. It's easier to deploy and develop. (it requires only one file or directory. so deployment is easier).

Cons:

1. It's hard to scale or change. (as everything is at one place, changes must involve the entire architecture. The entire application must scale all at once).
2. The code becomes complicated. (as all in one base code, it will become increasingly complex as the application grows and changes).
3. It's challenging to integrate with new technology. (as all the application lies in one base code, it's difficult to integrate. the code rewrite from scratch should accommodate).

#### [Reference](https://www.integrate.io/glossary/what-is-monolithic-architecture/)

## What is the difference between Monolith and Microservice?

A monolithic software application may be a simple office suite software program for individual user.
monolithic connects to single database.

A microservices operates as a loose collection of functionalities (known as services) that work together under the basket of a single application. each service is deployed into there own cloud-based environment and single team dedicated to it.

#### [Reference](https://www.geeksforgeeks.org/monolithic-vs-microservices-architecture/)
