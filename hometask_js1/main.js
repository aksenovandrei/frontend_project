; (function () {
    var login = prompt('Введите логин');
    if (login == 'Админ') {
        var pass = prompt('Введите пароль');
        if (pass == 'Чёрный Властелин') {
            alert('Добро пожаловать')
        }
        else if (pass == null) {
            alert('Вход отменен');
        }
        else if (pass != 'Чёрный Властелин') {
            alert('Пароль неверен');
        }

    }
    else if (login == null) {
        alert('Вход отменен');
    }
    else if (login != 'Админ') {
        alert('Я вас не знаю');
    }
})();

    // else password = prompt('Введите пароль');


    // if (login == 'Админ') {
    //
    // }
    // else if (login != 'Админ') {
    // alert('Я вас не знаю' || 'Вход отменен')
    // }
    //
    // if (password == 'Чёрный Властелин') {
    //     alert('Добро пожаловать')
    // }
    // else {alert('Пароль неверен' || 'Вход отменен')}


// var password = prompt('Введите пароль')

/**
 * Created by Andrei on 16.03.2017.
 */
