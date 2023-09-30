CREATE DATABASE  IF NOT EXISTS `kulinerfest` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `kulinerfest`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: kulinerfest
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `connection` text COLLATE utf8_unicode_ci NOT NULL,
  `queue` text COLLATE utf8_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `komentars`
--

DROP TABLE IF EXISTS `komentars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `komentars` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `resep_id` bigint unsigned NOT NULL,
  `commenterId` bigint unsigned NOT NULL,
  `komentar` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `komentars`
--

LOCK TABLES `komentars` WRITE;
/*!40000 ALTER TABLE `komentars` DISABLE KEYS */;
/*!40000 ALTER TABLE `komentars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_reset_tokens_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2023_08_06_020826_create_reseps_table',1),(6,'2023_08_06_021653_create_komentars_table',1),(7,'2023_08_06_023435_create_replies_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `replies`
--

DROP TABLE IF EXISTS `replies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `replies` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `komentar_id` bigint unsigned NOT NULL,
  `replierId` bigint unsigned NOT NULL,
  `reply` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `replies`
--

LOCK TABLES `replies` WRITE;
/*!40000 ALTER TABLE `replies` DISABLE KEYS */;
/*!40000 ALTER TABLE `replies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reseps`
--

DROP TABLE IF EXISTS `reseps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `reseps` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tipe` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gambar` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `daerah` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `deskripsi` text COLLATE utf8_unicode_ci NOT NULL,
  `langkah` json NOT NULL,
  `bahan` json NOT NULL,
  `like` int NOT NULL,
  `dislike` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reseps`
--

LOCK TABLES `reseps` WRITE;
/*!40000 ALTER TABLE `reseps` DISABLE KEYS */;
INSERT INTO `reseps` VALUES (11,5,'Mie aceh','Makanan berat','post-images/66HkjNSzxqReEQ0ufPqEp1F17RiJMOChXFTgQ2bE.jpg','Aceh','Mi aceh adalah masakan mi pedas khas Aceh di Indonesia. Mi kuning tebal dengan irisan daging sapi, daging kambing atau makanan laut (udang dan cumi) disajikan dalam sup sejenis kari yang gurih dan pedas. Mi aceh biasanya ditaburi dengan bawang goreng dan disajikan bersama emping, potongan bawang merah, mentimun, dan jeruk nipis. Mi aceh biasanya disajikan dalam tiga bentuk yaitu mi kuah, mi goreng basah, dan mi goreng kering.','[\"Rebus mie dalam air mendidih hingga matang. Tiriskan dan sisihkan.\", \"Panaskan sedikit minyak dalam wajan. Tumis daging sapi atau ayam hingga berubah warna. Sisihkan.\", \"Panaskan minyak dalam wajan besar. Tumis bawang putih, jahe, cabai merah, dan cabai rawit hingga harum.\", \"Tambahkan serai, daun jeruk, dan daun salam. Tumis sebentar hingga harum.\", \"Masukkan kunyit bubuk, jintan bubuk, ketumbar bubuk, dan merica bubuk. Aduk rata hingga bumbu tercampur dengan baik.\", \"Tambahkan daging yang sudah digoreng ke dalam wajan. Aduk rata dengan bumbu.\", \"Tuangkan kaldu sapi atau ayam. Biarkan mendidih dan masak sebentar.\", \"Masukkan santan kental ke dalam wajan. Aduk rata dan biarkan mendidih hingga kuah mengental.\"]','[\"200 gram mie kering (mie telur atau mie kuning)\", \"200 gram daging sapi atau daging ayam, potong menjadi irisan tipis\", \"2 buah cabai merah besar, iris tipis (sesuaikan dengan selera pedas Anda)\", \"2 buah cabai rawit merah, iris halus (sesuaikan dengan selera pedas Anda)\", \"3 siung bawang putih, cincang halus\", \"2 cm jahe, cincang halus\", \"2 batang serai, memarkan\", \"2 lembar daun jeruk\", \"2 lembar daun salam\", \"1/2 sendok teh kunyit bubuk\", \"1/2 sendok teh jintan bubuk\", \"1/2 sendok teh ketumbar bubuk\", \"1/2 sendok teh merica bubuk\", \"1/2 sendok teh garam (sesuai selera)\", \"1/2 sendok teh gula (sesuai selera)\", \"400 ml kaldu sapi atau ayam\", \"200 ml santan kental\", \"Minyak goreng secukupnya\", \"Daun bawang, iris tipis (untuk hiasan)\"]',0,0,'2023-08-18 11:20:17','2023-08-18 11:27:33'),(12,5,'Bika ambon','Cemilan','post-images/vgEps8d6OtZNP0jBVzCyiYlXsKGEIEjXHSKqRDzg.jpg','Sumatera Utara','Bika ambon adalah kue tradisional khas Medan, Indonesia. Kue ini terbuat dari bahan-bahan seperti tepung tapioka, telur, gula, dan santan. Bika ambon dimasak selama 12 jam agar dapat bertahan dalam kondisi terbaik dan sesuai apa yang diinginkan selama empat hari karena setelahnya kue tersebut mulai mengeras. Kue basah ini biasanya memiliki jaring-jaring pada bagian dalam. Bika ambon juga dijual dengan berbagai varian rasa, seperti pandan, coklat, keju, dan lain-lain.','[\"Panaskan santan hingga hangat, lalu tuangkan santan ke dalam campuran tepung dan gula. Aduk rata hingga gula larut.\", \"Campurkan ragi instan dengan sedikit air hangat dan aduk hingga rata. Diamkan selama beberapa menit hingga berbuih.\", \"Kocok lepas telur, lalu tuangkan ke dalam campuran adonan tepung dan santan. Aduk hingga rata.\", \"Tambahkan ragikan yang sudah dibuat, vanili (jika digunakan), pasta emulsifier (jika digunakan), dan pasta pandan (jika digunakan). Aduk hingga semua bahan tercampur dengan baik.\", \"Tutup wadah dengan kain bersih atau plastik wrap, dan diamkan adonan selama 1-2 jam untuk memberikan waktu fermentasi.\", \"Panaskan oven pada suhu 180°C.\", \"Olesi loyang bika ambon dengan mentega atau minyak goreng tipis-tipis, dan taburi dengan sedikit tepung terigu.\", \"Aduk adonan yang telah difermantasi dengan lembut.\", \"Tuangkan adonan ke dalam loyang dan ratakan permukaannya.\", \"Panggang dalam oven selama sekitar 40-50 menit atau hingga bagian atasnya kecokelatan dan kue matang. Waktu bisa berbeda tergantung pada oven masing-masing.\", \"Setelah kue matang, nyalakan mode grill (pemanas atas) pada oven dan panggang kue dalam jarak yang aman dari pemanas atas hingga permukaannya kecokelatan dengan rona keemasan. Ini akan memberikan tekstur renyah pada lapisan luar kue.\", \"Keluarkan kue dari oven dan biarkan dingin sebelum dipotong-potong.\", \"Potong Bika Ambon menjadi bagian yang diinginkan dan sajikan.\"]','[\"250 gram tepung terigu\", \"250 gram gula pasir\", \"150 ml santan kental\", \"100 ml air daun suji (daun pandan) - bisa menggunakan ekstrak daun pandan\", \"5 butir telur\", \"1 sendok teh ragi instan (fermipan)\", \"1/4 sendok teh garam\", \"1/2 sendok teh vanili (opsional)\", \"1/4 sendok teh pasta emulsifier (TBM atau SP/TDT) - opsional, untuk kelembutan\", \"1/4 sendok teh pasta pandan (opsional) - untuk warna dan aroma\"]',0,0,'2023-08-18 11:31:50','2023-08-18 11:31:50'),(13,5,'Rendang','Makanan berat','post-images/U1P3liRon5LdFJDY07JGFpWcdKASc3yZhLIu5LYn.jpg','Sumatera Barat','Rendang adalah hidangan berbahan dasar daging yang dihasilkan dari proses memasak suhu rendah dalam waktu lama dengan menggunakan aneka rempah-rempah dan santan. Proses memasaknya memakan waktu berjam-jam (biasanya sekitar empat jam) hingga yang tinggal hanyalah potongan daging berwarna hitam pekat dan dedak. Dalam suhu ruangan, rendang dapat bertahan hingga berminggu-minggu. Rendang yang dimasak dalam waktu yang lebih singkat dan santannya belum mengering disebut kalio, berwarna cokelat terang keemasan.','[\"Haluskan bawang merah, bawang putih, cabai merah, ketumbar bubuk, jintan bubuk, dan lada bubuk menjadi pasta dengan bantuan blender atau ulekan.\", \"Panaskan minyak dalam wajan. Tumis pasta bumbu yang sudah dihaluskan hingga harum dan matang.\", \"Masukkan potongan daging sapi ke dalam wajan yang berisi bumbu tumis. Aduk-aduk hingga daging berubah warna dan tercampur dengan bumbu.\", \"Tambahkan santan kental, santan encer, daun jeruk, serai, daun salam, lengkuas, jahe, dan kunyit yang sudah dimemarkan. Aduk rata dan biarkan mendidih.\", \"Setelah mendidih, kecilkan api dan biarkan masakan mendidih perlahan hingga santan meresap dan daging empuk. Ini adalah tahap yang memerlukan waktu dan kesabaran, karena daging harus dimasak dalam santan hingga bumbu meresap dan kuah mengental.\", \"Setelah daging empuk, tambahkan gula merah yang sudah disisir halus dan garam sesuai selera. Aduk rata.\", \"Terus masak dengan api kecil hingga kuah menyusut dan rendang berubah menjadi kering. Pastikan untuk sering diaduk agar rendang tidak gosong dan bumbunya merata.\", \"Setelah rendang mengering dan bumbunya meresap ke dalam daging, matikan api.\", \"Rendang siap dihidangkan. Sajikan dengan nasi putih hangat.\"]','[\"500 gram daging sapi, potong menjadi potongan kecil\", \"400 ml santan kental\", \"200 ml santan encer\", \"2 lembar daun jeruk\", \"2 batang serai, memarkan\", \"3 lembar daun salam\", \"2 cm lengkuas (galangal), memarkan\", \"3 cm jahe, memarkan\", \"3 cm kunyit, memarkan\", \"5-6 buah cabai merah (sesuai selera)\", \"5-6 siung bawang merah\", \"3 siung bawang putih\", \"1/2 sendok teh ketumbar bubuk\", \"1/2 sendok teh jintan bubuk\", \"1/2 sendok teh lada bubuk\", \"1/2 sendok teh gula merah (gula aren), sisir halus\", \"Garam secukupnya\", \"Minyak goreng secukupnya\"]',0,0,'2023-08-18 11:35:57','2023-08-18 11:35:57'),(14,5,'Laksa Riau','Makanan berat','post-images/g9klolNVCgGW8v5CS2O1TYZEFcWQyHFkytysZ2oy.jpg','Riau','Laksa Riau adalah hidangan mie berkuah yang menggunakan bumbu rempah khas dengan sentuhan gurih santan. Berbeda dengan laksa dari wilayah lain, Laksa Riau memiliki citarasa khas dengan penggunaan bumbu-bumbu tradisional. Mie laksa yang digunakan dalam Laksa Riau biasanya mie kuning yang berukuran besar dan tebal. Kuahnya kental dan berwarna kuning kecoklatan karena menggunakan campuran santan, kaldu, dan bumbu rempah seperti lengkuas, kunyit, jahe, dan bawang putih.','[\"Haluskan bawang merah, bawang putih, cabai merah, terasi, dan gula merah menjadi pasta dengan bantuan blender atau ulekan.\", \"Panaskan minyak dalam wajan. Tumis pasta bumbu yang sudah dihaluskan hingga harum dan matang.\", \"Tambahkan santan kental, daun jeruk, serai, daun salam, lengkuas, jahe, dan kunyit yang sudah dimemarkan. Aduk rata dan biarkan mendidih.\", \"Setelah kuah mendidih, tambahkan suwiran daging ayam dan udang. Biarkan daging ayam dan udang matang dalam kuah.\", \"Untuk menyajikan, ambil porsi mie yang sudah direbus dan letakkan dalam mangkuk.\", \"Tuangkan kuah laksa dengan daging dan udang di atas mie.\", \"Laksa Riau siap disajikan! Anda dapat menambahkan irisan bawang merah dan daun seledri sebagai hiasan.\"]','[\"200 gram mie telur atau mie kuning, rebus hingga matang\", \"200 gram daging ayam, rebus dan suwir-suwir\", \"100 gram udang, kupas dan bersihkan\", \"200 ml santan kental\", \"2 lembar daun jeruk\", \"2 batang serai, memarkan\", \"2 lembar daun salam\", \"2 cm lengkuas (galangal), memarkan\", \"3 cm jahe, memarkan\", \"3 cm kunyit, memarkan\", \"3-4 buah cabai merah (sesuai selera)\", \"5-6 siung bawang merah\", \"3 siung bawang putih\", \"1 sendok teh terasi (udang rebon), bakar sebentar\", \"1 sendok teh gula merah (gula aren), sisir halus\", \"Garam secukupnya\", \"Minyak goreng secukupnya\"]',0,0,'2023-08-18 11:42:31','2023-08-18 11:42:31'),(15,5,'Lempok Durian','Cemilan','post-images/W1jFqicqAR0Ha2jPKiZwam5c2YFur6VJGks6AfHS.jpg','Jambi','Lempok durian, sering disebut juga dodol durian atau lempuk durian, adalah salah satu jenis lempok yang dibuat dengan bahan durian. Lempok durian juga dikenal di Malaysia dan Brunei Darussalam. Sebagian masyarakat seperti di daerah Sunda menganggap lempok durian sama dengan dodol, atau galamai di Ranah Minang.','[\"Potong daun pisang menjadi lembaran dengan ukuran sekitar 20x20 cm. Panaskan daun pisang di atas api atau tumpukkan dalam tumpukan, agar lebih lentur dan mudah dibungkus.\", \"Campur tepung beras dengan air, aduk hingga merata.\", \"Tambahkan santan dan aduk lagi hingga rata dan tidak bergerindil.\", \"Tambahkan gula pasir dan garam, aduk hingga larut.\", \"Masak adonan di atas api sedang sambil terus diaduk hingga mengental dan matang. Pastikan adonan tidak bergerindil.\", \"Setelah adonan matang, tambahkan daging durian yang sudah dicincang halus. Aduk rata hingga daging tercampur merata dengan adonan.\", \"Ambil selembar daun pisang yang sudah dipanaskan, letakkan sejumlah adonan di tengahnya.\", \"Lipat daun pisang menjadi bentuk persegi atau segitiga, dan ikat dengan tali daun atau tusuk dengan lidi.\", \"Kukus lempok durian dalam kukusan yang sudah dipanaskan selama sekitar 45-60 menit atau hingga lempok matang dan mengental.\", \"Lempok Durian siap disajikan. Biasanya dimakan sebagai camilan atau hidangan penutup.\"]','[\"300 gram daging durian, pisahkan dari biji dan cincang halus\", \"150 gram tepung beras\", \"200 ml santan kental\", \"100 ml air\", \"100 gram gula pasir\", \"1/2 sendok teh garam\", \"Daun pisang secukupnya, untuk membungkus\"]',0,0,'2023-08-18 11:47:27','2023-08-18 11:47:27'),(16,6,'Pempek','Cemilan','post-images/vKcyOmtNKtk1hCMJ0H8YrqYWgc356q9Vbg8Z5L0H.png','Sumatera Selatan','Pempek adalah makanan yang terbuat dari daging ikan yang digiling lembut yang dicampur tepung kanji atau tepung sagu, serta komposisi beberapa bahan lain seperti telur, bawang putih yang dihaluskan, penyedap rasa, dan garam. Pempek biasanya disajikan dengan kuah yang disebut cuka yang memiliki rasa asam, manis, dan pedas.','[\"Masukkan ikan ke dalam baskom, beri putih telur, air, garam dan penyedap jamur, aduk rata\", \"Masukkan tepung sagu, aduk rata kembali\", \"Ambil 150 gr adonan, beri isian 1 butir telur\", \"Masukkan adonan yang sudah dibentuk ke dalam air mendidih, masak hingga mengapung.\", \"Angkat dan tiriskan pempek.\"]','[\"500 gr ikan tenggiri giling\", \"1 butir putih telur\", \"250 ml air\", \"1 sdm garam\", \"1 sdt penyedap jamur\", \"350 gr tepung sagu\", \"Air secukupnya\", \"Telur secukupnya\"]',0,0,'2023-08-18 12:01:49','2023-08-18 12:01:49'),(17,6,'Soto Medan','Desert','post-images/IrIvZORLjzBvtjDKuwabHEKxAiYtEz65qNRDaQi9.jpg','Sumatera Selatan','Soto Medan adalah masakan Indonesia khas Sumatra Utara. Soto Medan memiliki aroma yang khas yang unik karena terbuat dari santan yang pekat dan rempah-rempah yang khas. Kuah soto ini berwarna kuning kental. Selain khas kuah kental dan rempah-rempahnya, Soto Medan juga menggunakan suwiran daging ayam atau potongan daging sapi','[\"Panaskan minyak goreng\", \"Masukkan bumbu yang sudah dihaluskan, tumis hingga bumbu harum\", \"Masukkan rempah-rempah, serai, laos dan daun jeruk, aduk kembali hingga harum\", \"Masukkan wortel dan ayam, serta santan encer, aduk hingga rata, tutup panci agar semua bumbu meresap\", \"Masukkan santan kental, sambil terus diaduk aduk agar santan tidak pecah\", \"Tambahkan daun bawang, gula, dan garam, koreksi rasa\", \"Terus aduk perlahan hingga soto mendidih\", \"Matikan api\", \"Taburi daun seledri, dan bawang goreng\", \"Siap disajikan dengan sepiring nasi dan sambal kecap\"]','[\"1 kg ayam potong kecil, cuci, ungkep diambil aja, sisihkan\", \"1 buah wortel, potong dadu\", \"Santan dari 1 butir kelapa (pisahkan santan encer dan kentalnya)\", \"3 batang serai digeprek\", \"3 ruas jari lengkuas digeprek\", \"5 buah daun jeruk remas\", \"2 batang daun bawang, iris\", \"3 batang daun seledri, iris\", \"Bawang goreng secukupnya\", \"Gula\", \"Garam\", \"Minyak\", \"12 buah bawang merah\", \"4 buah bawang putih\", \"1 ruas jari jahe\", \"2 ruas jari kunyit, bakat\", \"4 buah kemiri, sangrai\", \"1 sdm ketumbar, sangrai\", \"1 sdm merica\", \"0.5 bulatan buah pala\", \"3 buah kayu manis\", \"3 buah bunga lawang\", \"4 buah kapulaga\", \"5 buah cengkeh\"]',0,0,'2023-08-18 12:06:32','2023-08-18 13:00:15'),(18,6,'Angeun Lada','Dessert','post-images/dIJMAJRGqyH6EAOCUJkvzQzkvnOS0C7toMRC7y9V.jpg','Banten','Angeun Lada adalah sayur kuah pedas khas Banten berisi daging dan jeroan sapi seperti jantung, limpa, babat, atau usus.','[\"Cuci bersih semua sayuran lalu rebus\", \"Buang air rebusannya, bilas daging dan tiriskan. Ganti dengan air yang baru\", \"Haluskan bumbu lalu tumis dengan daun salam dan serai hingga harum\", \"Tuang bumbu yang sudah ditumis kedalam rebusan daging. Tambahkan garam, gula, dan kaldu jamur. Koreksi rasa\", \"Matikan kompor lalu sajikan\"]','[\"500 gr daging dan tetelan\", \"1 liter air\", \"1 ikat daun walang\", \"2 lembar daun salam\", \"1 batang serai, geprek\", \"Garam secukupnya\", \"Gula secukupnya\", \"Kaldu jamur secukupnya\", \"10 siung bawang merah\", \"5 siung bawang putih\", \"2 buah cabe rawit merah\", \"3 buah cabe merah keriting\", \"3 butir kemiri\", \"3 cm kencur\", \"1 ruas jahe\", \"1 ruas kunyit\"]',0,0,'2023-08-18 12:09:55','2023-08-18 12:09:55'),(19,6,'Lotek','Dessert','post-images/kva9eUyc8KMYdbEIDykJPD6j3zSkRlVOVEI1mPpV.jpg','Jawa Barat','Lotek adalah salah satu makanan tradisional yang telah ada sejak dulu kala. Lotek ini berisikan sayuran yang dibumbui oleh bumbu kacang, disajikan dengan lontong atau nasi hangat, serta dengan kerupuk dan bawang goreng. Makanan lotek ini hampir mirip dengan pecel, yaitu jenis makanan dari beberapa sayuran yang sudah direbus kemudian disiram dengan menggunakan sambal dari bumbu bumbu kacang.','[\"Cuci bersih semua sayuran lalu rebus\", \"Haluskan semua bumbu, tambahkan air lalu koreksi rasanya\", \"Potong lontong, lalu masukan semua sayur kedalam bumbu\", \"Aduk semua, dan lotek siap dihidangkan\"]','[\"5 buah kacang panjang, rebus\", \"1 buah lontong\", \"1 ikat kangkung, rebus\", \"1 buah tahu goreng\", \"30 gr tauge, rebus\", \"30 gr kol, rebus\", \"50 gr labu siam, rebus\", \"kerupuk (optional)\", \"2 sdm petis\", \"75 gr kacang tanah, goreng\", \"1 buah kentang\", \"1 siung bawang putih\", \"3 buah cabe rawit\", \"Air secukupnya\", \"Garam secukupnya\", \"1 lembar daun jeruk\", \"1 cm kencur\", \"Gula merah secukupnya\"]',0,0,'2023-08-18 12:14:31','2023-08-18 12:14:31'),(20,6,'Pindang','Makanan berat','post-images/JqSyx7iOtLNiKRtyZhFY5PVBssv8K5pFujByMPGA.jpg','Bengkulu','Ikan pindang bisa diolah dengan cara digoreng, direbus, ditumis, dan masih banyak lagi. Anda dapat menyesuaikan menu dan cara pengolahannya dengan selera masing-masing. Ikan pindang bisa diolah dengan santan, bisa juga tidak bila Anda tidak menginginkannya. Resep olahan ikan pindang apapun pasti cocok di lidah.','[\"Haluskan semua bumbu halus menggunakan blender atau ulekan.\", \"Panaskan minyak goreng dalam panci. Tumis bumbu halus hingga harum dan matang.\", \"Tambahkan serai, daun jeruk, daun salam, lengkuas, jahe, dan potongan tomat ke dalam tumisan bumbu. Aduk-aduk hingga aromanya keluar.\", \"Jika Anda ingin menambahkan labu siam, tambahkan potongan labu siam ke dalam panci.\", \"Tuangkan air ke dalam panci dan aduk-aduk perlahan. Biarkan kuah mendidih.\", \"Masukkan ikan atau daging ke dalam panci. Aduk rata dan biarkan bahan masak meresap bumbu.\", \"Tambahkan asam kandis, garam, dan gula sesuai selera. Aduk rata.\", \"Biarkan masakan mendidih dan bahan masak matang sempurna. Pastikan ikan atau daging matang dan empuk.\", \"Cicipi kuah, tambahkan garam atau gula jika diperlukan untuk mencocokkan rasa.\", \"Angkat panci dari api.\", \"Sajikan Pindang Bengkulu hangat dengan nasi putih.\"]','[\"500 gram ikan segar (seperti ikan tenggiri atau ikan mas), atau daging (seperti daging sapi atau daging ayam)\", \"2 batang serai, memarkan\", \"3 lembar daun jeruk\", \"2 lembar daun salam\", \"2 cm lengkuas, memarkan\", \"2 cm jahe, memarkan\", \"2 buah tomat, potong-potong\", \"1 buah labu siam, potong-potong (opsional)\", \"2 liter air\", \"Garam secukupnya\", \"Gula secukupnya\", \"Asam kandis secukupnya (atau bisa diganti dengan asam jawa)\", \"5 butir bawang merah\", \"3 siung bawang putih\", \"2 cm kunyit, kupas dan parut\", \"2 cm kencur (opsional)\", \"3 buah cabai merah (sesuaikan dengan tingkat kepedasan yang diinginkan)\"]',0,0,'2023-08-18 12:23:13','2023-08-18 12:23:13'),(21,7,'Kue Klappertaart Lampung','Dessert','post-images/NkCrTnSuIHTeN3hHg8CMqg7YCX8Kb39LrXnRBOvW.jpg','Lampung','Klappertaart adalah sejenis kue tradisional yang berasal dari Indonesia.\r\nKue Klappertaart ini terkenal karena bahan utamanya, yaitu kelapa muda atau klapper dalam bahasa Belanda, yang memberikan rasa segar dan aroma yang khas.\r\nSelama bertahun-tahun, klappertaart telah menjadi salah satu kue khas Indonesia yang populer dan banyak dijumpai di berbagai acara, seperti ulang tahun, perayaan keluarga, atau sebagai oleh-oleh khas daerah.','[\"Campur tepung terigu, mentega, kuning telur, dan gula pasir dalam mangkuk besar. Uleni hingga adonan kalis dan bisa dibentuk.\", \"Gilas adonan hingga tipis dan letakkan dalam loyang tart yang sudah diolesi mentega. Oven dalam suhu 180°C selama sekitar 20-25 menit atau hingga kulit kue tart berwarna keemasan. Setelah matang, angkat dan dinginkan.\", \"Panaskan susu kental manis hingga hangat, tambahkan gelatin yang sudah direndam hingga larut.\", \"Campur daging alpukat halus dengan krim kental. Tambahkan campuran susu tadi ke dalam alpukat dan aduk rata.\", \"Tuang campuran ini ke atas kulit kue tart yang sudah dingin. Dinginkan dalam lemari es hingga set.\", \"Panaskan santan kental dengan gula pasir hingga gula larut.\", \"Tambahkan gelatin yang sudah direndam, aduk hingga larut.\", \"Campur kelapa parut dengan susu kental manis. Tuangkan campuran santan ke dalam campuran kelapa, aduk rata.\", \"Tuang campuran kelapa di atas lapisan alpukat yang sudah set. Dinginkan kembali dalam lemari es hingga set.\", \"Panaskan krim kental dengan gula pasir hingga gula larut.\", \"Tambahkan gelatin yang sudah direndam, aduk hingga larut.\", \"Tuangkan campuran krim di atas lapisan kelapa yang sudah set. Dinginkan kembali dalam lemari es hingga set.\"]','[\"1 buah alpukat matang, dagingnya dihaluskan\", \"100 ml susu kental manis\", \"100 ml krim kental\", \"2 lembar gelatin, rendam dalam air dingin\", \"200 gram kelapa parut\", \"100 ml santan kental\", \"100 ml susu kental manis\", \"1 sendok makan gula pasir\", \"2 lembar gelatin, rendam dalam air dingin\", \"200 ml krim kental\", \"2 sendok makan gula pasir\", \"1 lembar gelatin, rendam dalam air dingin\", \"150 gram tepung terigu\", \"100 gram mentega\", \"1 butir kuning telur\", \"1 sendok makan gula pasir\"]',0,0,'2023-08-18 12:33:54','2023-08-18 12:35:35'),(22,7,'Kerak telor','Cemilan','post-images/7x5QLppBnbmcSRE5Oe9Va0ME8cbMlf8BWjUKv3AJ.jpg','Jakarta','Kerak telur adalah makanan asli daerah Jakarta, dengan bahan-bahan beras ketan putih, telur ayam atau bebek, ebi (udang kering yang diasinkan) yang disangrai kering ditambah bawang merah goreng, lalu diberi bumbu yang dihaluskan berupa kelapa sangrai, cabai merah, kencur, jahe, merica butiran, garam dan gula pasir. Kerak telor dapat ditemukan pada hari biasa. Anda bisa menemukan kerak telor di sekitar Kota Tua, Jakarta Barat. Menurut sejarah, Kerak Telor sudah ada dari zaman kolonial Belanda, kerak telor diciptakan oleh masyarakat Betawi secara tak sengaja Pada tahun 1970-an.[1]','[\"Rendam beras ketan dalam air selama minimal 4 jam atau semalaman. Setelah direndam, tiriskan beras ketan.\", \"Kocok satu butir telur ayam dengan garam dan gula pasir hingga rata. Panaskan sedikit minyak dalam wajan, tuang telur kocok dan buat adonan orak-arik. Matangkan telur hingga setengah matang, lalu angkat dan sisihkan.\", \"Blender beras ketan yang sudah direndam bersama dengan air sedikit demi sedikit hingga adonan halus dan tidak bergerindil.\", \"Campurkan adonan beras ketan yang sudah di-blender dengan telur orak-arik, udang cincang halus, kelapa parut, bawang merah goreng, dan ebi sangrai. Aduk rata.\", \"Panaskan wajan datar dengan sedikit minyak. Tuangkan adonan beras ketan hingga membentuk cakram tipis dan lebar di atas wajan.\", \"Pecahkan satu butir telur di atas adonan dan ratakan telur di atas adonan dengan sendok kayu atau spatula.\", \"Tutup wajan dan biarkan adonan matang hingga berkerak dan kecokelatan di bagian bawah. Pastikan api tidak terlalu besar agar adonan tidak gosong.\", \"Angkat dan letakkan kerak telor di atas daun pisang.\", \"Taburi dengan bawang merah goreng dan ebi yang disangrai.\", \"Kerak Telor siap disajikan. Anda bisa menambahkan sambal sebagai pelengkap.\"]','[\"200 gram beras ketan putih\", \"2 butir telur ayam\", \"50 gram udang kupas, cincang halus\", \"2 sendok makan kelapa parut kering, sangrai hingga kuning\", \"2 sendok makan bawang merah goreng\", \"2 sendok makan ebi (udang kering), rendam dan sangrai\", \"1 sendok teh garam\", \"1 sendok teh gula pasir\", \"Minyak goreng secukupnya untuk menggoreng\"]',0,0,'2023-08-18 12:40:11','2023-08-18 12:40:11'),(23,7,'Sagu lempeng','Cemilan','post-images/mKWvY0hLW7ioQOt7oiJO6dxf7paPyv20Rd3lurZ6.jpg','Nusa Tenggara Timur','Kali ini, kita akan membahas makanan olahan sagu, yaitu sagu lempeng.\r\nOlahan sagu selain papeda, sagu lempeng adalah makanan khas Papua yang sangat unik dan identik. Sagu lempeng ini merupakan makanan khas di Papua. Masyarakat Papua menikmati sagu lempeng dengan teh atau kopi.','[\"Siapkan Bahan-Bahan: Siapkan semua bahan yang diperlukan. Sangrai kelapa parut hingga kering untuk mendapatkan aroma yang khas. Sisir halus gula merah agar lebih mudah dicampurkan.\", \"Campur Bahan Kering: Dalam sebuah wadah, campurkan tepung sagu, kelapa parut sangrai, gula merah sisir, dan garam. Aduk rata agar bahan-bahan kering tercampur secara merata.\", \"Tambahkan Air: Panaskan air hingga mendidih, lalu tuangkan secara perlahan ke dalam campuran bahan kering sambil terus diaduk. Aduk hingga adonan menjadi kental dan tercampur sempurna.\", \"Panggang Adonan: Panaskan wajan datar dengan sedikit minyak goreng di atas api sedang. Ambil sejumput adonan sagu, lalu letakkan di tengah wajan dan pipihkan menggunakan spatula atau sendok. Panggang hingga bagian bawah lempeng berwarna keemasan.\", \"Lipat dan Goreng: Setelah bagian bawah lempeng berwarna keemasan, lipat lempeng menjadi setengah bagian. Goreng hingga kedua sisi lempeng menjadi garing dan berwarna kecokelatan.\", \"Angkat dan Tiriskan: Angkat lempeng dari wajan dan tiriskan minyak berlebih pada tisu dapur atau kertas minyak.\", \"Ulangi Proses: Ulangi proses ini sampai semua adonan habis.\", \"Sajikan: Sagu lempeng siap disajikan. Nikmati sebagai camilan atau hidangan penutup. Lempeng ini bisa disimpan dalam wadah kedap udara untuk menjaga kelezatannya.\"]','[\"200 gram tepung sagu\", \"100 gram kelapa parut, sangrai hingga kering\", \"100 gram gula merah, sisir halus\", \"1/4 sendok teh garam\", \"200 ml air\", \"Minyak goreng secukupnya untuk menggoreng\"]',0,0,'2023-08-18 12:45:35','2023-08-18 12:45:35');
/*!40000 ALTER TABLE `reseps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','admin@admin.com',NULL,'$2y$10$Mkuawl97bcReDrV7mcNTPex4fGGa.99Eh5Unvu8inYJxVkNYgZpyu',NULL,NULL,NULL),(5,'Fiqri','fiqrijambi@gmail.com',NULL,'$2y$10$R.LmkbuP6lY5ls6odgQTh.GShMsacifwP37D.jy4GIJw98QGPdC22',NULL,'2023-08-18 11:13:54','2023-08-18 11:13:54'),(6,'Rini','riniwulansari212@gmail.com',NULL,'$2y$10$JNph.YzaklmUWei6WfZSiOVP65ftDeZ0RdbsFWX5.BdqB9FFDjkJ.',NULL,'2023-08-18 11:57:54','2023-08-18 11:57:54'),(7,'Putri','azzahrahputri381@gmail.com',NULL,'$2y$10$1Q5ofN9itotOb79QVSxQl.PxvwYoI6A5GqhttjLBKRnw57xxP/fX.',NULL,'2023-08-18 12:28:17','2023-08-18 12:28:17');
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

-- Dump completed on 2023-08-19  3:28:29
