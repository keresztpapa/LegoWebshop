/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: piece
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `piece` (
  `id` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_hungarian_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: supply
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `supply` (
  `id` varchar(255) CHARACTER SET utf8 NOT NULL,
  `warehouse_id` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `piece_id` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `quantity` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `warehousetest` (`warehouse_id`),
  KEY `piecetest` (`piece_id`),
  CONSTRAINT `piecetest` FOREIGN KEY (`piece_id`) REFERENCES `piece` (`id`),
  CONSTRAINT `test` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouse` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_hungarian_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: user
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `user` (
  `name` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `birth` date DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_hungarian_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: warehouse
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `warehouse` (
  `id` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `size` int(16) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_hungarian_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: piece
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: supply
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: user
# ------------------------------------------------------------

INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Alex Greer',
    'Think.',
    'Alex_Greer@freemal.hu',
    '2005-03-15'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Andrew Williams',
    'Everybody.',
    'Andrew_Williams@gamil.com',
    '2013-10-07'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Angela Braun',
    'Have.',
    'Angela_Braun@gamil.com',
    '1973-11-26'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Angela Bryant',
    'Occur.',
    'Angela_Bryant@freemal.hu',
    '1996-04-18'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Calvin Perry',
    'Gas girl.',
    'Calvin_Perry@freemal.hu',
    '1994-06-18'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Carolyn Thomas',
    'Meet a.',
    'Carolyn_Thomas@freemal.hu',
    '1992-10-08'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Christian Sanders',
    'Allow.',
    'Christian_Sanders@gamil.com',
    '1993-08-04'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Christine Bell',
    'Easy stop.',
    'Christine_Bell@freemal.hu',
    '1972-03-10'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Christopher Anderson',
    'Ready.',
    'Christopher_Anderson@gamil.com',
    '2007-09-05'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Christopher Kim',
    'Floor.',
    'Christopher_Kim@hotmail.com',
    '1976-04-29'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Claudia Bryant',
    'It.',
    'Claudia_Bryant@gamil.com',
    '1979-10-13'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Diana Sloan',
    'Simply.',
    'Diana_Sloan@gamil.com',
    '2018-02-13'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Elizabeth Blevins',
    'Recently.',
    'Elizabeth_Blevins@hotmail.com',
    '1993-06-15'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Elizabeth Tucker',
    'Role.',
    'Elizabeth_Tucker@freemal.hu',
    '2022-08-29'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'George Hill',
    'Authority.',
    'George_Hill@citromail.hu',
    '1981-07-01'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Gregory Mclaughlin',
    'Risk.',
    'Gregory_Mclaughlin@freemal.hu',
    '2006-02-27'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Helen Norman',
    'Race.',
    'Helen_Norman@citromail.hu',
    '2010-11-29'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Holly Zimmerman',
    'During.',
    'Holly_Zimmerman@hotmail.com',
    '1988-10-20'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Jacqueline Simpson',
    'Catch.',
    'Jacqueline_Simpson@citromail.hu',
    '1971-12-31'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Jason Johnson',
    'Computer.',
    'Jason_Johnson@freemal.hu',
    '2010-12-07'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Jennifer Harvey',
    'Seat.',
    'Jennifer_Harvey@hotmail.com',
    '1983-09-11'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Jonathan Sullivan',
    'Often.',
    'Jonathan_Sullivan@gamil.com',
    '1996-04-24'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Joshua James',
    'Garden.',
    'Joshua_James@gamil.com',
    '2005-11-18'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Juan Davis',
    'Clear.',
    'Juan_Davis@citromail.hu',
    '1989-09-22'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Kaitlyn Lambert',
    'Partner.',
    'Kaitlyn_Lambert@citromail.hu',
    '2021-05-31'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Katie Lee',
    'One hold.',
    'Katie_Lee@gamil.com',
    '1970-10-01'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Kelly Chen',
    'Among.',
    'Kelly_Chen@citromail.hu',
    '1979-06-14'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Kenneth Holland',
    'Skill.',
    'Kenneth_Holland@gamil.com',
    '1994-09-21'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Laura Davis',
    'National.',
    'Laura_Davis@hotmail.com',
    '1989-01-27'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Lawrence Walker',
    'Edge.',
    'Lawrence_Walker@gamil.com',
    '1982-08-13'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Lisa Hughes',
    'While.',
    'Lisa_Hughes@hotmail.com',
    '1978-09-16'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Mary Wilkinson',
    'Risk.',
    'Mary_Wilkinson@gamil.com',
    '1970-03-22'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Solyom Ferencasd',
    'asd',
    'nerding1008@gmail.com',
    '2022-11-02'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Patricia Bowman',
    'Notice.',
    'Patricia_Bowman@freemal.hu',
    '2016-11-02'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Ryan Smith',
    'Activity.',
    'Ryan_Smith@hotmail.com',
    '1973-06-23'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Samantha Esparza',
    'Contain.',
    'Samantha_Esparza@freemal.hu',
    '1995-12-16'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Sarah Dorsey',
    'Level.',
    'Sarah_Dorsey@freemal.hu',
    '1974-10-18'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Sarah Smith',
    'Large.',
    'Sarah_Smith@gamil.com',
    '1987-09-10'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Scott Allen',
    'Speech.',
    'Scott_Allen@freemal.hu',
    '1994-03-26'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Stacey Singleton',
    'Too night.',
    'Stacey_Singleton@gamil.com',
    '1988-09-09'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Stephanie Howard',
    'Quality.',
    'Stephanie_Howard@gamil.com',
    '1995-01-01'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Teresa Pollard',
    'Show hard.',
    'Teresa_Pollard@gamil.com',
    '2015-11-12'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Thomas Neal',
    'Economy.',
    'Thomas_Neal@freemal.hu',
    '1979-08-04'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Thomas Taylor',
    'Happen.',
    'Thomas_Taylor@hotmail.com',
    '1979-01-30'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Timothy Arnold',
    'Realize.',
    'Timothy_Arnold@hotmail.com',
    '2017-07-14'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'Veronica Randolph',
    'Fire a.',
    'Veronica_Randolph@hotmail.com',
    '1973-01-29'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'William Smith',
    'Camera.',
    'William_Smith@hotmail.com',
    '2016-05-05'
  );
INSERT INTO
  `user` (`name`, `password`, `email`, `birth`)
VALUES
  (
    'William Wolfe',
    'Computer.',
    'William_Wolfe@citromail.hu',
    '2015-08-28'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: warehouse
# ------------------------------------------------------------


/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
