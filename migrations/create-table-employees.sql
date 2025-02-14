CREATE TABLE employee ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    tel VARCHAR(15) NOT NULL,
    sector VARCHAR(200) NOT NULL
);

INSERT INTO employee (name, email, tel, sector)
VALUES 
    ('Fernanda Costa', 'fernanda.costa@empresa.com', '9876543210', 'Atendimento ao Cliente'),
    ('Gustavo Lima', 'gustavo.lima@empresa.com', '9876543211', 'Vendas'),
    ('Mariana Alves', 'mariana.alves@empresa.com', '9876543212', 'Gestão de Frota');
