# About Project
* This is a base nodejs project template, which anyone can use as it has been prepared by keeping some of the most important code principles and project management recommendations. Feel free to change anything.

# Project Setup
* Download this template and open in any editor.
* In the root directory create a `.env` file and add the following env variables.
    ```
    PORT = <port number of your choice>
    ```
    ex:
    ```
    PORT = 3000
    ```
* Inside the `src/config` folder createa  file named as `config.json` and edit the following code - 
    ```
    {
        "development": {
            "username": "root",
            "password": null,
            "database": "database_development",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "test": {
            "username": "root",
            "password": null,
            "database": "database_test",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "production": {
            "username": "root",
            "password": null,
            "database": "database_production",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
    }
    ```