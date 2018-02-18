CREATE TABLE tasks (
    id serial primary key,
    task VARCHAR(120),
    notes VARCHAR(120),
    duedate DATE,
    status BOOLEAN
    );

INSERT INTO tasks (task, notes, duedate, status) 
VALUES ('Class at Prime', 'Womp', '02/19/18', TRUE),('Dinner', 'Chomp', '02/19/18', FALSE);
