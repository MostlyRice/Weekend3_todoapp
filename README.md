## To Do App
Hello Primers!

Welcome to your 3rd-weekend challenge! Full stack is pretty awesome huh? The idea that in such a short time you are now able to spin up a full application architecture is pretty incredible.

This weekend is all about showing us that you have a handle on each of the different parts of the full stack. For this weekend's challenge, you are going to create a 'TO DO' application. This is a type of application that is very common to tackle when learning a new language, which makes it extremely valuable to work through for the first time, since chances are good that at some point in your career you will tackle this type of application again only in another language.

### BASE MODE
Here are the specific components for the challenge:

1. Create a front end experience that allows a user to create a task.
2. When the task is created, it should be stored inside of a database (SQL)
3. Whenever a task is created the front end should refresh to show all tasks that need to be completed.
4. Each task should have an option to 'Complete' or 'Delete'.
5. When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know 6. 6. whether or not the task is complete)
6. Whether or not a task is complete should also be stored in the database.
7. Deleting a task should remove it both from the Front End as well as the Database.
Make sure that you also show us your best styling chops. Explore icons, fonts, libraries. Really work your CSS muscles.

We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

Additionally, please include some way to recreate your initial database schema. This can be a database.sql file with CREATE TABLE statements or you can create your schema automatically when your app loads.

### HARD MODE
1. Create a table of categories and allow Tasks to be assigned a single (1) category. This creates a one-to-many relationship (many tasks can have the same category). You will need to add in joins in order to display and use this new data!
2. In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.

### PRO MODE
In no particular order:

1. Publish your app to Heroku.
2. Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.
3. Add a due date to your tasks and put the items which need to be completed next at the top of the page. Highlight overdue tasks in red.
4. Add any additional features that you think would be useful or interesting!
