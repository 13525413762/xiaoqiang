<template>
  <div id="app">
  	<div class="da-din">
  	<div class="din">
  	<div class="logo">
  		<ul>
  			<li>	<img src="../build/logo.png" /></li>
  		</ul>
  
  	</div>
  	<div class="ljie">
  		<ul>
  			<li>淘宝商城</li>
  			<li><router-link to="gywm" style="color: white;">关于我们</router-link></li>
  			<li><router-link to="xw" style="color: white;">新闻资讯</router-link></li>
  			<li>应用下载</li>
  			<li>产品</li>
  			<li id="zyy"><router-link to="HelloWorld" style="color: white;">主页</router-link></li>
  		</ul>
  	</div>
  	</div>
  	</div>
    <router-view/>
    <div class="dadi">
    <div class="di">
  	<ul>
  		<li>
  			<h4>加入我们</h4>
  			<p>诚聘英才</p>
  			<p>招商政策</p>
  		</li>
  		<li>
  			<h4>加入我们</h4>
  			<p>诚聘英才</p>
  			<p>招商政策</p></li>
  		<li>
            <img src="../build/dingyue.png" />
            <p>扫一扫关注服务号</p>
  		</li>	
  		<li>
  <img src="../build/dingyue.png" />
            <p>扫一扫关注服务号</p>
  		</li>
  		<li>
  			<h3>0537-5661501</h3><span> (客服热线)</span>
  			<h3>0537-5661501</h3><span> (客服热线)</span>
  			<p>周一至周五（法定节假日除外）</p>
  			<p>上午 9:00~11:40   下午 13:30~17:30</p>
  		</li>
  	</ul>
  </div>
  </div>
  <div id="cp-z">
  	<ul>
  		<li>
  			动态心电监测
  			<ol>
  				<li><router-link to="/cpdx" style="color: white;">大象随心宝</router-link></li>
  				<li><router-link to="cphe" style="color: white;">hellofit</router-link></li>
  				<li><router-link to="/cpsxb" style="color: white;">随心宝点击贴</router-link></li>
  			</ol>
  		</li>
  		<li>
  			<router-link to="cpjj" style="color: white;">居家心脏康复</router-link></li>
  		<li><router-link to="cpxz" style="color: white;">心脏健康管理</router-link></li>
  		<li><router-link to="cpai" style="color: white;">ai读心电图</router-link></li>
  	</ul>
  </div>
  <div class="yyxz">
  	<ul>
  		<li><router-link to="yhd" style="color: white;">用户端</router-link></li>
  		<li><router-link to="ysd" style="color: white;">医生端</router-link></li>
  	</ul>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<script>
$(function(){
//	$(".ljie ul li").eq(4).click(function(){
//		$("#cp-z").show();
//	});
	$(".ljie ul li").eq(4).click(function(){
		$("#cp-z").toggle();
	});
	
		$(".ljie ul li").eq(3).click(function(){
		$(".yyxz").toggle();
	});
})
  </script>
<style >
	*{
		list-style: none;
		text-decoration: none;
		margin: 0;
		padding: 0;
		}
#app {
width: 100%;
}
.da-din{
	background-color: #35475d;
}
.din{
	width: 1200px;
	height: 80px;
		margin: 0 auto;
}
.din .logo ul:after{
	display: block;
	clear: both;
	content: "";
}
.din .logo ul li{
float:left;
}

.din .ljie ul:after{
	display: block;
	clear: both;
	content: "";
}
.din .ljie ul li{
	float:right;
}
.din .ljie ul li:hover{
	color: #52ded6;
	cursor: pointer;
}
.ljie{
	position: relative;
}
.din .logo ul li img{
	margin-top: 20px;
	margin-left: 50px;
}
.din .ljie ul{
	margin-top: -38px;
	margin-right: 320px;
}
.din .ljie ul li {
	font-size: 16px;
	margin-left:50px;
	color: white;
}
.di ul:after{
		display: block;
	clear: both;
	content: "";
}
.di ul li{
	float: left;
}
.di{
	width: 1200px;
	margin: 0 auto;

}
.dadi{
	background-color: #F2F2F2;
}
.di ul li{
	margin-left: 50px;
	margin-top: 40px;
	text-align: center;
}
#cp-z{
	display: none;
 background-color: #35475d;
}
#cp-z{
	position: absolute;
	top: 82px;
	left: 630px;
}
#cp-z ul li:nth-child(1) ol li{
	margin-top: 10px;
	font-size: 14px;
	margin-left: 10px;
}
#cp-z ul li{
	margin-top: 10px;
	width: 140px;
	margin-left: 10px;
	color: white;
}
#cp-z ul li:hover{
	color: #52ded6;}
.yyxz{
	display: none;
		 background-color: #35475d;
	}
	.yyxz{
	position: absolute;
	top: 82px;
	left: 700px;
	}
	.yyxz ul li{
	margin-top: 10px;
	width: 140px;
	text-align: center;
	color: white;
	}
</style>
