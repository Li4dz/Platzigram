import page from 'page';
// import empty from 'empty-element';
import template from './template';

page('/signin', (ctx, next) => {
    // var main = document.getElementById('main-container');
    $('title').html('Plaztigram - Signin');
    var main = $('#main-container');
    // empty(main).appendChild(template);
    main.empty().append(template);
});