# Task 40: Use service to communicate between 2 components (medior 1)

## Description
Update the service 'DisplayConnectorService' so that it has a behaviour subject observable that will emit the variable 'storedCounterValue'. Also
update the 'onIncrementCounter' function to increment the 'storedCounterValue' by one and then emit the result. Update the 'DisplayOneComponent' to
call the 'onIncrementCounter' function when the button is clicked. Update the 'DisplayTwoComponent' to subscribe to the observable within the 
OnInit lifecycle hook and display within the HTML template.

## Acceptance Criteria
- Update the 'DisplayConnectorService' to store the storedCounterValue in a behaviour subject and update the onIncrementCounter to increment the storedCounterValue - then emit.
- Update the 'DisplayOneComponent' so that on click the onIncrementCounter function located in the service is called
- Update teh 'DisplayTwoComponent' so that it subscribed to the behaviour subject located in the service layer and assigns value to the variable 'counter'. This
  should be done within the OnInit lifecycle hook
- Load up Angular and click the button. Then navigate to page two. The counter value should be incremented by one.

## Useful Links
- [Angular BehaviorSubject](https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject)
- [Anguler LifeCycle Hooks](https://angular.dev/guide/components/lifecycle)
