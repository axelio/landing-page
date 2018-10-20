function setLightBoxAttributes() {
    const elements = document.getElementsByClassName('thumbnail');
    for (let i = 0; length = elements.length, i < length; i++) {
        elements[i].setAttribute("data-lightbox", "mtb");
    }
}

lightbox.option({
    'resizeDuration': 50,
    'wrapAround': true,
    'maxHeight': innerHeight - 100,
    'alwaysShowNavOnTouchDevices': true,
    'positionFromTop': 25
});

const isPhone = window.innerWidth < 768;
if (!isPhone) setLightBoxAttributes();