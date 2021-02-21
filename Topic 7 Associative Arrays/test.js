function main(str) {
  let keyCounts = {};
  let topKey = {};
  let spltStr = str.split(' ').
  spltStr.forEach(function(item, val) {
    keyCounts[item] = keyCounts[item] + 1 || 1;
    if (keyCounts[item] % 2 !== 0) {
      topKey = item;
    } 
  });
  console.log(topKey);
}

// let str = 'Java C# Php PHP Java PhP 3 C# 3 1 5 C#';
// console.log(str.charAt([str.length - 1]))

main('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
    // console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));