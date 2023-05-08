<!-- <h3>What is TypeScript ?</h3>
<h5>
=> TypeScript is a superset of JavaScript created by Microsoft.
=> It allows static strict typing.
</h5>

 -->
<h1>Interview Questions</h1>
<br/>
<br/>
<br/>

<!-- Question 1 -->

<h3>
<p>
<b>Question 1:</b> What is TypeScript, and how is it different from JavaScript?
</p>
<p>
<b>Ans:</b>
TypeScript is a superset of JavaScript that adds optional static type checking and other advanced features to the language. It was created and is maintained by Microsoft.
<br/>
=> TypeScript is known as an Object-oriented programming language whereas JavaScript is a prototype-based language. <br/>
=> TypeScript has a feature known as Static typing but JavaScript does not support this feature. <br/>
=> TypeScript supports Interfaces but JavaScript does not. <br/>
</p>
</h3>

<br/>
<br/>


<!-- Question 2 -->

<h3>
<p>
<b>Question 2:</b> Can you explain the difference between "interface" and "type" in TypeScript?
</p>
<p>
<b>Ans :</b> In TypeScript, both "interface" and "type" are used to define object types and describe the shape of data. They have similar functionality, but they have some differences in syntax and use case. Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type , the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable. <br/>

</p>
</h3>

<br/>
<br/>

<!-- Question 3 -->

<h3>
<p>
<b>Question 3:</b> What is the difference between an "unknown" and "any" type in TypeScript?
</p>
<p>
<b>Ans :</b> You can assign anything to unknown type but you have to do a type check or type assertion to operate on unknown. on the other side you can assign anything to any type and you can perform any operation on any. unknown which is the type-safe counterpart of any. Anything is assignable to unknown, but unknown isn't assignable to anything but itself and any without a type assertion or a control flow based narrowing. Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type.<br/>

</p>
</h3>

<br/>
<br/>

<!-- Question 4  -->
<h3>
<p>
<b>Question 4:</b> What is the "as" keyword used for in TypeScript?
</p>
<p>
<b>Ans :</b> The "as" keyword reffers Type assertion. Type assertion is a Typescript technique that tells the compiler the variable type. Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own.
</p>
</h3>

<br/>
<br/>


<!-- Question 5  -->
<h3>
<p>
<b>Question 5:</b> What is the "as" keyword used for in TypeScript?
</p>
<p>
<b>Ans :</b> The typeof type guard is used to determine the type of a variable. The typeof type guard is said to be very limited and shallow. It can only determine the following types recognized by JavaScript: boolean, string, bigint, symbol, undefined, function, number. For anything outside of this list, the typeof type guard simply returns object. <br/>

The in type guard checks if an object has a particular property, using that to differentiate between different types. It usually returns a boolean, which indicates if the property exists in that object. It is used for its narrowing features, as well as to check for browser support.
</p>
</h3>

