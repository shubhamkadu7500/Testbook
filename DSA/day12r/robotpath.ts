    function robotpaths(n, m, i, j, psf: string){
        if (i == n && j == m){
            console.log(psf);
            return;
        }
        if(i > n || j > m) return;

        robotpaths(n,m,i+1,j,psf+"v");
        // vertically
        robotpaths(n,m,i,j+1,psf+"h");
        // horizontally
    }
    robotpaths(3,3,1,1,"");