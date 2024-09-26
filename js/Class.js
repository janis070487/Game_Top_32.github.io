
function GeneratorPath(nameImg, folder, format)
  {
    var file = new Array(nameImg.length);
    for(let i = 0; i < nameImg.length; i++)
      {
        file[i] = folder + nameImg[i] + "." + format;
      }
      return file;
  }


  function SetSize()
  {
    if(typeDevice == "smart")
    {
      return (hh / 2);
      //console.log(img.style.height);
    }else
    {
      return (hh - 120);
      //console.log(img.style.height);
    }
  }



class Slide
{
  Id = "";
  AddFunctionToSlide(FunctionName)
  {
    for(let i = 0; i < this.idImg.length; i++)
    {
      var element = document.getElementById(this.idImg[i]);
      element.setAttribute("onclick", FunctionName);
      //document.getElementById(this.idImg[i]);
    }
  }
  //________________________
  AddAtribute(atributName, atributValue)

  {

    for(let i = 0; i < this.idImg.length; i++)
    {
      var element = document.getElementById(this.idImg[i]);
      element.setAttribute(atributName, atributValue);
    }
  }
  //________________________
  constructor(Id)
    {
      this.Id = Id;
      //this.idSlidehead = new Array(10);
      this.idSlidehead = this.Id + "_Head";
      this.idSlideIndicator = this.Id + "_Indicator";
      this.idSlideCarusel = this.Id + "_Carusel";

      this.aPrev = Id + "Prev";
      this.aNext = Id + "Next";
    }

   CreateSlide(arrayImgPath, heightImg, Idd)
    {
        this.idLi = new Array(arrayImgPath.length);
        this.idDiv = new Array(arrayImgPath.length);
        this.idImg = new Array(arrayImgPath.length);
        for(let i = 0; i < arrayImgPath.length; i++)
          {
            this.idLi[i]  = this.Id + "_Li_" + i;
            this.idDiv[i] = this.Id + "_Div_" + i;
            this.idImg[i] = this.Id + "_Img_" + i;
          }

        var slideHead = document.createElement('div');
        slideHead.setAttribute("id", this.idSlidehead );
        slideHead.setAttribute("class", "carousel slide");
        slideHead.setAttribute("data-ride", "carusel");
        let iddd = this.Id;
        document.getElementById(iddd).appendChild(slideHead);

        var slideIndicator = document.createElement('ol');
        slideIndicator.setAttribute("class", "carousel-indicators");
        slideIndicator.setAttribute("id", this.idSlideIndicator);
        document.getElementById(this.idSlidehead).appendChild(slideIndicator);
        for(let i = 0; i < arrayImgPath.length; i++)
          {
            if(i === 0)
              {
                const node = document.createElement("li");
                node.setAttribute("data-target", "#" + this.idSlidehead);
                node.setAttribute("data-slide-to", i);
                node.setAttribute("class", "active");
                document.getElementById(this.idSlideIndicator).appendChild(node);
              }else
                {
                  const node = document.createElement("li");
                  node.setAttribute("data-target", "#" + this.idSlidehead);
                  node.setAttribute("data-slide-to", i);
                  document.getElementById(this.idSlideIndicator).appendChild(node);
                }
          }

          var imghead = document.createElement('div');
          imghead.setAttribute("class", "carousel-inner");
          imghead.setAttribute("id", this.idSlideCarusel );
          document.getElementById(this.idSlidehead).appendChild(imghead);

          for(let i = 0; i < arrayImgPath.length; i++)
            {
               if(i === 0)
                {
                  const node = document.createElement("div");
                  node.setAttribute("id", this.idDiv[i]);
                  node.setAttribute("class", "carousel-item active");
                  document.getElementById(this.idSlideCarusel).appendChild(node);

                      const node1 = document.createElement("img");
                      node1.setAttribute("class", "d-block img-fluid");
                      node1.setAttribute("src", arrayImgPath[i]);
                      node1.setAttribute("id", this.idImg[i]);
                      node1.setAttribute("alt", "Nav");
                      document.getElementById(this.idDiv[i]).appendChild(node1);

                      var img = document.getElementById(this.idImg[i]);
                      var img_w =img.clientWidth;
                      var img_h = img.clientHeight;
                      img.style.height = heightImg  + "px";
                }
                else
                {
                  const node = document.createElement("div");
                  node.setAttribute("id", this.idDiv[i]);
                  node.setAttribute("class", "carousel-item");
                  document.getElementById(this.idSlideCarusel).appendChild(node);

                            const node1 = document.createElement("img");
                            node1.setAttribute("class", "d-block img-fluid");
                            node1.setAttribute("src", arrayImgPath[i]);
                            node1.setAttribute("id", this.idImg[i]);
                            node1.setAttribute("alt", "Nav");
                            document.getElementById(this.idDiv[i]).appendChild(node1);

                            var img = document.getElementById(this.idImg[i]);
                            var img_w =img.clientWidth;
                            var img_h = img.clientHeight;
                            img.style.height = heightImg + "px";
                }
            }
            var aPrev = document.createElement('a');
            aPrev.setAttribute("class", "carousel-control-prev");
            aPrev.setAttribute("href", "#" + this.idSlidehead);
            aPrev.setAttribute("id", this.aPrev);
            aPrev.setAttribute("role","button");
            aPrev.setAttribute("data-slide","prev");
            document.getElementById(this.idSlidehead).appendChild(aPrev);

            var prevSpan1  = document.createElement('span');
            prevSpan1.setAttribute("class", "carousel-control-prev-icon");
            prevSpan1.setAttribute("aria-hidden", "true");
            document.getElementById(this.aPrev).appendChild(prevSpan1);

            var prevSpan2  = document.createElement('span');
            prevSpan2.setAttribute("class", "sr-only");

            document.getElementById(this.aPrev).appendChild(prevSpan2);
            //_____________________________________________________________________
            var aNext = document.createElement('a');
            aNext.setAttribute("class", "carousel-control-next");
            aNext.setAttribute("href", "#" + this.idSlidehead);
            aNext.setAttribute("id", this.aNext);
            aNext.setAttribute("role","button");
            aNext.setAttribute("data-slide","next");
            document.getElementById(this.idSlidehead).appendChild(aNext);

            var nextSpan1  = document.createElement('span');
            nextSpan1.setAttribute("class", "carousel-control-next-icon");
            nextSpan1.setAttribute("aria-hidden", "true");
            document.getElementById(this.aNext).appendChild(nextSpan1);

            var nextSpan2  = document.createElement('span');
            nextSpan2.setAttribute("class", "sr-only");

            document.getElementById(this.aNext).appendChild(nextSpan2);
      }
      DeleteSlide()
        {
          const element = document.getElementById(this.idSlidehead);
          element.remove();
        }
  }
  //______________    Genere random failu sarakstu      ________________________

  function GetFilepathTop(how){
  var skaitlis = new Array(how);
  for(var i = 0; i < skaitlis.length; i++)
    {
      skaitlis[i] = skaitlis.length + 2;
    }

  for(let i = 0; i < skaitlis.length; i++)
    {
      let status = true;
      while(status)
        {
            let rand = Math.floor(Math.random() * skaitlis.length);
            for(let a = 0; a < skaitlis.length; a++)
                {
                    if(skaitlis[a] === rand)
                      {
                          break;
                      }
                    if((a === (skaitlis.length - 1)) && (skaitlis[a] !== rand))
                      {
                        skaitlis[i] = rand;
                        status = false;
                      }
                }
        }
  }
  return skaitlis;
  }

  //_____________________________________________________________________________________________
  ///  SetSize()
    //  {
        //alert("ok");
    //    var img = document.getElementById(id);
    //    var img_w =img.clientWidth;
    //    var img_h = img.clientHeight;
    //    if(typeDevice == "smart")
    //    {
    //      img.style.height = (hh / 2) + "px";
          //console.log(img.style.height);
    //    }else
    //    {
    //      img.style.height = (hh - 120) + "px";
          //console.log(img.style.height);
    //    }
    //  }
