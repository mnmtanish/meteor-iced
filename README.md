IcedCoffeeScript Compiler
=========================

Compiles Iced Coffee Script (.iced) files.

Example
-------

~~~coffee
if Meteor.isClient
  await Meteor.call 'add', 2, 3, defer(err, res)
  console.log(res)

if Meteor.isServer
  Meteor.methods
    add: (x, y) -> x + y
~~~

TODO
----

 - `await` and `defer` doesn't work on server side. Iced uses some global variables which aren't exported properly. `iced` is one such variable but there can be more of them. Anyways, we have fibers on server side don't we?
