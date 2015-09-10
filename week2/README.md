# Topic: Intro to Javascript
## Class
[Lecture Files](https://github.com/jblinder/ccny-javascript/tree/master/week2)
* Javascript syntax
* Variables, types
* Functions
* DOM (Document Object Model)

## Assignments

 1. Read Chapter 2 in ["Javascript & JQuery" by Jon Duckett](http://javascriptbook.com/)
 2. Create your own Mad Lib and post it to GitHub.
 
### Mad Lib 
For this week's assignment we'll be making a [Mad Lib](https://en.wikipedia.org/wiki/Mad_Libs) webpage. When a user visits the webpage, they'll see a paragraph of text that has some missing words. They'll be prompted to enter a few parts of speech, and their responses will be used to fill in the missing text.

You can design and stylize your Mad Lib however you'd like using HTML/CSS. You can write your own Mad Lib text, or use a paragraph from a website/ book/ article/ etc. I'll be using example text from github.com for this demo - find a paragraph long enough so you can replace at least 6 different parts of speech.

## 1: Setting up the HTML

Let's start by making an empty `HTML` document.

```HTML
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>My Mad Lib</title>
</head>

<body>
<script>
	// Our JS code goes here
</script>
</body>
</html>
```

Next, we'll need to add our Mad Lib text to the `body` section of our document. Let's put it inside a `<p>` element.

```HTML
<body>
	<p>GitHub is how people build software. With a community of more than 10 million people, developers can discover, use, and contribute to over 26 million projects using a powerful collaborative development workflow.</p>
</body>
```

## 2: Formatting the paragraph

Next, we'll replace certain words in the paragraph. We'll need a way to access these words using Javascript, so lets put them in `<span>` tags and each tag a unique `id`.

```HTML
<body>
	<p>GitHub is how people build <span id="noun">[noun]</span>. With a community of more than 10 million <span id="pnoun">[plural noun]</span>, developers can <span id="verb">[verb]</span>, use, and contribute to over <span id="number">[number]</span> projects using a powerful collaborative development workflow.</p>
</body>
```

## 3: Adding Javascript

Now comes the interactivity. Let's first use the `prompt` function to get a response from the user and log it to the console.

```Javascript
<script>
	
	// store each prompt response in a variable.
	var noun = prompt("Enter a noun");
	var pnoun = prompt("Enter a plural noun");
	var verb  = prompt("Enter a verb");
	var number = prompt("Enter a number");
	
	//log out each response from the user. to make the output more readable, we'll add a string before each variable
	console.log("the noun is: " + noun);
	console.log("the plural noun is: " + noun);
	console.log("the verb is: " + verb);
	console.log("the number is: " + number);
	
</script>
```

This should prompt the user 4 separate times and then log out their responses. Now, let's use their responses to replace the placeholder words in the paragraph. We'll use the `docoument.getElementById()` method to replace each word.

```Javascript
<script>
	
	// store each prompt response in a variable.
	var noun = prompt("Enter a noun");
	var pnoun = prompt("Enter a plural noun");
	var verb  = prompt("Enter a verb");
	var number = prompt("Enter a number");
	
	//log out each response from the user. to make the output more readable, we'll add a string before each variable
	document.getElementById('noun').innerHTML = noun;
	document.getElementById('pnoun').innerHTML = pnoun;
	document.getElementById('verb').innerHTML = verb;
	document.getElementById('number').innerHTML = number;	
	
</script>
```

After a user enters text for each prompt, their responses should show up in the paragraph.

## 4: Extra credit
* Style the parts of speech differently from each other and/or the main paragraph.
* Use an if statement to check whether the user entered any text in the prompt. If they didn't enter any text, show them the prompt again. 
* Use an if statement to create default parts of speech if the user doesn't enter any text into a prompt.
* Save each of the user's inputs inside an array (from this week's reading), and render the answers by accessing the corresponding elements from the array.

## 5: Uploading your code

On your GitHub profile, let's a new repository for this assignment. *(NOTE: If you have an entire repository dedicated to this class, you can create a new folder for this assignment --called `week2` or something similar-- instead of creating a separate repository.)*
 Go to your profile page, click on the repositories tab at the top, then click the green button that says "New" (or [click here to go straight there](https://github.com/new)). Name your repository "mad-lib" (or something similar).

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
