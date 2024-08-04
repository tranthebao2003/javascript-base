// var headingNode = document.getElementById('heading')
// console.log(headingNode) (trả về 1 element)

// var headingclass = document.getElementsByClassName('viDu')
// console.log(headingclass) (trả về 1 list giống mảng)

// var headingTagName =document.getElementsByTagName('p')
// console.log(headingTagName) (trả về 1 list giống mảng)

// var headingNodeQuery = document.querySelector('.heading')
// console.log(headingNodeQuery) (trả về 1 element)

// var a = document.querySelector('.box .heading-2'); // chỉ trả về 1 phần từ đầu tiên có class này
// console.log(a)
// // còn nếu mún select all p tử thì sử dùng querySelectorAll
// var ab = document.querySelectorAll('.box .heading-2'); // chỉ trả về 1 phần từ đầu tiên có class này
// console.log(ab) 
// // (trả về 1 list giống mảng)

// var b = document.querySelector('.box .heading-2:first-child');
// console.log(b)

// //Dom attributes
// var headingElement = document.querySelector('h1')
// console.log(headingElement)

// //thêm những thuộc tính trong thẻ h1
// headingElement.title = 'HeadingTitle'
// headingElement.className = 'addClass' // thêm class


// var aElement = document.querySelector('a')
// console.log(aElement)

// // thêm những thuộc tính trog thẻ a
// aElement.href = 'Thẻ a'

// // thêm attribute cho 1 thẻ mà bản thân thẻ đó ko có attribute đó
// // truyền vào attribute Name muốn thêm vào value của nó
// headingElement.setAttribute('href','attribute href add to tag H1')

// // lấy value từ attribute của 1 element (truyền vào lá attribute Name muốn lấy value)
// console.log(headingElement.getAttribute('id'))
// console.log(headingElement.getAttribute('title'))

// // InnerText vs textContent Property
// var textElement = document.querySelector('h1')
// console.log(textElement.textContent) //c1 
// console.log(textElement.innerText)  // c2

// // sửa đổi nội dung của text
// console.log(textElement.textContent = 'new heading')

// sự khác nhau khi lấy text bằng innerText và textContent
// -innerText: lấy ra nội dung hiển thị trên màn hình
// -textContent: trả về nội dung thật của dom (bao gồm khoảng trắng)

// // innerHTML: thêm element vào element, thêm textnode vào element
// // có thểm thêm được attribute node vào element
// var boxElement = document.querySelector('.box')
// console.log(boxElement)
// boxElement.innerHTML = '<h1 title = "text"heading</h1>'
// console.log(document.querySelector('h1'))

// // outerHTML: nó sẽ thay thế luôn cái element gọi nó
// var boxElement = document.querySelector('.box')
// console.log(boxElement.outerHTML)
// console.log(boxElement.outerHTML = '<span>Test outerHTML</span>')

// // xem all thuộc tính của node 
// var boxElement = document.querySelector('.box')
// console.log([boxElement])

// var boxElement = document.querySelector('.box')
// // hiện thị ra all thuộc tính của dom style
// console.log(boxElement.style)

// boxElement.style.width = '100px'
// boxElement.style.height = '200px'
// boxElement.style.backgroundColor = 'red'

// // cách khác
// Object.assign(boxElement.style, {
//     width : '200px',
//     height: '100px',
//     backgroundColor: 'green'
// })

// bắt sự kiện 1 thằng h1
// var h1Elemnt = document.querySelector('h1')
// h1Elemnt.onclick = function(){
//     //code here chỉ đc thực hiện khi sự kiện trên diễn ra
//     console.log(Math.random())
// }

// bắt all h1
// var h1Elemnts = document.querySelectorAll('h1')
// // hành vi mik click thì nó sẽ diễn ra sau khi vòng for chạy
// // khi nhấp vào sự kiện onclick thì nó sẽ chả về 1 object event
// // trong đó attribute target chính là elemnt mà mik thực hiện sự kiện
// for(var i = 0; i < h1Elemnts.length; i++){
//     h1Elemnts[i].onclick = function(event){
//         console.log(event.target)
//     }
// }


// classList property : quản lí các class của element
// add: thêm class vào element
// contains: ktra 1 class có nằm trong element
// remove: xóa bỏ 1 class khỏi element
// toggle: nếu có class đó ở element thì nó sẽ xóa, còn ko có thì nó sẽ thêm

// var boxElement = document.querySelector('.box')
// // console.log(boxElement.classList);
// // console.log(boxElement.classList.length);
// // console.log(boxElement.classList[0]);

// // thêm class red
// boxElement.classList.add('red')
// // thêm nhìu class
// boxElement.classList.add('red', 'blue')

// boxElement.classList.remove('red')
// // ktra class red có trong element ko
// console.log(boxElement.classList.contains('redd'))

// event listener
// 1. xử lí nhìu vc khi 1 event xảy ra
// 2. lắng nghe/ hủy bỏ lắng nghe
var btn = document.querySelector('.btn')
console.log(btn)

// // xử lí 2 vc trên bằng dom event
// //1.
// // btn.onclick = function(){
// //     //vc1
// //     console.log('Viec 1')
// //     //vc2
// //     console.log('Viec 1')
// //     //vc3
// //     alert('viec 3')
// // }

// //2. sau 3s thì event onclick sẽ ko click đc nữa
// btn.onclick = function(){
//     //vc1
//     console.log('Viec 1')
//     //vc2
//     console.log('Viec 1')
//     //vc3
//     alert('viec 3')
// }
// // đoạn code dưới là sau 3000ms thì mik overWrite lại function trong event onclick
// setTimeout(function(){
//     btn.onclick = function(){}
// }, 3000);

// xử lí 2 vc trên bằng event listener
// addEventListener: nhận 2 đối số chính
// 1: event_name
// 2: function (được thực hiện khi event đc kích hoạt)
// function viec1(){
//     console.log('Việc 1')
// }
// function viec2(){
//     console.log('Việc 2')
// }
// function viec3(){
//     console.log('Việc 3')
// }
// btn.addEventListener('click', viec1)
// btn.addEventListener('click', viec2)
// btn.addEventListener('click', viec3)

// // sau 3s thì khi click sẽ hủy lắng nghe
// setTimeout(function(){
//     btn.removeEventListener('click', viec1)
// }, 3000)

// template literals : sử dụng dấu ``
// muốn thêm những kí tự đặng biệt trong nội suy
// template literals thì thêm dấu \ trước
const courseName = 'Javascript'
const courseName2 = 'react'
const description = `Course name: ${courseName} ${courseName2}`
console.log(description)

const description2 = `template string noi suy voi: \${}`
console.log(description2)