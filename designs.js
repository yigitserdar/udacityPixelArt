// drag and Draw functionality

function dragAndDraw() {
    let down = false;
    const td = $("td");
    td.on("mousemove", function () {
        if (down) {
            let colorP = $("#colorPicker").val();
            $(this).css("backgroundColor", colorP);
        }
    });

    td.on("mousedown", function () {
        down = true;
    });

    td.on("mouseup", function () {
        down = false;
    });
}

//creating cells

function cellsOnTable() {
    // prompt user
    let gridHeight = $("#inputHeight").val();
    let gridWidth = $("#inputWidth").val();
    //put cells on table
    for (var i = 1; i <= gridHeight; i++) {
        $("table").append("<tr></tr>");
        for (var j = 1; j <= gridWidth; j++) {
            $("tr:last").append("<td></td>");
            $("td").attr("class", "canvas");
        }
    }
}

//creating cells randomly

function randomCells() {
    //get value randomly between 1 and 50
    let gridHeightRandom = Math.floor(Math.random() * 51 + 1);
    let gridWidthRandom = Math.floor(Math.random() * 51 + 1);
    //put cells on table
    for (var i = 1; i <= gridHeightRandom; i++) {
        $("table").append("<tr></tr>");
        for (var j = 1; j <= gridWidthRandom; j++) {
            $("tr:last").append("<td></td>");
            $("td").attr("class", "canvas");
        }
    }
}

//paint cells

function paintCells() {
    //paint cells
    $(".canvas").on("click", function (event) {
        let paint = $("#colorPicker").val();
        $(event.target).css("background-color", paint);
    });
}

// Pixel Art Maker via submit button

$("#sizePicker").submit(function makeGrid(grid) {
    //clear table
    $("table tr").remove();
    cellsOnTable();
    dragAndDraw();
    //make canvas appear
    grid.preventDefault();
    //make canvas background color white
    $("td").css("background-color", "#fff");
    //paint cells
    paintCells();
});

// Pixel Art Maker via random button

$("#submit-random").on("click", function makeGridRandom(grid) {
    //clear table
    $("table tr").remove();
    randomCells();
    dragAndDraw();
    //make canvas appear
    grid.preventDefault();
    //make canvas background color white
    $("td").css("background-color", "#fff");
    //paint cells
    paintCells();
});
