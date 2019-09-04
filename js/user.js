let users = [];
let currentUser = null;

function handleSignUp(form) {
    let user = {
        'firstName': form.firstName.value,
        'lastName': form.lastName.value,
        'email': form.email.value,
        'password': form.password.value,
        'phone': form.phone.value,
        'streetAddress': form.streetAddress.value,
        'postalArea': form.postalArea.value,
        'postalCode': form.postalCode.value
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    location.href = '#listings';
}

function handleSignIn(form) {
    let user = users.find(function (user) {
        return user.email === form.email.value;
    });
    if (user && user.password === form.password.value) {
        currentUser = user;
        updateNavUser();
        location.href = '#listings';
    } else {
        currentUser = null;
        alert('Failed to sign in.')
    }
}

function handleSignOut() {
    currentUser = null;
    updateNavUser();
    location.href = '#listings';
}

function updateNavUser() {
    if (currentUser) {
        document.getElementById('navUser').innerHTML = `${currentUser.firstName} ${currentUser.lastName} | <a href="#" onclick="handleSignOut()">Sign out</a>`;
    } else {
        document.getElementById('navUser').innerHTML = '<a href="#signin">Sign in</a> or <a href="#signup">Sign up</a>'
    }
}
