function List(opt){
	//获取省
	this.pro = document.getElementById(opt.pro);
	//获取市
	this.city = document.getElementById(opt.city);
	//获取区
	this.area = document.getElementById(opt.area);

	//所有的数据
	this.data = null;

	//当前省的数据
	this.proData = null;

	this.init();
}
List.prototype = {
	constructor : List,
	init : function(){
		this.requestData();
		this.bindEvent();
	},
	//请求数据
	requestData : function(){
		var that = this;
		ajax({
			url : "city.json",
			success :function(data){
				console.log(data);
				that.data = data;
				that.drawPage(data);
			}
		})
	},
	//渲染页面
	drawPage : function(data){
		var that = this;
		var str = "<option>请选择</option>";
		for(var i in data){
			str += `<option>${data[i].name}</option>`;
		}
		this.pro.innerHTML = str;
	},
	//给省市区添加事件
	bindEvent : function(){
		var that = this;
		this.pro.onchange = function(){
			that.updateAll();
			var arr = that.data;
			for(var i in arr){
				if(arr[i].name == this.value){
					//保存省的数据
					that.proData = arr[i];
					//更新市的数据
					that.updateCity(arr[i].city);
				}
			}
		}
		this.city.onchange = function(){
			that.area.innerHTML = "<option>请选择</option>";
			var arr = that.proData.city;
			for(var i in arr){
				if(arr[i].name == this.value){
					that.updateArea(arr[i].area);
				}
			}
		}
	},
	updateCity : function(data){
		var html = "<option>请选择</option>";
		//遍历
		data.forEach(function(element){
			html += `<option>${element.name}</option>`;
		})
		this.city.innerHTML = html;
	},
	updateArea : function(data){
		var html = "<option>请选择</option>";
		data.forEach(function(element){
			html += `<option>${element}</option>`
		});
		this.area.innerHTML = html;
	},
	updateAll : function(){
		this.city.innerHTML = `<option>请选择</option>`;
		this.area.innerHTML = `<option>请选择</option>`;
	}
}