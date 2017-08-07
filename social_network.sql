-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Авг 07 2017 г., 14:50
-- Версия сервера: 10.1.21-MariaDB
-- Версия PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `social_network`
--

-- --------------------------------------------------------

--
-- Структура таблицы `avatars`
--

CREATE TABLE `avatars` (
  `id` int(11) NOT NULL,
  `id_owner` int(11) NOT NULL,
  `image_url` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `sender_name` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `sender_url` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `reciever_url` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `image_date` varchar(25) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `likes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `avatars`
--

INSERT INTO `avatars` (`id`, `id_owner`, `image_url`, `sender_name`, `sender_url`, `reciever_url`, `image_date`, `likes`) VALUES
(1, 1, '/src/img/users/user/avatars/2.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/chat/sender2.jpg', '15.12.12 15:38', 1),
(2, 1, '/src/img/users/user/gallery/1.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/chat/sender2.jpg', '14.11.11 14:34', 23),
(3, 5, '/src/img/users/friend100002/avatars/avatar.jpg\r\n', 'Дженніфер Лоуренс ', '/src/img/users/friend100002/avatars/avatar.jpg\r\n', '/src/img/users/friend100002/avatars/avatar.jpg\r\n', '14.11.11 14:34', 23),
(4, 2, '/src/img/users/friend100001/avatars/avatar.jpg\r\n', 'Дженніфер Лоуренс ', '/src/img/users/friend100001/avatars/avatar.jpg\r\n', '/src/img/users/friend100001/avatars/avatar.jpg\r\n', '14.11.11 14:34', 23);

-- --------------------------------------------------------

--
-- Структура таблицы `avatars_users`
--

CREATE TABLE `avatars_users` (
  `avatar_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `avatars_users`
--

INSERT INTO `avatars_users` (`avatar_id`, `user_id`) VALUES
(1, 1),
(2, 1),
(3, 5);

-- --------------------------------------------------------

--
-- Структура таблицы `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `id_owner` int(11) NOT NULL,
  `image_url` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `sender_name` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `sender_url` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `reciever_url` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `image_date` varchar(50) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `likes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `gallery`
--

INSERT INTO `gallery` (`id`, `id_owner`, `image_url`, `sender_name`, `sender_url`, `reciever_url`, `image_date`, `likes`) VALUES
(1, 1, '/src/img/users/user/gallery/1.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 4),
(2, 1, '/src/img/users/user/gallery/2.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 45),
(3, 1, '/src/img/users/user/gallery/3.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 41),
(4, 1, '/src/img/users/user/gallery/4.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 2),
(5, 1, '/src/img/users/user/gallery/5.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 0),
(6, 1, '/src/img/users/user/gallery/6.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 0),
(7, 1, '/src/img/users/user/gallery/7.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 1),
(8, 1, '/src/img/users/user/gallery/8.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 2),
(9, 1, '/src/img/users/user/gallery/9.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 3),
(10, 1, '/src/img/users/user/gallery/10.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 5),
(11, 1, '/src/img/users/user/gallery/11.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 2),
(12, 1, '/src/img/users/user/gallery/12.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 5),
(13, 1, '/src/img/users/user/gallery/13.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 4),
(14, 5, '/src/img/users/friend100002/gallery/1.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(15, 5, '/src/img/users/friend100002/gallery/2.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(16, 5, '/src/img/users/friend100002/gallery/3.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(17, 5, '/src/img/users/friend100002/gallery/4.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(18, 5, '/src/img/users/friend100002/gallery/5.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(19, 5, '/src/img/users/friend100002/gallery/6.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(20, 5, '/src/img/users/friend100002/gallery/7.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(21, 5, '/src/img/users/friend100002/gallery/8.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(22, 5, '/src/img/users/friend100002/gallery/9.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(23, 5, '/src/img/users/friend100002/gallery/10.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(24, 5, '/src/img/users/friend100002/gallery/11.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(25, 5, '/src/img/users/friend100002/gallery/12.jpg', 'Дженніфер Лоуренс', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4),
(26, 5, '/src/img/users/friend100002/gallery/13.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(27, 5, '/src/img/users/friend100002/gallery/14.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(28, 5, '/src/img/users/friend100002/gallery/15.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(29, 5, '/src/img/users/friend100002/gallery/16.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(30, 5, '/src/img/users/friend100002/gallery/17.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(31, 5, '/src/img/users/friend100002/gallery/18.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(32, 5, '/src/img/users/friend100002/gallery/19.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(33, 5, '/src/img/users/friend100002/gallery/20.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(34, 5, '/src/img/users/friend100002/gallery/21.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(35, 2, '/src/img/users/friend100001/gallery/1.jpg', 'Єва Грін', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4),
(38, 2, '/src/img/users/friend100001/gallery/2.jpg', 'Єва Грін', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4),
(39, 2, '/src/img/users/friend100001/gallery/3.jpg', 'Єва Грін', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4),
(40, 2, '/src/img/users/friend100001/gallery/4.jpg', 'Єва Грін', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4),
(41, 2, '/src/img/users/friend100001/gallery/5.jpg', 'Єва Грін', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4),
(42, 2, '/src/img/users/friend100001/gallery/6.jpg', 'Єва Грін', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4),
(43, 2, '/src/img/users/friend100001/gallery/7.jpg', 'Єва Грін', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4);

-- --------------------------------------------------------

--
-- Структура таблицы `gallery_users`
--

CREATE TABLE `gallery_users` (
  `id_gallery` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `gallery_users`
--

INSERT INTO `gallery_users` (`id_gallery`, `id_user`) VALUES
(1, 1),
(2, 1),
(2, 1),
(2, 1),
(2, 1),
(2, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(13, 1),
(14, 1),
(15, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `id_owner` int(11) NOT NULL,
  `sender_url` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `sender_name` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `send_date` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_text` varchar(1000) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_link` varchar(500) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_image` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_likes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `post`
--

INSERT INTO `post` (`id`, `id_owner`, `sender_url`, `sender_name`, `send_date`, `post_text`, `post_link`, `post_image`, `post_likes`) VALUES
(1, 1, '/src/img/users/friend100002/avatars/avatar.jpg', 'Дженніфер Лоуренс', '13.05.17 14:38', 'Я думаю тобі сподобається мій новий фільм ;-)', 'https://my-hit.org/film/415353', '/src/img/users/user/posts/post1/post_image.jpg', 12);

-- --------------------------------------------------------

--
-- Структура таблицы `postavatars`
--

CREATE TABLE `postavatars` (
  `id` int(11) NOT NULL,
  `id_owner` int(11) NOT NULL,
  `id_image` int(11) NOT NULL,
  `sender_url` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `sender_name` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `send_date` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_text` varchar(1000) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_link` varchar(500) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_image` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_likes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `postavatars`
--

INSERT INTO `postavatars` (`id`, `id_owner`, `id_image`, `sender_url`, `sender_name`, `send_date`, `post_text`, `post_link`, `post_image`, `post_likes`) VALUES
(1, 1, 1, '/src/img/users/friend100001/avatars/avatar.jpg', 'Єва Грін', '13.05.17 14:38', 'Хей привіт!', '', '', 0),
(2, 1, 1, '/src/img/users/friend100001/avatars/avatar.jpg', 'Єва Грін', '13.05.17 14:38', 'Хей привіт Двічі!', '', '', 0),
(3, 1, 5, '/src/img/users/friend100001/avatars/avatar.jpg', 'Дженніфер Лоуренс', '13.05.17 14:38', 'Хей привіт Тричі від Дженніфер!', '', '', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `postavatars_users`
--

CREATE TABLE `postavatars_users` (
  `id_post` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `postavatars_users`
--

INSERT INTO `postavatars_users` (`id_post`, `id_user`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `postgallery`
--

CREATE TABLE `postgallery` (
  `id` int(11) NOT NULL,
  `id_owner` int(11) NOT NULL,
  `id_image` int(11) NOT NULL,
  `sender_url` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `sender_name` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `send_date` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_text` varchar(1000) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_link` varchar(500) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_image` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_likes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `postgallery`
--

INSERT INTO `postgallery` (`id`, `id_owner`, `id_image`, `sender_url`, `sender_name`, `send_date`, `post_text`, `post_link`, `post_image`, `post_likes`) VALUES
(1, 1, 1, '/src/img/users/user/avatars/2.jpg', 'Доктор Стрендж', '13.05.17 14:38', 'тестове повідомлення самому собі', '', '', 0),
(2, 1, 6, '/src/img/users/user/avatars/2.jpg', 'Доктор Стрендж', '13.05.17 14:38', 'а це повідомлення має бути на шостій фотці', '', '', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `postgallery_users`
--

CREATE TABLE `postgallery_users` (
  `id_post` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `postgallery_users`
--

INSERT INTO `postgallery_users` (`id_post`, `id_user`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `post_users`
--

CREATE TABLE `post_users` (
  `id_post` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `post_users`
--

INSERT INTO `post_users` (`id_post`, `id_user`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `userFirstName` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `userSecondName` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `userEmail` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `userPassword` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`userId`, `userFirstName`, `userSecondName`, `userEmail`, `userPassword`) VALUES
(1, 'test', 'test', 'test@test_om', '123456'),
(2, 'Медвідь', 'Анна', 'medvidanja94@gmail_com', '123456'),
(5, 'Dmytro', 'Kushnir', 'dimakush1@gmail_com', '123445'),
(10, 're', 'fds', 'regstarrr@ukr.net', 'fffffff');

-- --------------------------------------------------------

--
-- Структура таблицы `users_data`
--

CREATE TABLE `users_data` (
  `id` int(11) NOT NULL,
  `first_name` varchar(70) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `second_name` varchar(70) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `birthday` date NOT NULL,
  `city` varchar(80) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `education` varchar(80) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `mobile_number` varchar(80) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `count_friends` int(11) NOT NULL,
  `background_url` varchar(100) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `avatar_url` varchar(100) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `friends` varchar(1000) NOT NULL,
  `avatars` varchar(1000) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `gallery` varchar(1000) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `posts` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `users_data`
--

INSERT INTO `users_data` (`id`, `first_name`, `second_name`, `birthday`, `city`, `education`, `mobile_number`, `count_friends`, `background_url`, `avatar_url`, `friends`, `avatars`, `gallery`, `posts`) VALUES
(1, 'Доктор', 'Стрендж', '1982-03-04', 'Лондон', 'Кембридж', '0665654652', 5, '/src/img/users/user/backgrounds/bg.jpg', '/src/img/users/user/avatars/2.jpg', '2,5', '0', '', ''),
(2, 'Єва', 'Грін', '1993-04-05', 'Париж', 'Павлівська школа', 'не скажу', 0, '/src/img/users/friend100001/backgrounds/bg.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '', '0', '', ''),
(5, 'Дженніфер', 'Лоуренс', '1992-01-14', 'Луисвилл', 'Kammerer Middle School ', 'unbelievable', 0, '/src/img/users/friend100002/backgrounds/bg.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '', '0', '', '');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `avatars`
--
ALTER TABLE `avatars`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `avatars_users`
--
ALTER TABLE `avatars_users`
  ADD KEY `avatar_id` (`avatar_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `gallery_users`
--
ALTER TABLE `gallery_users`
  ADD KEY `id_gallery` (`id_gallery`),
  ADD KEY `id_user` (`id_user`);

--
-- Индексы таблицы `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `postavatars`
--
ALTER TABLE `postavatars`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `postavatars_users`
--
ALTER TABLE `postavatars_users`
  ADD KEY `id_post` (`id_post`),
  ADD KEY `id_user` (`id_user`);

--
-- Индексы таблицы `postgallery`
--
ALTER TABLE `postgallery`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `postgallery_users`
--
ALTER TABLE `postgallery_users`
  ADD KEY `id_post` (`id_post`),
  ADD KEY `id_user` (`id_user`);

--
-- Индексы таблицы `post_users`
--
ALTER TABLE `post_users`
  ADD KEY `id_post` (`id_post`),
  ADD KEY `id_user` (`id_user`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- Индексы таблицы `users_data`
--
ALTER TABLE `users_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `avatars`
--
ALTER TABLE `avatars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT для таблицы `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `postavatars`
--
ALTER TABLE `postavatars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `postgallery`
--
ALTER TABLE `postgallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT для таблицы `users_data`
--
ALTER TABLE `users_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `avatars_users`
--
ALTER TABLE `avatars_users`
  ADD CONSTRAINT `avatars_users_ibfk_1` FOREIGN KEY (`avatar_id`) REFERENCES `avatars` (`id`),
  ADD CONSTRAINT `avatars_users_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users_data` (`id`);

--
-- Ограничения внешнего ключа таблицы `gallery_users`
--
ALTER TABLE `gallery_users`
  ADD CONSTRAINT `gallery_users_ibfk_1` FOREIGN KEY (`id_gallery`) REFERENCES `gallery` (`id`),
  ADD CONSTRAINT `gallery_users_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users_data` (`id`);

--
-- Ограничения внешнего ключа таблицы `postavatars_users`
--
ALTER TABLE `postavatars_users`
  ADD CONSTRAINT `postavatars_users_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `postavatars` (`id`),
  ADD CONSTRAINT `postavatars_users_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users_data` (`id`);

--
-- Ограничения внешнего ключа таблицы `postgallery_users`
--
ALTER TABLE `postgallery_users`
  ADD CONSTRAINT `postgallery_users_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `postgallery` (`id`),
  ADD CONSTRAINT `postgallery_users_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users_data` (`id`);

--
-- Ограничения внешнего ключа таблицы `post_users`
--
ALTER TABLE `post_users`
  ADD CONSTRAINT `post_users_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `post` (`id`),
  ADD CONSTRAINT `post_users_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users_data` (`id`);

--
-- Ограничения внешнего ключа таблицы `users_data`
--
ALTER TABLE `users_data`
  ADD CONSTRAINT `users_data_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`userId`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
