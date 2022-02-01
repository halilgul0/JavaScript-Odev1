let fullName = prompt("Adınızı Giriniz.")
let hosgeldin = document.querySelector("#hosgeldin")
if (fullName) {
    hosgeldin.innerHTML = `Merhaba <b>${fullName}</b> Hoşgeldin :)`
} else {
    hosgeldin.innerHTML = `Merhaba <b>Misafirimiz</b> Hoşgeldin :)`
}
function tarihSaat() {
    let zaman = new Date().toLocaleTimeString();
    let gun = new Date().getDay();
    if (gun==0) {
        gun="Pazar"
    } else {
        if (gun==1) {
            gun="Pazartesi"
        } else {
            if (gun==2) {
                gun="Salı"
            } else {
                if (gun==3) {
                    gun="Çarşamba"
                } else {
                    if (gun==4) {
                        gun="Perşembe"
                    } else {
                        if (gun==5) {
                            gun="Cuma"
                        } else {
                            if (gun==6) {
                                gun="Cumartesi"
                            } else {
                                
                            }
                        }
                    }
                }
            }
        } 
    }
    document.querySelector("#tarih").innerHTML = `${zaman} ${gun}`;
}