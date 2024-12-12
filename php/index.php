<?
define("SCRIPT_VERSION", 25);
define("STYLE_VERSION", 15);
error_reporting(E_ALL);
?>

<? include_once $_SERVER['DOCUMENT_ROOT'] . '/settings.php' ?>

<!doctype html>
<html lang="ru">

<? include_once $_SERVER['DOCUMENT_ROOT'] . '/components/head.php'; ?>

<body>
    <div class="wrapper">
        <main class="main">
            <? include_once $_SERVER['DOCUMENT_ROOT'] . '/components/head.php'; ?>
            <? include_once $_SERVER['DOCUMENT_ROOT'] . '/components/header.php'; ?>
            <? include_once $_SERVER['DOCUMENT_ROOT'] . '/components/mobile-menu.php'; ?>
            <? include_once $_SERVER['DOCUMENT_ROOT'] . '/components/hero.php'; ?>
            <? include_once $_SERVER['DOCUMENT_ROOT'] . '/components/catalog.php'; ?>
            <? include_once $_SERVER['DOCUMENT_ROOT'] . '/components/promotions.php'; ?>
            <? include_once $_SERVER['DOCUMENT_ROOT'] . '/components/reviews.php'; ?>
            <? include_once $_SERVER['DOCUMENT_ROOT'] . '/components/about.php'; ?>
            <? include_once $_SERVER['DOCUMENT_ROOT'] . '/components/footer.php'; ?>
        </main>
    </div>
    <? include_once $_SERVER['DOCUMENT_ROOT'] . '/components/popups.php'; ?>
</body>

<? include_once $_SERVER['DOCUMENT_ROOT'] . '/components/scripts.php'; ?>

</html>