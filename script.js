let form = document.getElementById("infoForm");

// این تابع معلومات یک کادر را در بخش دوم می‌نویسد
function show(inputId, colorId, outputId) {
    let value = document.getElementById(inputId).value;
    let color = document.getElementById(colorId).value;
    let output = document.getElementById(outputId);

    output.textContent = value;
    output.style.color = color;
}

form.addEventListener("submit", function (event) {
    event.preventDefault(); // جلوگیری از پاک شدن معلومات

    show("name", "nameColor", "outName");
    show("lastName", "lastNameColor", "outLastName");
    show("email", "emailColor", "outEmail");
    show("country", "countryColor", "outCountry");
    show("age", "ageColor", "outAge");
    show("education", "educationColor", "outEducation");
    show("job", "jobColor", "outJob");
});