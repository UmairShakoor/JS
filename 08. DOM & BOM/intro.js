// JavaScript DOM(Document Object Model)
// Used to manipulate the document

document.title = "Umair is Good"; // Changes the title of document
console.log(document.title);
console.log(document.body);
document.body.style.backgroundColor = "Green"; // Adds Inline CSS to body tag

// JS BOM(Browser Object Model)
// For the usage of Additional Objects provided by the Browser

console.log(window);
console.log(window.document.body);

// If we select an element via browser inspect , it is reffered as $0 , In console we can manipulate that particular element by $0 even without accessing it via DOM or BOM .... as :

$0.style.background = "blue";


// We can change the url of current page/web into another as
// console.log(location.href = "https://google.com/");

// console.error("Error");
// console.clear();
// console.log("Hello World");
// console.warn("Warning");
// console.info("I am Special Info");
