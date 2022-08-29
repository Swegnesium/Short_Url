// Finding the Users input box within the HTML
const searchBox = document.getElementById('searchBox');
// Finding the Users Submit button within the HTML
const searchButton = document.getElementById('searchButton');
// Finding where we will place our results
const results = document.getElementById('results');

// Where we find our JSON data
const baseUrl = "https://tinyurl.com/openapi/v2.json";
// Our Token for the API
const TOKEN = "ENTER_YOUR_TOKEN";


// Creates a Click event on the button that runs Functions
searchButton.addEventListener('click', function(validateEntry) {

	// Validation to ensure user entered an Input (Valid URL part needs work)
	var x = document.forms["myForm"]["uUrl"].value;
	let text = x;
	let pattern = /www./i;
	let result = text.match(!pattern);
	if (x == "") {
		document.getElementById("errorMsg").innerHTML = "URL Must be filled out."

	// } else if (result) {
	// 	document.getElementById("errorMsg").innerHTML = "Please enter a valid URL";
    } else {
		userUrl();
	}
});


// Function called 'userUrl' - Saves user URL as 'input'
function userUrl() {
    const input = document.getElementById("searchBox").value;
	toString(input)
	// Calling create() Function when userUrl() is called
	create(input)
}



// This uses the API to shorten the URL
async function create(longURL) {
	const response = await fetch('https://api.tinyurl.com/create?api_token=Ul7iF9tRRjBmiiIW6xY39Adzgu12fRosT4sHqQoMtjDi5f4sFFXKjlUyjhYl', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			// longURL is identified as the Original URL within the API
			url: longURL,
			domain: "tiny.one"
		})
	})
	const data = await response.json()
	const link = document.createElement("a")
	link.href = data.data.tiny_url
	link.innerHTML = data.data.tiny_url
	document.getElementById("shortened").innerHTML = '';
	document.getElementById("shortened").append(link)
	document.getElementById('searchBox').value = '';
}
