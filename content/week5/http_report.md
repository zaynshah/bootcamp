# HTTP Requests & Responses

## Request : 1 of the three header sections. Contains information about the resource to be fetched or about the client requesting the resource.  

### GET: HTTP is designed to enable communications between clients and servers. HttP has methods (CRUD - create, read, update and delete). Get is used to request data, 1 of the most common method. Should never be used for sensitive data. Only to be used to request data and have a length restriction. It can be cached(stored). GET is used to retrieve data, online APIS.  

### HTTP/1.1 - Currently there is HTTP, which does the same as http but is more efficient and multi links reducing the ampunt of steps needed. HTTP/1.1 is 

### Host - Host specifies the host and port number of the server to which the request is being sent. 443 is default for https and 80 for http. Status code of 400 may happen is more then one host. Domain name is normally shown like sigmalabs.xyz.

### User-Agent : header request that allows network protocol to identify the browser (chrome) and os system being used. User-agent secifies product and version normally as well as platform.

### Accept: This indicatates which content types, the client is able to understand. Browsers set own required values. image/* corrosponds to png , svg etc. */* is any type. 

### Accept-Language - simple - natural language that the client prefers. Can give a weighting system.

### Accept-Charset - outdated, browsers no longer use this and should ignore it.

### Cookie: optional, stored HTTP cookies associated with the server previously sent. Cookie: name=value, name2=value2.

### Pragma: General header implementation, ussed for backward compatability in http:1.0. Same as Cache-control.

### Cache-Control: Used to specify browser caching policies in both client request and server request. Included how it is cached, where and maximum age before expiring. 

## Response: A response header does not relate to the content of the message. It is used to give more context of the resoinse.

### HTTP/1.x

### 200 OK: This is a status code. 100's are information codes, I.e request were recieved and ok to continue. 200 are success codes. 300 are redirection such as new URL. 400 client has error sush as internet or unauthorised. 

### Date

### Server: often hidden or very basic detail to stop attakers exploiting servers. 

### Connection: allows the sender/client to specify options that are desired for thaht particular connection. Prohibted in http2+. Controls whether the network stays open after the current transaction finishes. 

### X-Powered-By: Non-standard HTTP response header. Sometime can be misleading to throw of hackers. Specifies the tech supporting the web application.

### Expires: Gives the date/time that the response is considered stale. 

### Etag: Entity control, lets caches be more efficient and saves bandwidth. 

### Cache-Control: is an HTTP header used to specify browser caching policies in both client request and server rsponses.Includes how a resource is cached, where and maimum time before expiring. 

### Content-Type - Is used to indicate the original media type of the resource. For eample text/html ot json or multipart/form-data.

### Last-Modified - The Last-Modified response HTTP header contains a date and time when the origin server believes the resource was last modified.

### Vary - The Vary HyperText Transfer Protocol (HTTP) response header determines how to match future request headers. This information is required to decide whether or not a cached response can be served instead of requesting a fresh one from the origin server.

### <!DOCTYPE html...
