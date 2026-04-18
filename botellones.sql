-- ============================================================
--  BotellonesMx — SQL compatible con Railway / MySQL moderno
--  PRIMARY KEY definido inline (requerido por sql_require_primary_key)
-- ============================================================

CREATE TABLE IF NOT EXISTS `catalogos` (
  `id`     INT          NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `botellas` (
  `id`           INT            NOT NULL AUTO_INCREMENT,
  `nombre`       VARCHAR(100)   NOT NULL,
  `descripcion`  TEXT           DEFAULT NULL,
  `precio`       DECIMAL(10,2)  NOT NULL,
  `capacidad_ml` INT            NOT NULL,
  `imagen_url`   VARCHAR(500)   DEFAULT NULL,
  `catalogo_id`  INT            DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `catalogo_id` (`catalogo_id`),
  CONSTRAINT `botellas_ibfk_1` FOREIGN KEY (`catalogo_id`) REFERENCES `catalogos` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ── Categorías ────────────────────────────────────────────────
INSERT INTO `catalogos` (`nombre`) VALUES ('Acero'), ('Plastico'), ('Cristal');

-- ── Productos ─────────────────────────────────────────────────
INSERT INTO `botellas` (`nombre`, `descripcion`, `precio`, `capacidad_ml`, `imagen_url`, `catalogo_id`) VALUES
('YETI Rambler 26 oz Bottle','Botella de acero inoxidable 18/8 con doble pared al vacío. Tapa TripleHaul incluida. Mantiene bebidas frías 24 h y calientes 6 h. Libre de BPA.',1299.00,769,'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80',1),
('YETI Rambler 36 oz Bottle','Gran capacidad en acero inoxidable de doble pared. Tapa TripleHaul magnética con asa resistente. Ideal para excursiones y días largos.',1499.00,1065,'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80',1),
('YETI Rambler 18 oz Bottle','Botella compacta de acero inoxidable con doble pared. Tapa Chug Cap de fácil apertura. Perfecta para el gym y la oficina. Sin sabores ni olores.',1099.00,532,'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=600&q=80',1),
('YETI Rambler 64 oz Bottle','Botella de medio galón en acero inoxidable premium. Doble pared al vacío. Tapa TripleHaul de acero. Mantiene hielo por días enteros.',1799.00,1893,'https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=600&q=80',1),
('YETI Rambler 12 oz Bottle','La más pequeña de la familia Rambler. Acero inoxidable de doble pared, tapa Chug Cap. Cabe en cualquier portavasos estándar.',949.00,355,'https://images.unsplash.com/photo-1543353071-087092ec393a?w=600&q=80',1),
('YETI Rambler 26 oz Straw Cap','Rambler 26 oz con tapa con popote incluida. Acero inoxidable 18/8, doble pared al vacío. Sin BPA.',1349.00,769,'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&q=80',1),
('YETI Rambler 36 oz Straw Bottle','Capacidad extra con popote resistente integrado en la tapa. Acero de doble pared. Totalmente hermética.',1549.00,1065,'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80',1),
('YETI Rambler 18 oz Straw Bottle','Botella de acero inoxidable doble pared con tapa de popote retráctil. Diseño ergonómico y ligero para uso diario.',1149.00,532,'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80',1),
('Tupperware Eco Bottle 750 ml','Botella ecológica de plástico libre de BPA con tapa hermética a prueba de derrames. Apta para lavavajillas.',299.00,750,'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=600&q=80',2),
('Tupperware Eco Bottle 1 L','Botella de plástico de 1 litro libre de BPA. Tapa de rosca segura con asa integrada.',349.00,1000,'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80',2),
('Tupperware H2GO 500 ml','Botella deportiva de plástico sin BPA con tapa tipo flip-top de apertura rápida. Boquilla de silicona suave.',259.00,500,'https://images.unsplash.com/photo-1616628188540-925618b98318?w=600&q=80',2),
('Tupperware Colección 350 ml','Set coleccionable en plástico premium con estampados únicos. Sin BPA, tapa hermética.',229.00,350,'https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=600&q=80',2),
('Tupperware Slim 600 ml','Diseño slim para caber en cualquier bolso. Plástico de alta calidad libre de BPA. Tapa de presión con pitillo retráctil.',279.00,600,'https://images.unsplash.com/photo-1543353071-087092ec393a?w=600&q=80',2),
('Tupperware Aquasafe 1.5 L','Gran botella familiar de plástico con asa superior. Libre de BPA y ftalatos. Tapa hermética de rosca doble.',399.00,1500,'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&q=80',2),
('Tupperware Botella Sport 800 ml','Botella deportiva de 800 ml en plástico resistente sin BPA. Tapa de palanca de apertura con una sola mano.',319.00,800,'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=600&q=80',2),
('Crystal Bottle Classic 500 ml','Botella de vidrio borosilicato de alta resistencia. Funda de silicona protectora. Tapa de acero inoxidable.',449.00,500,'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=600&q=80',3),
('Crystal Bottle Wide Mouth 1 L','Botella de cristal boca ancha. Vidrio borosilicato 3.3. Tapa de madera de bambú con sello de silicona.',599.00,1000,'https://images.unsplash.com/photo-1550411294-2f290a204971?w=600&q=80',3),
('Crystal Bottle Infuser 700 ml','Botella de vidrio con infusor de acero inoxidable para frutas o tés. Tapa hermética de bambú.',549.00,700,'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80',3),
('Crystal Bottle Sleeve 650 ml','Botella de cristal con funda de neopreno protectora. Tapa metálica de rosca. Libre de plástico.',499.00,650,'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=600&q=80',3),
('Crystal Cantimplora 800 ml','Cantimplora de vidrio con correa de transporte en cuero vegano. Tapa con asa metálica. Edición limitada.',649.00,800,'https://images.unsplash.com/photo-1550411294-2f290a204971?w=600&q=80',3);
