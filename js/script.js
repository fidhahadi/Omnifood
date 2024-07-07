
const h1 = document.querySelector(".heading-primary");


const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//set the mobile nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
})

const allLinks = document.querySelector('a:link');
allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        //scroll back to top
        if (href === "#")
            window.scrollTop({
                top: 0,
                behaviour: "smooth",
            });
        if (href !== "#" && href.startsWith('#')) {
            sectionEl = document.querySelectorAll(href);
            sectionEl.scrollIntoView({ behaviour: "smooth" })
        };
        //close mobile nav
        if (link.classList.contains('main-nav-link'))
            headerEl.classList.toggle('nav-open');
    })
});

//Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }
    },
    {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
obs.observe(sectionHeroEl);


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
