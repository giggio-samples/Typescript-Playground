import m = module("./mamifero");
export class Macaco extends m.Mamifero {
	pula(){
		console.log("pulou");
	}
}