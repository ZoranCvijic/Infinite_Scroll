const addBox = document.getElementById( 'infinite-box' );
const classes = ['box', 'box2','box3','box4','box5'];

    
let addMore = function() {
    randomizeClass = Math.floor(Math.random() * classes.length);
    for ( let i = 0 ; i < 1 ; i++ ){
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

