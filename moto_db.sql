-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 03 déc. 2018 à 19:38
-- Version du serveur :  5.7.19
-- Version de PHP :  7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `moto`
--
CREATE DATABASE IF NOT EXISTS `moto` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `moto`;

-- --------------------------------------------------------

--
-- Structure de la table `builder`
--

DROP TABLE IF EXISTS `builder`;
CREATE TABLE IF NOT EXISTS `builder` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=223 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `builder`
--

INSERT INTO `builder` (`id`, `name`) VALUES
(1, 'Adiva'),
(2, 'Adly'),
(3, 'Aeon'),
(4, 'Ajp'),
(5, 'Alta Motors'),
(6, 'Aprilia'),
(7, 'Arctic Cat'),
(8, 'As Motors'),
(9, 'Askoll'),
(10, 'Avinton'),
(11, 'Axr'),
(12, 'Bajaj'),
(13, 'Baotian'),
(14, 'Barigo'),
(15, 'Barossa'),
(16, 'Bashan'),
(17, 'Beeline'),
(18, 'Benelli'),
(19, 'Beta'),
(20, 'Bfg'),
(21, 'Big Bear Choppers'),
(22, 'Big Dog'),
(23, 'Bimota'),
(24, 'Black Star'),
(25, 'Blaney'),
(26, 'Blata'),
(27, 'Bmw'),
(28, 'Bombardier'),
(29, 'Borelli'),
(30, 'Boss Hoss'),
(31, 'Boxer'),
(32, 'Brixton'),
(33, 'Bsa'),
(34, 'Buell'),
(35, 'Bullit'),
(36, 'Bultaco'),
(37, 'Cagiva'),
(38, 'Can Am'),
(39, 'Ccm'),
(40, 'Cf Moto'),
(41, 'Ch Racing'),
(42, 'Chunlan'),
(43, 'Clipic'),
(44, 'Confederate'),
(45, 'Conti Motors'),
(46, 'Cpi'),
(47, 'Cr&s'),
(48, 'Cz'),
(49, 'Daelim'),
(50, 'Derbi'),
(51, 'Di Blasi'),
(52, 'Diapason'),
(53, 'Dniepr'),
(54, 'Ducati'),
(55, 'E-max'),
(56, 'E-ton'),
(57, 'Easy Trikes'),
(58, 'Eccity'),
(59, 'Enfield'),
(60, 'Eurocka'),
(61, 'Evt'),
(62, 'Explorer'),
(63, 'Exy Racing'),
(64, 'Factory Bike'),
(65, 'Fantic Motor'),
(66, 'Faspider'),
(67, 'Fischer'),
(68, 'Fitro'),
(69, 'Gilera'),
(70, 'Ginomoto'),
(71, 'Goes'),
(72, 'Goodyear'),
(73, 'Gowinn'),
(74, 'Guoben'),
(75, 'Hagglunds'),
(76, 'Hanway'),
(77, 'Harley Davidson'),
(78, 'Headbanger'),
(79, 'Heroway'),
(80, 'Hesketh'),
(81, 'Highland'),
(82, 'Hm'),
(83, 'Hm Honda'),
(84, 'Honda'),
(85, 'Hooper'),
(86, 'Horex'),
(87, 'Hrd'),
(88, 'Husaberg'),
(89, 'Husqvarna'),
(90, 'Hyosung'),
(91, 'Hytrack'),
(92, 'Indian'),
(93, 'Italjet'),
(94, 'Italvel'),
(95, 'Jawa'),
(96, 'Jawa Speedway'),
(97, 'Jiajue'),
(98, 'Jianshe'),
(99, 'Jikov'),
(100, 'Jincheng'),
(101, 'Jinlun'),
(102, 'Jonway'),
(103, 'Kanuni'),
(104, 'Kawasaki'),
(105, 'Keeway'),
(106, 'Kreidler'),
(107, 'Ktm'),
(108, 'Kymco'),
(109, 'Laverda'),
(110, 'Lem'),
(111, 'Leonart'),
(112, 'Lifan'),
(113, 'Ligier'),
(114, 'Linhai'),
(115, 'Lml'),
(116, 'Loisir 2r'),
(117, 'Magni'),
(118, 'Magpower'),
(119, 'Maico'),
(120, 'Malaguti'),
(121, 'Manet Korado'),
(122, 'Masai'),
(123, 'Mash'),
(124, 'Matchless'),
(125, 'Matra'),
(126, 'Maoench'),
(127, 'Mbk'),
(128, 'Mecatecno'),
(129, 'Megelli'),
(130, 'Metrakit'),
(131, 'Mh'),
(132, 'Midual'),
(133, 'Minico'),
(134, 'Mistral'),
(135, 'Monnier'),
(136, 'Montesa'),
(137, 'Mopex'),
(138, 'Mors'),
(139, 'Moto Guzzi'),
(140, 'Moto Morini'),
(141, 'Moto Zeta'),
(142, 'Motobecane'),
(143, 'Motrac'),
(144, 'Msa By'),
(145, 'Mujoo'),
(146, 'Mv Agusta'),
(147, 'Mz'),
(148, 'Mz Kanuni'),
(149, 'Ncr'),
(150, 'Neco'),
(151, 'Niu'),
(152, 'Norton'),
(153, 'Nytrox'),
(154, 'Orcal'),
(155, 'Ossa'),
(156, 'Oural'),
(157, 'Pantera'),
(158, 'Paton'),
(159, 'Peugeot'),
(160, 'Pgo'),
(161, 'Piaggio'),
(162, 'Pink Mobility'),
(163, 'Polaris'),
(164, 'Polini'),
(165, 'Praga'),
(166, 'Qingqi'),
(167, 'Quadro'),
(168, 'Razzo'),
(169, 'Regal Raptor'),
(170, 'Renault'),
(171, 'Revatto'),
(172, 'Rewaco'),
(173, 'Ride'),
(174, 'Rieju'),
(175, 'Roadsign'),
(176, 'Roxon'),
(177, 'Royal Enfield'),
(178, 'Rumi'),
(179, 'Sachs'),
(180, 'Sampo'),
(181, 'Saxon'),
(182, 'Scomadi'),
(183, 'Scorpa'),
(184, 'Select Up'),
(185, 'Sherco'),
(186, 'Sherco By Bultaco'),
(187, 'Side Bike'),
(188, 'Sky Team'),
(189, 'Smc'),
(190, 'Solex'),
(191, 'Spigaou'),
(192, 'Suzuki'),
(193, 'Sweet Elec'),
(194, 'Swm'),
(195, 'Sym'),
(196, 'Tendance'),
(197, 'Tgb'),
(198, 'Tm'),
(199, 'Tnt Motor'),
(200, 'Tomos'),
(201, 'Triton'),
(202, 'Triumph'),
(203, 'Ural'),
(204, 'Ural/irbit Motorcycle Plant'),
(205, 'Vastro'),
(206, 'Vectrix'),
(207, 'Vertemati'),
(208, 'Victory'),
(209, 'Volta'),
(210, 'Vor'),
(211, 'Voxan'),
(212, 'Xr Dall Ara'),
(213, 'Yamaha'),
(214, 'Yazuka'),
(215, 'Ycf'),
(216, 'Yiying'),
(217, 'Zero'),
(218, 'Zhongyu'),
(219, 'Znen'),
(220, 'Zoncq-jingchen'),
(221, 'Zongshen'),
(222, 'Zpmoto');

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'ATC'),
(2, 'Collection'),
(3, 'Cross'),
(4, 'Custom'),
(5, 'Enduro'),
(6, 'Grand Tourisme (GT)'),
(7, 'Néo-Retro'),
(8, 'Roadster'),
(9, 'Routière'),
(10, 'Side-Car'),
(11, 'Sportive'),
(12, 'Spyder'),
(13, 'Supermotard'),
(14, 'Trails'),
(15, 'Trial'),
(16, 'Trike'),
(17, 'Utilitaire');

-- --------------------------------------------------------

--
-- Structure de la table `fos_user`
--

DROP TABLE IF EXISTS `fos_user`;
CREATE TABLE IF NOT EXISTS `fos_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `username_canonical` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `email_canonical` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `salt` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `confirmation_token` varchar(180) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password_requested_at` datetime DEFAULT NULL,
  `roles` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_957A647992FC23A8` (`username_canonical`),
  UNIQUE KEY `UNIQ_957A6479A0D96FBF` (`email_canonical`),
  UNIQUE KEY `UNIQ_957A6479C05FB297` (`confirmation_token`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `fos_user`
--

INSERT INTO `fos_user` (`id`, `username`, `username_canonical`, `email`, `email_canonical`, `enabled`, `salt`, `password`, `last_login`, `confirmation_token`, `password_requested_at`, `roles`) VALUES
(1, 'clement', 'clement', 'adresse@mail.fr', 'adresse@mail.fr', 1, NULL, '$2y$13$r81kH0kFEcF2ZAanDVnq2.0hDLCMJ4Zi8XR6x283q9EePWn0P7qrS', '2018-02-10 14:59:01', NULL, NULL, 'a:1:{i:0;s:10:\"ROLE_ADMIN\";}');

-- --------------------------------------------------------

--
-- Structure de la table `license`
--

DROP TABLE IF EXISTS `license`;
CREATE TABLE IF NOT EXISTS `license` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `license`
--

INSERT INTO `license` (`id`, `name`) VALUES
(1, 'A'),
(2, 'A2'),
(3, 'A1'),
(4, 'AM/BSR'),
(5, 'B1'),
(6, 'B+2ans');

-- --------------------------------------------------------

--
-- Structure de la table `modeles`
--

DROP TABLE IF EXISTS `modeles`;
CREATE TABLE IF NOT EXISTS `modeles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `builder_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type_moteur` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Distribution` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Refroidissement` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cylindree` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `puissance` double DEFAULT NULL,
  `couple` double DEFAULT NULL,
  `embrayage` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Boite_vitesse` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Transmission_finale` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Susp_avant` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `susp_arriere` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `frein_avant` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `frein_arriere` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pneu_avant` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pneu_arriere` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cadre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `longueur` double DEFAULT NULL,
  `largeur` double DEFAULT NULL,
  `hauteur` double DEFAULT NULL,
  `empattement` double DEFAULT NULL,
  `hauteur_selle` double DEFAULT NULL,
  `poid` int(11) DEFAULT NULL,
  `reservoir` int(11) DEFAULT NULL,
  `nbrs_cylindres` int(11) DEFAULT NULL,
  `nbrs_modeles` int(11) DEFAULT NULL,
  `annee` datetime DEFAULT NULL,
  `abs` tinyint(1) DEFAULT NULL,
  `shifter` tinyint(1) DEFAULT NULL,
  `carenage` tinyint(1) DEFAULT NULL,
  `type_guidon` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `position_moto` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_7EAE1448959F66E4` (`builder_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `modeles_categories`
--

DROP TABLE IF EXISTS `modeles_categories`;
CREATE TABLE IF NOT EXISTS `modeles_categories` (
  `modeles_id` int(11) NOT NULL,
  `categories_id` int(11) NOT NULL,
  PRIMARY KEY (`modeles_id`,`categories_id`),
  KEY `IDX_8ECAB5F4708408C` (`modeles_id`),
  KEY `IDX_8ECAB5F4A21214B7` (`categories_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `modeles_licenses`
--

DROP TABLE IF EXISTS `modeles_licenses`;
CREATE TABLE IF NOT EXISTS `modeles_licenses` (
  `modeles_id` int(11) NOT NULL,
  `license_id` int(11) NOT NULL,
  PRIMARY KEY (`modeles_id`,`license_id`),
  KEY `IDX_EAF51013708408C` (`modeles_id`),
  KEY `IDX_EAF51013460F904B` (`license_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `modeles_users`
--

DROP TABLE IF EXISTS `modeles_users`;
CREATE TABLE IF NOT EXISTS `modeles_users` (
  `modeles_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`modeles_id`,`user_id`),
  KEY `IDX_1B0BDB5A708408C` (`modeles_id`),
  KEY `IDX_1B0BDB5AA76ED395` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `modeles`
--
ALTER TABLE `modeles`
  ADD CONSTRAINT `FK_7EAE1448959F66E4` FOREIGN KEY (`builder_id`) REFERENCES `builder` (`id`);

--
-- Contraintes pour la table `modeles_categories`
--
ALTER TABLE `modeles_categories`
  ADD CONSTRAINT `FK_8ECAB5F4708408C` FOREIGN KEY (`modeles_id`) REFERENCES `modeles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_8ECAB5F4A21214B7` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `modeles_licenses`
--
ALTER TABLE `modeles_licenses`
  ADD CONSTRAINT `FK_EAF51013460F904B` FOREIGN KEY (`license_id`) REFERENCES `license` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_EAF51013708408C` FOREIGN KEY (`modeles_id`) REFERENCES `modeles` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `modeles_users`
--
ALTER TABLE `modeles_users`
  ADD CONSTRAINT `FK_1B0BDB5A708408C` FOREIGN KEY (`modeles_id`) REFERENCES `modeles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_1B0BDB5AA76ED395` FOREIGN KEY (`user_id`) REFERENCES `fos_user` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
