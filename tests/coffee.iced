Tinytest.add 'Hello Coffee', (test) ->
  test.equal 1, 1

Tinytest.add 'Await and Defer', (test) ->
  t1 = Date.now()
  await setTimeout defer(), 1000
  t2 = Date.now()
  test.equal (t2-t1) >= 1000, true
