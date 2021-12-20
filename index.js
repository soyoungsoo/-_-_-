function solution(brown, yellow) {
    let carpet = brown + yellow;
    
    for (let x = 3; x < carpet; x++) {
        for (let y = 1; y <= x; y++) {
            if (x * 2 + y * 2 - 4 === brown) {
                if (x * y == carpet) return [x, y];
            }
        }
    }
    
    return [];
}

// solution(14, 4) // 6, 3
