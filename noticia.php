<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/assets/styles/main.css">
    <link rel="stylesheet" href="./src/assets/styles/pages/posts.css">
    <title>Notícia</title>
</head>

<body>
    <? include("./src/components/header/header.php") ?>
    <main>
        <? include("./src/components/posts-componet/posts.php") ?>
        <? include("./src/components/highlights-news/highlights-news.php") ?>
    </main>
    <? include("./src/components/newsletters/newsletters.php") ?>
    <? include("./src/components/footer/footer.php") ?>

    <script src="./src/assets/js/default.js"></script>
</body>

</html>