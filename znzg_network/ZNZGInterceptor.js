/**
 * Created by zhuzihao on 2017/11/28.
 */


/**
 *  为满足 ZNZG 需要编写
 * */
import { Interceptor } from "../Interceptor"
import 'rxjs/add/operator/do';

class _AutoAuthorization extends  Interceptor{
    user = null;//UserInfo
    /** 使用 初始化 */
    constructor(ops){
        super(ops);
    }
    intercept(option,next){
        let headers  = option.headers;
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        option.headers = headers;
        return next(option);

        //next(option).do((response)=>{});
    }
}

export  const AutoAuthorization = new _AutoAuthorization();

