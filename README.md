# Login Page
 - 使用node.js、express、express-handlebars和body-parser所做的登入頁面

## Features
 - 可輸入使用者帳密 email & password
 - 使用者帳密輸入正確能成功登入，並導向自己的 welcome page
 - 使用者帳密輸入錯誤，介面顯示 "Incorrect username or password."

## How to use
1.開啟終端機(Terminal)至要存放專案的本機位置並執行

```
git clone https://github.com/ccomos/login_page.git
```

2.初始

```
cd login_page  //切至專案資料夾
```

```
npm install  //安裝套件
```

4.開啟程式

```
npm run dev //執行程式, 成功執行下會出現 'Express is listening on localhost:3000'
```

5.於任一瀏覽器網址列輸入 [http://localhost:3000](http://localhost:3000) 開始使用

## Test username & password
1. firstName : Tony / email : 'tony@stark.com' / password : 'iamironman'
2. firstName : Steve / email : 'captain@hotmail.com' / password : 'icandothisallday'
3. firstName:Peter / email : 'peter@parker.com' / password : 'enajyram'
4. firstName:Natasha / email : 'natasha@gamil.com' / password : '*parol#@$!'
5. firstName:Nick / email : 'nick@shield.com' / password : 'password'
