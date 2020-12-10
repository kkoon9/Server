export default {
  async getDday(endTime) {
    const endTimeDate = await getDateType(endTime);
    const now = new Date();
    const gap = now.getTime() - Dday.getTime();
    const result = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
    return result;
  },

  getDateType(yyyyMMdd) {
    const sYear = yyyyMMdd.substring(0, 4);
    const sMonth = yyyyMMdd.substring(5, 7);
    const sDate = yyyyMMdd.substring(8, 10);

    return new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
  },

  async getFormatDate(date){
    var year = date.getFullYear();
    var month = (1 + date.getMonth());
    month = month >= 10 ? month : '0' + month;
    var day = date.getDate();
    day = day >= 10 ? day : '0' + day;
    return year + '-' + month + '-' + day;
  },

  async getReviewDate(nextReviewTime, endTime, day) {
    const reviewDateArray = [nextReviewTime];
    let nextDate = this.getDateType(nextReviewTime);
    nextDate.setDate(nextDate.getDate() + day);
    let nextTime = await this.getFormatDate(nextDate);
    while(nextTime < endTime ) {
      reviewDateArray.push(nextTime);
      nextDate = this.getDateType(nextTime);
      nextDate.setDate(nextDate.getDate() + day);
      nextTime = await this.getFormatDate(nextDate);
    }
    return reviewDateArray;
  }
};
