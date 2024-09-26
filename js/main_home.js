var ck = 6;
var albums_1 = new Slide("albums_1");
var albums_2 = new Slide("albums_2");
var albums_3 = new Slide("albums_3");

var foto = new Array(ck);
function GetRandomFail(kuru, cik, path, format)
{
  var result = new Array(cik);
  for(let i = 0; i < cik; i++)
  {
     let x = Math.floor(Math.random() * kuru.length);
     let y = Math.floor(Math.random() * kuru[x].length);
     result[i] = kuru[x][y];
     result[i] = path + result[i] + "." + format;
  }
  return result;
}

foto[0] = GetRandomFail(list, ck, "foto/Album_1/", "png");
foto[1] = GetRandomFail(list2, ck, "foto/Album_2/", "png");
foto[2] = GetRandomFail(list3, ck, "foto/Album_3/", "png");
/*
 foto[0] = list[(Math.floor(Math.random() * 32))];
 foto[1] = list2[(Math.floor(Math.random() * 32))];
 foto[2] = list3[(Math.floor(Math.random() * 32))];

 for(let i = 0; i < foto[0].length; i++)
 {
   foto[0][i] = "foto/Album_1/" + foto[0][i] + ".png";
 }

 for(let i = 0; i < foto[1].length; i++)
 {
    foto[1][i] = "foto/Album_2/" + foto[1][i] + ".png";
 }
 for(let i = 0; i < foto[2].length; i++)
 {
    foto[2][i] = "foto/Album_3/" + foto[2][i] + ".png";
 }
*/

 albums_1.CreateSlide(foto[0], 350, "album_1");
 albums_2.CreateSlide(foto[1], 350, "album_2");
 albums_3.CreateSlide(foto[2], 350, "album_3");


console.log(foto);

/*
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
*/
