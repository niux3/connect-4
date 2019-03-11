<?php
    $games = [
        [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,1,1,1,1],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
        ],
        [
            [0,0,0,0,0,0,0],
            [0,2,0,0,0,0,0],
            [0,2,0,0,0,0,0],
            [0,2,0,0,0,0,0],
            [0,2,0,0,0,0,0],
            [0,0,0,0,0,0,0],
        ],
        [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,1,0,0,0],
            [0,0,1,0,0,0,0],
            [0,1,0,0,0,0,0],
            [1,0,0,0,0,0,0],
        ],
        [
            [0,0,0,0,0,0,0],
            [0,2,0,0,0,0,0],
            [0,0,2,0,0,0,0],
            [0,0,0,2,0,0,0],
            [0,0,0,0,2,0,0],
            [0,0,0,0,0,0,0],
        ]

    ];
    $key = 2;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        html, body, table{
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;

        }
        table{
            border-collapse: collapse;
        }
        tr{
            border-top: 1px solid black;
            border-bottom: 1px solid black;
        }
        td{
            border-left: 1px solid #000;
            border-right: 1px solid #000;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <table>
        <?php for($row = 0; $row < 6; $row++):?>
            <tr>
            <?php for($col = 0; $col < 7; $col++):?>
                <td data-value="<?= $games[$key][$row][$col] ?>">
                    <img src="./img/_<?= $games[$key][$row][$col] ?>.png" alt="">
                </td>
            <?php endfor;?>
            </tr>
        <?php endfor;?>
    </table>
    <script src="./app.js"></script>
</body>
</html>
