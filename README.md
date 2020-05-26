AthTrack Dev Setup
==================
I recommend you all use WSL (Windows Subsystem for Linux). Set it up if 
you don't have it. Use the Ubuntu 18.04 one. 
## WSL setup
Install through windows.
1.  Create a symlink to where your code will be.
   
    `$ ln -s code /mnt/c/code`. 
   
    Now you can cd from your home directory with 
   
    `$ cd code`

## Remaining setup
Requirements:
- pipenv
- python 3.6.9

1.  Clone the repository with 
   
    `$ git clone https://github.com/nocapsnospaces/athtrack/`

2.  Run
   
    `$ pipenv install --dev`
   
    To install the python dependencies.
 
## Initializing your database
1. `$ pipenv shell`
2. `$ flask db upgrade`

## Making model changes.
If you alter a model, you will  need to update the database schema.
To do so run

`$ flask db migrate -m 'I changed a model'`

Correct any errors, and when you are ready to apply the schema change, run

`$ flask db upgrade`

## Running for development
1. `$ pipenv shell`
2. Initialize your database if you have not already. 
2. `$ export FLASK_ENV=development`
3. `$ flask run`

