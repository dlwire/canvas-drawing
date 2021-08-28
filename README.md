Cleerly Takehome
---
So, for this exercise I decided to poke a little bit at cypress to write end to end tests as I was building the solution. Under normal circumstances, these e2e tests would focus on a few happy path examples and I would augment these tests with unit tests for each component and utility function on the front end and unit and api tests on the backend. Unfortunately, these didn't fit in the 3 hour alotment. However, I think these e2e tests give a good idea of the class of tests I would write for production code and provide sufficeint coverage for maintenance and extension.

Under normal circumances I would do a better job balance the tests per the testing pyramid/triangle.

There are a few additional pieces I would not normally consider this complete without, but I spent about 3 hours implementing the requirements here already.
* Better balance between unit and acceptance tests - I over rotated on cypress here because I was using this as an opportunity to get some time with the tool.
* Ability to draw rectangles at an angle - likely would require a 3-click drawing process for rectangles
* Ability to see the shape about to be drawn - this would require redrawing the "saved" shapes and and the "to-be-drawn" shape each time the "to-be-drawn" shape changes
* Refactoring - this code is decent, but I'd probably drag the "state" and manipulators out into a context to separate that work from the UI code. It would also make that easier to test in isolation.

Running the app
---
You'll want to run the front and backend in separate terminal tabs.

To run the backend:
```
cd backend && make install && make run;
```

To run the frontend:
```
cd frontend && nake install && make run;
```

To access the drawing app navigate to http://localhost:3000.

Running the tests
---
To run the e2e tests, the frontend and backend must already be running, then:
```
cd frontend && make test
```
