var name = "Amar";
var age = 17;
var money = 40000;
var pesanan = "juice";
const anggur = 300000;
const juice = 50000;
let order;

if(name === undefined || name === "" || typeof(name) !== "string"){
    console.log("Anda tidak boleh masuk!");
}else{
    console.log("Nama : "+name);
    //Untuk di bawah 17 tahun
    if(age < 17 && pesanan=="juice" && money>=juice)
    {
        order = "juice";
        money = money - juice;
    }
    else if(age < 17 && pesanan=="anggur")
    {
        order = "Anda tidak dapat memesan karena di bawah umur";
    }
    else if(age < 17 && money < juice)
    {
        order = "Uang tidak cukup, Anda harus pulang!";
    }
    //Untuk di atas 17 tahun
    else if(age >= 17 && pesanan=="juice" && money>=juice)
    {
        order = "juice";
        money = money - juice;
    }
    else if(age >= 17 && pesanan=="juice" && money <juice){
        order = "Uang tidak cukup, Anda harus pulang!";
    }
    else if(age >= 17 && pesanan=="anggur" && money >= anggur){
        order = "Anggur";
        money = money - anggur;
    }else if(age >= 17 && pesanan=="anggur" && money < anggur){
        order="Uang tidak cukup, Anda harus pulang!";
    }
    console.log("Pesanan anda : "+order);
    console.log("Sisa uang anda : Rp. "+money+",-");
}
