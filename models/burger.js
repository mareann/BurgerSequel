/////////////////////////////////////////////////////////
// models/ burger.js
// Dependencies
/////////////////////////////////////////////////////////

//var sequelize = require("../controllers/burgers_controller.js");

module.exports = function(sequelize,DataTypes) {
var Burger = sequelize.define("Burger", {

    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      DEFAULT: false
    }  },
     {
      timestamps: false
    }

  );

  return Burger;
}



// Export the database functions for the controller (burgers_controller.js).
//module.exports = burger;
