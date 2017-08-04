-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Авг 04 2017 г., 22:46
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
  `avatar_url` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `sender_name` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `sender_url` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `reciever_url` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `avatar_date` varchar(25) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `likes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `avatars`
--

INSERT INTO `avatars` (`id`, `avatar_url`, `sender_name`, `sender_url`, `reciever_url`, `avatar_date`, `likes`) VALUES
(1, '/src/img/users/user/avatars/2.jpg', 'Містер Андерсон', '/src/img/users/user/chat/sender1.jpg', '/src/img/users/user/chat/sender2.jpg', '15.12.12 15:38', 1),
(2, '/src/img/users/user/gallery/1.jpg', 'Містер Сміт', '/src/img/users/user/chat/sender1.jpg', '/src/img/users/user/chat/sender2.jpg', '14.11.11 14:34', 23);

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
(2, 1);

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
  `gallery` varchar(1000) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `users_data`
--

INSERT INTO `users_data` (`id`, `first_name`, `second_name`, `birthday`, `city`, `education`, `mobile_number`, `count_friends`, `background_url`, `avatar_url`, `friends`, `avatars`, `gallery`) VALUES
(1, 'Доктор', 'Стрендж', '1982-03-04', 'Лондон', 'Кембридж', '0665654652', 5, '/src/img/users/user/backgrounds/bg.jpg', '/src/img//users/user/avatars/avatar.jpg', '2,5', '0', ''),
(2, 'Єва', 'Грін', '1993-04-05', 'Париж', 'Павлівська школа', 'не скажу', 421, '/src/img/users/friend100001/backgrounds/bg.jpg', '/src/img//users/friend100001/avatars/avatar.jpg', '', '0', ''),
(5, 'Дженніфер', 'Лоуренс', '1992-01-14', 'Луисвилл', 'Kammerer Middle School ', 'unbelievable', 4132, '/src/img/users/friend100002/backgrounds/bg.jpg', '/src/img//users/friend100002/avatars/avatar.jpg', '', '0', '');

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
-- Ограничения внешнего ключа таблицы `users_data`
--
ALTER TABLE `users_data`
  ADD CONSTRAINT `users_data_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`userId`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
