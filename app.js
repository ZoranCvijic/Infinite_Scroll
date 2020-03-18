const addBox = document.getElementById( 'infinite-box' );

let addMore = function() {
    for ( let i = 0 ; i < 20 ; i++ ){
        let box = document.createElement('div');
        box.classList.add('box');
        addBox.appendChild(box);
    }
};

addBox.addEventListener('scroll', function(){
    if( addBox.scrollTop + addBox.clientHeight < addBox.scrollHeight ) {
        addMore();
    }
});

addMore();