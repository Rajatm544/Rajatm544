// To run this effect in loop set 'loop' to true
const instance = new Typewriter("#typewriter", {
    loop: true,
});
instance
    .pauseFor(500)
    .typeString("Hi There!")
    .deleteAll()
    .typeString("I am Rajat.")
    .pauseFor(500)
    .deleteChars(1)
    .typeString(",<br>A Web Developer.")
    .pauseFor(500)
    .deleteAll()
    .typeString("Check Out My Work, <br>Right Here @Rajatm544!")
    .deleteAll()
    .typeString("Thanks!")
    .pauseFor(500)
    .deleteAll()
    .start();
