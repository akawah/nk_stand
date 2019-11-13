{
  let shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  
  let mixing = () => {
    let rows = document.querySelectorAll('.s_row');
    let cols1 = rows[0].querySelectorAll('.s_col');
    let cols2 = rows[1].querySelectorAll('.s_col');
    let cols3 = rows[2].querySelectorAll('.s_col');
    let arr3 = [1,2,3];
    let arr2 = [1,2];
    
    shuffle(arr3);
    rows[0].style.order = arr3[0];
    rows[1].style.order = arr3[1];
    rows[2].style.order = arr3[2];
    
    shuffle(arr3);
    cols1[0].style.order = arr3[0];
    cols1[1].style.order = arr3[1];
    cols1[2].style.order = arr3[2];
    
    shuffle(arr2);
    cols2[0].style.order = arr2[0];
    cols2[1].style.order = arr2[1];
    
    shuffle(arr2);
    cols3[0].style.order = arr2[0];
    cols3[1].style.order = arr2[1];
    
    const n1 = document.querySelector('.s_n1');
    const n2 = document.querySelector('.s_n2');
    const n3 = document.querySelector('.s_n3');
    const n4 = document.querySelector('.s_n4');
    const n5 = document.querySelector('.s_n5');
    const n6 = document.querySelector('.s_n6');
    const n7 = document.querySelector('.s_n7');
    
    n1.style.left = cols1[0].offsetLeft+'px';
    n1.style.top = cols1[0].offsetTop+'px';
    
    n2.style.left = cols1[1].offsetLeft+'px';
    n2.style.top = cols1[1].offsetTop+'px';
    
    n3.style.left = cols1[2].offsetLeft+'px';
    n3.style.top = cols1[2].offsetTop+'px';
    
    n4.style.left = cols2[0].offsetLeft+'px';
    n4.style.top = cols2[0].offsetTop+'px';
    
    n5.style.left = cols2[1].offsetLeft+'px';
    n5.style.top = cols2[1].offsetTop+'px';
    
    n6.style.left = cols3[0].offsetLeft+'px';
    n6.style.top = cols3[0].offsetTop+'px';
    
    n7.style.left = cols3[1].offsetLeft+'px';
    n7.style.top = cols3[1].offsetTop+'px';
  };
  
  document.querySelector('.s').onclick = () => mixing();
};