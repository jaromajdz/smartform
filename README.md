First properly working version of formated input.

The app keep the caret position in the proper place, 
ommit the "-" or multiple of them for now (in the future declared character).
Allowed to use delete, backspace (single character or selected characters). 
Passed only allowed characters.


Pattern example passed by prop format="***--***"

Allowed characters - example regex as prop pat=/^[0-9]/ ("^" to eliminate event.key as F12 and similar)


Install:

npm install 
into the folder of app.



 
