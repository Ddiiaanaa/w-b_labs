document.addEventListener("DOMContentLoaded", () => {
    const contentElement = document.getElementById("content");
    const homeLink = document.getElementById("home-link");
    const catalogLink = document.getElementById("catalog-link");

    function showHome() {
        contentElement.innerHTML = `
            <h1>Ласкаво просимо до каталогу!</h1>
            <p>Оберіть категорію, щоб переглянути товари.</p>
        `;
    }
    function loadCatalog() {
        fetch("data/categories.json")
            .then(response => {
                if (!response.ok) throw new Error("Не вдалося завантажити categories.json");
                return response.json();
            })
            .then(categories => {
                contentElement.innerHTML = `
                    <h1>Каталог</h1>
                    <div id="categories-list"></div>
                    <p class="mt-3 specials-link">Specials</p>
                `;
                const categoriesList = document.getElementById("categories-list");
                categories.forEach(category => {
                    const categoryDiv = document.createElement("div");
                    categoryDiv.innerHTML = `
                        <p class="category-link" data-shortname="${category.shortname}">
                            ${category.name}${category.notes ? ` (${category.notes})` : ""}
                        </p>
                    `;
                    categoriesList.appendChild(categoryDiv);
                });
                document.querySelectorAll(".category-link").forEach(link => {
                    link.addEventListener("click", () => {
                        const shortname = link.getAttribute("data-shortname");
                        loadCategory(shortname);
                    });
                });
                document.querySelector(".specials-link").addEventListener("click", () => {
                    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
                    loadCategory(randomCategory.shortname);
                });
            })
            .catch(error => {
                console.error("Помилка:", error);
                contentElement.innerHTML = `<p class="text-danger">Помилка завантаження каталогу: ${error.message}</p>`;
            });
    }

    function loadCategory(shortname) {
        fetch(`data/${shortname}.json`)
            .then(response => {
                if (!response.ok) throw new Error(`Не вдалося завантажити ${shortname}.json`);
                return response.json();
            })
            .then(data => {
                contentElement.innerHTML = `
                    <h1>${data.categoryName}</h1>
                    <div class="row" id="items-list"></div>
                `;
                const itemsList = document.getElementById("items-list");
                data.items.forEach(item => {
                    const itemDiv = document.createElement("div");
                    itemDiv.className = "col-md-4 mb-4";
                    itemDiv.innerHTML = `
                        <div class="card">
                            <img src="https://place-hold.it/200x200" class="card-img-top" alt="${item.name}">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">${item.description}</p>
                                <p class="card-text"><strong>Ціна:</strong> $${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                    `;
                    itemsList.appendChild(itemDiv);
                });
            })
            .catch(error => {
                console.error("Помилка:", error);
                contentElement.innerHTML = `<p class="text-danger">Помилка завантаження категорії: ${error.message}</p>`;
            });
    }
    homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.reload();
    });
    catalogLink.addEventListener("click", (e) => {
        e.preventDefault();
        loadCatalog();
    });
    showHome();
});
