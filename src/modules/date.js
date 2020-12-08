export default {
  async getDday(endTime) {
    const endTimeDate = await getDateType(endTime);
    const now = new Date();
    const gap = now.getTime() - Dday.getTime();
    const result = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
    return result;
  },

  async getDateType(yyyyMMdd) {
    const sYear = yyyyMMdd.substring(0, 4);
    const sMonth = yyyyMMdd.substring(5, 7);
    const sDate = yyyyMMdd.substring(8, 10);

    return new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
  }
};
