-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Окт 21 2017 г., 14:18
-- Версия сервера: 10.1.21-MariaDB
-- Версия PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Структура таблицы `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(11) NOT NULL,
  `dbase` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `query` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Структура таблицы `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_length` text COLLATE utf8_bin,
  `col_collation` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) COLLATE utf8_bin DEFAULT '',
  `col_default` text COLLATE utf8_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Структура таблицы `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `column_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Структура таблицы `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `settings_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

-- --------------------------------------------------------

--
-- Структура таблицы `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `export_type` varchar(10) COLLATE utf8_bin NOT NULL,
  `template_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `template_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

--
-- Дамп данных таблицы `pma__export_templates`
--

INSERT INTO `pma__export_templates` (`id`, `username`, `export_type`, `template_name`, `template_data`) VALUES
(1, 'root', 'database', 'social_network.sql', '{\"quick_or_custom\":\"quick\",\"what\":\"sql\",\"structure_or_data_forced\":\"0\",\"table_select[]\":[\"users\",\"users_data\"],\"table_structure[]\":[\"users\",\"users_data\"],\"table_data[]\":[\"users\",\"users_data\"],\"output_format\":\"sendit\",\"filename_template\":\"@DATABASE@\",\"remember_template\":\"on\",\"charset\":\"utf-8\",\"compression\":\"none\",\"maxsize\":\"\",\"codegen_structure_or_data\":\"data\",\"codegen_format\":\"0\",\"csv_separator\":\",\",\"csv_enclosed\":\"\\\"\",\"csv_escaped\":\"\\\"\",\"csv_terminated\":\"AUTO\",\"csv_null\":\"NULL\",\"csv_structure_or_data\":\"data\",\"excel_null\":\"NULL\",\"excel_edition\":\"win\",\"excel_structure_or_data\":\"data\",\"htmlword_structure_or_data\":\"structure_and_data\",\"htmlword_null\":\"NULL\",\"json_structure_or_data\":\"data\",\"latex_caption\":\"something\",\"latex_structure_or_data\":\"structure_and_data\",\"latex_structure_caption\":\"Ð¡Ñ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð° Ñ‚Ð°Ð±Ð»Ð¸Ñ†Ñ‹ @TABLE@\",\"latex_structure_continued_caption\":\"Ð¡Ñ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð° Ñ‚Ð°Ð±Ð»Ð¸Ñ†Ñ‹ @TABLE@ (Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶ÐµÐ½Ð¸Ðµ)\",\"latex_structure_label\":\"tab:@TABLE@-structure\",\"latex_relation\":\"something\",\"latex_comments\":\"something\",\"latex_mime\":\"something\",\"latex_columns\":\"something\",\"latex_data_caption\":\"Ð¡Ð¾Ð´ÐµÑ€Ð¶Ð¸Ð¼Ð¾Ðµ Ñ‚Ð°Ð±Ð»Ð¸Ñ†Ñ‹ @TABLE@\",\"latex_data_continued_caption\":\"Ð¡Ð¾Ð´ÐµÑ€Ð¶Ð¸Ð¼Ð¾Ðµ Ñ‚Ð°Ð±Ð»Ð¸Ñ†Ñ‹ @TABLE@ (Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶ÐµÐ½Ð¸Ðµ)\",\"latex_data_label\":\"tab:@TABLE@-data\",\"latex_null\":\"\\\\textit{NULL}\",\"mediawiki_structure_or_data\":\"structure_and_data\",\"mediawiki_caption\":\"something\",\"mediawiki_headers\":\"something\",\"ods_null\":\"NULL\",\"ods_structure_or_data\":\"data\",\"odt_structure_or_data\":\"structure_and_data\",\"odt_relation\":\"something\",\"odt_comments\":\"something\",\"odt_mime\":\"something\",\"odt_columns\":\"something\",\"odt_null\":\"NULL\",\"pdf_report_title\":\"\",\"pdf_structure_or_data\":\"structure_and_data\",\"phparray_structure_or_data\":\"data\",\"sql_include_comments\":\"something\",\"sql_header_comment\":\"\",\"sql_compatibility\":\"NONE\",\"sql_structure_or_data\":\"structure_and_data\",\"sql_create_table\":\"something\",\"sql_auto_increment\":\"something\",\"sql_create_view\":\"something\",\"sql_procedure_function\":\"something\",\"sql_create_trigger\":\"something\",\"sql_backquotes\":\"something\",\"sql_type\":\"INSERT\",\"sql_insert_syntax\":\"both\",\"sql_max_query_size\":\"50000\",\"sql_hex_for_binary\":\"something\",\"sql_utc_time\":\"something\",\"texytext_structure_or_data\":\"structure_and_data\",\"texytext_null\":\"NULL\",\"xml_structure_or_data\":\"data\",\"xml_export_events\":\"something\",\"xml_export_functions\":\"something\",\"xml_export_procedures\":\"something\",\"xml_export_tables\":\"something\",\"xml_export_triggers\":\"something\",\"xml_export_views\":\"something\",\"xml_export_contents\":\"something\",\"yaml_structure_or_data\":\"data\",\"\":null,\"lock_tables\":null,\"as_separate_files\":null,\"csv_removeCRLF\":null,\"csv_columns\":null,\"excel_removeCRLF\":null,\"excel_columns\":null,\"htmlword_columns\":null,\"json_pretty_print\":null,\"ods_columns\":null,\"sql_dates\":null,\"sql_relation\":null,\"sql_mime\":null,\"sql_use_transaction\":null,\"sql_disable_fk\":null,\"sql_views_as_tables\":null,\"sql_metadata\":null,\"sql_create_database\":null,\"sql_drop_table\":null,\"sql_if_not_exists\":null,\"sql_truncate\":null,\"sql_delayed\":null,\"sql_ignore\":null,\"texytext_columns\":null}'),
(2, 'root', 'database', 'hey', '{\"quick_or_custom\":\"quick\",\"what\":\"sql\",\"structure_or_data_forced\":\"0\",\"table_select[]\":[\"users\",\"users_data\"],\"table_structure[]\":[\"users\",\"users_data\"],\"table_data[]\":[\"users\",\"users_data\"],\"output_format\":\"sendit\",\"filename_template\":\"@DATABASE@\",\"remember_template\":\"on\",\"charset\":\"utf-8\",\"compression\":\"none\",\"maxsize\":\"\",\"codegen_structure_or_data\":\"data\",\"codegen_format\":\"0\",\"csv_separator\":\",\",\"csv_enclosed\":\"\\\"\",\"csv_escaped\":\"\\\"\",\"csv_terminated\":\"AUTO\",\"csv_null\":\"NULL\",\"csv_structure_or_data\":\"data\",\"excel_null\":\"NULL\",\"excel_edition\":\"win\",\"excel_structure_or_data\":\"data\",\"htmlword_structure_or_data\":\"structure_and_data\",\"htmlword_null\":\"NULL\",\"json_structure_or_data\":\"data\",\"latex_caption\":\"something\",\"latex_structure_or_data\":\"structure_and_data\",\"latex_structure_caption\":\"Ð¡Ñ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð° Ñ‚Ð°Ð±Ð»Ð¸Ñ†Ñ‹ @TABLE@\",\"latex_structure_continued_caption\":\"Ð¡Ñ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð° Ñ‚Ð°Ð±Ð»Ð¸Ñ†Ñ‹ @TABLE@ (Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶ÐµÐ½Ð¸Ðµ)\",\"latex_structure_label\":\"tab:@TABLE@-structure\",\"latex_relation\":\"something\",\"latex_comments\":\"something\",\"latex_mime\":\"something\",\"latex_columns\":\"something\",\"latex_data_caption\":\"Ð¡Ð¾Ð´ÐµÑ€Ð¶Ð¸Ð¼Ð¾Ðµ Ñ‚Ð°Ð±Ð»Ð¸Ñ†Ñ‹ @TABLE@\",\"latex_data_continued_caption\":\"Ð¡Ð¾Ð´ÐµÑ€Ð¶Ð¸Ð¼Ð¾Ðµ Ñ‚Ð°Ð±Ð»Ð¸Ñ†Ñ‹ @TABLE@ (Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶ÐµÐ½Ð¸Ðµ)\",\"latex_data_label\":\"tab:@TABLE@-data\",\"latex_null\":\"\\\\textit{NULL}\",\"mediawiki_structure_or_data\":\"structure_and_data\",\"mediawiki_caption\":\"something\",\"mediawiki_headers\":\"something\",\"ods_null\":\"NULL\",\"ods_structure_or_data\":\"data\",\"odt_structure_or_data\":\"structure_and_data\",\"odt_relation\":\"something\",\"odt_comments\":\"something\",\"odt_mime\":\"something\",\"odt_columns\":\"something\",\"odt_null\":\"NULL\",\"pdf_report_title\":\"\",\"pdf_structure_or_data\":\"structure_and_data\",\"phparray_structure_or_data\":\"data\",\"sql_include_comments\":\"something\",\"sql_header_comment\":\"\",\"sql_compatibility\":\"NONE\",\"sql_structure_or_data\":\"structure_and_data\",\"sql_create_table\":\"something\",\"sql_auto_increment\":\"something\",\"sql_create_view\":\"something\",\"sql_procedure_function\":\"something\",\"sql_create_trigger\":\"something\",\"sql_backquotes\":\"something\",\"sql_type\":\"INSERT\",\"sql_insert_syntax\":\"both\",\"sql_max_query_size\":\"50000\",\"sql_hex_for_binary\":\"something\",\"sql_utc_time\":\"something\",\"texytext_structure_or_data\":\"structure_and_data\",\"texytext_null\":\"NULL\",\"xml_structure_or_data\":\"data\",\"xml_export_events\":\"something\",\"xml_export_functions\":\"something\",\"xml_export_procedures\":\"something\",\"xml_export_tables\":\"something\",\"xml_export_triggers\":\"something\",\"xml_export_views\":\"something\",\"xml_export_contents\":\"something\",\"yaml_structure_or_data\":\"data\",\"\":null,\"lock_tables\":null,\"as_separate_files\":null,\"csv_removeCRLF\":null,\"csv_columns\":null,\"excel_removeCRLF\":null,\"excel_columns\":null,\"htmlword_columns\":null,\"json_pretty_print\":null,\"ods_columns\":null,\"sql_dates\":null,\"sql_relation\":null,\"sql_mime\":null,\"sql_use_transaction\":null,\"sql_disable_fk\":null,\"sql_views_as_tables\":null,\"sql_metadata\":null,\"sql_create_database\":null,\"sql_drop_table\":null,\"sql_if_not_exists\":null,\"sql_truncate\":null,\"sql_delayed\":null,\"sql_ignore\":null,\"texytext_columns\":null}');

-- --------------------------------------------------------

--
-- Структура таблицы `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Структура таблицы `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sqlquery` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Структура таблицы `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Структура таблицы `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Структура таблицы `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Дамп данных таблицы `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"social_network\",\"table\":\"users_data\"},{\"db\":\"social_network\",\"table\":\"users\"},{\"db\":\"social_network\",\"table\":\"post\"},{\"db\":\"social_network\",\"table\":\"post_likes\"},{\"db\":\"social_network\",\"table\":\"gallery_likes\"},{\"db\":\"social_network\",\"table\":\"avatar_likes\"},{\"db\":\"social_network\",\"table\":\"avatars_users\"},{\"db\":\"social_network\",\"table\":\"gallery\"},{\"db\":\"social_network\",\"table\":\"avatars\"},{\"db\":\"social_network\",\"table\":\"chat\"}]');

-- --------------------------------------------------------

--
-- Структура таблицы `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Структура таблицы `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Структура таблицы `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT '0',
  `x` float UNSIGNED NOT NULL DEFAULT '0',
  `y` float UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Структура таблицы `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Структура таблицы `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `prefs` text COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

--
-- Дамп данных таблицы `pma__table_uiprefs`
--

INSERT INTO `pma__table_uiprefs` (`username`, `db_name`, `table_name`, `prefs`, `last_update`) VALUES
('root', 'social_network', 'avatars', '{\"sorted_col\":\"`id_owner` ASC\"}', '2017-09-04 15:45:17'),
('root', 'social_network', 'avatars_users', '{\"CREATE_TIME\":\"2017-08-04 22:01:27\",\"col_order\":[\"0\",\"1\"],\"col_visib\":[\"1\",\"1\"]}', '2017-08-04 19:10:34'),
('root', 'social_network', 'chat', '{\"sorted_col\":\"`id` ASC\"}', '2017-08-26 12:27:12'),
('root', 'social_network', 'gallery', '{\"sorted_col\":\"`gallery`.`id_owner`  ASC\"}', '2017-09-22 11:24:11'),
('root', 'social_network', 'postavatars', '{\"sorted_col\":\"`postavatars`.`send_date` ASC\"}', '2017-09-14 17:33:36'),
('root', 'social_network', 'users_data', '{\"CREATE_TIME\":\"2017-08-08 12:07:25\",\"col_visib\":[\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\"]}', '2017-08-31 05:46:42');

-- --------------------------------------------------------

--
-- Структура таблицы `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text COLLATE utf8_bin NOT NULL,
  `schema_sql` text COLLATE utf8_bin,
  `data_sql` longtext COLLATE utf8_bin,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') COLLATE utf8_bin DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Структура таблицы `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `config_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Дамп данных таблицы `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2017-07-06 17:43:03', '{\"lang\":\"ru\",\"collation_connection\":\"utf8mb4_unicode_ci\"}');

-- --------------------------------------------------------

--
-- Структура таблицы `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Структура таблицы `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Индексы таблицы `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Индексы таблицы `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Индексы таблицы `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Индексы таблицы `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Индексы таблицы `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Индексы таблицы `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Индексы таблицы `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Индексы таблицы `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Индексы таблицы `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Индексы таблицы `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Индексы таблицы `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Индексы таблицы `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Индексы таблицы `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Индексы таблицы `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Индексы таблицы `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Индексы таблицы `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Индексы таблицы `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;--
-- База данных: `social_network`
--
CREATE DATABASE IF NOT EXISTS `social_network` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `social_network`;

-- --------------------------------------------------------

--
-- Структура таблицы `avatar_likes`
--

CREATE TABLE `avatar_likes` (
  `id` int(11) NOT NULL,
  `id_owner` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `avatar_likes`
--

INSERT INTO `avatar_likes` (`id`, `id_owner`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `avatars`
--

CREATE TABLE `avatars` (
  `id` int(11) NOT NULL,
  `id_owner` int(11) NOT NULL,
  `is_set` tinyint(1) NOT NULL,
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

INSERT INTO `avatars` (`id`, `id_owner`, `is_set`, `image_url`, `sender_name`, `sender_url`, `reciever_url`, `image_date`, `likes`) VALUES
(1, 1, 1, '/src/img/users/user1/avatars/2.jpg', 'Доктор Стрендж', '/src/img/users/user1/avatars/2.jpg', '/src/img/users/user1/chat/sender2.jpg', '15.12.12 15:38', 2),
(2, 1, 0, '/src/img/users/user1/gallery/1.jpg', 'Доктор Стрендж', '/src/img/users/user1/avatars/2.jpg', '/src/img/users/user1/chat/sender2.jpg', '14.11.11 14:34', 23),
(3, 5, 1, '/src/img/users/user5/avatars/avatar.jpg\n', 'Дженніфер Лоуренс ', '/src/img/users/user5/avatars/avatar.jpg\n', '/src/img/users/user5/avatars/avatar.jpg\n', '14.11.11 14:34', 23),
(4, 2, 1, '/src/img/users/user2/avatars/avatar.jpg\n', 'Дженніфер Лоуренс ', '/src/img/users/user2/avatars/avatar.jpg\n', '/src/img/users/user2/avatars/avatar.jpg\n', '14.11.11 14:34', 23),
(45, 1, 0, '../src/img/users/user1/avatars/1jh7aejydlovnzo.jpg', 'Доктор Стрендж', '../src/img/users/user1/avatars/1jh7aejydlovnzo.jpg', '../src/img/users/user1/avatars/1jh7aejydlovnzo.jpg', '09-04-2017 07:16:13', 0),
(46, 6, 1, '../src/img/users/user6/avatars/ybjjrcjc3p5idbd.jpg', 'Святий Ігумен', '../src/img/users/user6/avatars/ybjjrcjc3p5idbd.jpg', '../src/img/users/user6/avatars/ybjjrcjc3p5idbd.jpg', '09-27-2017 09:39:55', 0),
(47, 7, 0, '../src/img/users/user7/avatars/jykv1vlho0k5gyk.jpg', 'dasdsa sdaas', '../src/img/users/user7/avatars/jykv1vlho0k5gyk.jpg', '../src/img/users/user7/avatars/jykv1vlho0k5gyk.jpg', '10-20-2017 11:41:10', 0),
(48, 7, 1, '../src/img/users/user7/avatars/uiacyewcl32b806.jpg', 'dasdsa sdaas', '../src/img/users/user7/avatars/uiacyewcl32b806.jpg', '../src/img/users/user7/avatars/uiacyewcl32b806.jpg', '10-20-2017 11:43:08', 0);

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
-- Структура таблицы `chat`
--

CREATE TABLE `chat` (
  `id` int(11) NOT NULL,
  `id_owner` int(11) NOT NULL,
  `id_sender` int(11) NOT NULL,
  `sender` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `last_msg_url` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `last_msg_text` varchar(2000) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `sender_name` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `chat_date` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `reciever_url` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `chat`
--

INSERT INTO `chat` (`id`, `id_owner`, `id_sender`, `sender`, `last_msg_url`, `last_msg_text`, `sender_name`, `chat_date`, `reciever_url`) VALUES
(1, 1, 2, '/src/img/users/user2/avatars/avatar.jpg', '/src/img/users/user2/avatars/avatar.jpg', 'Знаю Я хочу улететь,  Чтобы высоко и вниз не смотреть, И за руку тебя милый мой, Заберу я с собой... Ты оставил мн', 'Єва Грін', '11.04.06 23:22', '/src/img/users/user1/avatars/2.jpg'),
(2, 1, 5, '/src/img/users/user5/avatars/avatar.jpg', '/src/img/users/user1/avatars/2.jpg', 'Це просто неймовірно', 'Дженніфер Лоуренс', 'вчора', '/src/img/users/user1/avatars/2.jpg'),
(3, 1, 15, '/src/img/users/user1/avatars/2.jpg', '', '', 'adfds fdsfdds', '09-17-2017 04:33:01', '/src/img/users/noUser/avatars/avatar.jpg'),
(4, 6, 1, '../src/img/users/user6/avatars/ybjjrcjc3p5idbd.jpg', '', '', 'Доктор Стрендж', '09-27-2017 10:05:04', '/src/img/users/user1/avatars/2.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `chat_users`
--

CREATE TABLE `chat_users` (
  `id_chat` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `chat_users`
--

INSERT INTO `chat_users` (`id_chat`, `id_user`) VALUES
(1, 1),
(2, 1),
(1, 2),
(2, 5);

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
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `gallery`
--

INSERT INTO `gallery` (`id`, `id_owner`, `image_url`, `sender_name`, `sender_url`, `reciever_url`, `image_date`, `likes`) VALUES
(2, 1, '/src/img/users/user1/gallery/2.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 45),
(3, 1, '/src/img/users/user1/gallery/3.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 41),
(5, 1, '/src/img/users/user1/gallery/5.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 0),
(6, 1, '/src/img/users/user1/gallery/6.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 0),
(7, 1, '/src/img/users/user1/gallery/7.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 1),
(8, 1, '/src/img/users/user1/gallery/8.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 2),
(9, 1, '/src/img/users/user1/gallery/9.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 4),
(10, 1, '/src/img/users/user1/gallery/10.jpg', 'Доктор Стрендж', '/src/img/users/user/avatars/2.jpg', '/src/img/users/user/avatars/2.jpg', '15.11.17 14:31', 6),
(14, 5, '/src/img/users/user5/gallery/1.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(15, 5, '/src/img/users/user5/gallery/2.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(16, 5, '/src/img/users/user5/gallery/3.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(17, 5, '/src/img/users/user5/gallery/4.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(18, 5, '/src/img/users/user5/gallery/5.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(19, 5, '/src/img/users/user5/gallery/6.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(20, 5, '/src/img/users/user5/gallery/7.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(21, 5, '/src/img/users/user5/gallery/8.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(22, 5, '/src/img/users/user5/gallery/9.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(23, 5, '/src/img/users/user5/gallery/10.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(24, 5, '/src/img/users/user5/gallery/11.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(25, 5, '/src/img/users/user5/gallery/12.jpg', 'Дженніфер Лоуренс', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4),
(26, 5, '/src/img/users/user5/gallery/13.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(27, 5, '/src/img/users/user5/gallery/14.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(28, 5, '/src/img/users/user5/gallery/15.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(29, 5, '/src/img/users/user5/gallery/16.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(30, 5, '/src/img/users/user5/gallery/17.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(31, 5, '/src/img/users/user5/gallery/18.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(32, 5, '/src/img/users/user5/gallery/19.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(33, 5, '/src/img/users/user5/gallery/20.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(34, 5, '/src/img/users/user5/gallery/21.jpg', 'Дженнфіер Лоуренс', '/src/img/users/friend100002/avatars/avatar.jpg', '/src/img/users/friend100002/avatars/avatar.jpg', '15.11.17 14:31', 4),
(35, 2, '/src/img/users/user2/gallery/1.jpg', 'Єва Грін', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4),
(38, 2, '/src/img/users/user2/gallery/2.jpg', 'Єва Грін', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4),
(39, 2, '/src/img/users/user2/gallery/3.jpg', 'Єва Грін', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4),
(40, 2, '/src/img/users/user2/gallery/4.jpg', 'Єва Грін', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4),
(41, 2, '/src/img/users/user2/gallery/5.mp4', 'Єва Грін', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4),
(42, 2, '/src/img/users/user2/gallery/6.jpg', 'Єва Грін', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4),
(43, 2, '/src/img/users/user2/gallery/7.jpg', 'Єва Грін', '/src/img/users/friend100001/avatars/avatar.jpg', '/src/img/users/friend100001/avatars/avatar.jpg', '15.11.17 14:31', 4),
(51, 1, '../src/img/users/user1/gallery/11.jpg', 'Доктор Стрендж', '../src/img/users/noUser/avatars/avatar.jpg', '../src/img/users/noUser/avatars/avatar.jpg', '09-04-2017 05:03:25', 1),
(52, 1, '../src/img/users/user1/gallery/1.jpg', 'Доктор Стрендж', '../src/img/users/noUser/avatars/avatar.jpg', '../src/img/users/noUser/avatars/avatar.jpg', '09-04-2017 05:03:29', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `gallery_likes`
--

CREATE TABLE `gallery_likes` (
  `id` int(11) NOT NULL,
  `id_owner` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `gallery_likes`
--

INSERT INTO `gallery_likes` (`id`, `id_owner`) VALUES
(10, 1),
(9, 1),
(51, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `id_owner` int(11) NOT NULL,
  `id_sender` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `sender_url` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `sender_name` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `send_date` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_text` varchar(1000) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_image` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `likes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `post`
--

INSERT INTO `post` (`id`, `id_owner`, `id_sender`, `id_post`, `sender_url`, `sender_name`, `send_date`, `post_text`, `post_image`, `likes`) VALUES
(1, 1, 5, 0, '/src/img/users/user5/avatars/avatar.jpg', 'Дженніфер Лоуренс', '13.05.17 14:38', 'Я думаю тобі сподобається мій новий фільм ;-)   \n\n https://my-hit.org/film/415353', '', 1),
(30, 1, 1, 1, '../src/img/users/user1/avatars/2.jpg', 'Доктор Стрендж', '08-22-2017 04:38:41', 'Дівчина із іншого життя!', '../src/img/users/user1/posts/14079532_528450687364315_3352630776540591931_n.jpg', 2),
(52, 5, 1, 0, '/src/img/users/user1/avatars/2.jpg', 'Доктор Стрендж', '08-22-2017 09:20:56', 'це часом не ти?', '../src/img/users/user5/posts/17.jpg', 0),
(67, 6, 6, 0, '../src/img/users/user6/avatars/ybjjrcjc3p5idbd.jpg', 'Святий Ігумен', '09-27-2017 02:14:11', 'hey', '../src/img/users/user6/posts/Capture.JPG', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `post_likes`
--

CREATE TABLE `post_likes` (
  `id` int(11) NOT NULL,
  `id_owner` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `post_likes`
--

INSERT INTO `post_likes` (`id`, `id_owner`) VALUES
(30, 6),
(1, 1),
(30, 1),
(67, 1);

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
  `post_image` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_likes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `postavatars`
--

INSERT INTO `postavatars` (`id`, `id_owner`, `id_image`, `sender_url`, `sender_name`, `send_date`, `post_text`, `post_image`, `post_likes`) VALUES
(1, 1, 1, '/src/img/users/user2/avatars/avatar.jpg', 'Єва Грін', '13.05.17 14:38', 'Хей привіт!', '', 0),
(2, 1, 1, '/src/img/users/user2/avatars/avatar.jpg', 'Єва Грін', '13.05.17 14:38', 'Хей привіт Двічі!', '', 0),
(3, 1, 5, '/src/img/users/user2/avatars/avatar.jpg', 'Дженніфер Лоуренс', '13.05.17 14:38', 'Хей привіт Тричі від Дженніфер!', '', 0);

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
-- Структура таблицы `postchat`
--

CREATE TABLE `postchat` (
  `id` int(11) NOT NULL,
  `id_owner` int(11) NOT NULL,
  `id_chat` int(11) NOT NULL,
  `side` varchar(5) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `message_data` varchar(2000) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `message_date` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `postchat`
--

INSERT INTO `postchat` (`id`, `id_owner`, `id_chat`, `side`, `message_data`, `message_date`) VALUES
(1, 1, 2, 'R', 'Просто так, неожиданно пришел закат, Ласково ноченька приплыла к нам с того берега, К шелку уронила. Что не так? И зачем я так хочу бежать Долго ли лодочка, ты плыви плыви, Больно мне помнить', '12 mins ago'),
(2, 1, 2, 'L', 'Це просто неймовріно!', '10 mins ago'),
(3, 1, 2, 'L', 'Знаєш приспів', '8 mins ago'),
(4, 1, 2, 'R', 'Знаю Я хочу улететь,  Чтобы высоко и вниз не смотреть, И за руку тебя милый мой, Заберу я с собой... Ты оставил мне след, По которому, я буду лететь. И за руку тебя, мой родной, Заберу я с собой...', '2 mins ago'),
(5, 1, 5, 'R', 'Ти чудова! Давй свій телефон!', 'зараз'),
(6, 1, 5, 'L', 'Дякую, приємно :-)\nтримай +390 <не дам> 12 43', 'зараз');

-- --------------------------------------------------------

--
-- Структура таблицы `postchat_users`
--

CREATE TABLE `postchat_users` (
  `id_post` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `postchat_users`
--

INSERT INTO `postchat_users` (`id_post`, `id_user`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1);

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
  `post_image` varchar(100) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `post_likes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `postgallery`
--

INSERT INTO `postgallery` (`id`, `id_owner`, `id_image`, `sender_url`, `sender_name`, `send_date`, `post_text`, `post_image`, `post_likes`) VALUES
(1, 1, 1, '/src/img/users/user1/avatars/2.jpg', 'Доктор Стрендж', '13.05.17 14:38', 'тестове повідомлення самому собі', '', 0),
(2, 1, 6, '/src/img/users/user1/avatars/2.jpg', 'Доктор Стрендж', '13.05.17 14:38', 'а це повідомлення має бути на шостій фотці', '', 0);

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
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `first_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `second_name` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `userEmail` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `userPassword` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`userId`, `first_name`, `second_name`, `userEmail`, `userPassword`) VALUES
(1, 'Доктор', 'Стрендж', 'regstarrr@ukr.net', '1234'),
(2, 'Anya', 'Medvid', 'medvidanja94@gmail.com', '123456'),
(5, 'Jannifer', 'Lawrence', 'dimakush1@gmail.com', '1234'),
(6, 'Святий', 'Ігумен', 'hey@ukr.net', '1234'),
(7, 'dasdsa', 'sdaas', 'regstarrrdsad@ukr.net', '123456');

-- --------------------------------------------------------

--
-- Структура таблицы `users_data`
--

CREATE TABLE `users_data` (
  `id` int(11) NOT NULL,
  `first_name` varchar(70) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `second_name` varchar(70) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `userId` varchar(70) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `birthday` varchar(50) NOT NULL,
  `city` varchar(80) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `education` varchar(80) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `mobile_number` varchar(80) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `count_friends` int(11) NOT NULL,
  `background_url` varchar(100) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `avatar_url` varchar(100) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `friends` varchar(1000) NOT NULL,
  `avatars` varchar(1000) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `gallery` varchar(1000) CHARACTER SET utf32 COLLATE utf32_bin NOT NULL,
  `posts` varchar(100) NOT NULL,
  `chat` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `users_data`
--

INSERT INTO `users_data` (`id`, `first_name`, `second_name`, `userId`, `birthday`, `city`, `education`, `mobile_number`, `count_friends`, `background_url`, `avatar_url`, `friends`, `avatars`, `gallery`, `posts`, `chat`) VALUES
(1, 'Доктор', 'Стрендж', '1', '04.03.1982', 'Лондон', 'Кембридж', '0665654652', 5, '../src/img/users/user1/backgrounds/vlho0k5gykuiacy.jpg', '/src/img/users/user1/avatars/2.jpg', '2,5', '0', '', '', ''),
(2, 'Єва', 'Грін', '2', '03.04.1988', 'Париж', 'Павлівська школа', 'не скажу!', 0, '../src/img/users/user2/backgrounds/bg.jpg', '/src/img/users/user2/avatars/avatar.jpg\n', '', '0', '', '', ''),
(5, 'Дженніфер', 'Лоуренс', '5', '11.03.1991', 'Луисвилл', 'Kammerer Middle School ', 'unbelievable', 0, '../src/img/users/user5/backgrounds/bg.jpg', '/src/img/users/user5/avatars/avatar.jpg', '', '0', '', '', ''),
(6, 'Святий', 'Ігумен', '6', '2017-09-20T21:00:00.000Z', 'Київ', 'Києво Печерська Лавра', 'не існує', 0, '../src/img/users/user6/backgrounds/upd5182xxsll6xd.jpg', '../src/img/users/user6/avatars/ybjjrcjc3p5idbd.jpg', '', '', '', '', ''),
(7, 'dasdsa', 'sdaas', '7', '', '', '', '', 0, '../src/img/users/user7/backgrounds/1vvch9obpgv6xcb.jpg', '../src/img/users/user7/avatars/uiacyewcl32b806.jpg', '', '', '', '', '');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `avatar_likes`
--
ALTER TABLE `avatar_likes`
  ADD KEY `user_id` (`id`),
  ADD KEY `obj_id` (`id_owner`);

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
-- Индексы таблицы `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `chat_users`
--
ALTER TABLE `chat_users`
  ADD KEY `id_chat` (`id_chat`),
  ADD KEY `id_user` (`id_user`);

--
-- Индексы таблицы `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `gallery_likes`
--
ALTER TABLE `gallery_likes`
  ADD KEY `user_id` (`id`),
  ADD KEY `obj_id` (`id_owner`);

--
-- Индексы таблицы `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `post_likes`
--
ALTER TABLE `post_likes`
  ADD KEY `user_id` (`id`),
  ADD KEY `obj_id` (`id_owner`);

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
-- Индексы таблицы `postchat`
--
ALTER TABLE `postchat`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `postchat_users`
--
ALTER TABLE `postchat_users`
  ADD KEY `postchat_users_ibfk_1` (`id_post`),
  ADD KEY `postchat_users_ibfk_2` (`id_user`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT для таблицы `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
--
-- AUTO_INCREMENT для таблицы `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;
--
-- AUTO_INCREMENT для таблицы `postavatars`
--
ALTER TABLE `postavatars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `postchat`
--
ALTER TABLE `postchat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `postgallery`
--
ALTER TABLE `postgallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT для таблицы `users_data`
--
ALTER TABLE `users_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
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
-- Ограничения внешнего ключа таблицы `chat_users`
--
ALTER TABLE `chat_users`
  ADD CONSTRAINT `chat_users_ibfk_1` FOREIGN KEY (`id_chat`) REFERENCES `chat` (`id`),
  ADD CONSTRAINT `chat_users_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users_data` (`id`);

--
-- Ограничения внешнего ключа таблицы `postavatars_users`
--
ALTER TABLE `postavatars_users`
  ADD CONSTRAINT `postavatars_users_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `postavatars` (`id`),
  ADD CONSTRAINT `postavatars_users_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users_data` (`id`);

--
-- Ограничения внешнего ключа таблицы `postchat_users`
--
ALTER TABLE `postchat_users`
  ADD CONSTRAINT `postchat_users_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `postchat` (`id`),
  ADD CONSTRAINT `postchat_users_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users_data` (`id`);

--
-- Ограничения внешнего ключа таблицы `postgallery_users`
--
ALTER TABLE `postgallery_users`
  ADD CONSTRAINT `postgallery_users_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `postgallery` (`id`),
  ADD CONSTRAINT `postgallery_users_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users_data` (`id`);
--
-- База данных: `superdb`
--
CREATE DATABASE IF NOT EXISTS `superdb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `superdb`;

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_sex` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;--
-- База данных: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
