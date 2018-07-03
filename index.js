function wawa (){
    let url = location.href;
    let urlmsg=url.split("?")[1];
    if(urlmsg){
        let parameters=urlmsg.split("&");
        let parameter={};
        for (let i =0; i < parameters.length; i++) {
            let paramname=parameters[i].split("=")[0];
            let parammsg=parameters[i].split("=")[1];
            parameter[paramname] = parammsg;
        }
        // }else{
        //     let appId="wx42fd288a1e37e14d";
        //     let redirect_uri="http%3a%2f%2fwww.ilocalhost.cn";
        //     window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appId+"&redirect_uri="+redirect_uri+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
        // }
    }else{
        // 没传参数应该打不开
        
    }
}
wawa();