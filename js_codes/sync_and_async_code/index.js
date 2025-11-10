//code types:
//        1. sync: the pointer points the code line and it is executed immediately
//             e.g. console.log,etc
//        2. async: the pointer points the code line and it might take more than it should
//             e.g. functions, setTimerOut(),etc;
//
//terms in event loop:
//        1. call stack: a stack in which events are pushed when pointer points it and event are popped when they
//                       are executed successfully
//                        here if this pushes an async code it pops it and puts it into browser executes it and then
//                        this browser puts it into callback queue and finally this queue puts it into the stack when
//                        the stack is empty
//                        sync code continues running despite of async
//        2. browser: responsible for executing async code
//        3. call back queue: this stores executed async code to call after the event loop checks if the stack becomes empty
//here this is to prevent blockings of other sync code due to async code

// to visualize visit "loupe event loop visualizer"

//JavaScript is fundamentally a single-threaded language. This means it has one call stack and one memory heap,
//and it executes code in a sequential manner, one operation at a time. The JavaScript engine processes a single
//line of code, finishes its execution, and then moves to the next.
//However, this single-threaded nature does not mean JavaScript is entirely synchronous or blocking. It achieves
//asynchronous behavior and handles operations like network requests, timers, and user interactions without blocking
//the main thread through mechanisms like the Event Loop and Web APIs (in browsers) or the Node.js runtime environment.


