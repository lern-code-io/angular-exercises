# Task 14: Unsubscribe from observable (lv1)

## Description
Update the CommentViewComponent by adding a .pipe operator, before subscribing, to the observable chain. Inside the pipe
operator add the 'takeUntilDestroyed' operator. This will unsubscribe when the operation is complete.

## Acceptance Criteria
- Add the takeUntilDestroyed to the observable chain in CommentViewComponent, using the destroyRef.


## Useful Links
- [Angular takeUntilDestroyed](https://angular.dev/api/core/rxjs-interop/takeUntilDestroyed#)

