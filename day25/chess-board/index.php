<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .board .row {
            width: 24em;
            display: flex;
        }
        .board .row > div {
            width: 3em;
            height: 3em;
        }
        .board .white {
            background-color: #c2c2c2;
        }
        .board .black {
            background-color: #525252;
        }
    </style>
</head>
<body>
    <!-- <?php for ($i = 0; $i <= 3; $i++) : ?> -->
        <div class="board">
            <div class="row">
                <?php for ($i = 0; $i <= 3; $i++) : ?>
                <div class="white"></div>
                <div class="black"></div>
                <?php endfor; ?>
            </div>
            <div class="row">
                <?php for ($i = 0; $i <= 3; $i++) : ?>
                <div class="black"></div>
                <div class="white"></div>
                <?php endfor; ?>
            </div>
        </div>
        
        <!-- <?php endfor; ?> -->
</body>
</html>