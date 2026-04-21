public class Race(string name)
{
  public string Name {get; set;} = name;
  public list[Stage] Stages {get; set;}
  public list[Cyclist] Cyclists {get; set;}

  //public int year {get; set;} only needed if i use scraper

}


