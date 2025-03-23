<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
    @vite('resources/css/app.css')
    @inertiaHead
</head>
<body>
    @inertia
    <div id="app"></div>
</body>
</html>