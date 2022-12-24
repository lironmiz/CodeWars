// sorter solution
function solution(str, ending)
{
  return str.endsWith(ending);
}
// my solution
function solution(str, ending)
{
  if(ending.length > str)
  {
     return false;
  }
  let startIndex = (str.length - 1) - (ending.length - 1);
  let endingIndex = 0;
  for(let i = startIndex ; i < str.length; i++)
  {
      if(ending[endingIndex] != str[i])
      {
        return false;    
      }
      endingIndex++;
  }
  return true;
}
