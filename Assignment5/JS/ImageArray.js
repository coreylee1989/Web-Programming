// Initialize Array for Images

var iconImg;
var pictures = ["Images/Pvt", "Images/PFC", "Images/LCpl", 
	"Images/Cpl", "Images/Sgt", "Images/SSgt", "Images/GySgt",
	"Images/MSgt", "Images/1stSgt", "Images/MGySgt", 
	"Images/SgtMaj", "Images/SgtMajMarCor", "Images/Gunner",
	"Images/WO", "Images/CWO2", "Images/CWO3", "Images/CWO4", 
	"Images/CWO5", "Images/2ndLt", "Images/1stLt", "Images/Capt",
	"Images/Maj", "Images/LtCol", "Images/Col", "Images/BGen",
	"Images/MajGen", "Images/LtGen", "Images/Gen"];
var descriptions = ["Private", "Private First Class", 
	"Lance Corporal", "Corporal", "Sergeant", "Staff Sergeant",
	"Gunnery Sergeant", "Master Sergeant", "First Sergeant",
	"Master Gunnery Sergeant", "Sergeant Major",
	"Sergeant Major of the Marine Corps", "Gunner",
	"Warrant Officer", "Chief Warrant Officer 2",
	"Chief Warrant Officer 3", "Chief Warrant Officer 4",
	"Chief Warrant Officer 5", "Second Lieutenant", 
	"First Lieutenant", "Captain", "Major", "Lieutenant Colonel",
	"Colonel", "Brigadier General", "Major General",
	"Lieutenant General", "General"];

function pickRandomImage() {
	var index = Math.floor(Math.random() * 28);
	iconImg.setAttribute("src", pictures[index] + ".png");
	iconImg.setAttribute("alt", descriptions[index]);
	updateScore();
}

function start() {
	iconImg = document.getElementById("iconImg");
}

window.addEventListener("load", start, false);