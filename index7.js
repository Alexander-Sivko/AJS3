    "use script"
    
    // 7 //

    const array = ['value', () => 'showValue'];

    const value = array[0];
    const showValue = array[1];

    alert(value); // має бути виведено 'value'
    alert(showValue());  // має бути виведено 'showValue'