function positiveSum(arr)
{
  var sumPositive = 0;    
  for (i = 0; i < arr.length; i++)
  {    
    if (arr[i] > 0)
    {                   
      sumPositive += arr[i];                 
    }
  }
  return sumPositive;                         
}
