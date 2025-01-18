USE SQLdatabase;

CREATE TABLE food_category(
    id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(50) NOT NULL
);

INSERT INTO food_category (category) VALUES
('meat'),
('vegetable'),
('seafood');
