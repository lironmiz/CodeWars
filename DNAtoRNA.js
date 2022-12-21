function DNAtoRNA(dna) 
{
  let str = '';
  for (let i = 0; i < dna.length; i++)
  {
   if (dna[i] == 'T')
   {
    str += 'U';
   } 
   else
   {
    str += dna[i];
   }
 }
 return str;
}
