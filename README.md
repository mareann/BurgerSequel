# burgerSequel

# burger logger app utilizing MySQL, Node, Express, Handlebars, Bootstrap and sequelize

* Uses the MVC design pattern for files
* uses Node and MySQL to query and route data in the app 
* Uses Handlebars to generate the HTML.

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
	
## To Make a Burger   	  
* User submits a burger's name in the `Make-Da-Burger` section
* Selects `Make-Da-Burger` button 
* The app will display the burger on the left side in the `Burgers that are ready!` section waiting to be devoured.

## To Devour Burger
* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side to `Burgers that are devoured!` section.

* The app stores every burger in a database, whether devoured or not.
          
##### Below is a sample screen
![screen](assets/img/burger_screen.jpg)

#### Directory structure

Files and directories structure:

```
.
= config
=   config.json
= 
= controllers
=   burgers_controller.js
=
= db
=   schema.sql
= 
= models
=   burger.js
=   index.js
= 
= node_modules
= 
= package.json
=
=  public
=    assets
=      css
=        burger_style.css
=      img
=            burger.png
=            burgerSmall.png
=            chef.png
=            trash.png
=            burger_screen.jpg
= server.js
