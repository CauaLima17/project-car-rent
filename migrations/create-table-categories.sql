CREATE TABLE categories ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    daily_rate DECIMAL(10,
    2) NOT NULL 
);

INSERT INTO categories (name, daily_rate)
VALUES 
    ('Luxuosa', 150.00),
    ('Econômica', 100.00),
    ('Intermediária', 120.00);
