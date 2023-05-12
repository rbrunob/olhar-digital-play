<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/assets/styles/main.css">
    <link rel="stylesheet" href="./src/assets/styles/pages/noticias.css">
    <title>Notícias</title>
</head>

<body>
    <? include("./src/components/header/header.php") ?>

    <main>
        <div class="news_component_title">
            <h1>Olhar Digital <span>News</span></h1>
        </div>
        <? include("./src/components/news-components/news.php") ?>
        <? include("./src/components/banner-ads/banner-ads.php") ?>
        <? include("./src/components/news-components/news.php") ?>
        <? include("./src/components/banner-ads-two/banner-ads-two.php") ?>
    </main>

    <? include("./src/components/newsletters/newsletters.php") ?>
    <? include("./src/components/footer/footer.php") ?>

    <script src="./src/assets/js/default.js"></script>
</body>

</html>