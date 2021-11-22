function show(e){
    var arr = [];
      arr = [
        [1,'Happy'], [2,'Sad'], [3,'Lucky'], [4,'Unlucky'], [5,'Bad'], [6,'Good'], [7,'Success'], [8,'Faillure'], [9,'Thin'], [10,'Fat']
        ];

        var inputval = document.getElementById('getting').value;
            arr.forEach( (ar) => {
              if(inputval == ar[0]){
                document.getElementById('result').innerHTML = ar[1]
              }
            })
}