export const DRIVER_MESSAGE = {
  REMOVE: {
    SUCCESS: "Remove image successfully",
  },
};

export const AUTH_MESSAGE = {
  USER: {
    NOT_FOUND: "Tài khoản không tồn tại!",
    EXIST: "Tài khoản đã tồn tại!",
    CONFIRM_PASSWORD: "Mật khẩu phải trùng nhau!",
    WRONG_PASSWORD: "Sai mật khẩu!",
    SUBMITTED: "Xác thực tài khoản thành công!",
    ROLE: "Người dùng không đủ quyền hạn!",
    UNAUTHORIZED: "Bạn cần đăng nhập để sử dụng tính năng này!",
    WRONG: "Tài khoản hoặc mật khẩu không chính xác!",
  },
  TOKEN: {
    EXPIRED: "Yêu cầu đã hết hạn!",
  },
};

export const POST_MESSAGE = {
  DELETE: "Xoá bài đăng thành công!",
  NOT_FOUND: "Bài đăng không tồn tại!",
};

export const TAG_MESSAGE = {
  CONFLICT: "Tag đã tồn tại!",
  NOT_FOUND_GAME: "Game không tồn tại!",
};

export const ACCOUNT_MESSAGE = {
  NOT_FOUND: "Tài khoản không tồn tại!",
  SOLD: "Tài khoản đã bán!",
  CODE: "Mã tài khoản đã tồn tại!",
  CAN_NOT_BEHAVIOR: "Tài khoản đã bán, không thể sửa hoặc xoá!",
  AVAILABLE: "Tài khoản đang còn, không thể xử lý",
  NOT_FOUND_BUYER: "Người mua không tìm thấy",
  NOT_EMPTY_ARRAY: "Bạn hãy chọn ít nhất 1 account để xoá",
};

export const AUDIT_MESSAGE = {
  STATUS_NOT_FOUND: "Đơn nạp đã được hoàn thành!",
  NOT_ENOUGH: "Tài khoản không đủ tiền để thực hiện giao dịch!",
  NOT_EMPTY: "Mục này không được để trống!",
};

export const HISTORY_MESSAGE = {
  NOT_FOUND: "Giao dịch chưa được thực hiện, vui lòng thử lại sau.",
};

export enum EXPIRES_IN_MINUTE {
  FIVE_MINUTE = 5,
  THIRTY_MINUTE = 30,
}

export const NETWORK_MESSAGE = {
  ERROR: "Có lỗi xảy ra, vui lòng thử lại sau.",
};
