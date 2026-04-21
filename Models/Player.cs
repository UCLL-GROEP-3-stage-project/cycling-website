public class Player(string name)
{
  public string Name {get; set;} = name;
  public int Position {get; set;}
  public list[Cyclist] Cyclists {get; set;}
  //public list[int] Score_List {get; set;}
  //public int EndScore {get; set;}
  //public Total Score {get; set;}
}