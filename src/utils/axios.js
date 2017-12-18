import axios from 'axios';
import ErrorCode from './errorcode';

export default class AXIOS {
  constructor() {
    this.localData = require('util/localdata');
  }

  static getEnvPrefix() {
    if (window.isDebug) {
      return '';
    }
    return window.apiUrl;
  }

  fetch(fetchObj) {
    const {
      loadingFlag,
      method,
      successFn,
      errorFn
    } = fetchObj;
    let {
      url,
      data = {}
    } = fetchObj;

    if (loadingFlag) {
      // TODO:loading遮罩层
    }
    if (window.isDebug) {
      setTimeout(() => {
        if (loadingFlag) {
          // TODO:关闭loading遮罩层
        }
        const localData = this.localData[url];
        if (localData.result === 0) {
          successFn(localData);
        } else {
          const errorMsg = ErrorCode(localData.code) || '服务器异常,请联系运维人员!';
          if (errorFn) {
            errorFn(errorMsg);
          } else {
            AXIOS.modalError(errorMsg);
          }
        }
      }, 500);
    }

    url = this.getEnvPrefix() + url;
    if (method.toLowerCase() === 'get') {
      data = null;
    } else {
      data = JSON.stringify(data);
    }

    axios({
      method,
      url,
      data: {
        req: AXIOS.isExisty(data) ? data : {}
      },
      responseType: 'json'
    })
      .then((res) => {
        if (loadingFlag) {
          // TODO:关闭loading遮罩层
        }
        if (res.result === 0) {
          successFn(res);
        } else {
          const errorMsg = ErrorCode(res.result) || '服务器异常,请联系运维人员!';
          if (errorFn) {
            errorFn(errorMsg);
          } else {
            AXIOS.modalError(errorMsg);
          }
        }
      })
      .catch((err) => {
        if (errorFn) {
          errorFn(err);
        } else {
          AXIOS.modalError(err);
        }
      });
  }

  static isExisty(obj) {
    return obj !== null;
  }

  static modalError(message) {
    // TODO:错误统一处理
  }
}
