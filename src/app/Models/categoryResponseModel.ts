import { Category } from './category';
import { responseModel } from './responseModel';

export interface CategoryResponseMode extends responseModel{
    data:Category[];
}