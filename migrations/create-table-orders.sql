CREATE TABLE orders ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    user_id INT NOT NULL,
    payment_method VARCHAR(100) NOT NULL,
    pick_up_location VARCHAR(300) NOT NULL,
    drop_off_location VARCHAR(300) NOT NULL,
    pick_up_date DATETIME NOT NULL,
    drop_off_date DATETIME NOT NULL,
    order_description VARCHAR(400),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    FOREIGN KEY (car_id) REFERENCES cars(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);