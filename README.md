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

## Running for development
1.  Run

    `$ pipenv shell`
   
    `$ export FLASK_ENV=development`
   
    `$ flask run`
