import { MessageBox, Message } from 'element-ui';
import 'components/common.scss';

const Modal = {
  confirmModal(data, ok) {
    MessageBox.confirm(data, {
      confirmButtonText: '确定',
      customClass: 'confirm-dialog',
      center: true,
      type: 'warning',
      showCancelButton: false
    }).then(() => {
      // ok确认回调可放到调用的地方，单独定义
      Message({
        type: 'success',
        message: '全部开启成功!'
      });
    }).catch(() => {
      Message({
        type: 'info',
        message: '已取消开启操作'
      });
    });
  }
};

export default Modal;

