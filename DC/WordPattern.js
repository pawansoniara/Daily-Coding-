let _pattern = "abba", _s = "dog cat cat dog";

function wordPatter(pattern, s) {
    let i = 0;
    let ss = s.split('');
    while (i < pattern.length) {
        let character = pattern.charAt(i)
        if (character === 'a' && ss[i] === 'dog')
            continue;
        else if (character === 'b' && ss[i] === 'cat')
            continue;
        else
            return false
    }

    return true
}

wordPatter(_pattern, _s);