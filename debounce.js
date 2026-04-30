const debounce = (fn, delay) => {
    let timer;
    return function(...args){
        clearTimeout(timer);

        timer = setTimeout(()=>{
            fn.apply(this, args)
        }, delay)
    }
}

const x = debounce(()=>{
    console.log('debounce-----')
}, 5000)

x()
x()
x()

/* With every x call , same timer is being used as it's value is preserved in closures. So same timer is being cleared out and new timer is assigned with every call */
