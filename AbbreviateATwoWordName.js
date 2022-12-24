function abbrevName(name)
{
   const newArray = name.split(" ");
   return (newArray[0][0] + "." + newArray[1][0]).toUpperCase();
}
