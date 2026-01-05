function loadLaunch() {
    const loading = document.getElementById("loading");
    const details = document.getElementById("launchDetails");

    loading.style.display = "block";
    details.innerHTML = "";

    fetch("https://api.spacexdata.com/v4/launches/latest")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch launch data");
        }
        return response.json();
    })
    .then((data) => {
        loading.style.display = "none";
        details.innerHTML = `<strong>Mission Name:</strong> ${data.name}`;
    })
    .catch((error) => {
        loading.style.display = "none";
        details.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    });
}