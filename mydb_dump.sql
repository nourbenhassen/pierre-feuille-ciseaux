-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `playerName` varchar(20) NOT NULL,
  `score` tinyint(4) DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'Bastien',5,'2016-04-10 23:50:40'),(2,'Nour',4,'2016-04-10 23:50:40'),(3,'Alejandro',1,'2016-04-10 23:50:40'),(4,'Yu',1,'2010-04-10 23:50:40'),(5,'Nicolas',5,'2016-04-10 23:50:40'),(6,'Jean-Marie',4,'2016-04-10 23:50:40'),(7,'John',1,'2016-04-10 23:50:40'),(8,'Bob',1,'2017-04-10 23:50:40'),(9,'Sylvie',5,'2016-04-10 23:50:40'),(10,'Marie-Antoinette',4,'2016-04-10 23:50:40'),(11,'Tarzan',1,'2019-04-10 22:50:40'),(12,'Batman',1,'2016-04-10 23:50:40'),(13,'CeJeuEstTropCool',5,'2016-04-10 23:50:40'),(14,'Moi',4,'2016-04-10 23:50:40'),(15,'StarWars',1,'2016-04-10 23:50:40'),(16,'Jean-Yves',1,'2016-04-10 23:50:40'),(17,'Donald Trump',5,'2016-04-10 23:50:40'),(18,'Malcolm',4,'2016-04-10 23:50:40'),(19,'Sarah',1,'2016-04-10 23:50:40'),(20,'Jean-Luc',1,'2016-04-10 23:50:40'),(21,'Adrien',5,'2016-04-10 23:50:40'),(22,'Noura',4,'2019-04-10 23:50:40'),(23,'Alejandro',1,'2016-04-10 23:50:40'),(24,'Yvonne',1,'2016-04-10 23:50:40'),(25,'Matt',2,'2016-04-10 23:50:50'),(26,'ZALANDO',5,'2019-10-24 19:48:49'),(27,'ZALANDO',3,'2019-10-24 19:49:36'),(28,'ZALANDO',3,'2019-10-24 19:49:52'),(29,'ZALANDO',3,'2019-10-24 19:51:22'),(30,'ZALANDO',1,'2019-10-24 19:51:59'),(31,'CHANGE',1,'2019-10-24 20:30:00'),(32,'CHANGE',2,'2019-10-24 20:31:26'),(33,'CHANGE',1,'2019-10-24 20:32:16'),(34,'CHANGE',4,'2019-10-24 20:33:26'),(35,'Nour',1,'2019-10-26 14:38:03'),(36,'Nour',1,'2019-10-26 14:41:24'),(37,'Nour',1,'2019-10-26 14:55:32'),(38,'Nour',1,'2019-10-26 14:55:56'),(39,'Nour',3,'2019-10-26 14:57:05');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-26 15:03:21
