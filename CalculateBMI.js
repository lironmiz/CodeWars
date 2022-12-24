function bmi(weight, height) 
{
  let bmi = weight/Math.pow(height,2) 
  
  if (result <= 18.5)
  {
    return "Underweight";
  } else if (result <= 25)
  {
    return "Normal";
  } else if (result <= 30)
  {
    return "Overweight";
  } else
  {
    return "Obese";
  } 
}
