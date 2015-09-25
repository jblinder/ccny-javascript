# Topic: Intro to Javascript
## Class
[Lecture Files](https://github.com/jblinder/ccny-javascript/tree/master/week2)
* Arrays
* Loops
* Functions

## Assignments

 1. Read Chapter 3 in ["Javascript & JQuery" by Jon Duckett](http://javascriptbook.com/)
 2. Create a fortune teller
  
Assignment: Building a Magic 8 Ball
-

This week we'll be making a Magic 8 ball. In case you've never used one, they work like [this](https://www.youtube.com/watch?v=9gaQwIrBNPw). You ask the ball a question, shake it, and it shows you one of several answers.

You can design and stylize your 8 ball however you'd like using HTML/CSS. It doesn't need to resemble a traditional 8 ball, and it can return answers other than text (i.e. images, sounds, etc.) I'm using :cat: images for mine. Your 8 ball should show at least 6 different responses when you click the "shake" button. 

After you follow the steps to build the 8-ball with different variables, you'll need to modify the code to use an array instead.

## 1: Setting up the HTML

Let's start by making an empty `HTML` document.

```HTML
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Magic 8 Ball</title>
</head>

<body>
<script>
	// Our JS code goes here
</script>
</body>
</html>
```

We're going to need to add a button and a place to show our fortune text when we click the button.

```HTML
<body>
	<div id="eight-ball">
		<p id="question"></p>
		<p id="answer"></p>
		<button onclick="shake()">Shake</button>
	<div>
</body>
```
We'll need an element to show our question `<p id="question">` and one to show the answer `<p id="fortune">`. You can change the HTML structure for your 8 Ball, but we'll still need the question and answer ids to use in our Javascript program.

## 2: Adding Javascript

Now let's write some Javascript! When the button we added to our `<body>` is clicked, the `onclick` attribute will tell it to call our `shake()` function, so we'll need to create that.

```Javascript
<script>

	// Called when we click the shake button 
	function shake(){
		// all of our logic will go here
	}
	
</script>
```

Ok, so after we shake the 8 Ball, we'll need to ask the user a question. We can use Javascript's built in `prompt()` function to do this. We'll store their response in a variable, and access the DOM show the display the answer in the element with a `question` id.

```Javascript
	function shake(){

		// The question we asked
		var question = prompt("Ask me a question");
		var questionText = document.getElementById('question');
		questionText.innerHTML = question;
	}
````

Now we'll need to create a variable to store the number of answers we want to show, and a create variable for each answer. We'll see how we can simplify this logic next class using [arrays](http://www.w3schools.com/js/js_arrays.asp). If you already know some javascript, feel free to use [arrays](http://www.w3schools.com/js/js_arrays.asp) to store your answers and/or use a [switch](http://www.w3schools.com/js/js_switch.asp) statement to display them.

```Javascript
	function shake(){
		// The question we asked
		var question = prompt("Ask me a question");
		var questionText = document.getElementById('question');
		questionText.innerHTML = question;

		// Number of possible answers  
		var numberOfAnswers = 2;
		
		// Answers the 8 Ball can return
		var answerOne = '<img src="images/no.png"/>';
		var answerTwo = '<img src="images/yes.png"/>';  
	}
```
Since the answers are going inserted to the DOM as HTML, I decided to use images tags. You can easily use text by just changing the variable value (i.e ```var answerOne = "No";```). 

Now we need a way of randomly selecting a number between 1 and the value of `numberOfAnswers`. To do that we can use these functions

```Javascript
		// Returns a number based on the number of sides
		function getAnswerNumber(answerCount){
			var number = getRandomInt(0,answerCount);
			return number;
		}

		// Returns a random integer between two numbers
		function getRandomInt(min,max){
		    return Math.floor(Math.random() * (max - min)) + min;
		}
```		
`getAnswerNumber()` accepts a count and will return a random number between 1 and whatever the count is. We'll discuss how `getRandomInt()` next week when we dig into objects a bit more, but it essentially uses Javascript's `Math` object to calculate a random number between a min and max value.

We're also going to create a function to insert one of our answers into the HTML document based on the random we get back from `getAnswerNumber(answerCount)`. 

```Javascript
		// Show our answer in the document 
		function displayAnswer(answer) {

			// Access the DOM element we want to to change
			var fortuneText = document.getElementById('answer');

			if ( answer == 0 ) {
				fortuneText.innerHTML = answerOne;
			}
			else if ( answer == 1 ) {
				fortuneText.innerHTML = answerTwo;
			}			
		}
```

We first get the element with the `fortune` id so we can modify it. Then we check which answer number was passed in and insert our corresponding answer. You'll need to create at least 6 answers (or more if you want) for this assignment.

The last thing we need to do is call the `getAnswerNumber(answerCount)` function to get a random number and pass it into the `displayAnswer(answer)` function.

```Javascript
		// Answer returned by our 8 Ball
		var chosenAnswer = getAnswerNumber(numberOfAnswers);		
		displayAnswer(chosenAnswer);
```

## 3: Structure using variables

Your HTML document will probably look something like the one below (your code will have more answers and your HTML document will probably be structured differently based on how you want to design your 8 ball).

```Javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Magic 8 Ball</title>
<style>
#eight-ball{
	width:500px;
	margin: 0 auto;
	text-align: center;
}
</style>
</head>

<body>
	<div id="eight-ball">
		<button onclick="shake()">Shake</button>
		<p id="question"></p>
		<p id="answer"></p>
	<div>
<script>

	// Called when we click the shake button 
	function shake(){
		// The question we asked
		var question = prompt("Ask me a question");
		var questionText = document.getElementById('question');
		questionText.innerHTML = question;

		// Number of possible answers  
		var numberOfAnswers = 2;

		// Answers the 8 Ball can return
		var answerOne = '<img src="images/no.png"/>';
		var answerTwo = '<img src="images/yes.png"/>';		

		// Answer returned by our 8 Ball
		var chosenAnswer = getAnswerNumber(numberOfAnswers);		
		displayAnswer(chosenAnswer);

		// Returns a number based on the number of sides
		function getAnswerNumber(answerCount){
			var number = getRandomInt(0,answerCount);
			return number;
		}

		// Returns a random integer between two numbers
		function getRandomInt(min,max){
		    return Math.floor(Math.random() * (max - min)) + min;
		}

		// Show our answer in the document 
		function displayAnswer(answer) {

			// Access the DOM element we want to to change
			var fortuneText = document.getElementById('answer');

			if ( answer == 0 ) {
				fortuneText.innerHTML = answerOne;
			}
			else if ( answer == 1 ) {
				fortuneText.innerHTML = answerTwo;
			}
		}

	}
</script>
</body>

</html>
```

## 4: Modifying our code structure to use an array

Now that things are functioning the way we'd like, let's refactor a bit of our code. Refactoring is just changing the structure of our code without altering how it behaves. So now that we've covered arrays, the next step is to use an array to store your answers instead of storing them as seperate variables like:

```Javascript
	var answerOne = '<img src="images/no.png"/>';
	var answerTwo = '<img src="images/yes.png"/>';		
```

For instance, your array variable might look like:

```Javascript
	var answers = ["yes", "no"];
```
We can also streamline the code in the `displayAnswer` function. Change the internals of this function so that it returns  answers from your array instead of different variables using if statements. You can do this by accessing each answer by its index. For instance, if we were to keep using if statements but use an array instead of seperate variables, the following line

```Javascript
			if ( answer == 0 ) {
				fortuneText.innerHTML = answerOne;
			}
```

could be written as 

```Javascript
			if ( answer == 0 ) {
				fortuneText.innerHTML = answers[0];
			}
```

However, this could be further simiplified by using the `answer` parameter passed into this function as the index number.

The last tweak: change the `numberOfAnswers` variable to use the array's length instead of a hard coded number. 

So, what did this refactoring do? Well, now if we were to add a few more variables to the answers array, we don't have to change any other logic in our code -- it will all update automagically. Previously, we would have needed to add a new variable, for each answer, add a new if statement for each one in the `displayAnswer` function, and keep track of how many answers we have in the `numberOfAnswers` variable.`

## 5: Uploading your code

On your GitHub profile, let's a new repository for this assignment. Go to your profile page, click on the repositories tab at the top, then click the green button that says "New" (or [click here to go straight there](https://github.com/new)). Name your repository "magic-8ball" (or something similar). *(If you have an entire repository dedicated to this class, you can create a new folder for this assignment instead of creating a separate repository.)*

You should see a box that says "Quick setup" at the top of the screen. At this point, you can either upload your assignment from the command line or from the GitHub application.

**Uploading with the GitHub application**

1. In the box that says "Quick setup", click the green button that reads "Setup on Desktop" (this will automatically open your GitHub application, assuming you already downloaded it).
2. Choose a location to save your repository.
3. Open the repository location on your computer.
4. Copy your project files into this folder.
5. Go back to your GitHub application and click on the "Changes" tab at the top of the screen.
6. You should see a commit button with a "Summary" text box below it. Enter a message for your commit (i.e. "Initial commit." or "Finished project.") 
7. Click the circular button with a '+' symbol next to the commit button, then click the commit button.
8. Check your github.com repository, your changes should now be online.

**Uploading with the command line**  

1. Open Terminal.  
2. Type `cd ~/Desktop`  
3. Type `git clone url` - replace url with the one in the "Quick setup" box on GitHub.  
4. Type `cd magic-8ball` or, if you named your repository something different, replace   magic-8ball with your repository name. 
5. Type `open .`
6. Drag and copy your project files into the `magic-8ball` folder in Finder  
7. In terminal, type `git add .`  
8. Type 'git commit -m "Initial commit."`.  
9. Type 'git push origin master'.  
10. Check your github.com repository, your changes should now be online.  
