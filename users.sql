-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2024 at 11:23 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `g10`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` tinyint(3) UNSIGNED NOT NULL,
  `stuId` varchar(10) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(60) NOT NULL,
  `role` tinyint(3) UNSIGNED NOT NULL COMMENT 'student=1, lectuer=2, staff=3'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `stuId`, `email`, `username`, `password`, `role`) VALUES
(1, '6531501011', NULL, 'Ezreal', '$2b$10$9e9hAjYyhBNHslKFU5GkzeZu0KP4Cjtw4RP.jFksegM18l91QXI6K', 1),
(2, '6531501022', NULL, 'Lux', '$2b$10$H8XleB63o2yoZMgZDoSlx.hM8MkedTby7qqBdEh9Kl6AdKFri9iAG', 1),
(3, NULL, NULL, 'Ta1', '$2b$10$idjOPfONgRw9X.hZflv/qev9yHYUl1yFAPWOTHUBDPz6jwLRWqg9K', 2),
(4, NULL, NULL,'Ta2', '$2b$10$YOfQp44nE.2B4.FHxG0xH.niVXl3Yk3.o06oM/nJM2cQDe9KrTqSC', 2),
(5, NULL, NULL, 'Admin', '$2b$10$.idRcDy9rKR522k150xg7ee.oUNy/sP02DNBlG43494qEJ0tXxhWK', 3),
(6, NULL, NULL, '1', '$2b$10$7UazDsnd36sG/rlGqPIfJOsmt.0JH.NEPAxoCLFEQl8/E3aSjEd2e', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
