// ________ ___  ________  _______   ________  ________  ________  _______           ________  _________  ___  ___  ________ ________
// |\  _____\\  \|\   __  \|\  ___ \ |\   __  \|\   __  \|\   ____\|\  ___ \         |\   ____\|\___   ___\\  \|\  \|\  _____\\  _____\
// \ \  \__/\ \  \ \  \|\  \ \   __/|\ \  \|\ /\ \  \|\  \ \  \___|\ \   __/|        \ \  \___|\|___ \  \_\ \  \\\  \ \  \__/\ \  \__/
// \ \   __\\ \  \ \   _  _\ \  \_|/_\ \   __  \ \   __  \ \_____  \ \  \_|/__       \ \_____  \   \ \  \ \ \  \\\  \ \   __\\ \   __\
//  \ \  \_| \ \  \ \  \\  \\ \  \_|\ \ \  \|\  \ \  \ \  \|____|\  \ \  \_|\ \       \|____|\  \   \ \  \ \ \  \\\  \ \  \_| \ \  \_|
//   \ \__\   \ \__\ \__\\ _\\ \_______\ \_______\ \__\ \__\____\_\  \ \_______\        ____\_\  \   \ \__\ \ \_______\ \__\   \ \__\
//    \|__|    \|__|\|__|\|__|\|_______|\|_______|\|__|\|__|\_________\|_______|       |\_________\   \|__|  \|_______|\|__|    \|__|
//                                                         \|_________|                \|_________|
//
db.collection('recipes').orderBy('Title').onSnapshot(snapshot => {
    setupRecipes(snapshot.docs);
});
const recipeMenu = document.querySelector('#recipeMenu');
const setupRecipes = (data) => {
    let html = '';
    var index = 0;
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
                    <h4>${i+1}.</h4>
                    <p>${steps[i]}</p>
                </div>
            `
        }
        const finalSteps = `
            <div class="col-12 col-lg-8">
                    <h4>Recipe</h4>
                    ${theSteps}
            </div>
        `;
        // Image Code
        var imageLink = recipe.Image;
        var imageCode = `<img src="css/img/Spices.jpg" alt="" style="width: 100%; padding-top: 15%;">`;
        if (imageLink.length > 1){
            imageLink = imageLink.substring(33);
            imageCode = `<img src="https://drive.google.com/uc?export=view&id=${imageLink}" alt="Image Not available" style="width: 100%; padding-top: 15%;">`;
        }
        // Cuisine Code
        var cuisineCode = `<p>${recipe.Type}, ${recipe.Culture}</p>`;
        if (recipe.Culture!="General"){
            cuisineCode = `<p>${recipe.Type}, ${recipe.Culture} Cuisine</p>`;
        }
        // Actual Code
        const div = `
        <div class="col-lg-4 mt-4 mt-lg-0" id = "myBtn${index}" onclick = "modalStuff(${index})">
            <div class="box">
                <h4>${recipe.Title}</h4>
                ${cuisineCode}
            </div>
            <!--This is the Modal part-->
            <div id="myModal${index}" class="modal">
                <div class="modal-content">
                    <!-- Receipe Slider -->
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                            </div>
                        </div>
                    </div>

                    <!-- Receipe Content Area -->
                    <div class="receipe-content-area">
                        <div class="container">
                            <hr class = "introRecipe">
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
                                <div class="col-12 col-md-4">
                                    ${imageCode}
                                </div>
                            </div>

                            <div class="row">
                                ${finalSteps}

                                <!-- Ingredients -->
                                ${finalIngredients}
                            </div>
                            <hr class = "introRecipe">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        html += div;
        index++;
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
function modalStuff(num) {
    var modal = document.getElementById("myModal" + (num));

    modal.style.display = "block";

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
// /$$$$$$                        /$$
// /$$__  $$                      | $$
// | $$  \__/  /$$$$$$   /$$$$$$  /$$$$$$
// |  $$$$$$  /$$__  $$ /$$__  $$|_  $$_/
// \____  $$| $$  \ $$| $$  \__/  | $$
// /$$  \ $$| $$  | $$| $$        | $$ /$$
// |  $$$$$$/|  $$$$$$/| $$        |  $$$$/
// \______/  \______/ |__/         \___/
//
const searchRequest = document.querySelector('.searchRequest');
searchRequest.addEventListener('submit', (e) =>{
    e.preventDefault();
    // Selected Option
    var options = document.getElementById("select-option");
    var selectedOption = options.options[options.selectedIndex].value;
    // Text that is Typed inspect
    var inputVal = document.getElementById("lookup").value;
    // Sort
    recipeMenu.innerHTML = '';
    db.collection('recipes').where(selectedOption, "==", inputVal).orderBy('Title').get().then(function(querySnapshot){
        let html = '';
        var index = 0;
        querySnapshot.forEach(function(doc) {
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
                        <h4>${i+1}.</h4>
                        <p>${steps[i]}</p>
                    </div>
                `
            }
            const finalSteps = `
                <div class="col-12 col-lg-8">
                        <h4>Recipe</h4>
                        ${theSteps}
                </div>
            `;
            // Image Code
            var imageLink = recipe.Image;
            var imageCode = `<img src="css/img/Spices.jpg" alt="" style="width: 100%; padding-top: 15%;">`;
            if (imageLink.length > 1){
                imageLink = imageLink.substring(33);
                imageCode = `<img src="https://drive.google.com/uc?export=view&id=${imageLink}" alt="Image Not available" style="width: 100%; padding-top: 15%;">`;
            }
            // Cuisine Code
            var cuisineCode = `<p>${recipe.Type}, ${recipe.Culture}</p>`;
            if (recipe.Culture!="General"){
                cuisineCode = `<p>${recipe.Type}, ${recipe.Culture} Cuisine</p>`;
            }
            // Actual Code
            const div = `
            <div class="col-lg-4 mt-4 mt-lg-0" id = "myBtn${index}" onclick = "modalStuff(${index})">
                <div class="box">
                    <h4>${recipe.Title}</h4>
                    ${cuisineCode}
                </div>
                <!--This is the Modal part-->
                <div id="myModal${index}" class="modal">
                    <div class="modal-content">
                        <!-- Receipe Slider -->
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                </div>
                            </div>
                        </div>

                        <!-- Receipe Content Area -->
                        <div class="receipe-content-area">
                            <div class="container">
                                <hr class = "introRecipe">
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
                                    <div class="col-12 col-md-4">
                                        ${imageCode}
                                    </div>
                                </div>

                                <div class="row">
                                    ${finalSteps}

                                    <!-- Ingredients -->
                                    ${finalIngredients}
                                </div>
                                <hr class = "introRecipe">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            html += div;
            index++;
        });
        if(index == 0){
            recipeMenu.innerHTML = "Sorry, there are no matches found!";
        }
        else {
            recipeMenu.innerHTML = html;
        }
    })
})
// /$$$$$$                                          /$$
// /$$__  $$                                        | $$
// | $$  \__/  /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$| $$$$$$$
// |  $$$$$$  /$$__  $$ |____  $$ /$$__  $$ /$$_____/| $$__  $$
// \____  $$| $$$$$$$$  /$$$$$$$| $$  \__/| $$      | $$  \ $$
// /$$  \ $$| $$_____/ /$$__  $$| $$      | $$      | $$  | $$
// |  $$$$$$/|  $$$$$$$|  $$$$$$$| $$      |  $$$$$$$| $$  | $$
// \______/  \_______/ \_______/|__/       \_______/|__/  |__/
/* ===== Logic for creating fake Select Boxes ===== */
$('.sel').each(function() {
  $(this).children('select').css('display', 'none');

  var $current = $(this);

  $(this).find('option').each(function(i) {
    if (i == 0) {
      $current.prepend($('<div>', {
        class: $current.attr('class').replace(/sel/g, 'sel__box')
      }));

      var placeholder = $(this).text();
      $current.prepend($('<span>', {
        class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
        text: placeholder,
        'data-placeholder': placeholder
      }));

      return;
    }

    $current.children('div').append($('<span>', {
      class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
      text: $(this).text()
    }));
  });
});

// Toggling the `.active` state on the `.sel`.
$('.sel').click(function() {
  $(this).toggleClass('active');
});

// Toggling the `.selected` state on the options.
$('.sel__box__options').click(function() {
  var txt = $(this).text();
  var index = $(this).index();

  $(this).siblings('.sel__box__options').removeClass('selected');
  $(this).addClass('selected');

  var $currentSel = $(this).closest('.sel');
  $currentSel.children('.sel__placeholder').text(txt);
  $currentSel.children('select').prop('selectedIndex', index + 1);
});
