<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/assets/styles/main.css">
    <link rel="stylesheet" href="./src/assets/styles/pages/homepage.css">
    <title>Olhar Digital News</title>
</head>

<body>
    <? include("./src/components/header/header.php") ?>

    <main>
        <? include("./src/components/carouselMain/carousel-main.php") ?>
        <? include("./src/components/today-news/today-news.php") ?>
        <? include("./src/components/carouselFadeArrows/carouselFadeArrows.php") ?>
        <? include("./src/components/carouselFadeArrowsTwo/carouselFadeArrowsTwo.php") ?>
        <? include("./src/components/banner-ads/banner-ads.php") ?>
        <? include("./src/components/highlights/highlights.php") ?>
        <? include("./src/components/videos-news/videos-news.php") ?>
        <? include("./src/components/catalog/catalog.php") ?>
        <? include("./src/components/web-stories/web-stories.php") ?>
        <? include("./src/components/highlights-two/highlights-two.php") ?>
        <? include("./src/components/banner-ads-two/banner-ads-two.php") ?>
        <? include("./src/components/free-channels/free-channels.php") ?>
        <? include("./src/components/movies-playing/movies-playing.php") ?>
        <? include("./src/components/categories/categories.php") ?>
        <div id="toPlataformPopUp"></div>
    </main>

    <? include("./src/components/newsletters/newsletters.php") ?>
    <? include("./src/components/footer/footer.php") ?>

    <script src="./src/assets/js/default.js"></script>
</body>

</html>