import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://tse4.mm.bing.net/th/id/OIP.ftYyDUCbXleMsadFbsYDIgHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.5&pid=1.7'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
