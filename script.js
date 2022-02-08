
let turn = 1

var board = [
    ['n', 'n', 'n'],
    ['n', 'n', 'n'],
    ['n', 'n', 'n']
];

function pressed(element) {
    var board_place = parseInt(element.id.slice(-1));
    if (board[parseInt(board_place / 3)][board_place % 3] == 'n') {
        if (turn % 2 == 1) {
            element.innerHTML = "<span class='x'>&#10005;</span>";
            board[parseInt(board_place / 3)][board_place % 3] = 'x';
        }
        else {
            element.innerHTML = '<div class="o"></div>';
            board[parseInt(board_place / 3)][board_place % 3] = 'o';
        }


        if (checkWin() == 0) {
            if (checkDraw()) {
                document.getElementsByClassName("wining_rect")[0].style.display = "block";
                document.getElementsByClassName("background_rect")[0].style.display = "none";
                document.getElementById("winner").innerHTML = "No winner its a draw"
            }
            else {
                turn = turn + 1;
            }
        }
        else if (checkWin() == 1) {
            document.getElementsByClassName("wining_rect")[0].style.display = "block";
            document.getElementsByClassName("background_rect")[0].style.display = "none";
            document.getElementById("winner").innerHTML = "The winner is x"

        }
        else if (checkWin() == 2) {
            document.getElementsByClassName("wining_rect")[0].style.display = "block";
            document.getElementsByClassName("background_rect")[0].style.display = "none";
            document.getElementById("winner").innerHTML = "The winner is o"

        }
    }
}

function checkWin() {
    if (checkRows('x') || checkColumns('x') || checkDiagonals('x')) {
        return 1;
    }
    if (checkRows('o') || checkColumns('o') || checkDiagonals('o')) {
        return 2;
    }
    return 0;
}

function checkRows(ch) {
    let won = true;
    for (let i = 0; i < 3; i++) {
        won = true;
        for (let j = 0; j < 3; j++) {
            if (board[i][j] != ch) {
                won = false;
                break;
            }
        }
        if (won) {
            return true;
        }
    }
    return false;
}

function checkColumns(ch) {
    let won = true;
    for (let i = 0; i < 3; i++) {
        won = true;
        for (let j = 0; j < 3; j++) {
            if (board[j][i] != ch) {
                won = false
                break;
            }
        }
        if (won) {
            return true;
        }
    }
    return false;
}

function checkDiagonals(ch) {
    if (board[0][0] == ch && board[1][1] == ch && board[2][2] == ch) {
        return true;
    }
    if (board[0][2] == ch && board[1][1] == ch && board[2][0] == ch) {
        return true;
    }
    return false;
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == 'n') {
                return false;
            }
        }
    }
    return true;
}

function restart() {
    turn = 1

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[i][j] = 'n'
        }
    }

    rects = document.getElementsByClassName("rect");
    for (let i = 0; i < 9; i++) {
        if (rects[i]) {
            rects[i].innerHTML = ""
        }
    }

    if (document.getElementsByClassName("wining_rect").length != 0 && document.getElementsByClassName("background_rect").length != 0) {
        console.log("restarted")
        document.getElementsByClassName("wining_rect")[0].style.display = "none";
        document.getElementsByClassName("background_rect")[0].style.display = "block";
    }
}