const addDiv = () => {
  $('#landingPage').removeClass('hide');
};

const removeDiv = () => {
  $('#landingPage').addClass('hide');
};

export default { addDiv, removeDiv };
