<template>
	<div class="ai">
		<img src="../../ecg.png" style="width: 100%;"/>
		<div class="dalc">
		<div class="lc">
			<div class="gzys">
				<h1>临床合作医院</h1>
				<h4>人工智能心电读图分析</h4>
				<ul>
					<li>
						<img src="../../build/zhongri.png" />
					    <p>北京中日友好医院</p>
					     <p>中西医结合心脏科</p>
					</li>
						<li>
						<img src="../../build/tjZong.png" />
					    <p>北京中日友好医院</p>
					     <p>中西医结合心脏科</p>
					</li>
				</ul>
			</div>
		</div>
		</div>
		<div class="kyxm">
			<h1>科研项目开展介绍</h1>
			<p>爱乐芙医疗已与天津医科大学总医院、北京中日友好医院达成合作协议。建立心电图大数据中心，搭建基于心电图大数据的心律异常智能化分析的神经网络算法模型和深度学习分布式训练系统。并针对智能化分析结果，完成临床对照实验。搭建心电智能化读图平台，为动态心电设备厂商、各医疗服务机构提供API。</p>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.lc{
		width: 1200px;
		margin: 0 auto;
	}
	.lc h1{
		text-align: center;
		padding-top: 120px;
	}
	.lc h4{
		text-align: center;
		margin-top: 20px;
	}
	.dalc{
		background-color: #F2F2F2;
	}
	.gzys ul:after{
	display: block;
	clear: both;
	content: "";
	}
	.gzys ul li{
		float: left;
	}
	.gzys ul li{
		width: 550px;
		margin-left: 50px;
		margin-top: 86px;
		background-color: white;
		margin-bottom: 50px;
	}
	.gzys ul li img{
		width: 100%;
	}
	.gzys ul p{
		font-size: 26px;
		margin-top: 20px;
	}
	.gzys ul p:hover{
	color:#008FFF ;
	}
		.gzys ul {
  margin-bottom: 50px;
	}
	.kyxm{
		width: 1200px;
		margin:  0 auto;
		margin-bottom: 150px;
	}
	.kyxm h1{
		text-align: center;margin-top: 100px;
	}
	.kyxm p{
		font-size: 18px;
		margin-top: 80px;
	}
</style>