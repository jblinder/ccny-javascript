# Topic: Intro to Javascript
## Class
[Lecture Files](https://drive.google.com/file/d/0B-UXkFOWM2jtb0kwbHdURVZvWXM/view?usp=sharing)
* Objects
* JSON
* Functions cont.

## Assignments

 1. Create a slideshow application (below).
  
Assignment: Making a slideshow 
-

For the past two assignments, we wrote logic to display custom data in an interface. The code we were writing was highly tied to the interfaces we were building.

However, lets say that instead of coding a fortune teller, for instance, we were building a tool that allowed users design their own fortune teller. We want users to still use our underlying logic, however they can add their own answers and design. As a first pass, we could wrap up our code in an object that another programmer could import to use the same functionality. A more general example of this might be a slideshow tool. We'll walk through building a very basic 

## 1: Designing the object properties

What are the core parts of our slideshow application? For now, we'll want it to move forward and background through a series of photos, and store the photos along with a caption. We can break this down into a few different components:

1. A property containing an array of photos.
2. A property containing an array of captions.
3. A property containing the directory of the images.
4. A method to go to next image.
5. A method to go to the previous image.

We can start by creating the object and creating the photo, caption, and image directory properties:

```Javascript
<script>
    var slideshow = {
    	directory: "",
        photos:[],
        captions:[]
    };
</script>
```

Now let's add a few photos with captions:

```Javascript
<script>
    var slideshow = {
   		directory: "images/",
        photos:["sun.jpg","earth.jpg","mars.jpg"],
        captions:["the sun", "the planet earth", "mars!"]
    };
</script>
```

I have these images stored in a folder called "images", so I added that to the directory property as well

## 2: Add the methods

Now we'll need a way of switching back and forth between different photos. Before we start to implement this code, we'll need a way to keep track of which photo we're displaying -- for now let's add another property called currentPhoto that keeps track of this. Then let's add the getPrevious() and getNext() functions;

```Javascript
<script>
    var slideshow = {
   		directory: "images/",
        photos:["sun.jpg","earth.jpg","mars.jpg"],
        captions:["the sun", "the planet earth", "mars!"],
        currentPhoto: 0,
        getPrevious: function(){
        },
        getNext: function(){
        }
    };
</script>
```

Now we need to write the code for getPrevious and getNext. We essentially just need to access the following or former elements in each array, and return them. Let's write initially, and first change the currentPhoto index. If it goes below 0, we'll want it to loop, so we'll set it to be the length of our photos array (minus 1, because array's start at a 0 index) -- otherwise we'll just subtract 1 from it:

```Javascript
<script>

        getPrevious: function(){
        	if (this.currentPhoto == 0) 
				this.currentPhoto = this.photos.length-1;
			else
				this.currentPhoto--;
		}
</script>
```

Now we'll use the currentPhoto index to access the current photo and caption, and return both from the function as an object. We'll write the same code for the getNext function -- the only difference is that we'll be checking if the currentPhoto index is greater than the size of the photos array and if so setting the index to 0.

```Javascript
<script>
        getPrevious: function(){
        	if (this.currentPhoto == 0) 
				this.currentPhoto = this.photos.length-1;
			else
				this.currentPhoto--;
			
			var photo   = this.directory + this.photos[this.currentPhoto];
			var caption = this.captions[this.currentPhoto];
			return { "photo": photo, "caption": caption };
        },
        getNext: function(){
        	if (this.currentPhoto == this.photos.length-1) 
				this.currentPhoto = 0;
			else
				this.currentPhoto++;
			
			var photo   = this.directory + this.photos[this.currentPhoto];
			var caption = this.captions[this.currentPhoto];
			return { "photo": photo, "caption": caption };
        }
</script>
```

## 3: Wiring it up

Now that we have a way to get the next and previous images/captions from our object, let's wire up our object to our interface. I have a basic html structure (yours may change based on your implementation): 
* an `<img>` tag to display the image
* a `<p>` tag to display the caption
* a next `<button>`
* a previous `<button>`

Right now there's a placeholder image and caption. When a user clicks on next/previous, we want to display a different image in from our slideshow object.

```Javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Slideshow</title>
<style>
#slideshow{
	width:500px;
	margin: 0 auto;
	text-align: center;
}
</style>
</head>

<body>
	<div id="slideshow">
		<img id="currentPhoto" src="images/placeholder.jpg"/>
		<p id="currentCaption">Slideshow</p>
		<button onclick="previous()">Previous</button>
		<button onclick="next()">Next</button>
	</div>
	<script>
		// Our Javascript code goes here
	</script>
</body>
</html>
```

We want to wire up our next/previous buttons to our object. When either is clicked, it will call a function with the same name. Here, we can call our slideshow object methods, and use the data it returns to fill in the image and caption:

```Javascript
<script>
    var slideshow = {
   		directory: "images/",
        photos:["sun.jpg","earth.jpg","mars.jpg"],
        captions:["the sun", "the planet earth", "mars!"],
        currentPhoto: 0,
        getPrevious: function(){
        	if (this.currentPhoto == 0) 
				this.currentPhoto = this.photos.length-1;
			else
				this.currentPhoto--;
			
			var photo   = this.directory + this.photos[this.currentPhoto];
			var caption = this.captions[this.currentPhoto];
			return { "photo": photo, "caption": caption };
        },
        getNext: function(){
        	if (this.currentPhoto == this.photos.length-1) 
				this.currentPhoto = 0;
			else
				this.currentPhoto++;
			
			var photo   = this.directory + this.photos[this.currentPhoto];
			var caption = this.captions[this.currentPhoto];
			return { "photo": photo, "caption": caption };
        }
    };

    function next(){
    	var image = slideshow.getNext();	
    	document.getElementById("currentPhoto").src = image.photo;
    	document.getElementById("currentCaption").innerHTML = image.caption;
    }

    function previous(){
   		var image = slideshow.getPrevious();
   		document.getElementById("currentPhoto").src = image.photo;
    	document.getElementById("currentCaption").innerHTML = image.caption;
    }
</script>
```

When we call `slideshow.getPrevious()`, it will return an object with `photo` and `caption` properties. We can now use these to change our DOM. When the user clicks on next or previous, it should rotate through all of our photos and captions, and when it reaches the end, should loop back to the end or beginning.

Now, if we want to add more photos/captions to our slideshow, we just insert them into the `photos` and `captions` arrays and the rest of our app should update on it's own.

## 4. Extra credit

Our slideshow should be fully functional, but there's still a lot of room for improvement. Try to implement change any of the following for bonus points.

* Currently, if we were to add a photo to the slideshow object, but not add a corresponding caption, our code would likely break because our arrays need to be the same size. How can we streamline this code to make it cleaner and safer? One way would be to use a single array, and store objects in them (similar to the one's we're returning from the getNext/getPrevious arrays). For instance, we might have one array that looks like:
```
	var photos = [{ "photo": "sun.jpg", "caption" : "the sun"}];
```
Try restructuring the code to only use one array containing objects.

* The getPrevious/getNext object methods and next/prevous functions share alot of similar code. Try restructuring them (i.e. converting them into a single method or adding a third method) so that they don't repeat code. This might involve making them accept additional parameters to make them more flexible.

* Suppose that you were sharing your slideshow object with someone else. Since they would be using their own images and captions, you would probably want these to be empty when they included your slideshow object. Right now, they would have to go into the object and manually add their own photos into the array -- This might end up breaking all of your code! Try to prevent this this by creating a new method that allows a user to add photos to your object or initialize it with a series of photos.


## 5. Upload your code.

Follow the same steps from previous weeks to upload your code to GitHub.