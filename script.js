let view = document.getElementById('more');
let view2 = document.getElementById('more2');
let view3 = document.getElementById('more3');
let view4 = document.getElementById('more4');
let view5 = document.getElementById('more5');
let list = document.getElementById('extra');
let list2 = document.getElementById('extra2');
let list3 = document.getElementById('extra3');
let list4 = document.getElementById('extra4');
let list5 = document.getElementById('extra5');
let close = document.getElementById('less');
let close2 = document.getElementById('less2');
let close3 = document.getElementById('less3');
let close4 = document.getElementById('less4');
let close5 = document.getElementById('less5');


let show = function() {
    list.style.display = 'block';
    view.style.display = 'none';
    close.style.display = 'block';
};
let show2 = function() {
    list2.style.display = 'block';
    view2.style.display = 'none';
    close2.style.display = 'block';
};
let show3 = function() {
    list3.style.display = 'block';
    view3.style.display = 'none';
    close3.style.display = 'block';
};
let show4 = function() {
    list4.style.display = 'block';
    view4.style.display = 'none';
    close4.style.display = 'block';
};
let show5 = function() {
    list5.style.display = 'block';
    view5.style.display = 'none';
    close5.style.display = 'block';
};
let hide = function() {
    list.style.display = 'none';
    view.style.display = 'block';
    close.style.display = 'none';
}
let hide2 = function() {
    list2.style.display = 'none';
    view2.style.display = 'block';
    close2.style.display = 'none';
}
let hide3 = function() {
    list3.style.display = 'none';
    view3.style.display = 'block';
    close3.style.display = 'none';
}
let hide4 = function() {
    list4.style.display = 'none';
    view4.style.display = 'block';
    close4.style.display = 'none';
}
let hide5 = function() {
    list5.style.display = 'none';
    view5.style.display = 'block';
    close5.style.display = 'none';
}

view.addEventListener('click', show);
view2.addEventListener('click', show2);
view3.addEventListener('click', show3);
view4.addEventListener('click', show4);
view5.addEventListener('click', show5);
close.addEventListener('click', hide);
close2.addEventListener('click', hide2);
close3.addEventListener('click', hide3);
close4.addEventListener('click', hide4);
close5.addEventListener('click', hide5);