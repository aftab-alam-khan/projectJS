setTimeout(() => {
    console.log('Inside 1 setTimeOut');
    setTimeout(() => {
        console.log('Inside 2 setTimeOut');
        setTimeout(() => {
            console.log('Inside 3 setTimeOut');
            setTimeout(() => {
                console.log('Inside 4 setTimeOut');
                setTimeout(() => {
                    console.log('Inside 5 setTimeOut');
                    setTimeout(() => {
                        console.log('Inside 6 setTimeOut');
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
} , 1000);