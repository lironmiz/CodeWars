var isSquare = function(n)
{
  const sqrt = Math.sqrt(Math.abs(n))
  if(n < 0)
    {
      return false;
    }
  return  sqrt ==  Math.floor(sqrt); 
}
