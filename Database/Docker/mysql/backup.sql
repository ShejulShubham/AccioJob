-- MySQL dump 10.13  Distrib 8.0.44, for Linux (x86_64)
--
-- Host: localhost    Database: testdb
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(120) NOT NULL,
  `department` varchar(50) DEFAULT NULL,
  `salary` decimal(10,2) DEFAULT NULL,
  `joining_date` date DEFAULT NULL,
  `is_permanent` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'Rahul Mehta','Engineering',55000.00,'2021-03-15',1),(2,'Anjali Sharma','HR',42000.00,'2022-01-10',1),(3,'Amit Patel','Engineering',60000.00,'2020-07-05',1),(4,'Neha Verma','Marketing',38000.00,'2023-06-20',0),(5,'Suresh Kumar','Finance',52000.00,'2019-11-12',1),(6,'Pooja Nair','HR',40000.00,'2022-09-01',0),(7,'Rohan Singh','Sales',45000.00,'2023-02-18',0),(8,'Kunal Shah','Engineering',75000.00,'2018-04-25',1),(9,'Ishita Gupta','Marketing',47000.00,'2021-08-30',1),(10,'Manoj Yadav','Operations',50000.00,'2020-12-05',1),(11,'Sneha Kulkarni','Finance',48000.00,'2022-05-14',0),(12,'Vikas Malhotra','Sales',53000.00,'2021-10-22',1),(13,'Arjun Rao','Engineering',68000.00,'2017-06-11',1),(14,'Nikita Joshi','HR',39000.00,'2023-04-03',0),(15,'Deepak Chauhan','Operations',46000.00,'2022-01-19',1),(16,'Priya Bansal','Marketing',44000.00,'2021-03-08',1),(17,'Harsh Vardhan','Engineering',72000.00,'2019-09-17',1),(18,'Kavita Mishra','Finance',51000.00,'2020-02-27',1),(19,'Mohit Agarwal','Sales',48000.00,'2022-07-09',0),(20,'Ritu Saxena','Operations',47000.00,'2023-08-01',0),(21,'Nilesh Desai','Engineering',66000.00,'2020-01-15',1),(22,'Ayesha Khan','HR',41000.00,'2021-06-12',1),(23,'Tarun Bhatia','Sales',52000.00,'2019-10-10',1),(24,'Simran Kaur','Marketing',46000.00,'2022-11-05',0),(25,'Rakesh Tiwari','Finance',58000.00,'2018-08-19',1),(26,'Shubham Jain','Engineering',70000.00,'2020-05-23',1),(27,'Pallavi Joshi','HR',39500.00,'2023-02-01',0),(28,'Yogesh Solanki','Operations',48000.00,'2021-07-14',1),(29,'Abhishek Soni','Sales',51000.00,'2022-03-30',0),(30,'Meena Iyer','Finance',54000.00,'2019-12-11',1),(31,'Rohit Choudhary','Engineering',69000.00,'2018-09-09',1),(32,'Snehal Patil','Marketing',43000.00,'2021-04-26',1),(33,'Karan Malhotra','Sales',56000.00,'2020-06-18',1),(34,'Divya Shah','HR',40500.00,'2022-10-08',0),(35,'Sunil Pawar','Operations',49000.00,'2019-01-21',1),(36,'Alok Tripathi','Engineering',74000.00,'2017-11-30',1),(37,'Rina Dutta','Finance',52500.00,'2020-08-03',1),(38,'Naveen Khatri','Sales',54500.00,'2021-09-16',1),(39,'Preeti Arora','Marketing',45500.00,'2022-02-12',0),(40,'Gaurav Bhatt','Engineering',71000.00,'2018-03-27',1),(41,'Sonal Mehta','HR',42000.00,'2021-12-01',1),(42,'Manish Pandey','Operations',50500.00,'2020-10-20',1),(43,'Kriti Saxena','Marketing',46500.00,'2023-01-11',0),(44,'Vivek Mishra','Finance',59000.00,'2019-05-06',1),(45,'Aditya Kulkarni','Engineering',68000.00,'2022-06-28',1);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `stock_quantity` int DEFAULT NULL,
  `is_available` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Wireless Mouse',799,120,1,'2024-01-01 10:00:00'),(2,'Mechanical Keyboard',3499,45,1,'2024-01-02 11:00:00'),(3,'USB-C Charger 65W',1899,60,1,'2024-01-03 12:00:00'),(4,'Laptop Stand',1299,80,1,'2024-01-04 13:00:00'),(5,'Bluetooth Headphones',2599,35,1,'2024-01-05 14:00:00'),(6,'Webcam Full HD',2199,25,1,'2024-01-06 10:30:00'),(7,'External HDD 1TB',4999,15,1,'2024-01-07 11:30:00'),(8,'Gaming Mouse Pad',499,150,1,'2024-01-08 12:30:00'),(9,'Noise Cancelling Earbuds',3999,0,0,'2024-01-09 13:30:00'),(10,'Desk Lamp LED',1799,40,1,'2024-01-10 14:30:00'),(11,'Portable SSD 512GB',6899,10,1,'2024-01-11 10:15:00'),(12,'USB Hub 7-in-1',1599,55,1,'2024-01-12 11:15:00'),(13,'Wireless Presenter',1199,20,1,'2024-01-13 12:15:00'),(14,'Laptop Backpack',2499,65,1,'2024-01-14 13:15:00'),(15,'Monitor 24 Inch',12499,8,1,'2024-01-15 14:15:00'),(16,'Desk Organizer',699,95,1,'2024-01-16 10:45:00'),(17,'Office Chair',15999,5,1,'2024-01-17 11:45:00'),(18,'WiFi Router',3299,30,1,'2024-01-18 12:45:00'),(19,'Extension Board',999,110,1,'2024-01-19 13:45:00'),(20,'Mobile Tripod',899,0,0,'2024-01-20 14:45:00'),(21,'Smart Watch',5499,22,1,'2024-01-21 10:00:00'),(22,'Fitness Band',2999,40,1,'2024-01-22 11:00:00'),(23,'Power Bank 20000mAh',2299,35,1,'2024-01-23 12:00:00'),(24,'HDMI Cable',599,90,1,'2024-01-24 13:00:00'),(25,'Wireless Earphones',1999,50,1,'2024-01-25 14:00:00'),(26,'Keyboard Cover',399,120,1,'2024-01-26 10:30:00'),(27,'Laptop Cooling Pad',1499,28,1,'2024-01-27 11:30:00'),(28,'Smart Plug',1299,32,1,'2024-01-28 12:30:00'),(29,'Tablet Stand',999,70,1,'2024-01-29 13:30:00'),(30,'Desk Clock Digital',1199,25,1,'2024-01-30 14:30:00'),(31,'VR Headset',18999,3,1,'2024-02-01 10:00:00'),(32,'Gaming Controller',3499,18,1,'2024-02-02 11:00:00'),(33,'Graphics Tablet',6499,12,1,'2024-02-03 12:00:00'),(34,'Smart Speaker',4599,20,1,'2024-02-04 13:00:00'),(35,'Portable Projector',22999,2,1,'2024-02-05 14:00:00'),(36,'Microphone USB',2999,14,1,'2024-02-06 10:30:00'),(37,'Webcam Cover',299,200,1,'2024-02-07 11:30:00'),(38,'Ethernet Cable',499,100,1,'2024-02-08 12:30:00'),(39,'Smart Light Bulb',1599,45,1,'2024-02-09 13:30:00'),(40,'Laptop Sleeve',1299,60,1,'2024-02-10 14:30:00');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `course` varchar(100) NOT NULL,
  `admission_date` date NOT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'Aarav Sharma','aarav.sharma@student.com','Web Development','2023-01-10',1),(2,'Vivaan Patel','vivaan.patel@student.com','Data Science','2023-01-15',1),(3,'Aditya Verma','aditya.verma@student.com','Web Development','2023-01-20',0),(4,'Vihaan Mehta','vihaan.mehta@student.com','Python Programming','2023-02-01',1),(5,'Arjun Singh','arjun.singh@student.com','Data Analytics','2023-02-05',1),(6,'Sai Reddy','sai.reddy@student.com','Web Development','2023-02-10',1),(7,'Krishna Iyer','krishna.iyer@student.com','Machine Learning','2023-02-15',0),(8,'Rohan Das','rohan.das@student.com','Python Programming','2023-02-20',1),(9,'Ananya Gupta','ananya.gupta@student.com','Web Development','2023-03-01',1),(10,'Ishita Jain','ishita.jain@student.com','Data Science','2023-03-05',1),(11,'Neha Kapoor','neha.kapoor@student.com','Digital Marketing','2023-03-10',0),(12,'Pooja Malhotra','pooja.malhotra@student.com','Web Development','2023-03-15',1),(13,'Rahul Khanna','rahul.khanna@student.com','Data Analytics','2023-03-20',1),(14,'Kunal Bansal','kunal.bansal@student.com','Python Programming','2023-04-01',1),(15,'Amit Mishra','amit.mishra@student.com','Machine Learning','2023-04-05',0),(16,'Suresh Yadav','suresh.yadav@student.com','Web Development','2023-04-10',1),(17,'Nikhil Arora','nikhil.arora@student.com','Data Science','2023-04-15',1),(18,'Deepak Chauhan','deepak.chauhan@student.com','Python Programming','2023-04-20',1),(19,'Manish Pandey','manish.pandey@student.com','Digital Marketing','2023-05-01',0),(20,'Sanjay Roy','sanjay.roy@student.com','Web Development','2023-05-05',1),(21,'Ritika Sen','ritika.sen@student.com','Data Analytics','2023-05-10',1),(22,'Sneha Kulkarni','sneha.kulkarni@student.com','Python Programming','2023-05-15',1),(23,'Pankaj Tiwari','pankaj.tiwari@student.com','Web Development','2023-05-20',0),(24,'Ashish Goyal','ashish.goyal@student.com','Machine Learning','2023-06-01',1),(25,'Vikas Saxena','vikas.saxena@student.com','Data Science','2023-06-05',1),(26,'Mehul Shah','mehul.shah@student.com','Web Development','2023-06-10',1),(27,'Hardik Joshi','hardik.joshi@student.com','Digital Marketing','2023-06-15',0),(28,'Pranav Kulkarni','pranav.kulkarni@student.com','Python Programming','2023-06-20',1),(29,'Alok Tripathi','alok.tripathi@student.com','Data Analytics','2023-07-01',1),(30,'Shubham Agarwal','shubham.agarwal@student.com','Web Development','2023-07-05',1),(31,'Ravi Prakash','ravi.prakash@student.com','Machine Learning','2023-07-10',0),(32,'Karthik Nair','karthik.nair@student.com','Data Science','2023-07-15',1),(33,'Siddharth Rao','siddharth.rao@student.com','Web Development','2023-07-20',1),(34,'Varun Mallick','varun.mallick@student.com','Python Programming','2023-08-01',1),(35,'Abhishek Soni','abhishek.soni@student.com','Digital Marketing','2023-08-05',0),(36,'Mohit Chawla','mohit.chawla@student.com','Web Development','2023-08-10',1),(37,'Tarun Bhatia','tarun.bhatia@student.com','Data Analytics','2023-08-15',1),(38,'Naveen Khatri','naveen.khatri@student.com','Python Programming','2023-08-20',1),(39,'Harsh Vardhan','harsh.vardhan@student.com','Machine Learning','2023-09-01',0),(40,'Yogesh Solanki','yogesh.solanki@student.com','Web Development','2023-09-05',1),(41,'Aakash Tomar','aakash.tomar@student.com','Data Science','2023-09-10',1),(42,'Rohit Choudhary','rohit.choudhary@student.com','Web Development','2023-09-15',1),(43,'Gaurav Bhatt','gaurav.bhatt@student.com','Digital Marketing','2023-09-20',0),(44,'Sameer Sheikh','sameer.sheikh@student.com','Python Programming','2023-10-01',1),(45,'Imran Khan','imran.khan@student.com','Data Analytics','2023-10-05',1);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Aarav Sharma','aarav.sharma@example.com','$2y$hash001',1,'2024-01-01 10:15:00'),(2,'Vivaan Patel','vivaan.patel@example.com','$2y$hash002',1,'2024-01-02 11:20:00'),(3,'Aditya Verma','aditya.verma@example.com','$2y$hash003',0,'2024-01-03 09:45:00'),(4,'Vihaan Mehta','vihaan.mehta@example.com','$2y$hash004',1,'2024-01-04 14:10:00'),(5,'Arjun Singh','arjun.singh@example.com','$2y$hash005',1,'2024-01-05 16:30:00'),(6,'Sai Reddy','sai.reddy@example.com','$2y$hash006',1,'2024-01-06 08:40:00'),(7,'Krishna Iyer','krishna.iyer@example.com','$2y$hash007',0,'2024-01-07 12:00:00'),(8,'Rohan Das','rohan.das@example.com','$2y$hash008',1,'2024-01-08 13:15:00'),(9,'Ananya Gupta','ananya.gupta@example.com','$2y$hash009',1,'2024-01-09 17:50:00'),(10,'Ishita Jain','ishita.jain@example.com','$2y$hash010',1,'2024-01-10 09:25:00'),(11,'Neha Kapoor','neha.kapoor@example.com','$2y$hash011',0,'2024-01-11 11:35:00'),(12,'Pooja Malhotra','pooja.malhotra@example.com','$2y$hash012',1,'2024-01-12 15:45:00'),(13,'Rahul Khanna','rahul.khanna@example.com','$2y$hash013',1,'2024-01-13 18:10:00'),(14,'Kunal Bansal','kunal.bansal@example.com','$2y$hash014',1,'2024-01-14 10:00:00'),(15,'Amit Mishra','amit.mishra@example.com','$2y$hash015',0,'2024-01-15 12:20:00'),(16,'Suresh Yadav','suresh.yadav@example.com','$2y$hash016',1,'2024-01-16 14:40:00'),(17,'Nikhil Arora','nikhil.arora@example.com','$2y$hash017',1,'2024-01-17 16:55:00'),(18,'Deepak Chauhan','deepak.chauhan@example.com','$2y$hash018',1,'2024-01-18 09:30:00'),(19,'Manish Pandey','manish.pandey@example.com','$2y$hash019',0,'2024-01-19 11:10:00'),(20,'Sanjay Roy','sanjay.roy@example.com','$2y$hash020',1,'2024-01-20 13:45:00'),(21,'Ritika Sen','ritika.sen@example.com','$2y$hash021',1,'2024-01-21 15:30:00'),(22,'Sneha Kulkarni','sneha.kulkarni@example.com','$2y$hash022',1,'2024-01-22 17:20:00'),(23,'Pankaj Tiwari','pankaj.tiwari@example.com','$2y$hash023',0,'2024-01-23 09:50:00'),(24,'Ashish Goyal','ashish.goyal@example.com','$2y$hash024',1,'2024-01-24 11:40:00'),(25,'Vikas Saxena','vikas.saxena@example.com','$2y$hash025',1,'2024-01-25 14:15:00'),(26,'Mehul Shah','mehul.shah@example.com','$2y$hash026',1,'2024-01-26 16:05:00'),(27,'Hardik Joshi','hardik.joshi@example.com','$2y$hash027',0,'2024-01-27 18:00:00'),(28,'Pranav Kulkarni','pranav.kulkarni@example.com','$2y$hash028',1,'2024-01-28 10:10:00'),(29,'Alok Tripathi','alok.tripathi@example.com','$2y$hash029',1,'2024-01-29 12:35:00'),(30,'Shubham Agarwal','shubham.agarwal@example.com','$2y$hash030',1,'2024-01-30 14:55:00'),(31,'Ravi Prakash','ravi.prakash@example.com','$2y$hash031',0,'2024-01-31 16:40:00'),(32,'Karthik Nair','karthik.nair@example.com','$2y$hash032',1,'2024-02-01 09:15:00'),(33,'Siddharth Rao','siddharth.rao@example.com','$2y$hash033',1,'2024-02-02 11:25:00'),(34,'Varun Mallick','varun.mallick@example.com','$2y$hash034',1,'2024-02-03 13:35:00'),(35,'Abhishek Soni','abhishek.soni@example.com','$2y$hash035',0,'2024-02-04 15:45:00'),(36,'Mohit Chawla','mohit.chawla@example.com','$2y$hash036',1,'2024-02-05 17:30:00'),(37,'Tarun Bhatia','tarun.bhatia@example.com','$2y$hash037',1,'2024-02-06 10:05:00'),(38,'Naveen Khatri','naveen.khatri@example.com','$2y$hash038',1,'2024-02-07 12:15:00'),(39,'Harsh Vardhan','harsh.vardhan@example.com','$2y$hash039',0,'2024-02-08 14:25:00'),(40,'Yogesh Solanki','yogesh.solanki@example.com','$2y$hash040',1,'2024-02-09 16:35:00'),(41,'Aakash Tomar','aakash.tomar@example.com','$2y$hash041',1,'2024-02-10 18:00:00'),(42,'Rohit Choudhary','rohit.choudhary@example.com','$2y$hash042',1,'2024-02-11 09:45:00'),(43,'Gaurav Bhatt','gaurav.bhatt@example.com','$2y$hash043',0,'2024-02-12 11:55:00'),(44,'Sameer Sheikh','sameer.sheikh@example.com','$2y$hash044',1,'2024-02-13 14:10:00'),(45,'Imran Khan','imran.khan@example.com','$2y$hash045',1,'2024-02-14 16:20:00'),(46,'Zaid Ansari','zaid.ansari@example.com','$2y$hash046',1,'2024-02-15 18:30:00'),(47,'Faizan Ali','faizan.ali@example.com','$2y$hash047',0,'2024-02-16 10:40:00'),(48,'Rehan Siddiqui','rehan.siddiqui@example.com','$2y$hash048',1,'2024-02-17 12:50:00'),(49,'Ayaan Khan','ayaan.khan@example.com','$2y$hash049',1,'2024-02-18 15:00:00'),(50,'Salman Farooq','salman.farooq@example.com','$2y$hash050',1,'2024-02-19 17:10:00'),(51,'shubham shejul','shejul@gmail.com','12345',1,'2026-01-06 05:57:07'),(52,'neha sharma','sharma@gmail.com','123',1,'2026-01-06 05:57:08');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-01-08  4:41:32
