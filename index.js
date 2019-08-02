// function List(opt){
// 	this.pro = document.getElementById(opt.pro);
// 	this.city = document.getElementById(opt.city);
// 	this.area = document.getElementById(opt.area);

// 	this.data = null;
// 	this.proData =null;
// 	this.init();
// }
// List.prototype = {
// 	constructor : List,
// 	init : function(){
// 		this.requestData();
// 		this.bindEvent();
// 	},
// 	//请求json数据
// 	requestData : function(){
// 		var self = this;
// 		ajax({
// 			url : "city.json",
// 			success : function(data){
// 				console.log(data);
// 				self.data = data;
// 				self.drawPage(data);
// 			},
// 		});
// 	}, 
// 	//渲染页面   添加省的数据
// 	drawPage : function(data){
// 		var str = "<option>请选择</option>";
// 		for(var i in data){
// 			console.log(data[i]);
// 			str += `<option>${data[i].name}</option>`;
// 		}
// 		this.pro.innerHTML= str;
// 	},
// 	//给省市区添加事件
// 	bindEvent : function(){

// 		var self = this;
// 		//省
// 		this.pro.onchange = function(){
// 			self.updateAll();
// 			var arr = self.data;
// 			for(var i in arr){
// 				console.log(arr[i]);
// 				if(arr[i].name == this.value){
// 					self.proData = arr[i];
// 					self.updateCity(arr[i].city)
// 				}
// 			}
// 		}
// 		//市
// 		this.city.onchange = function(){

// 			self.area.innerHTML = "<option>请选择</option>";
// 			var arr = self.proData.city;
// 			for(var i in arr){
// 				console.log(arr[i])
// 				if(arr[i].name == this.value){
// 					self.updateArea(arr[i].area)
// 				}
// 			}
// 		}

// 	},
// 	//city列表赋值
// 	updateCity : function(data){
// 		var html = "<option>请选择</option>";
// 		data.forEach(function(element){
// 			html += `<option>${element.name}</option>`
// 		})
// 		this.city.innerHTML = html;
// 	},
// 	//更新区
// 	updateArea : function(data){
// 		var html = "<option>请选择</option>";
// 		data.forEach(function(element){
// 			html += `<option>${element}</option>`
// 		})
// 		this.area.innerHTML = html;
// 	},
// 	updateAll : function(data){
// 		this.city.innerHTML = "<option>请选择</option>";
// 		this.area.innerHTML = "<option>请选择</option>"
// 	}
// }