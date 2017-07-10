(function(window){
	'use strict';

	function arunLibrary(){

		var _arunDateObj = {};
    
		_arunDateObj.customDate = function(param,inpDate){
			var fMonth = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
			var sMonth = ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sept", "Oct", "Nov", "Dec"];
			if(inpDate != undefined)
				var dateObj = new Date(inpDate)
			else
				var dateObj = new Date()
			var date = dateObj.getDate();
			(date < 10) ? date = "0"+date : date;
			var month = dateObj.getMonth()+1;
			(month < 10) ? month = "0"+month : month;
			var year = dateObj.getFullYear();
			var sYear = year.toString().substring(2);
			var Rhour = dateObj.getHours();
			(Rhour < 10) ? Rhour = "0"+Rhour : Rhour;
			var hour = (Rhour > 12) ? Rhour-12 : Rhour;
			(hour < 10) ? hour = "0"+hour : hour;
			var min = dateObj.getMinutes();
			(min < 10) ? min = "0"+min : min;
			var sec =  dateObj.getSeconds();
			(sec < 10) ? sec = "0"+sec : sec;
			var msec =  dateObj.getMilliseconds();
			var tm = (Rhour > 11) ? 'PM' : 'AM';
			param = param.replace("dd",date);
			param = param.replace("mm",month);
			param = param.replace("yy",sYear);
			param = param.replace("YY",year);
			param = param.replace("MON",fMonth[parseInt(month-1)]);
			param = param.replace("mon",sMonth[parseInt(month-1)]);
			param = param.replace("rhr",Rhour);
			param = param.replace("hr",hour);
			param = param.replace("min",min);
			param = param.replace("msec",msec); // adding msec before sec bcz if sec changed msec wont available
			param = param.replace("sec",sec);
			param = param.replace("tm",tm);
			return param;
		};
		
		_arunDateObj.shortYear = function(inp)
		{
			return parseInt(inp.toString().substr(2,2),10);
		}
		
		_arunDateObj.dateTime = function(inpDate){
			return _arunDateObj.customDate("dd-mm-yy hr:min:sec",inpDate);
		};

		_arunDateObj.date = function(inpDate){
			return _arunDateObj.customDate("dd-mm-yy",inpDate);
		};

		_arunDateObj.finYear = function(short,date){
			if(date != undefined)
				var d = new Date(inpDate)
			else
				var d = new Date()
			var y = d.getFullYear();
			if(d.getMonth()+1 > 3)
				return short==="f" ? y+"-"+(y+1) : _arunDateObj.shortYear(y)+"-"+(_arunDateObj.shortYear(y)+1);
			else
				return short==="f" ? y-1+"-"+y : _arunDateObj.shortYear(y)-1+"-"+_arunDateObj.shortYear(y);
		};
		
		return _arunDateObj;
	}

	if(typeof(window.dateLib) === 'undefined'){
		window.dateLib = arunLibrary();
	}
})(window);
