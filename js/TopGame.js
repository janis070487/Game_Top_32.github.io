class TopGame
{
  //_____________________________________________________________________
  constructor(list, path, fileExtension)
  {
    if( list.length === 32)
      {
        this.WINER = false;
        this.viner12 = false;
        this.viner34 = false;
        this.pusFinalu1 = true;
        this.pusFinalu2 = false;

          this.isFirst = true;
          this.lastRound = false;
          this.kurs = 0;
          this.arrray = 0;
          this.counter = 0;
          this.isLast = false;
          this.statuss = 32;
          this.dalibnieki = new Array(2);
          this.randomNumber  =  new Array(5);

          this.Path = new Array(5);
          this.randomNumber[0] = this.RandomNumber(32);
          this.randomNumber[1] = this.RandomNumber(16);
          this.randomNumber[2] = this.RandomNumber(8);
          this.randomNumber[3] = this.RandomNumber(4);
          this.randomNumber[4] = this.RandomNumber(4);

          this.Path[0] = new Array(32);
          this.Path[1] = new Array(16);
          this.Path[2] = new Array(8);
          this.Path[3] = new Array(4);
          this.Path[4] = new Array(4);

          this.vieta12 = new Array(2);
          this.vieta34 = new Array(2);
          this.result = new Array(4);

          this.round = this.Path[this.arrray.length];

          for(let i = 0; i < list.length; i++)
            {
              this.Path[0][i] = this.GeneratorPath(list[this.randomNumber[0][i]], path, fileExtension);
            }
          this.dalibnieki[0] = this.Path[0][0];
          this.dalibnieki[1] = this.Path[0][1];
          }
          else
            {
              return this.dalibnieki;
                alert("Saraksts netbilst vajadzīgajam sarakstam");
            }
      }
  //_____________________________________________________________________
ResetThisTopGame()
{
    this.WINER = false;
    this.viner12 = false;
    this.viner34 = false;
    this.pusFinalu1 = true;
    this.pusFinalu2 = false;

    this.isFirst = true;
    this.lastRound = false;
    this.kurs = 0;
    this.arrray = 0;
    this.counter = 0;
    this.isLast = false;
    this.statuss = 32;
    this.list = list;

    delete this.dalibnieki;
    delete this.randomNumber;
    delete this.Path;
    delete this.vieta12;
    delete this.vieta34;
    delete this.result;

    this.dalibnieki = new Array(2);
    this.randomNumber  =  new Array(5);

    this.Path = new Array(5);
    this.randomNumber[0] = this.RandomNumber(32);
    this.randomNumber[1] = this.RandomNumber(16);
    this.randomNumber[2] = this.RandomNumber(8);
    this.randomNumber[3] = this.RandomNumber(4);
    this.randomNumber[4] = this.RandomNumber(4);

    this.Path[0] = new Array(32);
    this.Path[1] = new Array(16);
    this.Path[2] = new Array(8);
    this.Path[3] = new Array(4);
    this.Path[4] = new Array(4);

    this.vieta12 = new Array(2);
    this.vieta34 = new Array(2);
    this.result = new Array(4);

    this.round = this.Path[this.arrray.length];

    for(let i = 0; i < list.length; i++)
      {
        this.Path[0][i] = this.GeneratorPath(list[this.randomNumber[0][i]], "foto/", "png");
      }

    this.dalibnieki[0] = this.Path[0][0];
    this.dalibnieki[1] = this.Path[0][1];
}
  //_____________________________________________________________________
  GetNext(viner)
    {
      if(this.isFirst)
          {
              this.kurs = 2;
              this.isFirst = false;
              return this.dalibnieki;
          }
      if(this.isLast)
          {
              this.isLast = false;
              this.Path[this.arrray + 1][this.randomNumber[this.arrray + 1][this.counter]] = this.dalibnieki[viner];
              if(this.arrray === this.Path.length - 3)
                {
                    this.lastRound = true;
                }
              this.arrray++;
              this.statuss = this.statuss / 2;
              console.log(this.statuss);
              this.counter = 0;
              this.kurs = 0;
            }
    //___
      if(!this.lastRound)
          {
              this.Path[this.arrray + 1][this.randomNumber[this.arrray + 1][this.counter]] = this.dalibnieki[viner];
              this.counter++;
              this.dalibnieki[0] = this.Path[this.arrray][this.kurs];
              this.dalibnieki[1] = this.Path[this.arrray][this.kurs + 1];

              if(this.kurs === (this.Path[this.arrray].length - 2) )
                  {
                      this.isLast = true;
                      return this.dalibnieki;
                  }
                  else
                  {
                      this.kurs += 2;
                      return this.dalibnieki;
                  }
            }
      else
        {
            if(this.WINER)
              {
                  this.result[0] = this.dalibnieki[viner];
                  if(viner === 0)
                      {
                          this.result[1] = this.dalibnieki[1];
                      }
                  else
                      {
                          this.result[1] = this.dalibnieki[0];
                      }
                      this.statuss = 2;
                      console.log(this.statuss);
                  this.dalibnieki = null;
                  this.WINER = false;
                  return this.dalibnieki;
              }

            if(this.viner12)
              {
                  this.result[2] = this.dalibnieki[viner];
                  if(viner === 0)
                      {
                          this.result[3] = this.dalibnieki[1];
                      }
                  else
                      {
                          this.result[3] = this.dalibnieki[0];
                      }
                  this.viner12 = false;
                  this.WINER = true;
                  this.dalibnieki[0] = this.vieta12[0];
                  this.dalibnieki[1] = this.vieta12[1];
                  return this.dalibnieki;
              }

          if(this.viner34)
              {
                  this.vieta12[1] = this.dalibnieki[viner];
                  if(viner === 0)
                    {
                        this.vieta34[1] = this.dalibnieki[1];
                    }
                  else
                    {
                        this.vieta34[1] = this.dalibnieki[0];
                    }
                  this.statuss = 3;
                  console.log(this.statuss);
                  this.dalibnieki[0] = this.vieta34[0];
                  this.dalibnieki[1] = this.vieta34[1];
                  this.viner34 = false;
                  this.viner12 = true;
                  return this.dalibnieki;
              }
          if(this.pusFinalu1)
              {
                  this.dalibnieki[0] = this.Path[3][this.randomNumber[4][0]];
                  this.dalibnieki[1] = this.Path[3][this.randomNumber[4][1]];
                  this.pusFinalu1 = false;
                  this.pusFinalu2 = true;
                  return this.dalibnieki;
              }
          if(this.pusFinalu2)
              {
                  this.vieta12[0] = this.dalibnieki[viner];
                  if(viner === 0)
                      {
                          this.vieta34[0] = this.dalibnieki[1];
                      }
                  else
                      {
                          this.vieta34[0] = this.dalibnieki[0];
                      }
                  this.dalibnieki[0] = this.Path[3][this.randomNumber[4][2]];
                  this.dalibnieki[1] = this.Path[3][this.randomNumber[4][3]];
                  this.pusFinalu2 = false;
                  this.viner34 = true;
                  return this.dalibnieki;
              }
    }
    //___
  }

  //_____________________________________________________________________
    GeneratorPath(nameImg, folder, format)
      {
        var file = new Array(nameImg.length);
        for(let i = 0; i < nameImg.length; i++)
          {
            file[i] = folder + nameImg[i] + "." + format;
          }
          return file;
      }
//_____________________________________________________________________
    RandomNumber(how){
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
//_____________________________________________________________________
Getstatus()
{
  return this.status;
}
}
