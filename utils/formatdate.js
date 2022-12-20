const formatDate = (timestamp) => {

  // Create a Date object from the timestamp
  const dateObj =  new Date (timestamp);

  // list of months
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // return formatted date
  return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

};

module.exports = formatDate;
