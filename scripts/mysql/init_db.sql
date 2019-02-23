CREATE DATABASE IF NOT EXISTS ecomm;
CREATE USER 'ecomm'@'localhost' IDENTIFIED BY 'dodo';
GRANT ALL PRIVILEGES ON ecomm.* TO 'ecomm'@'localhost';
