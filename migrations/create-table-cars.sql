CREATE TABLE cars ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT DEFAULT NULL,
    car_img VARCHAR(500) NOT NULL,
    model VARCHAR(100) NOT NULL,
    brand VARCHAR(100) NOT NULL,
    status ENUM('Disponível', 'Reservado', 'Alugado') DEFAULT 'Disponível',
    category_id INT NOT NULL,
    description VARCHAR(400) NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (user_id) REFERENCES users(id) 
);

INSERT INTO cars (user_id, car_img, model, brand, status, category_id, description, created_at)
VALUES
    (1, 'car_image_1.jpg', 'RAV4', 'Toyota', 'Disponível', 1, 'A spacious SUV car.', NOW()),
    (2, 'car_image_2.jpg', 'Fiesta', 'Ford', 'Reservado', 2, 'A compact sedan for city driving.', NOW()),
    (3, 'car_image_3.jpg', 'HR-V', 'Honda', 'Alugado', 3, 'A stylish crossover car for all terrains.', NOW());
