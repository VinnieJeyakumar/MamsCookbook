// ________ ___  ________  _______   ________  ________  ________  _______           ________  _________  ___  ___  ________ ________
// |\  _____\\  \|\   __  \|\  ___ \ |\   __  \|\   __  \|\   ____\|\  ___ \         |\   ____\|\___   ___\\  \|\  \|\  _____\\  _____\
// \ \  \__/\ \  \ \  \|\  \ \   __/|\ \  \|\ /\ \  \|\  \ \  \___|\ \   __/|        \ \  \___|\|___ \  \_\ \  \\\  \ \  \__/\ \  \__/
// \ \   __\\ \  \ \   _  _\ \  \_|/_\ \   __  \ \   __  \ \_____  \ \  \_|/__       \ \_____  \   \ \  \ \ \  \\\  \ \   __\\ \   __\
//  \ \  \_| \ \  \ \  \\  \\ \  \_|\ \ \  \|\  \ \  \ \  \|____|\  \ \  \_|\ \       \|____|\  \   \ \  \ \ \  \\\  \ \  \_| \ \  \_|
//   \ \__\   \ \__\ \__\\ _\\ \_______\ \_______\ \__\ \__\____\_\  \ \_______\        ____\_\  \   \ \__\ \ \_______\ \__\   \ \__\
//    \|__|    \|__|\|__|\|__|\|_______|\|_______|\|__|\|__|\_________\|_______|       |\_________\   \|__|  \|_______|\|__|    \|__|
//                                                         \|_________|                \|_________|
//
db.collection('recipes').onSnapshot(snapshot => {
    setupRecipes(snapshot.docs);
});
const recipeMenu = document.querySelector('#recipeMenu');
const setupRecipes = (data) => {
    let html = '';
    data.forEach(doc => {
        const recipe = doc.data();
        // Ingredient Code
        var ingredients = recipe.Ingredients;
        var theIngredients = '';
        for(var i = 0; i < ingredients.length; i++){
            theIngredients += `
                <div class="custom-control custom-checkbox">
                    <label class="custom-control-label">${ingredients[i]}</label>
                </div>
            `
        }
        const finalIngredients = `
            <div class="col-12 col-lg-4">
                <div class="ingredients">
                    <h4>Ingredients</h4>
                    ${theIngredients}
                </div>
            </div>
        `;
        // Recipe Code
        var steps = recipe.Recipe;
        var theSteps = '';
        for(var i = 0; i < steps.length; i++){
            theSteps += `
                <div class="single-preparation-step d-flex">
                    <h4>${i}</h4>
                    <p>${steps[i]}</p>
                </div>
            `
        }
        const finalSteps = `
            <div class="col-12 col-lg-8">
                    ${theSteps}
            </div>
        `;
        // Actual Code
        const div = `
        <div class="col-lg-4 mt-4 mt-lg-0" id = "myBtn">
            <div class="box">
                <h4>${recipe.Title}</h4>
                <p>This is another recipe</p>
            </div>
            <!--This is the Modal part-->
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <!-- Receipe Slider -->
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="receipe-slider owl-carousel">
                                    <img src="css/img/Spices.jpg" style = "width: 1080px;" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Receipe Content Area -->
                    <div class="receipe-content-area">
                        <div class="container">

                            <div class="row">
                                <div class="col-12 col-md-8">
                                    <div class="receipe-headline my-5">
                                        <h2>${recipe.Title}</h2>
                                        <div class="receipe-duration">
                                            <h6>Culture: ${recipe.Culture}</h6>
                                            <h6>Type: ${recipe.Type}</h6>
                                            <h6>Cook: ${recipe.Estimated_Time}</h6>
                                            <h6>Yields: ${recipe.Serving_Size}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                ${finalSteps}

                                <!-- Ingredients -->
                                ${finalIngredients}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        html += div;
    });
    recipeMenu.innerHTML = html;
    //  __       __                  __            __
    // |  \     /  \                |  \          |  \
    // | $$\   /  $$  ______    ____| $$  ______  | $$
    // | $$$\ /  $$$ /      \  /      $$ |      \ | $$
    // | $$$$\  $$$$|  $$$$$$\|  $$$$$$$  \$$$$$$\| $$
    // | $$\$$ $$ $$| $$  | $$| $$  | $$ /      $$| $$
    // | $$ \$$$| $$| $$__/ $$| $$__| $$|  $$$$$$$| $$
    // | $$  \$ | $$ \$$    $$ \$$    $$ \$$    $$| $$
    //  \$$      \$$  \$$$$$$   \$$$$$$$  \$$$$$$$ \$$
    var modal = document.getElementById("myModal");

    var btn = document.getElementById("myBtn");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
