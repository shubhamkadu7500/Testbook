function robotpaths(n, m, i, j, psf: string){
    if (i == n && j == m){
        console.log(psf);
        return;
    }
    if(i > n || j > m) return;

    let one = robotpaths(n,m,i+1,j,psf+"v");
    // vertically
    let two = robotpaths(n,m,i,j+1,psf+"h");
    // horizontally
    return one+two;
}
robotpaths(3,3,1,1,"");