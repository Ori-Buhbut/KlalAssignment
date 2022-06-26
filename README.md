# Theoretical Assignment
1. 
SQL INJECTION - SQL injection is a code injection technique that might destroy your database ,SQL injection is one of the most common web hacking technique, SQL injection is the placement of malicious code in SQL statements, via web page input.

2. 
Usage Block - Using calls Dispose() after the using-block is left, even if the code throws an exception.

3. 
* 1.Local Temporary Table.
* 2.Global Temporary Table.
* Global and local temp tables can operate differently.  A stored procedure is a well-known example of how the two types of temp tables operate differently.  
  Local temp tables created in a stored procedure within a connection cannot be referenced outside of the stored procedure.  However, global temp tables created inside a stored procedure can be referenced from outside the stored procedure
   
4. 
Observable vs Promise - The biggest difference is that Promises won't change their value once they have been fulfilled. They can only emit (reject, resolve) a single value. On the other hand, observables can emit multiple results. The subscriber will be receiving results until the observer is completed or unsubscribed from

5. 
* Dependency Injection - Dependency injection is a programming technique that makes a class independent of its dependencies. It achieves that by decoupling the usage of an object from its creation.
* creating class and interface, and add it as a singleton to the method "ConfigureServices" in Startup.cs, use it on the controller constractor.
	
6.
Json - easy to maintaine and manipulate the data.

7. 
* Configure Services - method gets call runtime to register services to DI container. After registering the dependent classes, you can use those classes anywhere in the application. The ConfigureServices method includes the IServiceCollection parameter to register services to the DI container.
* Configure Methods -  a place where you can configure application request pipeline for your application using IApplicationBuilder instance that is provided by the built-in IoC container.

8. 
* Transient — Services are created each time they are requested. It gets a new instance of the injected object, on each request of this object. For each time you inject this object is injected in the class, it will create a new instance.
* Scoped — Services are created on each request (once per request). This is most recommended for WEB applications. So for example, if during a request you use the same dependency injection, in many places, you will use the same instance of that object, it will make reference to the same memory allocation.
* Singleton — Services are created once for the lifetime of the application. It uses the same instance for the whole application.

# Practical Assignment
* npm install node modules on server and client
* npm start the server
* npm start the client


