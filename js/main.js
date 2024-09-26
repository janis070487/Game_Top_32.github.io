
var cont = new RenderBootstrap();
cont.AddCotainer("Top32", "sakums");
cont.AddClass("Top32","container-fluid");
cont.AddRow("RindaTop32", "Top32");
cont.AddCol("slide1", "RindaTop32", true);
cont.AddCol("slide2", "RindaTop32", true);
cont.SetColSize("slide1", "col", "12");
cont.SetColSize("slide1", "lg", "6");
cont.SetColSize("slide2", "col", "12");
cont.SetColSize("slide2", "lg", "6");
cont.ShowElement();
console.log(cont);


var topGame = new TopGame(list, "foto/Album_1/", "png");
var dalibnieki = topGame.GetNext();
//console.log(dalibnieki);
var slide1 = new Slide("slide1");
slide1.CreateSlide(dalibnieki[0], SetSize(1), "slide1");
//console.log(slide1);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
slide1.AddFunctionToSlide("Ok(0)");
//slide1.AddFunctionToSlide("rad()");



var slide2 = new Slide("slide2");
slide2.CreateSlide(dalibnieki[1], SetSize(2), "slide2");
//console.log(slide2);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
slide2.AddFunctionToSlide("Ok(1)");
//slide2.AddFunctionToSlide("Del()");


function Ok(noKura)
{
dalibnieki = topGame.GetNext(noKura);
if(dalibnieki == null)
 {
   slide1.DeleteSlide();
   slide2.DeleteSlide();
   return 0;
 }
slide1.DeleteSlide();
slide2.DeleteSlide();
slide1.CreateSlide(dalibnieki[0], SetSize(), "slide1");
slide1.AddFunctionToSlide("Ok(0)");
slide2.CreateSlide(dalibnieki[1], SetSize(), "slide2");
slide2.AddFunctionToSlide("Ok(1)");
}


/*
function rad(){
  cont.DeleteElementToDisplay("Top32");
  cont.Reset();
  cont.ShowElement();
  slide1.CreateSlide(dalibnieki[0], SetSize(1), "slide1");
  slide2.CreateSlide(dalibnieki[1], SetSize(2), "slide2");
}
function Del()
{
  cont.DeleteElementToDisplay("slide2");
//slide1.AddFunctionToSlide("Ok(0)");
}
*/





/*var content = new RenderBootstrap();
content.AddCotainer("1", "sakums1");
content.AddCotainer("2", "sakums2");
content.AddCotainer("3", "sakums3");
content.AddCotainer("4", "sakums4");
content.AddClass("2", "clas Ok");
content.AddStyle("4", "OK_Style");
content.AddRow("5","3");//
content.AddCol("col_1", "5");
content.AddCol("col_2", "5");
content.SetColSize("col_1", "lg", "5");
content.SetColSize("col_2", "md", "8");
console.log(content);
*/

/*
var topGame = new TopGame(list);
var dalibnieki = topGame.GetNext();
//console.log(dalibnieki);
var slide1 = new Slide("slide1");
slide1.CreateSlide(dalibnieki[0], SetSize(1), "slide1");
//console.log(slide1);
slide1.AddFunctionToSlide("Ok(0)");
var slide2 = new Slide("slide2");
slide2.CreateSlide(dalibnieki[1], SetSize(2), "slide2");
//console.log(slide2);
slide2.AddFunctionToSlide("Ok(1)");
function Ok(noKura)
{
dalibnieki = topGame.GetNext(noKura);
if(dalibnieki == null)
 {
   slide1.DeleteSlide();
   slide2.DeleteSlide();
   return 0;
 }
slide1.DeleteSlide();
slide2.DeleteSlide();
slide1.CreateSlide(dalibnieki[0], SetSize(), "slide1");
slide1.AddFunctionToSlide("Ok(0)");
slide2.CreateSlide(dalibnieki[1], SetSize(), "slide2");
slide2.AddFunctionToSlide("Ok(1)");
}
*/
