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
