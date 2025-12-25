const images = [
    "edit.jpg",
    "danz.jpg",
    "edit2.jpg",
    "edit3.jpg",
    "deronm.jpg"
];

    let index = 0;
    const imgElement = document.getElementById("profile-img");

    setInterval(() => {
        imgElement.classList.add("fade-out");

        setTimeout(() => {
            index = (index + 1) % images.length;
            imgElement.src = images[index];
            imgElement.classList.remove("fade-out");
        }, 500);
    }, 10000); 





