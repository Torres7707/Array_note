let a = [
	{
		id: '001',
		position: 'tianjin',
	},
	{
		id: '002',
		position: 'beijing',
	},
	{
		id: '003',
		position: 'altay',
	},
	{
		id: '007',
		position: 'altay',
	},
];

let b = [
	{
		id: '001',
		position: 'anqing',
	},
	{
		id: '003',
		position: 'altay',
	},
	{
		id: '004',
		position: 'hefei',
	},
	{
		id: '005',
		position: 'huaining',
	},
];

// b.forEach((i)=>{
//   let flag = true;
//   a.forEach((k,index)=>{
//     if(k.id==i.id){
//       a.splice(index,1,i)
//       flag=false
//     }
//   })
//    if(flag){
//       a.push(i)
//     }
// })
// let c = a.filter(i=>!~b.indexOf(i))
// c.forEach(item=>{
//   a.splice(a.indexOf(item),1)
// })
// console.log(a);

//a是老数据，b是新数据
//1.新无老有
let arr1 = a.filter((item) => !b.some((ele) => ele.id === item.id));
console.log('新无老有', arr1);
// //2.新有老无
// let arr2 = b.filter(item=>!a.some(ele=>ele.id===item.id))
// console.log('新有老无',arr2)
// //3.新有老有
// let arr3 = b.filter(item=>a.some(ele=>ele.id===item.id))
// console.log('新有老有',arr3)
let arr2 = [];
let arr3 = [];
b.forEach((item) => {
	if (!a.some((ele) => ele.id === item.id)) {
		arr2.push(item);
	} else {
		arr3.push(item);
	}
});
console.log('新有老无', arr2);
console.log('新有老有', arr3);
//处理
let newList = [...arr2, ...arr3];
console.log('处理后的', newList);
