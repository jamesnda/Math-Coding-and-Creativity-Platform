const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
	menuToggle.addEventListener("click", () => {
		const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
		menuToggle.setAttribute("aria-expanded", String(!isExpanded));
		menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
		siteNav.classList.toggle("is-open", !isExpanded);
	});

	siteNav.addEventListener("click", (event) => {
		if (event.target instanceof HTMLAnchorElement) {
			menuToggle.setAttribute("aria-expanded", "false");
			menuToggle.setAttribute("aria-label", "Open navigation");
			siteNav.classList.remove("is-open");
		}
	});
}

const techChoices = document.querySelectorAll(".tech-choice");
const explorerTitle = document.querySelector("#explorer-title");
const explorerDescription = document.querySelector("#explorer-description");
const explorerMath = document.querySelector("#explorer-math");
const explorerChallenge = document.querySelector("#explorer-challenge");

const techAreas = {
	data: {
		title: "Data & AI",
		description: "Find patterns in information and use them to answer useful questions about the world around you.",
		math: "Averages, percentages, graphs, and asking whether a pattern is meaningful.",
		challenge: "Track the prices of three everyday items for a week. Which changed most, and how could you show it?"
	},
	software: {
		title: "Software & apps",
		description: "Plan and build digital tools that help people do something, learn something, or solve a problem.",
		math: "Logic, sequences, variables, coordinates, and breaking a big problem into smaller steps.",
		challenge: "Sketch a simple study-planner app. What information would it need, and what should it help someone do?"
	},
	robotics: {
		title: "Robotics & engineering",
		description: "Design, test, and improve machines and structures that respond to real needs.",
		math: "Geometry, measurement, ratios, forces, and using data to improve a design.",
		challenge: "Build a paper bridge between two books. Test how many coins it holds, then change one part and try again."
	},
	games: {
		title: "Games & digital media",
		description: "Create playful worlds and stories using rules, visuals, sound, and interaction.",
		math: "Coordinates, symmetry, probability, patterns, and the timing of events.",
		challenge: "Draw an 8-by-8 game map. Add a start, a goal, and one rule that changes how a player moves."
	},
	health: {
		title: "Health technology",
		description: "Explore how design and information can support care, health research, and community wellbeing.",
		math: "Measurement, rates, tables, and reading data carefully and responsibly.",
		challenge: "Compare fictional health data in a simple table. What can the numbers tell you, and what can’t they tell you?"
	},
	climate: {
		title: "Climate & agriculture",
		description: "Use observation and technology to understand local environments and support growing communities.",
		math: "Graphs, area, ratios, rainfall totals, and estimating how resources are used.",
		challenge: "Map a patch of sunlight and shade near you. How might those patterns affect what could grow there?"
	}
};

if (explorerTitle && explorerDescription && explorerMath && explorerChallenge) {
	techChoices.forEach((choice) => {
		choice.addEventListener("click", () => {
			const area = techAreas[choice.dataset.area];
			if (!area) return;

			techChoices.forEach((item) => item.setAttribute("aria-pressed", String(item === choice)));
			explorerTitle.textContent = area.title;
			explorerDescription.textContent = area.description;
			explorerMath.textContent = area.math;
			explorerChallenge.textContent = area.challenge;
		});
	});
}
