const ourCommand = () => {
    let src;         
    document.body.addEventListener('mouseover', (event) => {
        if (event.target.closest('.command__photo')){
            src = event.target.src;
            event.target.src = event.target.dataset.img;
            event.target.dataset.img = src;
        }  
    });

    document.body.addEventListener('mouseout', (event) => {
        if (event.target.closest('.command__photo')){
            src = event.target.src;
            event.target.src = event.target.dataset.img;
            event.target.dataset.img = src;
        }  
        
    
    });
    
};

export default ourCommand;