import { Ingerdient } from '../shared/ingredient.model';

export class Recipe {
  public name!: string;
  public description!: string;
  public imagePath!: string;
  public ingredients!: Ingerdient[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingerdients: Ingerdient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingerdients;
  }
}
