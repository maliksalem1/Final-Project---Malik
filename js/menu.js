/* global Phaser */

// Copyright (c) 2022 malisalem1 All rights reserved
//
// Created by: malisalem1 
// Created on: June 2022
// This is the Splash Scene

/**
 * This class is the Menu Scene.
 */

var Menu = {

    preload : function() {
    // Loading images is required so that later on we can create sprites based on the them.
    // The first argument is how our image will be refered to, 
    // the second one is the path to our file.
    game.load.image('menu', './assets/images/menu.png');
    },
        
    create: function () {
    // Add a sprite to your game, here the sprite will be the game's logo
    // Parameters are : X , Y , image name (see above) 
    this.add.sprite(0, 0, 'menu');
    }
        
};


var Menu = {

    preload : function() {
    // Load all the needed resources for the menu.
        game.load.image('menu', './assets/images/menu.png');
    },
        
    create: function () {
        
    // Add menu screen.
    // It will act as a button to start the game.
        this.add.button(0, 0, 'menu', this.startGame, this);
        
    },
        
    startGame: function () {
        
    // Change the state to the actual game.
        this.state.start('Game');
        
    }
        
};