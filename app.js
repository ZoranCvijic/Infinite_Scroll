const addBox = document.getElementById( 'infinite-box' );
const classes = ['box', 'box2','box3','box4','box5'];

randomizeClass = Math.floor(Math.random() * classes.length);
    

let addMore = function() {
    for ( let i = 0 ; i < 5 ; i++ ){
        let box = document.createElement('div');
        box.classList.add(classes[randomizeClass]);
        addBox.appendChild(box);
    }
};

addBox.addEventListener('scroll', function(){
    if( addBox.scrollTop + addBox.clientHeight <= addBox.scrollHeight ) {
        addMore();
    }
});

addMore();

