const parseDate = (date: number) => (date < 10 ? `0${date}` : date);

export default parseDate;
