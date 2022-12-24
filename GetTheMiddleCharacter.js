function getMiddle(s)
{
  sSize = s.length;
  return sSize % 2 == 0 ? s[ (sSize / 2) - 1] + s[sSize / 2] : s[ (sSize - 1) / 2];
}
