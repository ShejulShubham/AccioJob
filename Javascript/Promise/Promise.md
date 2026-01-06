# JavaScript Promise APIs

In JavaScript, Promise APIs (static methods) are used to handle multiple asynchronous operations concurrently. These methods take an iterable (usually an array) of promises and return a single promise based on the collective outcome.

## 1. Promise.all()

**Behavior:** "All or Nothing"

* It waits for all promises to resolve.
* Returns an array of results in the same order as the input.
* **Fail-fast:** If any promise is rejected, the entire `Promise.all` rejects immediately with that error.

```javascript
const p1 = Promise.resolve("Success 1");
const p2 = Promise.resolve("Success 2");
const p3 = Promise.resolve("Success 3");

Promise.all([p1, p2, p3])
  .then(res => console.log(res)) // ["Success 1", "Success 2", "Success 3"]
  .catch(err => console.error(err));

```

## 2. Promise.allSettled()

**Behavior:** "Wait for Everyone"

* It waits for all promises to settle, regardless of whether they resolve or reject.
* Returns an array of objects describing the outcome of each promise.
* Each object has a `status` ("fulfilled" or "rejected") and a `value` or `reason`.

```javascript
Promise.allSettled([p1, Promise.reject("Error"), p3])
  .then(results => console.log(results));
/* Output:
[
  { status: 'fulfilled', value: 'Success 1' },
  { status: 'rejected', reason: 'Error' },
  { status: 'fulfilled', value: 'Success 3' }
]
*/

```

## 3. Promise.race()

**Behavior:** "First to Settle Wins"

* Returns a promise that resolves or rejects as soon as the **first** promise in the iterable settles (either success or failure).
* If the first one to finish is a success, it resolves; if it’s a failure, it rejects.

```javascript
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 2000));
const fast = new Promise((_, reject) => setTimeout(() => reject("Fast Error"), 500));

Promise.race([slow, fast])
  .then(res => console.log(res))
  .catch(err => console.error(err)); // "Fast Error" (finished first)

```

## 4. Promise.any()

**Behavior:** "First Success Wins"

* It waits for the **first successful** (resolved) promise.
* If the first promise to finish fails, it ignores it and waits for the next one.
* **Aggregate Error:** If all promises are rejected, it returns an `AggregateError` containing all rejection reasons.

```javascript
Promise.any([Promise.reject("Fail 1"), Promise.resolve("Success 2"), p3])
  .then(res => console.log(res)); // "Success 2"

```

---

### Comparison Summary

| API | Main Goal | Success Condition | Failure Condition |
| --- | --- | --- | --- |
| **all** | Batch all successes | All must resolve | Any one rejects |
| **allSettled** | Check all outcomes | Always resolves | Never rejects (as a whole) |
| **race** | Speed (any outcome) | First to settle (success) | First to settle (failure) |
| **any** | First success | First to resolve | All must reject |