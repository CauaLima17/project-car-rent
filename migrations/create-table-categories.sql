CREATE TABLE categories ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    daily_rate DECIMAL(10,
    2) NOT NULL 
);

INSERT INTO categories (name, daily_rate)
VALUES 
    ('SUV', 150.00),
    ('Sedan', 100.00),
    ('Crossover', 120.00);
