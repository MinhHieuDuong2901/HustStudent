import axios from 'axios';

export const getStudentInfo = (id) => {
  let url =
    'https://v1-dot-hust-edu.appspot.com/api/profile/student?sessionId=986B244B-58F9-4E28-B8F3-B4831C2D82A0-1661268931292_1661268931292&token=PLpt91USzRlluCq2duoZ-V2&studentId=' +
    id;
  return axios.post(url);
};

export const searchStudent = (name) => {
  let url =
    'https://v1-dot-hust-edu.appspot.com/api/search/student?sessionId=986B244B-58F9-4E28-B8F3-B4831C2D82A0-1661268931292_1661268931292&token=PLpt91USzRlluCq2duoZ-V2&keyword=' +
    name;
  return axios.get(url);
};

export const convertVietnamese = (str) => {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự +
  str = str.replace(/(\s+)/g, '+');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
};
