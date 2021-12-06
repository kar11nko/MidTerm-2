

class User{
	// Пользователь
	constructor(options = {}) {
		this.key = options.key;
		this.name = options.name || "Joe";
		this.email = options.email;
		this.gender = options.gender|| "Female";
		this.data = options.data;
		this.pass = options.pass || 456;
		this.mute = options.mute || false;
		this.reasonBlock = options.reasonBlock;
	}
}

if (!JSON.parse(localStorage.getItem("Admin"))) {
	// Создание учетной записи администратора если такая отсутствует в памяти
	let adminQ = new User;
	adminQ.name = "Admin";
	adminQ.pass = "Admin1";
	localStorage.setItem("Admin", JSON.stringify(adminQ));
}
function checkAuthentication(){
	if (!JSON.parse(localStorage.getItem("authentication"))) {
	// Проверяет существует ли в памяти параметр указывающий на залогиненого пользователся.

		localStorage.setItem("authentication", JSON.stringify(false));
	}
	if (JSON.parse(localStorage.getItem("authentication"))) {
	// Проверяет залогинен ли пользователь. Если да то добавляет кнопки для пользователя
	//document.getElementById("regErr").innerHTML = "Заполните все поля";


	
	document.getElementById("aututif").innerHTML = '<hr><input class="button btn btn-warning" type="submit" value="Кабинет пользователя" onclick='+"userPage()"+' />'
	+' <input class="button btn btn-warning" type="submit" value="Выход" onclick='+"logOut()"+' />';
}

if (!JSON.parse(localStorage.getItem("authenticationAdmin"))) {
	// Проверяет существует ли в памяти параметр указывающий на залогиненого админа.
	localStorage.setItem("authenticationAdmin", JSON.stringify(false));
}
if (JSON.parse(localStorage.getItem("authenticationAdmin"))) {
	// Проверяет залогинен ли админ. Если да то добавляет кнопки для админа
	// Заменить на лог аут
	document.getElementById("aututif").innerHTML = '<hr><input class="button btn btn-warning" type="submit" value="Кабинет пользователя" onclick='+"userPage()"+' />'
	+' <input class="button btn btn-warning" type="submit" value="Кабинет Админa" onclick='+"adminPage()"+' />'
	+' <input class="button btn btn-warning" type="submit" value="Выход" onclick='+"logOutAdmin()"+' />';
}
}

function saveAccount() {
	// Сохраняет аккаунт
	console.log("saveAccount");
	let user = new User;
	var ccc = 1;
		console.log("saveAccount start");
		if (document.getElementById('nameField').value) {
			user.name = document.getElementById('nameField').value;

		}else {
			document.getElementById("nameError").innerHTML = "&#10006; Enter a name for your profile.";
			document.getElementById("nameField").classList.remove('colorDefault');
			document.getElementById("nameField").classList.add('colorbtInput');
			document.getElementById("nameError").classList.add('colorbt');
			ccc = 0;
		}
		if (document.getElementById('emailField').value==document.getElementById('confemailField').value) {
		if (validateEmail(document.getElementById('emailField').value)) {
			if (checkOriginalityEmail(document.getElementById('emailField').value)) {
				user.email = document.getElementById('emailField').value;
			}
			else{
				document.getElementById("emailError").innerHTML = "&#10006; You need to enter your email.";
				document.getElementById("emailField").classList.add('colorbtInput');
				document.getElementById("emailError").classList.add('colorbt');
				ccc = 0;
			}
		} else {
			document.getElementById("emailError").innerHTML = "&#10006; This email is invalid. Make sure it's written like example@email.com";
			document.getElementById("emailField").classList.remove('colorDefault');
			document.getElementById("emailField").classList.add('colorbtInput');
			document.getElementById("emailError").classList.add('colorbt');
			ccc = 0;
		}
		if (validateEmail(document.getElementById('confemailField').value)) {
				
				user.email = document.getElementById('confemailField').value;
		} else {
			document.getElementById("confemailError").innerHTML = "&#10006; You need to enter email.";
			document.getElementById("confemailField").classList.remove('colorDefault');
			document.getElementById("confemailField").classList.add('colorbtInput');
			document.getElementById("confemailError").classList.add('colorbt');
			ccc = 0;
		}}else{
			document.getElementById("confemailError").innerHTML = "&#10006; You must fill in both fields and fill in the same!";
			document.getElementById("emailError").innerHTML = "&#10006; You must fill in both fields and fill in the same!";
			document.getElementById("confemailField").classList.remove('colorDefault');
			document.getElementById("confemailField").classList.add('colorbtInput');
			document.getElementById("confemailError").classList.add('colorbt');
			ccc = 0;
		}


		user.gender = genderSelect('r2');

		if (document.getElementById('passwordField').value) {
			user.pass = document.getElementById('passwordField').value;
			if (user.pass<4) {
			document.getElementById("passwordError").innerHTML = "&#10006; Your password is too short.";
			document.getElementById("passwordField").classList.remove('colorDefault');
			document.getElementById("passwordField").classList.add('colorbtInput');
			document.getElementById("passwordError").classList.add('colorbt');
			ccc = 0;
		}

		}
		else{
			document.getElementById("passwordError").innerHTML = "&#10006; You need to enter a password.";
			document.getElementById("passwordField").classList.remove('colorDefault');
			document.getElementById("passwordField").classList.add('colorbtInput');
			document.getElementById("passwordError").classList.add('colorbt');
			ccc = 0;
		}
		if (document.getElementById("day").value) {}
			else{
			document.getElementById("dayError").innerHTML = "&#10006; You need to enter a password.";
			document.getElementById("dayError").classList.add('colorbt');
			ccc = 0;
		}
		if (document.getElementById("month").value) {}
				else{
				document.getElementById("monthError").innerHTML = "&#10006; You need to enter a password.";
				document.getElementById("monthError").classList.add('colorbt');
				ccc = 0;
			}
		if (document.getElementById("year").value) {}
				else{
				document.getElementById("yearError").innerHTML = "&#10006; You need to enter a password.";
				document.getElementById("yearError").classList.add('colorbt');
				ccc = 0;
			}
		
		if (document.getElementById("day").value) {
			if (document.getElementById("month").value) {
				if (document.getElementById("year").value) {
					user.data = document.getElementById("day").value+"."+ document.getElementById("month").value+"."+document.getElementById("year").value; 
				}
			}
		}


	console.log(user);
	if (ccc == 1) {
	localStorage.setItem(checkFreedom(), JSON.stringify(user));
	//document.getElementById("regErr").innerHTML = "Вы были успешно зарегистрированы";
	//setTimeout(() => window.location.href = 'main.html', 2000)
	// window.location.href = 'main.html';
	}else{
		console.log("saveAccount error");
	}

	
}
function checkOriginalityEmail(email){
	// Проверяет оригинальный ли email ввел пользователь(например при регистрации)
	console.log("checkOriginalityEmail");
	for (var i = localStorage.length; i >= 0; i--) {
		//console.log("ОПЕРАЦИЯ НОМЕР "+ i );
		var user = JSON.parse(localStorage.getItem(i));
		if (user) {
			if (email==user.email) {
				return false;
				break;
			}

		}

	}
	return true;
}

function removeAccount(key) {
	// Удаляет аккаунт используя ключ или id
	console.log(key);
	localStorage.removeItem(key);
}

function length() {
	// Возвращяет колво записей в памяти
	console.log(localStorage.length)
}

function login() {
	//Выполняет вход польователя и проверку на правильность введенных данных
	document.getElementById("logErr").innerHTML = "";
	let message;
	var name = document.getElementById('emailField').value;
	var pass = document.getElementById('passField').value;
	var admin = JSON.parse(localStorage.getItem("Admin"));
	let alertCounter= 0;
	for (var i = localStorage.length; i >= 0; i--) {
		//console.log("ОПЕРАЦИЯ НОМЕР "+ i );
		var user = JSON.parse(localStorage.getItem(i));
		if (user) {
			if (user.email === name && user.pass === pass && user.mute == true){
				if (user.reasonBlock) {
					message = "По причине: " + user.reasonBlock;
				}
				alert( "Возможно вы были заблокированы администрацией\n" + message );
				alertCounter++;
				return;
			}
			else if (user.email === name && user.pass === pass) {
				localStorage.setItem("authentication", JSON.stringify(true));
				window.location.href = 'user.html';
				return;
			}
			//console.log(user);
		}
		else if(admin.name === name && admin.pass === pass){
			console.log("admin");
			localStorage.setItem("authentication", JSON.stringify(true));
			localStorage.setItem("authenticationAdmin", JSON.stringify(true));
			window.location.href = 'admin.html';
			console.log('before');
			console.log('after');
			break;
		}else{
			console.log("лул");
		}
	}
	if(alertCounter==0){
		document.getElementById("logErr").innerHTML = "Не верный логин или пароль";
		//console.log("pass");
	}
}

function bus(boolean1) {
	// Заполняет массив пользователями из базы данных. Если принемает true то заполняет 2 таблицу для админа
	var arr= [];
	for (var i = 0; i <= localStorage.length; i++) {
//console.log("ОПЕРАЦИЯ НОМЕР "+ i );
var user = JSON.parse(localStorage.getItem(i));
if (user) {
	user.key = i;

			//console.log("one "+user);
			arr.push(user); 
		}
		else{
//console.log("pass");
}
}
console.log(arr);
tableCreateMute(arr);
if (boolean1) {
	tableCreateDel(arr);
}
}

// var table = document.querySelector('#table');
function tableCreateMute(arr){
	// Создает таблицу для Mute испльзуя массив созданный в функции bus();
	let counter =0;
	let table = document.getElementById('tableMute');
	for (let user of arr) {
		let tr = document.createElement('tr');
		tr.id = "line"+user.key;

		let td0 = document.createElement('td');
		td0.innerHTML = user.key;
		tr.appendChild(td0);

		let td1 = document.createElement('td');
		td1.innerHTML = user.name;
		tr.appendChild(td1);

		let td2 = document.createElement('td');
		td2.innerHTML = user.data;
		tr.appendChild(td2);

		let td4 = document.createElement('td');
		td4.innerHTML = user.email;
		tr.appendChild(td4);

		let td5 = document.createElement('td');
		td5.innerHTML = user.gender;
		tr.appendChild(td5);

		let td6 = document.createElement('td');
		if(user.mute)
			td6.innerHTML = '<input type="checkbox" onclick="checkFluency('+user.key+')" checked/>';
		else
			td6.innerHTML = '<input type="checkbox" onclick="checkFluency('+user.key+')"/>';
		tr.appendChild(td6);

		table.appendChild(tr);
		counter++;
	}
}

function tableCreateDel(arr){
	// Создает таблицу для удаления пользователей испльзуя массив созданный в функции bus();
	let counter =0;
	let table = document.getElementById('tableDel');
	for (let user of arr) {
		let tr = document.createElement('tr');
		tr.id = "line"+user.key;

		let td0 = document.createElement('td');
		td0.innerHTML = user.key;
		tr.appendChild(td0);

		let td1 = document.createElement('td');
		td1.innerHTML = user.name;
		tr.appendChild(td1);

		let td2 = document.createElement('td');
		td2.innerHTML = user.data;
		tr.appendChild(td2);

		let td3 = document.createElement('td');
		td3.innerHTML = user.email;
		tr.appendChild(td3);

		let td4 = document.createElement('td');
		td4.innerHTML = user.gender;
		tr.appendChild(td4);

		let td5 = document.createElement('td');
		td5.innerHTML = user.mute;
		tr.appendChild(td5);

		let td6 = document.createElement('td');
		td6.innerHTML = '<input type="button" value="Delete user" class="deleteRow btn btn-danger" onclick="removeAccount('+user.key+')" />';
		tr.appendChild(td6);

		table.appendChild(tr);
		counter++;
	}
}

function checkFluency(number){
	let reasonBlock;
	
	// Меняет пользователю статус Mute
	let user = JSON.parse(localStorage.getItem(number));
	console.log(user.mute);
	if (user.mute) {
		user.mute=false;
		console.log("to "+user.mute);
		
			user.reasonBlock = "";
		
	}
	else if(!user.mute){
	if (reasonBlock = prompt('Reason for blocking?')) {
		console.log(reasonBlock);
	}
		user.mute=true;
		console.log("to "+user.mute);
		if (reasonBlock) {
			user.reasonBlock= reasonBlock;
		}
	}
	localStorage.setItem(number, JSON.stringify(user));

}

function removeAccountByPanel(number){
	// Удаляет строку с пользоватлем из таблицы в html
	let ln = 'line'+number;
	let elem = document.getElementById(ln);
	elem.parentNode.removeChild(elem);

}

function checkFreedom(){
	// Ищет свободный id(key)
	var count = -1;
	var restart = true;
	do{
		count++;
		var user = JSON.parse(localStorage.getItem(count));
		if (user) {
		}
		else{
			var restart = false;
		}
	}while(restart)
	console.log("свободный id - " + count);
	return count;
}


function logOut(){
	// Выход из учетки пользователя
	localStorage.setItem("authentication", JSON.stringify(false));
	location.reload();
}

function logOutAdmin(){
	// Выход из учетки Админа
	localStorage.setItem("authentication", JSON.stringify(false));
	localStorage.setItem("authenticationAdmin", JSON.stringify(false));
	location.reload();
}

function checkLogPanel(){
	// Выдает ошибку если пользователь под учетной записью хочет зарегистрироваться без выхода
	if (JSON.parse(localStorage.getItem("authentication"))) {
		alert("You are already signed in to your account.\n" 
			+"To register a new one, you first have to log out of your account");
		mainPage();
	}
}

function checkLogIn(){
	// Проверяет вошел ли пользователь в учетку
	if (!JSON.parse(localStorage.getItem("authentication"))) {
		alert("Вы не вошли не в одну существующую учетную запись\nПожалуйста авторизуйтесь для доступа на данную страницу");
		mainPage();
	}
}

function validateEmail(email) {
	// Проверяет почту на правильность написаний
	var pattern  = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return pattern.test(email);
}

function genderSelect(selector) {
	// Селектер для гендера. Принимает имя селектера
	var rad=document.getElementsByName(selector);
	console.log("genderSelect пуст? " + rad);
	var gender;
	for (var i=0;i<rad.length; i++) {
		if (rad[i].checked) {
			if(0==i){
				gender="Male";
			}else if(1==i){
				gender="Female";
			}else if(2==i){
				gender="Non-binary";
			}
		}
	}
	return gender;
}

function searchByEmail(emailSearch){
	// Достает пользователя из базы данных используя почту
	let alertCounter= 0;
	for (var i = localStorage.length; i >= 0; i--) {
		//console.log("ОПЕРАЦИЯ НОМЕР "+ i );
		var user = JSON.parse(localStorage.getItem(i));
		if (user) {
			user.key = i;
			if (user.email === emailSearch){
				console.log(user);
				document.getElementById("reKeyField").value = user.key;
				document.getElementById("reNameField").value = user.name;
				document.getElementById("reEmailField").value = user.email;
				document.getElementById("reDataField").value = user.data;
				document.getElementById("genderField").innerHTML = user.gender;
				document.getElementById("rePassField").value = user.pass;
				document.getElementById("rePass2Field").value = user.pass;
				alertCounter++;
				return;
			}
			//console.log(user);
		}
	}
	if(alertCounter==0){
		document.getElementById("searchErr").innerHTML = "Не найдено";
		//console.log("pass");
	}
}

function reStorage(){
	// перезаписывает учетню запись пользователя после введения изменений
	console.log("saveAccount");
	let user = new User;
	if (document.getElementById('reNameField').value  && document.getElementById('rePassField').value && document.getElementById('reEmailField').value) {
		document.getElementById("searchErr").innerHTML = "";

		user.name = document.getElementById('reNameField').value;
		if (user.name<2) {
			document.getElementById("searchErr").innerHTML = "Имя пользователя должно быть больше 2 символов";
			return;
		}

		if (validateEmail(document.getElementById('reEmailField').value)) {
			user.email = document.getElementById('reEmailField').value;
		} else {
			alert("Введенный e-mail не корректен");
			return;
		}

		if (genderSelect('r2')) {
		user.gender = genderSelect('r2');
		}

		if (document.getElementById('rePassField').value==document.getElementById('rePass2Field').value) {
			user.pass = document.getElementById('rePassField').value;
		}
		else{
			alert("Разные пасы");
			return;
		}
		if (user.pass<4) {
			document.getElementById("searchErr").innerHTML = "Имя пользователя должно быть больше 4 символов";
			return;
		}
		user.key=document.getElementById('reKeyField').value;
		//нужна проверка соответствия пассов
		user.data = document.getElementById('reDataField').value;

	}
	else{
		document.getElementById("searchErr").innerHTML = "Заполните все поля";
		return;
	}
	console.log(user);
	localStorage.setItem(user.key, JSON.stringify(user));
}

function reloadTable(){
	// Стирает таблицу пользователей
	var arr = [];
	for (var i = localStorage.length; i >= 0; i--) {
		//console.log("ОПЕРАЦИЯ НОМЕР "+ i );
		var user = JSON.parse(localStorage.getItem(i));
		if (user) {
			user.key = i;
			arr[i] = user.key;
		}
	}

	for (var i = arr.length-1; i >= 0; i--) {
		removeById("line" + arr[i]);
	}
	for (var i = arr.length-1; i >= 0; i--) {
		removeById("line" + arr[i]);
	}

function removeById(id){
	// удаляет строку пользователя по id
	let tr = document.getElementById(id);
	tr.parentNode.removeChild(tr);
}
}

function loginInPanel(){
	// Перемещает на logInPanel.html
	window.location.href = 'logInPanel.html';
}

function signUp(){
	// Перемещает на regPanel.html
	window.location.href = 'signup.html';
}

function mainPage(){
	// Перемещает на main.html
	window.location.href = 'index.html';
}

function userPage(){
	// Перемещает на user.html
	window.location.href = 'user.html';
}

function adminPage(){
	// Перемещает на admin.html
	window.location.href = 'admin.html';
}
