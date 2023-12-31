const active = 3;

const mmcircles = document.querySelectorAll('.mncircle');
const sec = document.querySelectorAll('.sec');
const navcircle = document.querySelector('#navcircle');

mmcircles.forEach(function(val, index){
    val.addEventListener('click', function(){
        gsap.to(navcircle, {
            '--rotate-nav': (3-index-1)*10,
            ease: Expo.easeInOut,
            duration: 1,
            color: 'red'
        })

        greyout();
        gsap.to(this, {
            opacity: 1    
        });
        
        gsap.to(sec[index], {
            opacity: 1
        })
    })    
});

function greyout() {
    gsap.to(mmcircles, {
        opacity: .1
    })
    gsap.to(sec, {
        opacity: .4
    })
}

gsap.to(navcircle, {
    '--rotate-nav': 0,
    ease: Expo.easeInOut,
    duration: 2
});

gsap.to(mmcircles[active-1], {
    opacity: .5    
});

gsap.to(sec[active-1], {
    opacity: 1    
});
