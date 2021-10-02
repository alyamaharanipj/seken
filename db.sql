-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2020 at 05:03 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `seken`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
                          `id_barang` int(10) UNSIGNED NOT NULL,
                          `id_penjual` int(10) UNSIGNED NOT NULL,
                          `nama_barang` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
                          `kategori` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
                          `deskripsi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                          `harga` double NOT NULL,
                          `foto` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                          `created_at` timestamp NULL DEFAULT NULL,
                          `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
                              `id` int(10) UNSIGNED NOT NULL,
                              `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                              `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2020_02_24_092527_penjual', 1),
(2, '2020_02_24_092537_barang', 1);

-- --------------------------------------------------------

--
-- Table structure for table `penjual`
--

CREATE TABLE `penjual` (
                           `id_penjual` int(10) UNSIGNED NOT NULL,
                           `username` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
                           `nama` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
                           `nomor_hp` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
                           `email` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
                           `email_verified_at` timestamp NULL DEFAULT NULL,
                           `password` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
                           `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                           `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                           `created_at` timestamp NULL DEFAULT NULL,
                           `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
    ADD PRIMARY KEY (`id_barang`),
    ADD KEY `barang_id_penjual_foreign` (`id_penjual`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
    ADD PRIMARY KEY (`id`);

--
-- Indexes for table `penjual`
--
ALTER TABLE `penjual`
    ADD PRIMARY KEY (`id_penjual`),
    ADD UNIQUE KEY `penjual_username_unique` (`username`),
    ADD UNIQUE KEY `penjual_nomor_hp_unique` (`nomor_hp`),
    ADD UNIQUE KEY `penjual_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
    MODIFY `id_barang` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
    MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `penjual`
--
ALTER TABLE `penjual`
    MODIFY `id_penjual` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `barang`
--
ALTER TABLE `barang`
    ADD CONSTRAINT `barang_id_penjual_foreign` FOREIGN KEY (`id_penjual`) REFERENCES `penjual` (`id_penjual`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
