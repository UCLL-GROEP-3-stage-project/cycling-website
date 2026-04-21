public class Stage(string name)
{
  public string Name {get; set;} = name;
  public list[Cyclist] Positions {get; set;}
  //public list[Cyclist] Vests {get; set;}
  //public list[Cyclist] DNF {get; set;}

  //public int year {get; set;} only needed if i use scraper

}