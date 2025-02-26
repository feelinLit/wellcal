if (localStorage.getItem('age') !== null) {
    document.getElementById('age').value = localStorage.getItem('age');
 }

  if (localStorage.getItem('gender') !== null) {
      document.getElementById('gender').value = localStorage.getItem('gender');
  }

  if (localStorage.getItem('weight') !== null) {
      document.getElementById('weight').value = localStorage.getItem('weight');
  }

  if (localStorage.getItem('height') !== null) {
      document.getElementById('height').value = localStorage.getItem('height');
  }

  if (localStorage.getItem('activity') !== null) {
      document.getElementById('activity').value = localStorage.getItem('activity');
  }

  if (localStorage.getItem('goal') !== null) {
      var goals = document.getElementsByName('goal');
      for (var i = 0; i < goals.length; i++) {
          if (goals[i].value === localStorage.getItem('goal')) {
              goals[i].checked = true;
              break;
          }
      }
  }