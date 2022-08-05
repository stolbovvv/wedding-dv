# Simple Starter Template

Сборка [Gulp 4](https://gulpjs.com/) для вёрстки сайтов с минимально необходимым функционалом для быстрого старта.

## Состав сборки

Сборка содержит инструменты для комфортной разработки:

- [Babel](https://babeljs.io/) – для поддержки JavaScript в старых браузерах;
- [Terser](https://terser.org/) – для минимизации JavaScript;
- [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) – для поддержки CSS в разных браузерах;
- [PurgeCSS](https://purgecss.com/) – для удаления неиспользуемых CSS стилей;
- [ESLint](https://eslint.org/) – Для обнаружения проблем/ошибок в JavaScript коде;
- [Prettier](https://prettier.io/) – для автоматического форматирования кода;

\* _Для работы ESLint в VSCode установите [официальный плагин](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)._

## Установка

- Установите [NodeJS](https://nodejs.org/en/) **16-ой версии**;
- Скачайте сборку с помощью [Git](https://git-scm.com/downloads): `git clone https://github.com/stolbovvv/simple-starter-template.git`;
- Установите `gulp` глобально: `npm install --global gulp-cli` если ранее не устанавливали;
- Перейдите в каталог со сборкой: `cd simple-starter-template`;
- Скачайте необходимые зависимости: `npm install`;
- Запустите режим разработки проекта, введите команду: `npm run dev` (режим разработки);

## Файловая структура

```
📁 simple-starter-template
├── 📁 app/
│  ├── 📁 fonst/
│  ├── 📁 images/
│  ├── 📁 js/
│  ├── 📁 scss/
│  ├── 📄 favicon.ico
│  └── 📄 index.html
├── 📁 dist/
├── 📄 .eslintrc
├── 📄 .gitignore
├── 📄 .prettierrc
├── 📄 gulpfile.js
├── 📄 package-lock.json
├── 📄 package.json
└── 📄 README.md
```

- Корень каталога:

  - `.eslintrc` – настройка ESLint;
  - `.gitignore` – настройка игнорирования файлов Git;
  - `.prettierrc` – настройка Prettier;
  - `gulpfile.js` – задачи и сценарии Gulp сборки;
  - `package.json` – список зависимостей;
  - `readme.md` – описание сборки;

- Каталог `app` - каталог, содержит файлы проекта.

  - `app/fonts` - каталог с файлами шрифтов;
  - `app/images` - каталог исходников графики;
  - `app/js` - исходники JavaScript. Собранный, минимизированный файл помещается в каталог `app/js`;
  - `app/scss` - исходники стилей. Собранный, минимизированный файл помещается в каталог `app/css`;

- Каталог `dist` - каталог, содержит файлы итоговые файлы проекта.

## Команды

Каждая команда прописывается в ключе `npm run {команада}`, например `npm run build`.

- `start` – команда запускает режим разработки проекта. В режиме разработки запускается локальный сервер, для отслеживания изменений проекта в браузере.
- `build` – команда запускает сборку проекта с оптимизацией фалов. Проект помещается в каталог `dist`;
- `archive` – команда запускает сборку проекта с оптимизацией и дальнейшую запаковку в zip архив. Архив будет помещён в корневой каталог.
- `clean` – команда запускает удаление каталога с итоговым проектом `dist`;
- `deploy` – команда запускает сборку проекта с оптимизацией фалов. Проект размещается на GitHub Pages по указанному пути в package.json, параметр `homepage`;
