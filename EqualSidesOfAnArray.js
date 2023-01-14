function findEvenIndex(arr)
{
  for (let i = 0; i < arr.length; i++)
  {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j++)
    {
      leftSum += arr[j];
    }
    for (let k = i + 1; k < arr.length; k++)
    {
      rightSum += arr[k];
    }
    if (leftSum === rightSum)
    {
      return i;
    }
  }
  return -1;
}
