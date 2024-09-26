class RenderBootstrap
{
//__________________________________________________
  constructor()
  {
    this.gridSistem = new Array(3);
    this.container = new Array(0);
    this.row = new Array(0);
    this.col = new Array(0);
    this.gridSistem[0] = this.container;
    this.gridSistem[1] = this.row;
    this.gridSistem[2] = this.col;
  }
  //elementam pievieno klasi
//__________________________________________________
  AddClass(howName, _class)
  {
      var result = this.ToFind(howName, this.gridSistem);
      if(result !== null)
      {
      this.gridSistem[result[0]][result[1]]._class.push(_class);
      }else
      {
      console.log('name not find');
      }
  }
  //__________________________________________________
  AddStyle(howName, _class)
  {
var result = this.ToFind(howName, this.gridSistem);
      if(result !== null)
      {
      this.gridSistem[result[0]][result[1]]._style.push(_class);
      }else
      {
      console.log('name not find');
      }
  }
//__________________________________________________
  AddAtribute(howName, atribute, atributeValue)
  {

     var kur = ToFind(howName);
     if(kur !== null)
     {
       this.gridSistem[kur[0]][kur[1]]._atribute.push(atribute);
       this.gridSistem[kur[0]][kur[1]].atributeValue.push(atributeValue);
     }else
     {
       console.log("Neeksiste tads elements");
     }

  }
  //__________________________________________________
  ToFind(name)
  {
    var kur = new Array(2);
      for(let i = 0; i < 3; i++)
        {
          for(let a = 0; a < this.gridSistem[i].length; a++)
            {
                if(this.gridSistem[i][a].name === name)
                  {
                      kur[0] = i;
                      kur[1] = a;
                      return kur;
                  }
            }
        }
    return null;
  }
  //__________________________________________________
  CheckAlreadyOne(faindName)
  {

    for(let i = 0; i < this.gridSistem.length; i++)
    {
      for(let a = 0; a < this.gridSistem[i].length; a++)
      {
        if(this.gridSistem[i][a].name === faindName)
        {
          return true;
        }
      }
    }

    return false;

  }
  //__________________________________________________
  AddCotainer(name ,toWhom)
  {
    if(!this.CheckAlreadyOne(name))
    {

    var newElement = new Element(name ,toWhom,  "div");
    this.gridSistem[0].push(newElement);
    }
    else
    {
      console.log("Error. tads vards jau aizņemts");
    }
  }
  //__________________________________________________
  AddRow(name, toWhom)
  {

    var result = this.ToFind(toWhom);
    if(!(this.CheckAlreadyOne(name)) && (this.CheckAlreadyOne(toWhom)) && (result[0] === 0))
    {
      var element = new Row(name, toWhom);
      this.gridSistem[1].push(element);
    }
    else
    {
      console.log("Error. tads vards jau aizņemts vai kur vēlaties pievienot tāda elementa neeksiste");
    }
  }
  //__________________________________________________
  AddCol(name, toWhom, iscenter)
  {
      var result = this.ToFind(toWhom);
    if(!(this.CheckAlreadyOne(name)) && (this.CheckAlreadyOne(toWhom)) && (result[0] === 1))
    {
      var element = new Col(name, toWhom);
      element.iscenter = iscenter;
      this.gridSistem[2].push(element);
    }
    else
    {
      console.log("Error. tads vards jau aizņemts vai kur vēlaties pievienot tāda elementa neeksiste");
    }
  }

//__________________________________________________
  SetColSize(forWhichRow, whicParameter, value)
  {

    var result = this.ToFind(forWhichRow);
    if((result !== null) && (result[0] === 2))
    {
    //result[0] = 2;

    switch(whicParameter)
    {
      case "col":
          this.gridSistem[result[0]][result[1]].col = whicParameter + "-" + value + " ";
        break;

      case "sm":
           this.gridSistem[result[0]][result[1]].sm = "col-" + whicParameter + "-" + value + " ";
        break;

      case "md":
           this.gridSistem[result[0]][result[1]].md = "col-" + whicParameter + "-" + value + " ";
        break;
      case "lg":
           this.gridSistem[result[0]][result[1]].lg = "col-" + whicParameter + "-" + value + " ";
        break;
      case "xl":
          this.gridSistem[result[0]][result[1]].xl = "col-" + whicParameter + "-" + value + " ";
          break;
    }
      }else{
      console.log("this col not exsist");
      }
  }
  //__________________________________________________
  ShowElement()
  {

    for(let i = 0; i < this.gridSistem.length; i++)
    {
      for(let a = 0; a < this.gridSistem[i].length; a++)
      {
        this.gridSistem[i][a].Show();
      }
    }
  }
  Reset()
  {
      for(let i = 0; i < this.gridSistem.length; i++)
      {
        //alert("ok");
        //console.log(this.gridSistem[i].length);
        for(let a = 0; a < this.gridSistem[i].length; a++)
        {
  //alert("ok");
          this.gridSistem[i][a].Reset();
        }
      }
  }
  None()
  {

  }
  DeleteElementToDisplay(name)
  {
    ///if(this.CheckAlreadyOne(name))
  //  {
      const element = document.getElementById(name);
      element.remove();
  //  }else
  //    {
    //    console.log("Nevar izdzest elementu kura neeksiste");
    //  }
    }

  DeleteAllToDisplay()
  {
     for(let i = 0; i < this.gridSistem[0].length; i++)
     {
       const element = document.getElementById(this.gridSistem[0][i].name);
       element.remove();
     }
  }
  //__________________________________________________
}
//__________________________________________________
//__________________________________________________

class Row
{
  //__________________________________________________v
  constructor(name, parentName)
  {
    this.name = name;
    this.parentName = parentName;
    this._classResult = "";
    this._class = new Array(0);
    this._class.push("row ");
    this._atribute = new Array(0);
    this._atributeValue = new Array(0);
    this._style = new Array(0);
  }
  //__________________________________________________
  Show()
  {
    var element = document.createElement('div');
    element.setAttribute("id", this.name);

    for(let i = 0; i < this._class.length; i++)
      {
        this._classResult = this._classResult + this._class[i];
      }

    element.setAttribute("class", this._classResult);

    for(let i = 0; i < this._atribute.length; i++)
      {
        element.setAttribute(this._atribute[i], this._atributeValue[i]);
      }
        document.getElementById(this.parentName).appendChild(element);
  }
//__________________________________________________
  None()
  {

  }
  Reset()
  {
    this._classResult = "";
  }
  DeleteToDisplay()
  {

  }
}

//__________________________________________________
//__________________________________________________

class Col
{
//__________________________________________________
  constructor(name, parentName)
  {

    this.col = "";
    this.sm = "";
    this.md = "";
    this.lg = "";
    this.xl = "";

    this.isCenterId = "";
    this.iscenter;
    this.name = name;
    this.parentName = parentName;
    this._classResult = "";
    this._class = new Array(0);
    //this._class.push("col ");
    this._atribute = new Array(0);
    this._atributeValue = new Array(0);
    this._style = new Array(0);

  }
  //__________________________________________________
  SetGridClass()
  {
    if(this.col !== ""){this._class.push(this.col);}
    if(this.sm !==  ""){this._class.push(this.sm);  }
    if(this.md !==  ""){this._class.push(this.md); }
    if(this.lg !==  ""){this._class.push(this.lg); }
    if(this.xl !==  ""){this._class.push(this.xl); }
  }
  Show()
  {
    if(this.iscenter)
    {
      this.isCenterId = this.name;
      this.name = this.name + "_";

    }

    var element = document.createElement('div');
    element.setAttribute("id", this.name);
    this.SetGridClass();
    for(let i = 0; i < this._class.length; i++)
      {
        this._classResult = this._classResult + this._class[i];
      }

    element.setAttribute("class", this._classResult);
    for(let i = 0; i < this._atribute.length; i++)
      {
        element.setAttribute(this._atribute[i], this._atributeValue[i]);
      }
    //console.log(this.parentName);
        document.getElementById(this.parentName).appendChild(element);
        if(this.iscenter)
        {
          var center = document.createElement('center');
          center.setAttribute("id", this.isCenterId);
          document.getElementById(this.name).appendChild(center);
        }
  }
  //__________________________________________________
  None()
  {

  }
  //__________________________________________________
  Reset()
  {
    if(this.iscenter)
    {
      this.name = this.isCenterId;
      this.isCenterId = "";
      this._classResult = "";
    }
      this._class = new Array(0);
  }
  //__________________________________________________
  DeleteToDisplay()
  {

  }
}
//__________________________________________________
//__________________________________________________


class Element
{
//__________________________________________________
  constructor(name, parentName, type)
  {
  this.name = name;
  this.type = type;
    this.parentName = parentName;
    this._class = new Array(0);
    this._classResult = "";
    this._atribute = new Array(0);
    this._atributeValue = new Array(0);
    this._style = new Array(0);
    this._style = new Array(0);
  }
  //__________________________________________________
  Show()
  {
    var element = document.createElement(this.type);
    element.setAttribute("id", this.name);

    for(let i = 0; i < this._class.length; i++)
      {
        this._classResult = this._classResult + this._class[i];
      }

    element.setAttribute("class", this._classResult);

    for(let i = 0; i < this._atribute.length; i++)
      {
        element.setAttribute(this._atribute[i], this._atributeValue[i]);
      }
        document.getElementById(this.parentName).appendChild(element);
  }
  None()
  {

  }
  //__________________________________________________
  Reset()
  {
    this._classResult = "";
  }
  //__________________________________________________
  DeleteToDisplay()
  {

  }
  //__________________________________________________
}
