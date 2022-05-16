# Sample Angular Tic-Tac-Toe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11 & Bootstrap 5.1.3

## Algorithm

Here, this Tic Tac Toe grid is numbered each cell starting from 0. 
And checked the different index path patterns (index combinations) which a player can win.

![image](https://user-images.githubusercontent.com/7240672/168510391-e0dbcd6e-cbfd-40e6-947d-69aeab73bb62.png)



Ways to Win,


![image](https://user-images.githubusercontent.com/7240672/168510331-fadcc1cc-7001-4fbb-84a7-9e6e43fc91be.png)

To win, a player can be stepped as below,

[0,1,2], [3,4,5], [6,7,8] = As rows
[0,3,6], [1,4,7], [2,5,8] = As columns
[0,4,8], [2,4,6] = Diagonally

When a player stepped as above then he wins. 

When check each wining path, can see that, in a winning path it has 3 nodes, and all 3 nodes should have the same value.

In any way, if a player matches one of the above paths, then he wins.

This is the core concept used to develop the Algorithm. 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
