Cleerly Takehome
---
So, for this exercise I decided to poke a little bit at cypress to write end to end tests as I was building the solution. Under normal circumstances, these e2e tests would focus on a few happy path examples and I would augment these tests with unit tests for each component and utility function on the front end and unit and api tests on the backend. Unfortunately, these didn't fit in the 3 hour alotment. However, I think these e2e tests give a good idea of the class of tests I would write for production code and provide sufficeint coverage for maintenance and extension.

Just know that under normal circumances I would do a better job balance the tests per the testing pyramid/triangle.

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

Running the tests
---
To run the e2e tests:
```
cd frontend && make test
```