function duplicateCount(text)
{
    let charCount = {};
    let count = 0;

    text.toLowerCase().split('').forEach(function(char){
        charCount[char] = charCount[char] + 1 || 1;
    });

    for (let char in charCount)
    {
        if (charCount[char] > 1)
        {
            count++;
        }
    }
    return count;
}
