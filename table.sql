CREATE TABLE polls(
    id int NOT NULL AUTO_INCREMENT,
    questions varchar(255) NOT NULL,
    Options VARCHAR(255),
    user_data VARCHAR(255),
    poll_analytics VARCHAR(255),
    PRIMARY KEY(id)
);