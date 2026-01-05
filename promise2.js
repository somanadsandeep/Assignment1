function loadLaunch() {
    const loading = document.getElementById("loading");
    const details = document.getElementById("launchDetails");

    loading.style.display = "block";
    details.innerHTML = "";

    fetch("https://api.spacexdata.chttps://www.google.com/search?q=isro&rlz=1C1CHBF_enIN1059IN1059&oq=isro&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIQCAEQLhjHARixAxjRAxiABDINCAIQABiRAhiABBiKBTINCAMQABiRAhiABBiKBTIKCAQQABixAxiABDIHCAUQABiABDIKCAYQABixAxiABDIGCAcQRRhB0gEINDI3MmowajSoAgCwAgE&sourceid=chrome&ie=UTF-8om/v4/launches/latest")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch launch data");
        }
        return response.json();
     })
     .then((data) => {
        loading.style.display = "none";
        details.innerHTML = `
        Mission Name: ${data.name}
                    `;
                })
                .catch((error) => {
                    loading.style.display = "none";
                    details.innerHTML = `
                        <p class="error">Error: ${error.message}</p>
                    `;
                });
        }
    