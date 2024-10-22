const d = document;

// Home Section *********************

const slider = [
	{
		url: "./assets/slider-images/medicamentos.png",
		text: "Medicamentos",
	},
	{
		url: "./assets/slider-images/vacunas.png",
		text: "Vacunas",
	},
	{
		url: "./assets/slider-images/perfum.png",
		text: "Perfumes",
	},
	{
		url: "./assets/slider-images/cosmetics.png",
		text: "Cosméticos",
	},
];

const $sliderLeftBtn = d.querySelector(".slider-left-btn"),
	$sliderRightBtn = d.querySelector(".slider-right-btn"),
	$slider = d.querySelector(".slider"),
	$sliderTemplate = d.getElementById("slider-template").content,
	$sliderFragment = d.createDocumentFragment();

function createSlider() {
	slider.forEach((el) => {
		$sliderTemplate
			.querySelector(".slider-card img")
			.setAttribute("src", el.url);

		$sliderTemplate.querySelector(".slider-text h3").innerHTML = el.text;

		let $sliderClone = d.importNode($sliderTemplate, true);
		$sliderFragment.appendChild($sliderClone);
	});

	$slider.appendChild($sliderFragment);
}
createSlider();

function moveSlider() {
	const $allSliderCards = d.querySelectorAll(".slider-card");
	$allSliderCards[0].classList.add("active-card");

	let i = 0;

	$sliderLeftBtn.addEventListener("click", (e) => {
		$allSliderCards[i].classList.remove("active-card");
		i--;

		if (i < 0) {
			i = $allSliderCards.length - 1;
		}

		$allSliderCards[i].classList.add("active-card");
	});

	$sliderRightBtn.addEventListener("click", (e) => {
		$allSliderCards[i].classList.remove("active-card");
		i++;

		if (i > $allSliderCards.length - 1) {
			i = 0;
		}

		$allSliderCards[i].classList.add("active-card");
	});
}
moveSlider();
