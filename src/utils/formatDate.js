import moment from "moment/moment";
import "moment/locale/tr";

// unix dormatındaki veriyi normal tarihe çevir
const formatDate = (unix_time) => {
  // new Date methodu milisaniye üzerinden işlem yapar ama unix time 1970 'den itibaren geçen süreyi saniye cinsinden verir bu yüzden new Date 'i kullanabilmek için saniye 1000 ile çarpıp milisaniyeye çevirdik
  const date = new Date(unix_time * 1000);

  // zamanı kullanıcı dostu bir formata çevir
  return moment(date).calendar();
};

export default formatDate;
