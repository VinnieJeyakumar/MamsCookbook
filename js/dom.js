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
        const div = `
        <div class="col-lg-4 mt-4 mt-lg-0" id = "myBtn" onclick = "modal.style.display = "block";">
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
                                        <h2>Vegetarian cheese salad</h2>
                                        <div class="receipe-duration">
                                            <h6>Culture: ${recipe.Culture}</h6>
                                            <h6>Type: ${recipe.Type}</h6>
                                            <h6>Cook: ${recipe.EstimtedTime}</h6>
                                            <h6>Yields: ${recipe.ServingSize}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 col-lg-8">
                                    <!-- Single Preparation Step -->
                                    <div class="single-preparation-step d-flex">
                                        <h4>01.</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                                    </div>
                                    <!-- Single Preparation Step -->
                                    <div class="single-preparation-step d-flex">
                                        <h4>02.</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                                    </div>
                                    <!-- Single Preparation Step -->
                                    <div class="single-preparation-step d-flex">
                                        <h4>03.</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                                    </div>
                                    <!-- Single Preparation Step -->
                                    <div class="single-preparation-step d-flex">
                                        <h4>04.</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                                    </div>
                                </div>

                                <!-- Ingredients -->
                                <div class="col-12 col-lg-4">
                                    <div class="ingredients">
                                        <h4>Ingredients</h4>

                                        <!-- Custom Checkbox -->
                                        <div class="custom-control custom-checkbox">
                                            <label class="custom-control-label">4 Tbsp (57 gr) butter</label>
                                        </div>

                                        <!-- Custom Checkbox -->
                                        <div class="custom-control custom-checkbox">
                                            <label class="custom-control-label">2 large eggs</label>
                                        </div>

                                        <!-- Custom Checkbox -->
                                        <div class="custom-control custom-checkbox">
                                            <label class="custom-control-label">2 yogurt containers granulated sugar</label>
                                        </div>

                                        <!-- Custom Checkbox -->
                                        <div class="custom-control custom-checkbox">
                                            <label class="custom-control-label">1 vanilla or plain yogurt, 170g container</label>
                                        </div>

                                        <!-- Custom Checkbox -->
                                        <div class="custom-control custom-checkbox">
                                            <label class="custom-control-label">2 yogurt containers unbleached white flour</label>
                                        </div>

                                        <!-- Custom Checkbox -->
                                        <div class="custom-control custom-checkbox">
                                            <label class="custom-control-label">1.5 yogurt containers milk</label>
                                        </div>

                                        <!-- Custom Checkbox -->
                                        <div class="custom-control custom-checkbox">
                                            <label class="custom-control-label">1/4 tsp cinnamon</label>
                                        </div>

                                        <!-- Custom Checkbox -->
                                        <div class="custom-control custom-checkbox">
                                            <label class="custom-control-label">1 cup fresh blueberries </label>
                                        </div>
                                    </div>
                                </div>
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
}
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

// var btn = document.getElementById("myBtn");
//
// btn.onclick = function() {
//   modal.style.display = "block";
// }

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
