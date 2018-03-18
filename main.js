document.on('load',() => {
	console.log('Hi, welcome to this hell')
});
// document.body.innerHTML = "<p>Greetings!!!</p>";
// let el = document.getElementsByTagName("p");
// for (i of el) {
// 	i.innerHTML = "Hello))))";
// };
let aler = () => {
	alert("Notice that!");
};

browser.browserAction.onClicked.addListener(aler);

document.body.style.border = "5px solid red";
alert("tiny alert");