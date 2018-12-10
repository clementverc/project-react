-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;


-- ************************************** `type_moteur`

CREATE TABLE `type_moteur`
(
 `id`      integer NOT NULL ,
 `libelle` tinytext NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `type_guidon`

CREATE TABLE `type_guidon`
(
 `id`      integer NOT NULL ,
 `libelle` tinytext NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `type_distribution`

CREATE TABLE `type_distribution`
(
 `id`      integer NOT NULL ,
 `libelle` tinytext NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `transmission_finale`

CREATE TABLE `transmission_finale`
(
 `id`      integer NOT NULL ,
 `libelle` tinytext NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `susp_avant`

CREATE TABLE `susp_avant`
(
 `id`      integer NOT NULL ,
 `libelle` tinytext NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `susp_arriere`

CREATE TABLE `susp_arriere`
(
 `id`      integer NOT NULL ,
 `libelle` tinytext NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `reservoir`

CREATE TABLE `reservoir`
(
 `id`      integer NOT NULL ,
 `libelle` tinyint NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `refroidissement`

CREATE TABLE `refroidissement`
(
 `id`      integer NOT NULL ,
 `libelle` tinytext NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `puissance`

CREATE TABLE `puissance`
(
 `id`      integer NOT NULL ,
 `libelle` float NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `position_moto`

CREATE TABLE `position_moto`
(
 `id`      integer NOT NULL ,
 `libelle` tinytext NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `poid`

CREATE TABLE `poid`
(
 `id`      integer NOT NULL ,
 `libelle` float NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `pneu_avant`

CREATE TABLE `pneu_avant`
(
 `id`      integer NOT NULL ,
 `libelle` tinytext NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `pneu_arriere`

CREATE TABLE `pneu_arriere`
(
 `id`      integer NOT NULL ,
 `libelle` tinytext NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `longueur`

CREATE TABLE `longueur`
(
 `id`      integer NOT NULL ,
 `libelle` float NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `license`

CREATE TABLE `license`
(
 `id`   integer NOT NULL ,
 `name` varchar(45) NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `largeur`

CREATE TABLE `largeur`
(
 `id`      integer NOT NULL ,
 `libelle` float NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `hauteur_selle`

CREATE TABLE `hauteur_selle`
(
 `id`      integer NOT NULL ,
 `libelle` float NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `hauteur`

CREATE TABLE `hauteur`
(
 `id`      integer NOT NULL ,
 `libelle` float NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `frein_avant`

CREATE TABLE `frein_avant`
(
 `id`      integer NOT NULL ,
 `libelle` tinytext NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `frein_arriere`

CREATE TABLE `frein_arriere`
(
 `id`      integer NOT NULL ,
 `libelle` tinytext NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `empattement`

CREATE TABLE `empattement`
(
 `id`      integer NOT NULL ,
 `libelle` float NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `embrayage`

CREATE TABLE `embrayage`
(
 `id`      integer NOT NULL ,
 `libelle` tinytext NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `cylindree`

CREATE TABLE `cylindree`
(
 `id`      integer NOT NULL ,
 `libelle` smallint NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `couple`

CREATE TABLE `couple`
(
 `id`      integer NOT NULL ,
 `libelle` float NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `Categories`

CREATE TABLE `Categories`
(
 `id`   integer NOT NULL ,
 `name` varchar(45) NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `Cadre`

CREATE TABLE `Cadre`
(
 `libelle` tinytext NOT NULL ,
 `id`      integer NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `Builder`

CREATE TABLE `Builder`
(
 `id`   integer NOT NULL ,
 `name` varchar(45) NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `boite_vitesse`

CREATE TABLE `boite_vitesse`
(
 `id`      integer NOT NULL ,
 `libelle` tinytext NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `annee`

CREATE TABLE `annee`
(
 `id`      integer NOT NULL ,
 `libelle` year NOT NULL ,
PRIMARY KEY (`id`)
);






-- ************************************** `User`

CREATE TABLE `User`
(
 `id`              integer NOT NULL ,
 `name`            varchar(45) NOT NULL ,
 `firstname`       varchar(45) NOT NULL ,
 `phone`           varchar(45) NOT NULL ,
 `mail`            varchar(255) NOT NULL ,
 `password`        varchar(255) NOT NULL ,
 `pseudo`          varchar(45) NOT NULL ,
 `user_licence_id` integer NOT NULL ,
PRIMARY KEY (`id`),
KEY `fkIdx_177` (`user_licence_id`),
CONSTRAINT `FK_177` FOREIGN KEY `fkIdx_177` (`user_licence_id`) REFERENCES `license` (`id`)
);






-- ************************************** `Modele`

CREATE TABLE `Modele`
(
 `id`                     integer NOT NULL ,
 `refroidissement_id`     integer NOT NULL ,
 `cylindree_id`           integer NOT NULL ,
 `type_distribution_id`   integer NOT NULL ,
 `puisssance_id`          integer NOT NULL ,
 `couple_id`              integer NOT NULL ,
 `embrayage_id`           integer NOT NULL ,
 `boite_vitesse_id`       integer NOT NULL ,
 `transmission_finale_id` integer NOT NULL ,
 `pneu_avant_id`          integer NOT NULL ,
 `pneu_arriere_id`        integer NOT NULL ,
 `frein_arriere_id`       integer NOT NULL ,
 `frein_avant_id`         integer NOT NULL ,
 `susp_arriere_id`        integer NOT NULL ,
 `susp_avant_id`          integer NOT NULL ,
 `cadre_id`               integer NOT NULL ,
 `reservoir_id`           integer NOT NULL ,
 `user_id`                integer NOT NULL ,
 `builder_id`             integer NOT NULL ,
 `categories_id`          integer NOT NULL ,
 `license_id`             integer NOT NULL ,
 `longueur_id`            integer NOT NULL ,
 `largeur_id`             integer NOT NULL ,
 `hauteur_id`             integer NOT NULL ,
 `empattement_id`         integer NOT NULL ,
 `hauteur_selle_id`       integer NOT NULL ,
 `poid_id`                integer NOT NULL ,
 `name`                   varchar(255) NOT NULL ,
 `abs`                    boolean NOT NULL ,
 `shifter`                boolean NOT NULL ,
 `carenage`               boolean NOT NULL ,
 `nbrs_modeles`           integer NOT NULL ,
 `annee_id`               integer NOT NULL ,
 `type_moteur_id`         integer NOT NULL ,
 `type_guidon_id`         integer NOT NULL ,
 `position_moto_id`       integer NOT NULL ,
PRIMARY KEY (`id`),
KEY `fkIdx_101` (`type_distribution_id`),
CONSTRAINT `FK_101` FOREIGN KEY `fkIdx_101` (`type_distribution_id`) REFERENCES `type_distribution` (`id`),
KEY `fkIdx_104` (`puisssance_id`),
CONSTRAINT `FK_104` FOREIGN KEY `fkIdx_104` (`puisssance_id`) REFERENCES `puissance` (`id`),
KEY `fkIdx_107` (`couple_id`),
CONSTRAINT `FK_107` FOREIGN KEY `fkIdx_107` (`couple_id`) REFERENCES `couple` (`id`),
KEY `fkIdx_110` (`embrayage_id`),
CONSTRAINT `FK_110` FOREIGN KEY `fkIdx_110` (`embrayage_id`) REFERENCES `embrayage` (`id`),
KEY `fkIdx_113` (`boite_vitesse_id`),
CONSTRAINT `FK_113` FOREIGN KEY `fkIdx_113` (`boite_vitesse_id`) REFERENCES `boite_vitesse` (`id`),
KEY `fkIdx_116` (`transmission_finale_id`),
CONSTRAINT `FK_116` FOREIGN KEY `fkIdx_116` (`transmission_finale_id`) REFERENCES `transmission_finale` (`id`),
KEY `fkIdx_119` (`pneu_avant_id`),
CONSTRAINT `FK_119` FOREIGN KEY `fkIdx_119` (`pneu_avant_id`) REFERENCES `pneu_avant` (`id`),
KEY `fkIdx_122` (`pneu_arriere_id`),
CONSTRAINT `FK_122` FOREIGN KEY `fkIdx_122` (`pneu_arriere_id`) REFERENCES `pneu_arriere` (`id`),
KEY `fkIdx_125` (`frein_arriere_id`),
CONSTRAINT `FK_125` FOREIGN KEY `fkIdx_125` (`frein_arriere_id`) REFERENCES `frein_arriere` (`id`),
KEY `fkIdx_128` (`frein_avant_id`),
CONSTRAINT `FK_128` FOREIGN KEY `fkIdx_128` (`frein_avant_id`) REFERENCES `frein_avant` (`id`),
KEY `fkIdx_131` (`susp_arriere_id`),
CONSTRAINT `FK_131` FOREIGN KEY `fkIdx_131` (`susp_arriere_id`) REFERENCES `susp_arriere` (`id`),
KEY `fkIdx_134` (`susp_avant_id`),
CONSTRAINT `FK_134` FOREIGN KEY `fkIdx_134` (`susp_avant_id`) REFERENCES `susp_avant` (`id`),
KEY `fkIdx_137` (`cadre_id`),
CONSTRAINT `FK_137` FOREIGN KEY `fkIdx_137` (`cadre_id`) REFERENCES `Cadre` (`id`),
KEY `fkIdx_140` (`reservoir_id`),
CONSTRAINT `FK_140` FOREIGN KEY `fkIdx_140` (`reservoir_id`) REFERENCES `reservoir` (`id`),
KEY `fkIdx_143` (`poid_id`),
CONSTRAINT `FK_143` FOREIGN KEY `fkIdx_143` (`poid_id`) REFERENCES `User` (`id`),
KEY `fkIdx_146` (`user_id`),
CONSTRAINT `FK_146` FOREIGN KEY `fkIdx_146` (`user_id`) REFERENCES `Builder` (`id`),
KEY `fkIdx_149` (`builder_id`),
CONSTRAINT `FK_149` FOREIGN KEY `fkIdx_149` (`builder_id`) REFERENCES `Categories` (`id`),
KEY `fkIdx_152` (`categories_id`),
CONSTRAINT `FK_152` FOREIGN KEY `fkIdx_152` (`categories_id`) REFERENCES `license` (`id`),
KEY `fkIdx_155` (`license_id`),
CONSTRAINT `FK_155` FOREIGN KEY `fkIdx_155` (`license_id`) REFERENCES `longueur` (`id`),
KEY `fkIdx_158` (`longueur_id`),
CONSTRAINT `FK_158` FOREIGN KEY `fkIdx_158` (`longueur_id`) REFERENCES `largeur` (`id`),
KEY `fkIdx_161` (`largeur_id`),
CONSTRAINT `FK_161` FOREIGN KEY `fkIdx_161` (`largeur_id`) REFERENCES `hauteur` (`id`),
KEY `fkIdx_164` (`hauteur_id`),
CONSTRAINT `FK_164` FOREIGN KEY `fkIdx_164` (`hauteur_id`) REFERENCES `empattement` (`id`),
KEY `fkIdx_167` (`empattement_id`),
CONSTRAINT `FK_167` FOREIGN KEY `fkIdx_167` (`empattement_id`) REFERENCES `hauteur_selle` (`id`),
KEY `fkIdx_170` (`hauteur_selle_id`),
CONSTRAINT `FK_170` FOREIGN KEY `fkIdx_170` (`hauteur_selle_id`) REFERENCES `poid` (`id`),
KEY `fkIdx_223` (`annee_id`),
CONSTRAINT `FK_223` FOREIGN KEY `fkIdx_223` (`annee_id`) REFERENCES `annee` (`id`),
KEY `fkIdx_226` (`type_moteur_id`),
CONSTRAINT `FK_226` FOREIGN KEY `fkIdx_226` (`type_moteur_id`) REFERENCES `type_moteur` (`id`),
KEY `fkIdx_229` (`type_guidon_id`),
CONSTRAINT `FK_229` FOREIGN KEY `fkIdx_229` (`type_guidon_id`) REFERENCES `type_guidon` (`id`),
KEY `fkIdx_232` (`position_moto_id`),
CONSTRAINT `FK_232` FOREIGN KEY `fkIdx_232` (`position_moto_id`) REFERENCES `position_moto` (`id`),
KEY `fkIdx_95` (`refroidissement_id`),
CONSTRAINT `FK_95` FOREIGN KEY `fkIdx_95` (`refroidissement_id`) REFERENCES `refroidissement` (`id`),
KEY `fkIdx_98` (`cylindree_id`),
CONSTRAINT `FK_98` FOREIGN KEY `fkIdx_98` (`cylindree_id`) REFERENCES `cylindree` (`id`)
);





