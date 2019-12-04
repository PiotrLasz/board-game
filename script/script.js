$(document).ready(function() {

    // classes

    const Tile = class {

        constructor (isBlocked, row, column) {

            this.isBlocked = isBlocked;
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

        let rows = randomIntInRange(5, 8);
        let columns = randomIntInRange(5, 8);
        let table = '<table class="GameBoard" border="1">';

        for (let i=0; i<rows; i++) {

            table += '<tr>';

            for (let j=0; j<columns; j++) {

                // adding a Tile object to the array
                tableArray.push(new Tile(false, i, j));

                table +='<td>';
                table +='R:' + i + ' C:' + j;
                table +='</td>';

            }

            table += '</tr>';

        }

        table +='</table>';

        // adding table board to DOM

        $('.Board').html(table);

        // adding elements to board

        function addElements() {

            function randomTile() {

                return Math.floor(Math.random()*tableArray.length);

            }

            let numberOfWalls = randomIntInRange(5, 8);
            
            for (let i=0; i<numberOfWalls; i++) {

                let x = randomTile();
                
                if ($('td').eq(x).hasClass('Wall')) {

                    i -= 1;

                } else {

                    $('td').eq(x).addClass('Wall');

                }

            }

            for (let j=0; j<2; j++) {

                let y = randomTile();

                if($('td').eq(y).hasClass('Wall')) {

                    j -= 1;

                } else {

                    $('td').eq(y).replaceWith('<td class="Player">O_O</td>');

                }

            }

        };

        addElements();

    });

});
