-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-bjoseonet.alwaysdata.net
-- Generation Time: Jul 02, 2024 at 03:38 PM
-- Server version: 10.6.17-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bjoseonet_grupo2`
--

-- --------------------------------------------------------

--
-- Table structure for table `coment`
--

CREATE TABLE `coment` (
  `id` int(11) NOT NULL,
  `usuario` int(11) NOT NULL,
  `coment` text NOT NULL,
  `date_coment` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coment`
--

INSERT INTO `coment` (`id`, `usuario`, `coment`, `date_coment`) VALUES
(6, 8, 'modifico el comentario del mail email02', '2024-06-19 14:40:05'),
(7, 8, 'este es un comentario del mail email08', '2024-06-19 14:42:01'),
(10, 2, 'este es un comentario del mail email02', '2024-06-19 14:44:07'),
(11, 2, 'este es otro comentario del mail email02', '2024-06-19 14:44:26'),
(12, 9, '123456', '2024-06-26 16:40:03'),
(13, 9, '123cccccccc456', '2024-06-26 16:42:01'),
(14, 4, 'este mensaje es para aprobar el TP', '2024-07-02 15:23:05');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` float NOT NULL DEFAULT 0,
  `date_sale` datetime DEFAULT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `product_name`, `description`, `price`, `date_sale`, `image`) VALUES
(1, 'PIZZA CALABRESA', 'Este es el Producto uno', 111, NULL, ''),
(2, 'PIZZA GRAN MUSSA', 'Este es el Producto DOS', 222, '2024-06-19 00:00:00', ''),
(3, 'Producto tres', 'Este es el Producto tres', 123.45, NULL, '');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `first_name` varchar(50) NOT NULL DEFAULT '',
  `last_name` varchar(50) NOT NULL DEFAULT '',
  `zip` varchar(20) NOT NULL DEFAULT '',
  `password` varchar(50) NOT NULL DEFAULT '',
  `date_joined` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `first_name`, `last_name`, `zip`, `password`, `date_joined`) VALUES
(2, 'email02@gmail.com', 'root', 'root', '1234A', '99999999', '2024-06-14 21:55:26'),
(3, 'email03@gmail.com', 'Panchito', 'Villa', '1234A', '123456', '2024-06-14 21:55:26'),
(4, 'email04@gmail.com', 'Pancho', 'Villa', '1234A', '33333333', '2024-06-14 21:55:26'),
(6, 'email06@gmail.com', 'Pancho el bueno', 'Villa el malo', '1234A', '44444444', '2024-06-14 22:25:57'),
(7, 'email07@gmail.com', 'Pancho', 'Villa', '1234A', '123456', '2024-06-14 22:26:02'),
(8, 'email08@gmail.com', 'Pancho el malo', 'juan pereyra', '1234A', '123456', '2024-06-15 22:20:18'),
(9, 'email77@gmail.com', 'Pancho', 'Villa', '1234A', '123456', '2024-06-26 16:29:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `coment`
--
ALTER TABLE `coment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario` (`usuario`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `coment`
--
ALTER TABLE `coment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `coment`
--
ALTER TABLE `coment`
  ADD CONSTRAINT `coment_ibfk_1` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
