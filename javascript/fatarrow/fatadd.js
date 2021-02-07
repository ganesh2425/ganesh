function one () {
    console.log(this);

}
one();
//-------------

let add = () => {
    console.log(this);
};

add();