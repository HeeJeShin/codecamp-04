export default function MapElpage(){
    //1.기본방법(화살표 함수)
    // ["철수","영희","훈이"].forEach((el, index) => {
    //     console.log("el",el);
    //     console.log("index", index);
    //     // return `${el}어린이`
    // });
    
    //2.기본방법(그냥함수)
    // ["철수","영희","훈이"].forEach(function(el, index) {
    //     console.log("el",el);
    //     console.log("index", index);
    //     // return `${el}어린이`
    // });

    //3.매개변수바꿔보기
    ["철수","영희","훈이"].forEach((asdf, qwer) => {
        console.log("asdf",asdf);
        console.log("qwer", qwer);
        // return `${el}어린이`
    });
    //3.매개변수바꿔보기
    ["철수","영희","훈이"].forEach((index, el) => {
        console.log("index",index);
        console.log("el", el);
        // return `${el}어린이`
    });
    return<></>;
}