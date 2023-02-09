CREATE DATABASE  IF NOT EXISTS `edziennik` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `edziennik`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: edziennik
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aktualnosci`
--

DROP TABLE IF EXISTS `aktualnosci`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aktualnosci` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tytul` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `opis` varchar(1000) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `data` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aktualnosci`
--

LOCK TABLES `aktualnosci` WRITE;
/*!40000 ALTER TABLE `aktualnosci` DISABLE KEYS */;
INSERT INTO `aktualnosci` VALUES (1,'Dzień wolny od zajęć','Dzień 20.04.2023 jest dniem wolnym od zajęć.','2023-01-20'),(2,'Wywiadówka','Dnia 25.03.2023 organizowana jest wywiadówka dla rodziców klas 1-3','2023-01-25'),(3,'Wycieczka do Warszawy','Dnia 01.06 organizowana jest wycieczka do Warszawy chętych proszę  o zgłoszenie do swojego wychowcy.','2023-02-15');
/*!40000 ALTER TABLE `aktualnosci` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nauczyciele`
--

DROP TABLE IF EXISTS `nauczyciele`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nauczyciele` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `imie` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `nazwisko` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `kod` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nauczyciele`
--

LOCK TABLES `nauczyciele` WRITE;
/*!40000 ALTER TABLE `nauczyciele` DISABLE KEYS */;
INSERT INTO `nauczyciele` VALUES (1,'Alan','Sadowski','alasad00'),(2,'Konrad','Walczak','konwal00'),(3,'Radosław','Andrzejewski','radand00'),(4,'Przemysław','Górski','przgor00'),(5,'Fryderyk','Sobczak','frysob00'),(6,'Iga','Wróblewska','igawro00'),(7,'Helena','Wasilewska','helwas00'),(8,'Jowita','Błaszczyk','jowbla00'),(9,'Ilona','Kaźmierczak','ilokaz00'),(10,'Lucyna','Sobczak','lucsob00');
/*!40000 ALTER TABLE `nauczyciele` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oceny`
--

DROP TABLE IF EXISTS `oceny`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oceny` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ocena` varchar(2) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `uczen_id` int NOT NULL,
  `nauczyciel_id` int NOT NULL,
  `opis` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci DEFAULT NULL,
  `data` date NOT NULL,
  `przedmiot_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oceny`
--

LOCK TABLES `oceny` WRITE;
/*!40000 ALTER TABLE `oceny` DISABLE KEYS */;
INSERT INTO `oceny` VALUES (1,'5',1,3,'Sprawdzian','2023-01-03',1),(2,'3',1,5,'Kartkówka','2023-01-13',2),(3,'2',1,1,'Kartkówka','2023-01-04',4),(4,'4',1,4,'Kartkówka','2023-01-14',3),(5,'5',1,3,'Aktywność','2023-01-05',1),(6,'6',1,5,'Sprawdzian','2023-01-15',2),(7,'1',1,1,'Aktywność','2023-01-06',4),(8,'1',1,4,'Sprawdzian','2023-01-16',3),(9,'2',1,3,'Kartkówka','2023-01-07',1),(10,'3',1,5,'Aktywność','2023-01-17',2),(11,'3',1,1,'Sprawdzian','2023-01-08',4),(12,'4',1,4,'Aktywność','2023-01-18',3),(13,'4',1,3,'Kartkówka','2023-01-09',1),(14,'5',1,5,'Sprawdzian','2023-01-19',2),(15,'4',1,1,'Kartkówka','2023-01-20',4);
/*!40000 ALTER TABLE `oceny` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan_lekcji`
--

DROP TABLE IF EXISTS `plan_lekcji`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan_lekcji` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `przedmiot_id` int NOT NULL,
  `dzien` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `godzina` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `klasa` varchar(5) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan_lekcji`
--

LOCK TABLES `plan_lekcji` WRITE;
/*!40000 ALTER TABLE `plan_lekcji` DISABLE KEYS */;
INSERT INTO `plan_lekcji` VALUES (1,5,'1','1','4ig'),(2,6,'1','2','4ig'),(3,1,'1','3','4ig'),(4,1,'1','4','4ig'),(5,2,'1','5','4ig'),(6,2,'1','6','4ig'),(7,7,'1','7','4ig'),(8,8,'1','8','4ig'),(9,1,'2','1','4ig'),(10,1,'2','2','4ig'),(11,2,'2','3','4ig'),(12,4,'2','4','4ig'),(13,4,'2','5','4ig'),(14,3,'3','9','4ig'),(15,3,'3','2','4ig'),(16,5,'3','3','4ig'),(17,5,'3','4','4ig'),(18,4,'3','5','4ig'),(19,4,'3','6','4ig'),(20,8,'3','7','4ig'),(21,1,'3','8','4ig'),(22,9,'4','1','4ig'),(23,1,'4','2','4ig'),(24,1,'4','3','4ig'),(25,7,'4','4','4ig'),(26,3,'4','5','4ig'),(27,8,'4','6','4ig'),(28,4,'5','1','4ig'),(29,9,'5','2','4ig'),(30,2,'5','3','4ig'),(31,7,'5','4','4ig'),(32,1,'5','5','4ig'),(33,3,'5','6','4ig');
/*!40000 ALTER TABLE `plan_lekcji` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `przedmioty`
--

DROP TABLE IF EXISTS `przedmioty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `przedmioty` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nazwa` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `przedmioty`
--

LOCK TABLES `przedmioty` WRITE;
/*!40000 ALTER TABLE `przedmioty` DISABLE KEYS */;
INSERT INTO `przedmioty` VALUES (1,'Matematyka'),(2,'J. Polski'),(3,'J. Angielski'),(4,'Informatyka'),(5,'HIS'),(6,'ZW'),(7,'J. Niemiecki'),(8,'WF'),(9,'Religia');
/*!40000 ALTER TABLE `przedmioty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `uczniowie`
--

DROP TABLE IF EXISTS `uczniowie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `uczniowie` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `imie` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `nazwisko` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `adres` varchar(90) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `numer_telefonu` char(9) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `kod` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `haslo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `klasa` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `uczniowie`
--

LOCK TABLES `uczniowie` WRITE;
/*!40000 ALTER TABLE `uczniowie` DISABLE KEYS */;
INSERT INTO `uczniowie` VALUES (1,'Mikołaj','Florczak','Adres 123','email@example.com','000000000','mikflo00','123','4ig');
/*!40000 ALTER TABLE `uczniowie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `uwagi`
--

DROP TABLE IF EXISTS `uwagi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `uwagi` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `tytul` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Tytuł',
  `opis` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `nauczyciel_id` int unsigned NOT NULL,
  `uczen_id` int unsigned NOT NULL,
  `pozytywna` tinyint(1) NOT NULL,
  `data` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_uwagi_uczniowie` (`uczen_id`),
  KEY `fk_uwagi_nauczyciele` (`nauczyciel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `uwagi`
--

LOCK TABLES `uwagi` WRITE;
/*!40000 ALTER TABLE `uwagi` DISABLE KEYS */;
INSERT INTO `uwagi` VALUES (1,'Pomoc w bibliotece','Pomoc w przeniesieniu książek do biblioteki',2,1,1,'2023-01-20'),(2,'Przeszkadzanie na lekcji','Uczeń przeszkadzał na lekcji.',7,1,0,'2023-01-12');
/*!40000 ALTER TABLE `uwagi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wiadomosci`
--

DROP TABLE IF EXISTS `wiadomosci`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wiadomosci` (
  `id` int unsigned NOT NULL,
  `tytul` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `tresc` varchar(1000) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `kod_autora` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `kod_adresata` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `odczytana` tinyint(1) NOT NULL,
  `data` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wiadomosci`
--

LOCK TABLES `wiadomosci` WRITE;
/*!40000 ALTER TABLE `wiadomosci` DISABLE KEYS */;
INSERT INTO `wiadomosci` VALUES (1,'Wycieczka do Warszawy','Organizowana jest wycieczka do warszawy dnia 01.06.2023 . Proszę o zgłoszenie się do mnie osób chętnych.','radand00','mikflo00',1,'2023-02-15'),(2,'Ankieta','Proszę o wypełnienie ankiety. Pomoże ona w pracy magisterskiej jednego z studentów Politechniki Rzeszowskiej. http:/www.example.com/','helwas00','mikflo00',1,'2023-01-28'),(3,'Wywiadówka','Dnia 25.03.2023 jest organizowana wywiadówka. Proszę o przekazanie informacji rodzicom.','radand00','mikflo00',1,'2023-02-20');
/*!40000 ALTER TABLE `wiadomosci` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'edziennik'
--

--
-- Dumping routines for database 'edziennik'
--
/*!50003 DROP PROCEDURE IF EXISTS `changeMessageStatus` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `changeMessageStatus`(mid int)
BEGIN
	UPDATE wiadomosci SET odczytana = true WHERE id = mid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getListOfTeachers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getListOfTeachers`()
BEGIN
	SELECT concat(imie, " ", nazwisko) as "name", kod FROM nauczyciele;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSchoolNews` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getSchoolNews`()
BEGIN
	SELECT  tytul, opis, data FROM edziennik.aktualnosci;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getStudentComments` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getStudentComments`(sid varchar(10))
BEGIN
	SELECT tytul, opis, data, pozytywna FROM edziennik.uwagi WHERE uczen_id = sid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getStudentGrades` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getStudentGrades`(sid varchar(10))
BEGIN
	SELECT o.ocena, o.data, p.nazwa 
    FROM oceny as o
    INNER JOIN przedmioty as p ON p.id = o.przedmiot_id
    WHERE uczen_id = sid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getStudentInfo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getStudentInfo`(sid varchar(10))
BEGIN
	SELECT * FROM edziennik.uczniowie where id = sid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getStudentMessages` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getStudentMessages`(sCode varchar(8))
BEGIN
	SELECT * FROM wiadomosci WHERE kod_adresata = sCode;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getTimetable` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getTimetable`(classCode varchar(5))
BEGIN
	SELECT pl.id, p.nazwa, dzien, godzina, klasa 
    FROM plan_lekcji as pl 
    inner join przedmioty as p 
    ON p.id = przedmiot_id 
    WHERE klasa = classCode
    ORDER BY dzien,godzina;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-09 20:07:34
