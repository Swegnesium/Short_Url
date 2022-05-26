const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('searchButton');
const results = document.getElementById('results');

const baseUrl = "https://tinyurl.com/openapi/v2.json";
const TOKEN = "Ul7iF9tRRjBmiiIW6xY39Adzgu12fRosT4sHqQoMtjDi5f4sFFXKjlUyjhYl";


// Creates a Click event on the button that runs Functions
searchButton.addEventListener('click', userUrl, create, function(validateEntry) {

	// Validation to ensure user entered an Input (Needs work, wont display error msg)
	var x = document.forms["myForm"]["uUrl"].value;
	if (x == "") {
	  	alert("URL Must be Filled out");
		console.log("URL must be filled out")
		return false;
	} else {

  }
  validateEntry()
});


// Function called 'userUrl' - Saves user URL as 'input'
function userUrl() {
    const input = document.getElementById("searchBox").value;
	toString(input)
	// Calling create() Function when userUrl() is called
	create(input)

}
userUrl()


// This uses the API to shorten the URL
async function create(longURL) {
	const response = await fetch('https://api.tinyurl.com/create?api_token=Ul7iF9tRRjBmiiIW6xY39Adzgu12fRosT4sHqQoMtjDi5f4sFFXKjlUyjhYl', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			url: longURL,
			domain: "tiny.one"
		})
	})
	const data = await response.json()
	document.getElementById("shortened").innerHTML = data.data.tiny_url;
	console.log(data.data.tiny_url)
}

// google is just a sample address, so you can see the output we desire in console


