$(document).ready(function() {

    // classes

    const Tile = class {

        constructor (row, column) {

            this.isBlocked = false;
            this.row = row;
            this.column = column;

        }

    };

    $('.button').click(function() {

        //function picking random number of rows and columns from min to max range.

        function randomIntInRange (min, max) {

            return Math.floor(Math.random() * (max - min + 1) + min);
        
        };

        // creating an array of table tiles

        let tableArray = [];

        // creating table board

        function tableBoard () {

            let rows = randomIntInRange(5, 8);
            let columns = randomIntInRange(5, 8);
            let table = '<table class="GameBoard" border="1">';

            for (let i=0; i<rows; i++) {

                table += '<tr>';

                for (let j=0; j<columns; j++) {

                    // adding a Tile object to the array
                    tableArray.push(new Tile(i, j));

                    table +='<td>';
                    table +='R:' + i + ' C:' + j;
                    table +='</td>';

                }

                table += '</tr>';

            }

            table +='</table>';

            return table;

        };

        // adding table board to DOM

        $('.Board').html(tableBoard());

        // adding blocked tiles to board

        function addBlockedTiles() {

            let numberOfWalls = randomIntInRange(5, 8);
            
            for (let i=0; i<numberOfWalls; i++) {

                let randomTilesToBlock = randomIntInRange(0, tableArray.length-1);
                
                if ($('td').eq(randomTilesToBlock).hasClass('Wall')) {

                    i -= 1;

                } else {

                    //Sticking a CSS class of wall to blocked tile
                    $('td').eq(randomTilesToBlock).addClass('Wall');

                    //Changing Tile objects saved in tableArray property 'isBlocked' to true
                    tableArray[randomTilesToBlock].isBlocked = true;

                }

            }

        };

        function addPlayer1() {

            for (let i=0; i<1; i++) {

                let randomSpotForPlayer = randomIntInRange(0, tableArray.length);

                if($('td').eq(randomSpotForPlayer).hasClass('Wall')) {

                    i -= 1;

                } else {

                    $('td').eq(randomSpotForPlayer).replaceWith('<td class="Player">O_O</td>');

                }

            }

        };

        addBlockedTiles();
        addPlayer1();

    });

});
