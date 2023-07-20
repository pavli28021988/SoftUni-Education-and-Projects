function solve(nameBand,nameAlbum,songName){


    let time = (nameAlbum.length * nameBand.length) * songName.length / 2;
    let rotation = Math.ceil(time / 2.5);
    console.log(`The plate was rotated ${rotation} times`);

}
solve('Black Sabbath','Paranoid','War Pigs');
solve('Rammstein','Sehnsucht','Engel');