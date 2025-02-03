CREATE TABLE cars ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT DEFAULT NULL,
    car_img VARCHAR(500) NOT NULL,
    model VARCHAR(100) NOT NULL,
    brand VARCHAR(100) NOT NULL,
    status ENUM('Disponível', 'Reservado', 'Alugado') DEFAULT 'Disponível' NOT NULL,
    category_id INT NOT NULL,
    description VARCHAR(400) NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (user_id) REFERENCES users(id) 
);