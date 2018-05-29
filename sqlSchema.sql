USE library;
-- mysql -u root < ./sqlSchema.sql
CREATE TABLE movielist (
  id int NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  genre VARCHAR(25) NOT NULL,
  description VARCHAR(500) NOT NULL,
  PRIMARY KEY(ID)
);