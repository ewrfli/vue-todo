import store from '@/store'
import * as constant from '@/common/constant.js'

const request = (url = '', data = {}, customModal = false, type = 'GET', header = {}, toastTitle = '数据加载中...') => {
	let token = ''
	if (store && store.state && store.state.user) {
		token = store.state.user.userInfo.key
	}
	header['X-Access-Token'] = token
	uni.showLoading({
		mask: true,
		title: toastTitle
	});
	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: constant.BASE_URL + url,
			data: data,
			header: header,
			dataType: 'json',
		}).then((response) => {
			uni.hideLoading();
			const [err, res] = response;
			if (res.statusCode !== 200) {
				uni.showToast({
					title: res.message,
					icon: 'none',
					duration: 2000
				})
			} else {
				const {
					data
				} = res
				if (data.code === 200 || data.success) {
					resolve(data);
				} else {
					if (customModal) {
						resolve(data);
					} else {
						uni.showToast({
							title: data.message,
							icon: 'none',
							duration: 2000
						})
						if (data.code === 401) {
							setTimeout(() => {
								uni.reLaunch({
									url: '/pages/index/index'
								});
							}, 2000);
						}

					}
				}
			}
		}).catch(error => {
			uni.hideLoading();
			let [err, res] = error;
			console.log('error:', error)
			reject(err)
		})
	});
}
export default request


/**
 * 项目经理首页api
 */
 import request from '@/common/request.js'

 const projectManager = {
   //获取首页信息
   getProjectMangerInfo() {
     return request('groupmeals/gmProjectManger/getProjectMangerInfo', {}, false, 'POST');
   },
   //获取统计中供应商列表
   allSelectedSupplierList(data){
     return request('groupmeals/gmProjectManger/allSelectedSupplierList', data);
   }
 }
 
 export default projectManager;
 

 getProjectMangerInfo() {
  this.$api.projectManager.getProjectMangerInfo().then(res => {
    if (res.success) {
      this.dailyData = res.result;
    }
  });
}