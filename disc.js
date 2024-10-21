function calculateDiscount() {
    const genre = document.getElementById('genre').value;
    const year = parseInt(document.getElementById('year').value);
    const status = document.getElementById('status').value;

    let discount = 0;

    if (genre === 'Science Fiction') {
        if (year < 2000) {
            if (status === 'in stock') {
                discount = 20;
            } else {
                discount = 15;
            }
        } else {
            if (status === 'in stock') {
                discount = 10;
            } else {
                discount = 5;
            }
        }
    } else if (genre === 'Romance') {
        if (year < 2010) {
            if (status === 'in stock') {
                discount = 25;
            } else {
                discount = 20;
            }
        } else {
            if (status === 'in stock') {
                discount = 15;
            } else {
                discount = 10;
            }
        }
    } else { // Other genres
        if (year < 2005) {
            if (status === 'in stock') {
                discount = 30;
            } else {
                discount = 25;
            }
        } else {
            if (status === 'in stock') {
                discount = 20;
            } else {
                discount = 15;
            }
        }
    }

    // Display result
    document.getElementById('result').innerText = `The discount rate for this book is ${discount}%.`;
}
