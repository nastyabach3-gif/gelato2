let result;
        let check = false;

        const elementA = document.getElementById("a");
        const elementR = document.getElementById("r");
        const elementH = document.getElementById("h");
        const elementM = document.getElementById("m");

        const elementVerify = document.getElementById("verify");
        elementVerify.addEventListener('click', verify);

        const elementSend = document.getElementById("send");
        elementSend.addEventListener('click', send);

        function verify() {
            console.log("a, r, h, m");
            let a = parseFloat(elementA.value);
            let r = parseFloat(elementR.value);
            let h = parseFloat(elementH.value);
            let m = parseFloat(elementM.value);
            console.log(a, r, h, m);

            let cubeVolume = Math.pow(a, 3); 
            let cylinderVolume = Math.PI * Math.pow(r, 2) * h;
            let totalVolume = cubeVolume + cylinderVolume;

            let canFillCube = m <= cubeVolume;
            let canFillCylinder = m <= cylinderVolume;
            let canFillBoth = m <= totalVolume;

            result = `Куб:${canFillCube ? 'Да' : 'Нет'}, Цилиндр:${canFillCylinder ? 'Да' : 'Нет'}, Обе:${canFillBoth ? 'Да' : 'Нет'}`;
            
            check = true;

            document.getElementById("result").value = result;
        }

        function send() {
            if (check) {
                document.getElementById("UserEnter").submit();
            } else {
                alert("Сначала выполните проверку")
            }
        }